// ===== Alternative: Firebase Realtime Database View Counter =====
// Uncomment this if you want to use Firebase instead of CountAPI

/*
// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, set, get, runTransaction } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const viewCountRef = ref(database, 'portfolio/viewCount');

async function initViewCounterFirebase() {
    const viewCountElement = document.getElementById('viewCount');
    if (!viewCountElement) return;
    
    try {
        // Check if user already visited this session
        const hasVisitedThisSession = sessionStorage.getItem('hasVisited');
        
        if (!hasVisitedThisSession) {
            // Increment view count atomically
            await runTransaction(viewCountRef, (currentValue) => {
                return (currentValue || 0) + 1;
            });
            sessionStorage.setItem('hasVisited', 'true');
        }
        
        // Fetch current count
        const snapshot = await get(viewCountRef);
        const viewCount = snapshot.val() || 0;
        
        animateViewCount(viewCountElement, viewCount);
    } catch (error) {
        console.error('Firebase view counter error:', error);
        useFallbackCounter(viewCountElement);
    }
}

function animateViewCount(element, targetCount) {
    let currentCount = parseInt(element.textContent) || 0;
    const increment = Math.ceil(targetCount / 30);
    
    const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
            element.textContent = targetCount.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = currentCount.toLocaleString();
        }
    }, 30);
}

function useFallbackCounter(element) {
    let viewCount = localStorage.getItem('portfolioViewCount');
    if (!viewCount) {
        viewCount = 1;
    } else {
        viewCount = parseInt(viewCount) + 1;
    }
    localStorage.setItem('portfolioViewCount', viewCount);
    animateViewCount(element, viewCount);
}

// Initialize on page load
window.addEventListener('load', () => {
    initViewCounterFirebase();
});
*/

// ===== Alternative: Simple Backend API =====
/*
// If you have your own backend API

async function initViewCounterCustomAPI() {
    const viewCountElement = document.getElementById('viewCount');
    if (!viewCountElement) return;
    
    try {
        const hasVisitedThisSession = sessionStorage.getItem('hasVisited');
        
        // Your API endpoint
        const API_URL = 'https://your-api.com/api/views';
        
        if (!hasVisitedThisSession) {
            // POST to increment
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ page: 'portfolio' })
            });
            sessionStorage.setItem('hasVisited', 'true');
        }
        
        // GET current count
        const response = await fetch(API_URL);
        const data = await response.json();
        
        animateViewCount(viewCountElement, data.count);
    } catch (error) {
        console.error('API error:', error);
        useFallbackCounter(viewCountElement);
    }
}
*/
