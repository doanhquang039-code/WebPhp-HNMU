// ===== Interactive Terminal =====
const GITHUB_USERNAME = 'doanhquang039-code';

const TERMINAL_COMMANDS = {
    help: {
        desc: 'Show all available commands',
        run: () => `
<span class="term-section">📋 AVAILABLE COMMANDS</span>
<span class="term-table">
  <span class="cmd-highlight">whoami</span>       – Thông tin cá nhân
  <span class="cmd-highlight">skills</span>       – Danh sách kỹ năng lập trình
  <span class="cmd-highlight">projects</span>     – Các dự án nổi bật
  <span class="cmd-highlight">achievements</span> – Thành tựu & chứng chỉ
  <span class="cmd-highlight">contact</span>      – Thông tin liên hệ
  <span class="cmd-highlight">github</span>       – Mở GitHub profile
  <span class="cmd-highlight">clear</span>        – Xoá màn hình terminal
  <span class="cmd-highlight">sudo hire me</span> – 👀 ???
  <span class="cmd-highlight">help</span>         – Hiện menu này
</span>`
    },
    whoami: {
        desc: 'About me',
        run: () => `
<span class="term-section">👤 IDENTITY</span>
<span class="term-kv">Name:</span>       Đặng Quang Doanh
<span class="term-kv">Alias:</span>      QuangDoanh / doanhquang039
<span class="term-kv">Age:</span>        18 (29/12/2006)
<span class="term-kv">Location:</span>   Thái Bình → Hà Nội, Việt Nam
<span class="term-kv">Role:</span>       Full-Stack Developer & AI Enthusiast
<span class="term-kv">Education:</span>  IT Student - Year 2
<span class="term-kv">Status:</span>     <span class="term-green">🟢 Sẵn sàng làm việc (Available for hire)</span>`
    },
    skills: {
        desc: 'My skills',
        run: () => `
<span class="term-section">⚡ TECHNICAL SKILLS</span>
<span class="term-kv">Backend:</span>    Spring Boot ██████████ 90% | Node.js ████████░░ 80% | Go ██████░░░░ 60%
<span class="term-kv">Frontend:</span>   React ████████░░ 80% | HTML/CSS █████████░ 85%
<span class="term-kv">Mobile:</span>     Flutter ███████░░░ 75% | Android ██████░░░░ 60%
<span class="term-kv">AI / ML:</span>    Python ████████░░ 80% | OpenAI/Gemini API ███████░░░ 70%
<span class="term-kv">Database:</span>   MySQL ████████░░ 80% | MongoDB ███████░░░ 70%
<span class="term-kv">DevOps:</span>     Docker ███████░░░ 75% | GCP ██████░░░░ 65% | CI/CD ██████░░░░ 60%`
    },
    projects: {
        desc: 'Notable projects',
        run: () => `
<span class="term-section">🚀 NOTABLE PROJECTS</span>
<span class="term-proj">01.</span> <span class="cmd-highlight">Intelligent Expense Tracker</span>
     Stack: Python · OpenAI · FastAPI · Flutter
     Feature: AI auto-categorization (95% accuracy), Spending prediction

<span class="term-proj">02.</span> <span class="cmd-highlight">HR Management Chatbot</span>
     Stack: LangChain · ChromaDB · Spring Boot
     Feature: RAG system, Multi-turn conversation

<span class="term-proj">03.</span> <span class="cmd-highlight">AI Code Review Assistant</span>
     Stack: GPT-4 · GitHub API · Node.js
     Feature: Code smell detection, Security vulnerability scan

<span class="term-proj">04.</span> <span class="cmd-highlight">Banking System</span>
     Stack: Spring Boot · React · MySQL
     Feature: Full-stack banking with security & transaction management

<span class="term-proj">05.</span> <span class="cmd-highlight">GoLang Microservices (EduSoft)</span>
     Stack: Go · Docker · CI/CD · GCP
     Feature: Cloud-native microservices architecture`
    },
    achievements: {
        desc: 'Achievements & certifications',
        run: () => `
<span class="term-section">🏆 ACHIEVEMENTS</span>
<span class="term-kv">[2026]</span>  <span class="term-green">✅ Google Cloud Certified</span> – Cloud Digital Leader
<span class="term-kv">[2024]</span>  <span class="term-green">✅ Học Bổng Toàn Phần</span> – Full Scholarship from University
<span class="term-kv">[2024]</span>  <span class="term-green">✅ GameKren Prize</span> – 16,000,000 VND award
<span class="term-kv">[2022]</span>  Started coding journey with Java & Web Development`
    },
    contact: {
        desc: 'Contact information',
        run: () => `
<span class="term-section">📬 CONTACT INFORMATION</span>
<span class="term-kv">Email:</span>    doanhquang040@gmail.com
<span class="term-kv">GitHub:</span>   <span class="term-link">https://github.com/doanhquang039-code</span>
<span class="term-kv">LinkedIn:</span> <span class="term-link">https://www.linkedin.com/in/doanh-quang-0a4561407/</span>
<span class="term-kv">Zalo:</span>     0373 542 892
<span class="term-kv">Location:</span> Hà Nội, Việt Nam`
    },
    github: {
        desc: 'Open GitHub profile',
        run: () => {
            setTimeout(() => window.open('https://github.com/' + GITHUB_USERNAME, '_blank'), 500);
            return `<span class="term-green">✅ Opening GitHub profile in a new tab...</span>`;
        }
    },
    clear: {
        desc: 'Clear terminal',
        run: 'clear'
    },
    'sudo hire me': {
        desc: 'Easter egg',
        run: () => `
<span class="term-red">[sudo]</span> password for hr: <span class="term-green">••••••••</span>
<span class="term-green">Authentication successful!</span>
<span class="term-section">🎉 REQUEST SUBMITTED!</span>
Sending offer letter to: <span class="cmd-highlight">doanhquang040@gmail.com</span>
<span class="term-kv">Status:</span>  <span class="term-green">✅ HIRED! Congratulations on making the best decision! 🚀</span>
<span class="term-kv">Start:</span>   ASAP
<span class="term-kv">Salary:</span>  Negotiable (but make it good 😄)`
    }
};

// Terminal State
let terminalHistory = [];
let historyIndex = -1;
let isTerminalOpen = false;

function openTerminal() {
    const overlay = document.getElementById('terminalOverlay');
    const input = document.getElementById('terminalInput');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    isTerminalOpen = true;
    setTimeout(() => input && input.focus(), 300);
}

function closeTerminal() {
    const overlay = document.getElementById('terminalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    isTerminalOpen = false;
}

function printOutput(html) {
    const output = document.getElementById('terminalOutput');
    const body = document.getElementById('terminalBody');
    if (!output) return;
    const div = document.createElement('div');
    div.className = 'term-output-block';
    div.innerHTML = html;
    output.appendChild(div);
    body.scrollTop = body.scrollHeight;
}

function printCommand(cmd) {
    printOutput(`<div class="term-cmd-echo"><span class="terminal-prompt">quangdoanh@portfolio <span class="prompt-path">~</span> $ </span><span class="term-typed">${cmd}</span></div>`);
}

function executeCommand(rawInput) {
    const cmd = rawInput.trim().toLowerCase();
    if (!cmd) return;

    terminalHistory.unshift(rawInput);
    historyIndex = -1;

    printCommand(rawInput);

    if (cmd === 'clear') {
        document.getElementById('terminalOutput').innerHTML = '';
        return;
    }

    const handler = TERMINAL_COMMANDS[cmd];
    if (handler) {
        const result = typeof handler.run === 'function' ? handler.run() : handler.run;
        if (result && result !== 'clear') printOutput(result);
    } else {
        printOutput(`<span class="term-red">bash: ${cmd}: command not found</span>\nType <span class="cmd-highlight">help</span> to see available commands.`);
    }
}

function initTerminal() {
    const termInput = document.getElementById('terminalInput');
    const closeBtn = document.getElementById('terminalClose');
    const toggleBtn = document.getElementById('terminalToggleBtn');
    const overlay = document.getElementById('terminalOverlay');

    if (!termInput) return;

    termInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const val = termInput.value;
            termInput.value = '';
            executeCommand(val);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < terminalHistory.length - 1) {
                historyIndex++;
                termInput.value = terminalHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                termInput.value = terminalHistory[historyIndex];
            } else {
                historyIndex = -1;
                termInput.value = '';
            }
        }
    });

    closeBtn && closeBtn.addEventListener('click', closeTerminal);
    toggleBtn && toggleBtn.addEventListener('click', () => {
        isTerminalOpen ? closeTerminal() : openTerminal();
    });

    overlay && overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeTerminal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === '`') {
            e.preventDefault();
            isTerminalOpen ? closeTerminal() : openTerminal();
        }
        if (e.key === 'Escape' && isTerminalOpen) closeTerminal();
    });

    // Click anywhere in terminal body to focus input
    document.getElementById('terminalBody') && document.getElementById('terminalBody').addEventListener('click', () => {
        termInput.focus();
    });
}

// ===== GitHub Stats =====
function loadGitHubStats() {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        .then(r => r.json())
        .then(data => {
            const reposEl = document.getElementById('gh-repos');
            const followersEl = document.getElementById('gh-followers');
            if (reposEl) reposEl.textContent = data.public_repos || '—';
            if (followersEl) followersEl.textContent = data.followers || '—';
        })
        .catch(() => {});

    // Fetch total stars across repos
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
        .then(r => r.json())
        .then(repos => {
            if (!Array.isArray(repos)) return;
            const stars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
            const starsEl = document.getElementById('gh-stars');
            if (starsEl) starsEl.textContent = stars;
        })
        .catch(() => {});
}

// ===== GitHub Calendar =====
function loadGitHubCalendar() {
    const container = document.getElementById('github-calendar-container');
    if (!container) return;

    if (typeof GitHubCalendar !== 'undefined') {
        try {
            GitHubCalendar('#github-calendar-container', GITHUB_USERNAME, {
                responsive: true,
                tooltips: true,
                global_stats: false
            });
        } catch (e) {
            container.innerHTML = `<div class="cal-fallback">
                <img src="https://ghchart.rshah.org/6366f1/${GITHUB_USERNAME}" alt="GitHub Chart" style="width:100%;border-radius:10px;opacity:0.85;" onerror="this.parentElement.innerHTML='<p style=color:var(--text-secondary)>GitHub calendar unavailable. <a href=https://github.com/${GITHUB_USERNAME} target=_blank>View on GitHub →</a></p>'">
            </div>`;
        }
    } else {
        // Fallback: use static chart image
        container.innerHTML = `<div class="cal-fallback">
            <img src="https://ghchart.rshah.org/6366f1/${GITHUB_USERNAME}" alt="GitHub Contribution Chart" style="width:100%;border-radius:10px;opacity:0.85;" onerror="this.style.display='none'">
        </div>`;
    }
}

// Initialize everything
window.addEventListener('load', () => {
    initTerminal();
    loadGitHubStats();
    setTimeout(loadGitHubCalendar, 800); // Wait for CDN
});
