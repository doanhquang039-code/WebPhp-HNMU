// auth.js
// Firebase Authentication & Realtime Database Logic

// ==========================================
// ⚠️ QUAN TRỌNG: THAY ĐỔI CẤU HÌNH FIREBASE Ở ĐÂY
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyAxJoMZWrmDYPhMDDKvq3EHJTZK1usMnmo",
    authDomain: "blogadmin-70ed2.firebaseapp.com",
    databaseURL: "https://blogadmin-70ed2-default-rtdb.firebaseio.com", // Mặc định
    projectId: "blogadmin-70ed2",
    storageBucket: "blogadmin-70ed2.firebasestorage.app",
    messagingSenderId: "288199612398",
    appId: "1:288199612398:web:f50298674c70208c54c0ff",
    measurementId: "G-VHGDEQC1LF"
};

// Initialize Firebase (Only if config is provided)
let auth;
let database;
let googleProvider;
let githubProvider;
let microsoftProvider;
let twitterProvider;
let facebookProvider;

if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    database = firebase.database();
    
    // Providers
    googleProvider = new firebase.auth.GoogleAuthProvider();
    githubProvider = new firebase.auth.GithubAuthProvider();
    microsoftProvider = new firebase.auth.OAuthProvider('microsoft.com');
    twitterProvider = new firebase.auth.TwitterAuthProvider();
    facebookProvider = new firebase.auth.FacebookAuthProvider();
} else {
    console.warn("⚠️ Firebase chưa được cấu hình. Vui lòng cập nhật firebaseConfig trong auth.js!");
}

// UI Elements
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userProfile = document.getElementById('userProfile');
const userAvatar = document.getElementById('userAvatar');
const gatedElements = document.querySelectorAll('.auth-gated');
const gatedButtons = document.querySelectorAll('.auth-gated-btn');

// Dropdown Elements
const loginDropdown = document.getElementById('loginDropdown');
const googleLoginBtn = document.getElementById('googleLoginBtn');
const githubLoginBtn = document.getElementById('githubLoginBtn');
const microsoftLoginBtn = document.getElementById('microsoftLoginBtn');
const twitterLoginBtn = document.getElementById('twitterLoginBtn');
const facebookLoginBtn = document.getElementById('facebookLoginBtn');

// Global User State
window.currentUser = null;

// Dropdown Logic
function toggleLoginDropdown(e) {
    if (!auth) {
        alert("Tính năng đăng nhập đang được bảo trì (Thiếu Firebase Config).");
        return;
    }
    e.stopPropagation(); // Prevent document click from closing immediately
    loginDropdown.classList.toggle('active');
}

function closeLoginDropdown(e) {
    if (loginDropdown && loginDropdown.classList.contains('active')) {
        // Close if clicked outside
        if (!e || (!loginDropdown.contains(e.target) && !loginBtn.contains(e.target))) {
            loginDropdown.classList.remove('active');
        }
    }
}

// Event Listeners
if (loginBtn) loginBtn.addEventListener('click', toggleLoginDropdown);
document.addEventListener('click', closeLoginDropdown);

function handleAuthPopup(provider) {
    auth.signInWithPopup(provider).then(() => {
        loginDropdown.classList.remove('active');
    }).catch((error) => {
        console.error("Lỗi đăng nhập:", error);
        alert("Lỗi đăng nhập: " + error.message);
    });
}

if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', () => handleAuthPopup(googleProvider));
}

if (githubLoginBtn) {
    githubLoginBtn.addEventListener('click', () => handleAuthPopup(githubProvider));
}

if (microsoftLoginBtn) {
    microsoftLoginBtn.addEventListener('click', () => handleAuthPopup(microsoftProvider));
}

if (twitterLoginBtn) {
    twitterLoginBtn.addEventListener('click', () => handleAuthPopup(twitterProvider));
}

if (facebookLoginBtn) {
    facebookLoginBtn.addEventListener('click', () => handleAuthPopup(facebookProvider));
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        if (auth) auth.signOut();
    });
}

// Auth State Observer
if (auth) {
    auth.onAuthStateChanged((user) => {
        window.currentUser = user;
        
        if (user) {
            // Logged in
            loginBtn.style.display = 'none';
            userProfile.style.display = 'flex';
            userAvatar.src = user.photoURL || 'https://via.placeholder.com/40';
            
            // Unlock Content
            gatedElements.forEach(el => el.classList.add('unlocked'));
            gatedButtons.forEach(btn => btn.classList.add('unlocked'));
            
            console.log("Đã đăng nhập với tên:", user.displayName);
        } else {
            // Logged out
            loginBtn.style.display = 'flex';
            userProfile.style.display = 'none';
            
            // Lock Content
            gatedElements.forEach(el => el.classList.remove('unlocked'));
            gatedButtons.forEach(btn => btn.classList.remove('unlocked'));
            
            console.log("Đã đăng xuất.");
        }
    });
}

// ---------------------------------------------------------
// View Counter Logic (Firebase Realtime Database)
// Thay thế cho api.countapi.xyz đã chết
// ---------------------------------------------------------
window.incrementFirebaseViewCount = async function(element) {
    if (!database) {
        throw new Error("Firebase chưa được cấu hình.");
    }
    
    const viewsRef = database.ref('views/portfolio');
    
    // Tăng view an toàn bằng Transaction
    return viewsRef.transaction((currentViews) => {
        return (currentViews || 0) + 1;
    }).then((result) => {
        if (result.committed) {
            const count = result.snapshot.val();
            animateValue(element, 0, count, 2000);
        }
    });
};

window.fetchFirebaseViewCount = async function(element) {
    if (!database) {
        throw new Error("Firebase chưa được cấu hình.");
    }
    
    const viewsRef = database.ref('views/portfolio');
    return viewsRef.once('value').then((snapshot) => {
        const count = snapshot.val() || 0;
        animateValue(element, 0, count, 1000);
    });
};

function animateValue(obj, start, end, duration) {
    if (!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
