// Debug script - Add this to console to test counter
console.log('🔍 Starting Counter Debug...');

const NAMESPACE = 'doanhquang-portfolio';
const KEY = 'portfolio-views';

// Test 1: Get current count
console.log('📊 Test 1: Get Current Count');
fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`)
    .then(r => r.json())
    .then(data => {
        console.log('✅ Current count:', data.value);
        console.log('📋 Full response:', data);
    })
    .catch(err => console.error('❌ Error:', err));

// Test 2: Increment count
console.log('\n➕ Test 2: Increment Count');
fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
    .then(r => r.json())
    .then(data => {
        console.log('✅ After increment:', data.value);
        console.log('📋 Full response:', data);
    })
    .catch(err => console.error('❌ Error:', err));

// Test 3: Check if running from file://
if (window.location.protocol === 'file:') {
    console.warn('⚠️ Running from file:// - API may not work!');
    console.log('💡 Use: python -m http.server or live-server');
}

// Test 4: Check sessionStorage
console.log('\n💾 SessionStorage check:');
console.log('hasVisited:', sessionStorage.getItem('hasVisited'));

// Helper functions
window.resetCounter = async () => {
    const response = await fetch(`https://api.countapi.xyz/set/${NAMESPACE}/${KEY}?value=0`);
    const data = await response.json();
    console.log('🔄 Counter reset to 0');
    return data;
};

window.setCounter = async (value) => {
    const response = await fetch(`https://api.countapi.xyz/set/${NAMESPACE}/${KEY}?value=${value}`);
    const data = await response.json();
    console.log(`✏️ Counter set to ${value}`);
    return data;
};

window.getCounter = async () => {
    const response = await fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`);
    const data = await response.json();
    console.log(`📊 Current count: ${data.value}`);
    return data;
};

console.log('\n💡 Available commands:');
console.log('  resetCounter()  - Reset to 0');
console.log('  setCounter(100) - Set to specific number');
console.log('  getCounter()    - Get current count');
