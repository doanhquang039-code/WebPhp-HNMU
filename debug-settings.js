// Debug script for settings panel
// Paste this into browser console (F12) to debug

console.log('🔍 Settings Panel Debugger');
console.log('========================');

// Check if elements exist
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const settingsOverlay = document.getElementById('settingsOverlay');
const closeSettingsBtn = document.getElementById('closeSettings');

console.log('Element Check:');
console.log('settingsBtn:', settingsBtn ? '✅ Found' : '❌ Not found');
console.log('settingsPanel:', settingsPanel ? '✅ Found' : '❌ Not found');
console.log('settingsOverlay:', settingsOverlay ? '✅ Found' : '❌ Not found');
console.log('closeSettingsBtn:', closeSettingsBtn ? '✅ Found' : '❌ Not found');

if (settingsPanel) {
    console.log('\nPanel Info:');
    console.log('Classes:', settingsPanel.className);
    console.log('Position:', window.getComputedStyle(settingsPanel).right);
    console.log('Z-index:', window.getComputedStyle(settingsPanel).zIndex);
    console.log('Visibility:', window.getComputedStyle(settingsPanel).visibility);
}

if (settingsBtn) {
    console.log('\nButton Info:');
    console.log('Classes:', settingsBtn.className);
    console.log('Display:', window.getComputedStyle(settingsBtn).display);
    
    // Test click
    console.log('\nTesting click event...');
    settingsBtn.addEventListener('click', () => {
        console.log('✅ Click event fired!');
        console.log('Panel classes after click:', settingsPanel.className);
        console.log('Overlay classes after click:', settingsOverlay.className);
    });
    
    console.log('\n💡 Try clicking the settings button now!');
}

// Manual test functions
window.testSettings = {
    open: () => {
        if (settingsPanel && settingsOverlay) {
            settingsPanel.classList.add('active');
            settingsOverlay.classList.add('active');
            console.log('✅ Settings opened manually');
        }
    },
    close: () => {
        if (settingsPanel && settingsOverlay) {
            settingsPanel.classList.remove('active');
            settingsOverlay.classList.remove('active');
            console.log('✅ Settings closed manually');
        }
    },
    toggle: () => {
        if (settingsPanel) {
            settingsPanel.classList.toggle('active');
            settingsOverlay.classList.toggle('active');
            console.log('✅ Settings toggled');
        }
    }
};

console.log('\n📝 Manual Commands:');
console.log('testSettings.open()  - Open settings');
console.log('testSettings.close() - Close settings');
console.log('testSettings.toggle() - Toggle settings');
