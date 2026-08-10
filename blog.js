// ===== Blog Section with Firebase =====
const BLOG_DB_PATH = 'blog_posts';
const OWNER_EMAIL = 'doanhquang040@gmail.com'; // Only this user can write posts

function initBlog() {
    loadBlogPosts();

    // Auth state: show admin controls if owner
    if (typeof firebase !== 'undefined') {
        firebase.auth().onAuthStateChanged((user) => {
            const adminPanel = document.getElementById('blogAdminPanel');
            if (!adminPanel) return;
            if (user && user.email === OWNER_EMAIL) {
                adminPanel.style.display = 'block';
            } else {
                adminPanel.style.display = 'none';
            }
        });

        // Submit new post
        const blogForm = document.getElementById('blogPostForm');
        if (blogForm) {
            blogForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const user = firebase.auth().currentUser;
                if (!user || user.email !== OWNER_EMAIL) return;

                const title = document.getElementById('blogTitle').value.trim();
                const content = document.getElementById('blogContent').value.trim();
                const tag = document.getElementById('blogTag').value.trim() || 'Dev';
                const emoji = document.getElementById('blogEmoji').value.trim() || '📝';

                if (!title || !content) return;

                const btn = blogForm.querySelector('button[type="submit"]');
                btn.disabled = true;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

                firebase.database().ref(BLOG_DB_PATH).push({
                    title, content, tag, emoji,
                    author: user.displayName || 'Quang Doanh',
                    authorPhoto: user.photoURL || '',
                    timestamp: firebase.database.ServerValue.TIMESTAMP,
                    readTime: Math.ceil(content.split(' ').length / 200) + ' min read'
                }).then(() => {
                    blogForm.reset();
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Đăng bài';
                    if (typeof showNotification === 'function') showNotification('✅ Bài viết đã được đăng!');
                }).catch(() => {
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Đăng bài';
                });
            });
        }
    }
}

function loadBlogPosts() {
    if (typeof firebase === 'undefined') return;
    const list = document.getElementById('blogPostsList');
    if (!list) return;

    firebase.database().ref(BLOG_DB_PATH)
        .orderByChild('timestamp')
        .limitToLast(6)
        .on('value', (snapshot) => {
            if (!snapshot.exists()) {
                list.innerHTML = `
                    <div class="blog-empty">
                        <i class="fas fa-pencil-alt"></i>
                        <p>Chưa có bài viết nào. Hãy là người đầu tiên đọc bài tiếp theo!</p>
                    </div>`;
                return;
            }

            const posts = [];
            snapshot.forEach(child => posts.push({ id: child.key, ...child.val() }));
            posts.reverse();

            list.innerHTML = posts.map(post => {
                const date = post.timestamp ? new Date(post.timestamp).toLocaleDateString('vi-VN', { day: '2-digit', month: 'short', year: 'numeric' }) : '';
                const preview = post.content.length > 140 ? post.content.substring(0, 140) + '...' : post.content;
                return `
                <article class="blog-card" onclick="openBlogPost('${post.id}')">
                    <div class="blog-card-header">
                        <span class="blog-emoji">${post.emoji || '📝'}</span>
                        <span class="blog-tag">${post.tag || 'Dev'}</span>
                    </div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-preview">${preview}</p>
                    <div class="blog-footer">
                        <div class="blog-author">
                            ${post.authorPhoto ? `<img src="${post.authorPhoto}" alt="${post.author}" class="blog-author-img">` : ''}
                            <span>${post.author}</span>
                        </div>
                        <div class="blog-meta">
                            <span><i class="fas fa-clock"></i> ${post.readTime || '1 min read'}</span>
                            <span>${date}</span>
                        </div>
                    </div>
                </article>`;
            }).join('');
        });
}

function openBlogPost(id) {
    if (typeof firebase === 'undefined') return;
    firebase.database().ref(`${BLOG_DB_PATH}/${id}`).once('value').then(snap => {
        const post = snap.val();
        if (!post) return;

        const modal = document.createElement('div');
        modal.className = 'blog-modal-overlay';
        modal.innerHTML = `
            <div class="blog-modal">
                <button class="blog-modal-close" onclick="this.closest('.blog-modal-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="blog-modal-header">
                    <span class="blog-emoji-lg">${post.emoji || '📝'}</span>
                    <span class="blog-tag">${post.tag || 'Dev'}</span>
                </div>
                <h2 class="blog-modal-title">${post.title}</h2>
                <div class="blog-modal-meta">
                    ${post.authorPhoto ? `<img src="${post.authorPhoto}" alt="${post.author}" class="blog-author-img">` : ''}
                    <span>${post.author}</span>
                    <span>•</span>
                    <span><i class="fas fa-clock"></i> ${post.readTime || '1 min read'}</span>
                    <span>•</span>
                    <span>${post.timestamp ? new Date(post.timestamp).toLocaleDateString('vi-VN') : ''}</span>
                </div>
                <div class="blog-modal-content">${post.content.replace(/\n/g, '<br>')}</div>
            </div>
        `;
        modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        modal.addEventListener('remove', () => { document.body.style.overflow = ''; });
    });
}

window.addEventListener('load', initBlog);
