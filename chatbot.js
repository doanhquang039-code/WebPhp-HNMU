// ===== AI Chatbot with Gemini API =====

// Configuration
const CHATBOT_CONFIG = {
    // ⚠️ IMPORTANT: Replace with your Gemini API Key
    // Get free API key at: https://makersuite.google.com/app/apikey
    GEMINI_API_KEY: 'AIzaSyAQ-Ab8RN6ILGNs-qbYZZgDBc4IkkTb5ZV5YL6sUy-ahyltWyp13eg', // ✅ NEW API key updated!
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    
    // Context about portfolio owner
    CONTEXT: `Bạn là AI assistant cho portfolio của Đặng Quang Doanh. 
    
Thông tin về Đặng Quang Doanh:
- Tên: Đặng Quang Doanh
- Tuổi: 18 tuổi (sinh 29/12/2006)
- Quê quán: Thái Bình, Việt Nam
- Trình độ: Sinh viên CNTT năm 2
- Vai trò: Full-Stack Developer & AI Enthusiast

Kỹ năng:
- Backend: Spring Boot (90%), Node.js, Go, C#/.NET, Android
- Frontend: React, TypeScript, HTML5, CSS3 (80%)
- Mobile: Flutter (75%), Android
- AI/ML: Python, OpenAI API, Gemini API, LangChain (70%)
- Database: MySQL, MongoDB, SQL Server (85%)
- DevOps: Docker, GCP, CI/CD (75%)

Dự án nổi bật:
1. Intelligent Expense Tracker - AI-powered financial assistant (Python, OpenAI, FastAPI, Flutter)
   - Auto-categorization với NLP (95% accuracy)
   - Spending prediction với Time Series
   - Personalized advice từ GPT-4
   
2. HR Management Chatbot - Conversational AI (LangChain, ChromaDB, Spring Boot)
   - RAG với company knowledge base
   - Multi-turn conversation
   
3. AI Code Review Assistant - Automated code analysis (GPT-4, GitHub API, Node.js)
   - Code smell detection
   - Security vulnerability scan
   
4. Banking System - Full-stack web app (Spring Boot, React, MySQL)
5. Tourism Website - ASP.NET MVC web application
6. HR Management System - Enterprise HR software (Spring Boot, Thymeleaf)

Thành tựu:
- Google Cloud Certified (2026)
- Học Bổng Toàn Phần (2024)
- GameKren Prize 16M VND (2024)

Nghiên cứu AI:
- Prompt Engineering (đang nghiên cứu)
- RAG - Retrieval Augmented Generation (đang nghiên cứu)
- LLM Fine-tuning (đang học)
- AI Safety & Ethics (đang học)

Liên hệ:
- Email: doanhquang039@gmail.com
- GitHub: https://github.com/doanhquang039-code
- LinkedIn: https://www.linkedin.com/in/doanh-quang-0a4561407/
- Zalo: 0373542892

Bạn nên:
- Trả lời bằng tiếng Việt một cách thân thiện và chuyên nghiệp
- Cung cấp thông tin chi tiết nhưng ngắn gọn
- Sử dụng emoji phù hợp để giao tiếp sinh động
- Nếu được hỏi về thông tin không có trong context, hãy khuyên người hỏi liên hệ trực tiếp
- Luôn khuyến khích người dùng liên hệ qua email hoặc LinkedIn nếu quan tâm hợp tác`
};

// State
let conversationHistory = [];

// Initialize chatbot
function initChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const trigger = document.getElementById('chatbotTrigger'); // Social icon trigger
    const profileTrigger = document.getElementById('chatbotProfileTrigger'); // Profile trigger - NEW!
    const close = document.getElementById('chatbotClose');
    const window = document.getElementById('chatbotWindow');
    const form = document.getElementById('chatbotForm');
    const input = document.getElementById('chatbotInput');
    const quickActions = document.querySelectorAll('.quick-action-btn');
    
    // Check API key
    if (CHATBOT_CONFIG.GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
        document.getElementById('apiKeyWarning').style.display = 'flex';
        console.warn('⚠️ Gemini API Key not configured! Please update GEMINI_API_KEY in chatbot.js');
    }
    
    // Update placeholder on language change
    document.addEventListener('languageChanged', updateChatbotLanguage);
    updateChatbotLanguage(); // Initial update
    
    // Toggle chatbot (floating button)
    if (toggle) {
        toggle.addEventListener('click', () => {
            window.classList.toggle('active');
            if (window.classList.contains('active')) {
                input.focus();
            }
        });
    }
    
    // Toggle chatbot (social icon)
    if (trigger) {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            window.classList.toggle('active');
            if (window.classList.contains('active')) {
                input.focus();
            }
        });
    }
    
    // Toggle chatbot (profile button) - NEW!
    if (profileTrigger) {
        profileTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            window.classList.toggle('active');
            if (window.classList.contains('active')) {
                input.focus();
            }
        });
    }
    
    // Close chatbot
    close.addEventListener('click', () => {
        window.classList.remove('active');
    });
    
    // Submit form
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = input.value.trim();
        if (message) {
            await sendMessage(message);
            input.value = '';
        }
    });
    
    // Quick actions - updated to use i18n
    quickActions.forEach(btn => {
        btn.addEventListener('click', () => {
            const questionKey = btn.getAttribute('data-question-key');
            const currentLang = getCurrentLanguage ? getCurrentLanguage() : 'vi';
            const translations = getTranslations ? getTranslations() : null;
            
            let question;
            if (translations && translations[currentLang] && translations[currentLang][questionKey]) {
                question = translations[currentLang][questionKey];
            } else {
                // Fallback to button text
                question = btn.textContent.trim();
            }
            
            sendMessage(question);
        });
    });
    
    // Close on outside click
    document.addEventListener('click', (e) => {
        const container = document.getElementById('chatbotContainer');
        const triggerIcon = document.getElementById('chatbotTrigger');
        const profileTriggerIcon = document.getElementById('chatbotProfileTrigger'); // NEW!
        if (container && !container.contains(e.target) && 
            e.target !== triggerIcon && e.target !== profileTriggerIcon) {
            window.classList.remove('active');
        }
    });
}

// Update chatbot language
function updateChatbotLanguage() {
    const input = document.getElementById('chatbotInput');
    if (input) {
        const currentLang = getCurrentLanguage ? getCurrentLanguage() : 'vi';
        const translations = getTranslations ? getTranslations() : null;
        
        if (translations && translations[currentLang] && translations[currentLang].chatbotPlaceholder) {
            input.placeholder = translations[currentLang].chatbotPlaceholder;
        }
    }
}

// Send message
async function sendMessage(message) {
    // Add user message to chat
    addMessage(message, 'user');
    
    // Show typing indicator
    showTypingIndicator();
    
    // Add to conversation history
    conversationHistory.push({
        role: 'user',
        parts: [{ text: message }]
    });
    
    try {
        // TEMPORARY: Use fallback first, then try API
        let response;
        try {
            // Try API first
            response = await callGeminiAPI(message);
        } catch (apiError) {
            console.log('API failed, using fallback:', apiError.message);
            // If API fails, use fallback
            response = getFallbackResponse(message);
        }
        
        // Hide typing indicator
        hideTypingIndicator();
        
        // Add bot response
        addMessage(response, 'bot');
        
        // Add to conversation history
        conversationHistory.push({
            role: 'model',
            parts: [{ text: response }]
        });
        
    } catch (error) {
        hideTypingIndicator();
        // Use fallback as last resort
        const fallbackResponse = getFallbackResponse(message);
        addMessage(fallbackResponse, 'bot');
        console.error('Chatbot error:', error);
    }
}

// Call Gemini API
async function callGeminiAPI(userMessage) {
    // Check API key
    if (CHATBOT_CONFIG.GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
        // Fallback responses - no API needed
        return getFallbackResponse(userMessage);
    }
    
    const url = `${CHATBOT_CONFIG.GEMINI_API_URL}?key=${CHATBOT_CONFIG.GEMINI_API_KEY}`;
    
    // Prepare messages with context
    const messages = [
        {
            role: 'user',
            parts: [{ text: CHATBOT_CONFIG.CONTEXT }]
        },
        ...conversationHistory.slice(-10), // Last 10 messages for context
        {
            role: 'user',
            parts: [{ text: userMessage }]
        }
    ];
    
    const requestBody = {
        contents: messages,
        generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
        },
        safetySettings: [
            {
                category: 'HARM_CATEGORY_HARASSMENT',
                threshold: 'BLOCK_MEDIUM_AND_ABOVE'
            },
            {
                category: 'HARM_CATEGORY_HATE_SPEECH',
                threshold: 'BLOCK_MEDIUM_AND_ABOVE'
            }
        ]
    };
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text;
    } else {
        throw new Error('Invalid API response');
    }
}

// Fallback responses (no API needed)
function getFallbackResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Về kinh nghiệm
    if (message.includes('kinh nghiệm') || message.includes('experience') || message.includes('làm việc')) {
        return `👋 Xin chào! Tôi là **Đặng Quang Doanh**, sinh viên năm 2 CNTT với 2 năm kinh nghiệm lập trình.

**💼 Kinh nghiệm chính:**
- **Backend:** Spring Boot (90%), Node.js, Go, C#/.NET
- **Frontend:** React, TypeScript, HTML5, CSS3 (80%)
- **Mobile:** Flutter (75%), Android
- **AI/ML:** Python, OpenAI API, Gemini API (70%)
- **Database:** MySQL, MongoDB, SQL Server (85%)
- **DevOps:** Docker, GCP, CI/CD (75%)

**🏆 Thành tựu:**
- Google Cloud Certified (2026)
- Học Bổng Toàn Phần (2024)
- GameKren Prize 16M VND (2024)

📧 **Liên hệ:** doanhquang039@gmail.com`;
    }
    
    // Về dự án AI
    if (message.includes('dự án ai') || message.includes('ai project') || message.includes('artificial intelligence')) {
        return `🤖 **Dự án AI nổi bật của tôi:**

**1. 🎯 Intelligent Expense Tracker**
- AI-powered financial assistant
- Auto-categorization với NLP (95% accuracy)
- Spending prediction với Time Series
- Tech: Python, OpenAI API, FastAPI, Flutter

**2. 💬 HR Management Chatbot**
- Conversational AI với LangChain
- RAG với company knowledge base
- Multi-turn conversation
- Tech: LangChain, ChromaDB, Spring Boot

**3. 🔍 AI Code Review Assistant**
- Automated code analysis với GPT-4
- Code smell detection
- Security vulnerability scan
- Tech: GPT-4, GitHub API, Node.js

**🔬 Nghiên cứu hiện tại:**
- Prompt Engineering
- RAG (Retrieval Augmented Generation)
- LLM Fine-tuning
- AI Safety & Ethics

Muốn biết chi tiết dự án nào? 😊`;
    }
    
    // Về kỹ năng
    if (message.includes('kỹ năng') || message.includes('skill') || message.includes('công nghệ')) {
        return `⭐ **Kỹ năng chính của tôi:**

**🖥️ Backend (90%):**
- Spring Boot, Node.js, Express.js
- Go, C#/.NET, RESTful APIs
- Microservices Architecture

**🌐 Frontend (80%):**
- React, TypeScript, JavaScript
- HTML5, CSS3, Responsive Design

**📱 Mobile (75%):**
- Flutter, Android Development
- Cross-platform Apps

**🤖 AI/ML (70%):**
- Python, OpenAI API, Gemini API
- LangChain, FastAPI
- NLP, Machine Learning

**💾 Database (85%):**
- MySQL, MongoDB, SQL Server
- Database Design, Optimization

**☁️ DevOps (75%):**
- Docker, Google Cloud Platform
- CI/CD, Git, GitHub

**Điểm mạnh:** Problem Solving, Quick Learner, Team Player`;
    }
    
    // Liên hệ
    if (message.includes('liên hệ') || message.includes('contact') || message.includes('email') || message.includes('phone')) {
        return `📞 **Thông tin liên hệ:**

📧 **Email:** doanhquang039@gmail.com
💼 **LinkedIn:** https://www.linkedin.com/in/doanh-quang-0a4561407/
🐱 **GitHub:** https://github.com/doanhquang039-code
📱 **Zalo:** 0373542892

**📍 Địa chỉ:** Thái Bình, Việt Nam
**🎓 Trường:** Sinh viên CNTT năm 2

**💌 Sẵn sàng hợp tác cho:**
- Dự án fullstack development
- Ứng dụng AI/ML
- Mobile app development
- Consulting & mentoring

Hãy liên hệ với tôi! 😊`;
    }
    
    // Giới thiệu chung
    if (message.includes('giới thiệu') || message.includes('about') || message.includes('bạn là ai')) {
        return `👋 **Xin chào! Tôi là Đặng Quang Doanh**

🎓 **Sinh viên CNTT năm 2** đến từ Thái Bình
💻 **Full-Stack Developer** với đam mê AI/ML
🚀 **2 năm kinh nghiệm** phát triển ứng dụng

**🌟 Đặc điểm nổi bật:**
- Học nhanh, thích thử công nghệ mới
- Tập trung vào chất lượng code
- Yêu thích giải quyết vấn đề phức tạp
- Đam mê xây dựng sản phẩm có ý nghĩa

**🎯 Mục tiêu:**
"Xây dựng những sản phẩm giải quyết vấn đề thực tế, giúp cuộc sống tốt đẹp hơn"

**💡 Hiện tại:** Đang tìm kiếm cơ hội thực tập/làm việc trong lĩnh vực phát triển phần mềm và AI.

Bạn muốn biết thêm gì về tôi? 😊`;
    }
    
    // Default response
    let greeting = `👋 **Xin chào!** Tôi là AI Assistant của **Đặng Quang Doanh**.`;
    if (window.currentUser && window.currentUser.displayName) {
        const firstName = window.currentUser.displayName.split(' ').pop();
        greeting = `👋 **Xin chào ${firstName}!** Tôi là AI Assistant của **Đặng Quang Doanh**.`;
    }
    
    return `${greeting}

Tôi có thể giúp bạn tìm hiểu về:
- 💼 **Kinh nghiệm** làm việc và kỹ năng
- 🤖 **Dự án AI** và công nghệ
- ⭐ **Kỹ năng** chuyên môn
- 📞 **Thông tin liên hệ**

**Hãy hỏi tôi bất cứ điều gì!** 

*Ví dụ:*
- "Kinh nghiệm làm việc của bạn là gì?"
- "Bạn có những dự án AI nào?"
- "Kỹ năng nổi bật của bạn?"
- "Thông tin liên hệ"

😊 **Tôi sẵn sàng hỗ trợ bạn!**`;
}

// Add message to chat
function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    
    // Parse markdown-style formatting
    let html = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
        .replace(/`(.*?)`/g, '<code>$1</code>') // Code
        .replace(/\n\n/g, '</p><p>') // Paragraphs
        .replace(/\n-\s/g, '<li>') // List items
        .replace(/\n/g, '<br>'); // Line breaks
    
    // Wrap in paragraphs
    if (!html.includes('<p>')) {
        html = '<p>' + html + '</p>';
    }
    
    // Wrap list items in ul
    if (html.includes('<li>')) {
        html = html.replace(/(<li>.*?)(?=<li>|<\/p>|$)/g, '<ul>$1</ul>');
        html = html.replace(/<\/ul><ul>/g, '');
    }
    
    content.innerHTML = html;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    document.getElementById('typingIndicator').style.display = 'flex';
    const messagesContainer = document.getElementById('chatbotMessages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    document.getElementById('typingIndicator').style.display = 'none';
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    initChatbot();
}

console.log('🤖 AI Chatbot initialized!');
console.log('⚠️ Remember to set your Gemini API Key in chatbot.js');
console.log('📝 Get free API key at: https://makersuite.google.com/app/apikey');
