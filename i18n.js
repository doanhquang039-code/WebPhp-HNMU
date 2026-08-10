// Internationalization (i18n) System
// Supports Vietnamese (vi), English (en), and Chinese (zh)

const translations = {
    vi: {
        // Navigation
        devPortfolio: 'DevPortfolio',
        home: 'Trang chủ',
        about: 'Giới thiệu',
        techStack: 'Công nghệ',
        achievements: 'Thành tựu',
        contact: 'Liên hệ',
        projects: 'Dự án',
        aiResearch: 'AI Research',

        // Hero Section
        hello: '👋 Xin chào, tôi là',
        heroRoles: ['Web Developer', 'Mobile App Developer', 'AI Researcher', 'Freelancer'],
        heroDescription: '🚀 Đam mê xây dựng những giải pháp sáng tạo | 💻 Spring Boot • Node.js • Flutter • Python AI',
        passionate: 'Đam mê',
        buildingInnovative: 'xây dựng những giải pháp sáng tạo',
        dateOfBirth: 'Ngày sinh:',
        birthPlace: 'Nơi sinh:',
        university: 'Trường:',
        computerScience: 'Sinh viên CNTT - Năm 2',
        viewProjects: 'Xem dự án',
        contactMe: 'Liên hệ',
        availableForWork: 'Sẵn sàng làm việc',

        // Stats
        statProjects: 'Dự án',
        statAchievements: 'Thành tựu',
        statYearsCoding: 'Năm lập trình',

        // View counter
        views: 'Lượt xem',

        // About Section
        aboutTag: '👨‍💻 Giới thiệu',
        aboutTitle: 'Tìm Hiểu Về Tôi',
        aboutDesc: 'Hành trình từ người đam mê công nghệ đến Developer',
        myStory: '📖 Câu Chuyện Của Tôi',
        aboutStory1: 'Xin chào! Tôi là <strong>Đặng Quang Doanh</strong>, sinh viên năm 2 ngành Công nghệ Thông tin, đến từ Thái Bình. Từ nhỏ, tôi đã say mê với công nghệ và cách nó thay đổi cuộc sống con người.',
        aboutStory2: 'Hành trình lập trình của tôi bắt đầu từ năm 2022, khi lần đầu tiên viết dòng code "Hello World" bằng Java. Từ đó, tôi không ngừng học hỏi và phát triển, từ backend với Spring Boot, Node.js, đến frontend với React, và cả mobile development với Flutter.',
        aboutStory3: 'Năm 2024 là năm đặc biệt với nhiều thành tựu: Đạt học bổng toàn phần, giành giải thưởng GameKren 16M VND, và đạt chứng chỉ Google Cloud Certified. Những thành công này không chỉ là động lực mà còn là minh chứng cho sự cố gắng không ngừng nghỉ.',
        philosophy: '🎯 Triết lý',
        philosophyQuote: '"Code không chỉ là giải quyết vấn đề, mà là tạo ra những giải pháp giúp cuộc sống tốt đẹp hơn."',
        quickFacts: '📋 Thông Tin Nhanh',
        factBirthday: 'Ngày sinh:',
        factBirthdayVal: '29/12/2006 (18 tuổi)',
        factHometown: 'Quê quán:',
        factHometownVal: 'Thái Bình, Việt Nam',
        factEducation: 'Trình độ:',
        factEducationVal: 'Sinh viên CNTT - Năm 2',
        factRole: 'Vai trò:',
        factRoleVal: 'Full-Stack Developer',
        factExpertise: 'Chuyên môn:',
        factExpertiseVal: 'Backend, AI, Cloud',
        factLanguages: 'Ngôn ngữ:',
        factLanguagesVal: 'Tiếng Việt, English, 中文',
        strengths: '💪 Điểm Mạnh',
        strengthProblem: 'Giải quyết vấn đề',
        strengthLearner: 'Học nhanh',
        strengthTeam: 'Làm việc nhóm',
        strengthMotivated: 'Tự thúc đẩy',
        strengthDetail: 'Chi tiết',
        strengthCreative: 'Tư duy sáng tạo',
        currentFocus: '🎯 Đang Tập Trung',

        // Timeline
        myJourney: '🗓️ Hành Trình Của Tôi',
        timeline2006Title: '🎂 Chào đời tại Thái Bình',
        timeline2006Desc: 'Chào đời tại Thái Bình, Việt Nam',
        timeline2022Title: '💻 Bắt đầu hành trình lập trình',
        timeline2022Desc: 'Bắt đầu học lập trình với Java, HTML, CSS',
        timeline2023Title: '🎓 Bắt đầu đại học',
        timeline2023Desc: 'Nhập học ngành Công nghệ Thông tin',
        timeline2024Title: '🏆 Những thành tựu lớn',
        timeline2024Desc: 'Học bổng toàn phần, GameKren Prize 16M, Google Cloud Certified',
        timeline2025Title: '🚀 Nâng cao kỹ năng',
        timeline2025Desc: 'Chuyên sâu AI, Microservices, Cloud Architecture',
        timeline2026Title: '🎯 Hiện tại',
        timeline2026Desc: 'Xây dựng hệ thống scalable, tích hợp AI, đóng góp mã nguồn mở',

        // Tech Stack Section
        techStackTag: '🛠️ Công nghệ',
        techStackTitle: 'Công Nghệ',
        techStackDesc: 'Các công nghệ và công cụ mà tôi thành thạo và sử dụng hàng ngày',
        techProficiency: '💪 Trình Độ Chuyên Môn',
        skillBackend: 'Phát triển Backend',
        skillFrontend: 'Phát triển Frontend',
        skillMobile: 'Phát triển Mobile',
        skillAI: 'AI & Machine Learning',
        skillDB: 'Cơ sở dữ liệu & Lưu trữ',
        skillDevOps: 'DevOps & Cloud',

        // AI Research Section
        aiResearchTag: '🤖 Nghiên cứu AI',
        aiResearchTitle: 'Nghiên Cứu & Ứng Dụng AI',
        aiResearchDesc: 'Khám phá các dự án AI, nghiên cứu về LLMs, và ứng dụng thực tế của Machine Learning',
        aiFocusLLM: 'Large Language Models',
        aiFocusLLMDesc: 'Nghiên cứu và ứng dụng GPT-4, Claude, Gemini trong các hệ thống thực tế',
        aiFocusChat: 'Conversational AI',
        aiFocusChatDesc: 'Xây dựng chatbot thông minh với context awareness và multi-turn conversation',
        aiFocusAgents: 'AI Agents & Automation',
        aiFocusAgentsDesc: 'Phát triển AI agents tự động hóa workflow và decision making',
        aiFocusData: 'Data Analysis & ML',
        aiFocusDataDesc: 'Phân tích dữ liệu và xây dựng mô hình Machine Learning cho business insights',
        aiProjectsHighlights: '🚀 Dự Án AI Nổi Bật',
        aiFeatured: 'Nổi bật',
        aiExpenseTitle: 'Intelligent Expense Tracker',
        aiExpenseSubtitle: 'Trợ lý tài chính AI',
        aiExpenseProblem: '<strong>Vấn đề:</strong> Quản lý chi tiêu thủ công tốn thời gian và dễ sai sót',
        aiExpenseSolution: '<strong>Giải pháp:</strong> Tích hợp AI để tự động phân loại giao dịch, dự đoán chi tiêu, và đưa ra insights tài chính thông minh',
        aiExpenseF1: 'Tự động phân loại với NLP',
        aiExpenseF2: 'Dự đoán chi tiêu với Time Series',
        aiExpenseF3: 'Lời khuyên tài chính cá nhân từ GPT-4',
        aiExpenseF4: 'Phát hiện bất thường cho giao dịch lạ',
        aiMetricAccuracy: 'Độ chính xác',
        aiMetricTimeSaved: 'Tiết kiệm thời gian',
        aiMetricResponse: 'Thời gian phản hồi',
        viewOnGithub: 'Xem trên GitHub',
        aiHRTitle: 'HR Management Chatbot',
        aiHRSubtitle: 'AI cho tác vụ nhân sự',
        aiHRDesc: 'Chatbot AI hỗ trợ nhân viên với các câu hỏi về HR policies, leave requests, và company information',
        aiHRF1: 'RAG với company knowledge base',
        aiHRF2: 'Multi-turn conversation context',
        aiHRF3: 'Intent classification & slot filling',
        aiCodeTitle: 'AI Code Review Assistant',
        aiCodeSubtitle: 'Phân tích code tự động',
        aiCodeDesc: 'AI assistant tự động review code, detect bugs, suggest improvements và generate unit tests',
        aiCodeF1: 'Phát hiện code smell',
        aiCodeF2: 'Quét lỗ hổng bảo mật',
        aiCodeF3: 'Tự động tạo unit tests',
        researchInterests: '📚 Hướng Nghiên Cứu & Học Tập',
        researchPrompt: 'Prompt Engineering',
        researchPromptItems: ['Few-shot & Zero-shot learning', 'Chain-of-Thought prompting', 'ReAct & Self-consistency', 'Kỹ thuật tối ưu prompt'],
        researchRAG: 'Retrieval Augmented Generation',
        researchRAGItems: ['Vector embeddings & similarity search', 'Chiến lược tìm kiếm hybrid', 'Tối ưu hóa context window', 'Thuật toán re-ranking'],
        researchFineTuning: 'LLM Fine-tuning',
        researchFineTuningItems: ['Kỹ thuật LoRA & QLoRA', 'Domain-specific adaptation', 'Instruction tuning', 'Đánh giá chất lượng mô hình'],
        researchSafety: 'AI Safety & Ethics',
        researchSafetyItems: ['Phòng chống prompt injection', 'Phát hiện & giảm thiểu bias', 'Kiểm duyệt nội dung', 'Phát triển AI có trách nhiệm'],
        activelyResearching: 'Đang nghiên cứu',
        learning: 'Đang học',
        aiLearningJourney: '🎓 Hành Trình Học AI',
        aiLearn1Title: 'Nền tảng AI & ML',
        aiLearn1Desc: 'Học Python, NumPy, Pandas, cơ bản về Machine Learning algorithms',
        aiLearn2Title: 'Deep Learning & Neural Networks',
        aiLearn2Desc: 'Nghiên cứu về neural networks, backpropagation, và optimization techniques',
        aiLearn3Title: 'LLMs & Tích hợp API',
        aiLearn3Desc: 'Tích hợp OpenAI, Gemini, Claude APIs vào ứng dụng thực tế',
        aiLearn4Title: 'Advanced RAG & Vector Databases',
        aiLearn4Desc: 'Nghiên cứu sâu về RAG patterns, embeddings, và vector search optimization',
        aiLearn5Title: 'LLM Fine-tuning & Deployment',
        aiLearn5Desc: 'Kế hoạch học fine-tuning models và deploying LLMs at scale',
        aiLearnCurrent: '2026 (Hiện tại)',
        aiLearnPlanned: '2026 Q4 (Kế hoạch)',

        // Projects Section
        projectsTag: '🚀 Dự án',
        myProjects: 'Dự Án Của Tôi',
        projectsDesc: 'Các dự án và công việc mà tôi đã thực hiện',
        projectName: 'Dự án',
        techStackCol: 'Công nghệ',
        description: 'Mô tả',
        link: 'Liên kết',
        projAppFlutter: 'Ứng dụng theo dõi chi tiêu với NestJS backend & Flutter mobile',
        projLearnAI: 'Dự án học AI sử dụng Python với OpenAI & Gemini APIs, tích hợp LangChain',
        projHR: 'Hệ thống quản lý nhân sự với Spring Security & Spring Cloud',
        projLibrary: 'Ứng dụng desktop quản lý mượn & trả sách',
        projLinkky: 'Ứng dụng desktop quản lý sách đóng gói container',
        projBlog: 'Nền tảng blog cá nhân xây dựng với NodeJS & Cloudinary',
        projHotel: 'Website đặt phòng khách sạn & tour sử dụng Java Servlet JSP',
        projADC: 'Phần mềm desktop xây dựng với C# .NET',
        projGoLang: 'Dự án Cloud & DevOps với GoLang (microservices, Docker, CI/CD)',

        // Achievements Section
        achievementTag: '🏆 Thành tựu',
        myAchievements: 'Thành Tựu Của Tôi',
        achievementsDesc: 'Chứng chỉ và những thành tựu cho thấy quá trình học tập và phát triển của tôi',
        achGCloud: 'Google Cloud Certified',
        achGCloudDesc: 'Google Cloud Certified Cloud Digital Leader - Chứng nhận kiến thức về nền tảng Google Cloud',
        achProfessional: 'Thành Tựu Chuyên Môn',
        achProfessionalDesc: 'Được công nhận cho hiệu suất xuất sắc trong phát triển phần mềm và giải quyết vấn đề',
        achScholarship: 'Học Bổng Toàn Phần',
        achScholarshipDesc: 'Đạt học bổng toàn phần từ trường đại học - Công nhận thành tích học tập xuất sắc',
        achGameKren: 'GameKren Prize - 16M VND',
        achGameKrenDesc: 'Giải thưởng, kết quả thi TN 2024',
        achMilestone: 'Cột Mốc Cá Nhân',
        achMilestoneDesc: 'Thành tựu đáng nhớ trong hành trình phát triển cá nhân và chuyên môn',

        // Experience Section
        experienceTag: '💼 Kinh Nghiệm',
        myExperience: 'Kinh Nghiệm Của Tôi',
        experienceDesc: 'Quá trình làm việc và phát triển kỹ năng chuyên môn',
        expWebTitle: '💻 Phát Triển Web App',
        expWebRole: 'Full-Stack Development',
        expWebDesc: 'Phát triển các ứng dụng web hoàn chỉnh sử dụng Spring Boot, Node.js, React và Flutter. Thiết kế và xây dựng các hệ thống backend có khả năng mở rộng cao với API RESTful và frontend responsive.',
        expAITitle: '🤖 Nghiên Cứu AI Agent',
        expAIRole: 'AI / Machine Learning',
        expAIDesc: 'Nghiên cứu và phát triển các AI Agent thông minh sử dụng Python, LLM APIs (OpenAI, Gemini), LangChain, và các công nghệ AI hiện đại. Xây dựng các ứng dụng AI tích hợp để tự động hóa tác vụ phức tạp.',
        expCloudTitle: '☁️ Google Cloud Infrastructure',
        expCloudRole: 'Cloud & DevOps',
        expCloudDesc: 'Thiết kế và quản lý hạ tầng trên Google Cloud Platform (GCP). Triển khai ứng dụng sử dụng Cloud Run, Compute Engine, App Engine. Cấu hình CI/CD pipelines, monitoring, và tối ưu hóa chi phí cloud.',
        ongoing: 'Đang làm',

        // Interests Section
        interestsTag: '🎮 Sở Thích',
        myInterests: 'Sở Thích Của Tôi',
        interestsDesc: 'Những điều tôi yêu thích ngoài lập trình',
        interestGaming: '🎮 Chơi game',
        interestGamingDesc: 'Thích chơi các trò chơi chiến thuật và sáng tạo. Liên Quân giúp phát triển tư duy chiến lược, còn Roblox cho phép sáng tạo và khám phá thế giới ảo.',
        interestReading: '📚 Đọc sách',
        interestReadingDesc: 'Đọc sách về công nghệ, AI, khoa học dữ liệu và phát triển cá nhân. Yêu thích khám phá những kiến thức mới và áp dụng vào thực tiễn.',
        interestReadingItem1: 'Công nghệ & Khoa học',
        interestReadingItem2: 'Tự phát triển',
        interestMusic: '🎵 Âm nhạc',
        interestMusicDesc: 'Nghe nhạc là một phần quan trọng của cuộc sống tôi. Thích các bài nhạc Indie, EDM và những ca khúc có ý nghĩa. Nhạc giúp tôi thư giãn và tăng năng suất khi làm việc.',

        // Contact Section
        getInTouch: '📬 Liên hệ',
        contactTitle: 'Liên Hệ Với Tôi',
        contactDesc: 'Hãy liên hệ với tôi cho những cơ hội hợp tác hoặc chỉ một cuộc trò chuyện thân thiện!',

        // Footer
        devPortfolioFooter: 'DevPortfolio',
        madeWith: 'Tạo ra với',

        // Settings Panel
        settingsTitle: '⚙️ Tùy chỉnh',
        settingBrightness: 'Độ sáng',
        settingContrast: 'Tương phản',
        settingSaturation: 'Bão hòa',
        settingThemeColor: 'Màu chủ đề',
        settingBackground: 'Nền',
        settingMusic: 'Nhạc nền',
        settingResetAll: 'Đặt lại tất cả',

        // Chatbot
        chatbotTitle: 'Portfolio AI Assistant',
        chatbotStatus: 'Powered by Gemini AI',
        chatbotWelcome: '👋 Xin chào! Tôi là AI Assistant của Đặng Quang Doanh.',
        chatbotHelp: 'Tôi có thể giúp bạn:',
        chatbotHelp1: '📋 Thông tin về kinh nghiệm và kỹ năng',
        chatbotHelp2: '💼 Chi tiết các dự án',
        chatbotHelp3: '🤖 Nghiên cứu AI & công nghệ',
        chatbotHelp4: '📧 Thông tin liên hệ',
        chatbotAsk: 'Hãy hỏi tôi bất cứ điều gì! 😊',
        chatbotPlaceholder: 'Nhập câu hỏi của bạn...',
        chatbotQuick1: '💼 Kinh nghiệm',
        chatbotQuick2: '🤖 Dự án AI',
        chatbotQuick3: '⭐ Kỹ năng',
        chatbotQuestion1: 'Kinh nghiệm làm việc của bạn là gì?',
        chatbotQuestion2: 'Bạn có những dự án AI nào?',
        chatbotQuestion3: 'Kỹ năng nổi bật của bạn?',
    },
    en: {
        // Navigation
        devPortfolio: 'DevPortfolio',
        home: 'Home',
        about: 'About',
        techStack: 'Tech Stack',
        achievements: 'Achievements',
        contact: 'Contact',
        projects: 'Projects',
        aiResearch: 'AI Research',

        // Hero Section
        hello: '👋 Hello, I am',
        heroRoles: ['Web Developer', 'Mobile App Developer', 'AI Researcher', 'Freelancer'],
        heroDescription: '🚀 Passionate about building innovative solutions | 💻 Spring Boot • Node.js • Flutter • Python AI',
        passionate: 'Passionate',
        buildingInnovative: 'building innovative solutions',
        dateOfBirth: 'Date of Birth:',
        birthPlace: 'Place of Birth:',
        university: 'University:',
        computerScience: 'CS Year 2 Student',
        viewProjects: 'View Projects',
        contactMe: 'Contact Me',
        availableForWork: 'Available for Work',

        // Stats
        statProjects: 'Projects',
        statAchievements: 'Achievements',
        statYearsCoding: 'Years Coding',

        // View counter
        views: 'Views',

        // About Section
        aboutTag: '👨‍💻 About Me',
        aboutTitle: 'Get To Know Me',
        aboutDesc: 'The journey from tech enthusiast to Developer',
        myStory: '📖 My Story',
        aboutStory1: 'Hello! I am <strong>Đặng Quang Doanh</strong>, a 2nd year Computer Science student from Thai Binh. Since childhood, I have been passionate about technology and how it changes people\'s lives.',
        aboutStory2: 'My coding journey started in 2022 when I first wrote "Hello World" in Java. Since then, I have been continuously learning and growing — from backend with Spring Boot, Node.js, to frontend with React, and mobile development with Flutter.',
        aboutStory3: '2024 was a special year with many achievements: Earning a full scholarship, winning the GameKren Prize of 16M VND, and getting Google Cloud Certified. These successes are not only motivation but also proof of relentless effort.',
        philosophy: '🎯 Philosophy',
        philosophyQuote: '"Code is not just about solving problems, it\'s about creating solutions that make life better."',
        quickFacts: '📋 Quick Facts',
        factBirthday: 'Birthday:',
        factBirthdayVal: 'Dec 29, 2006 (18 years old)',
        factHometown: 'Hometown:',
        factHometownVal: 'Thai Binh, Vietnam',
        factEducation: 'Education:',
        factEducationVal: 'CS Student - Year 2',
        factRole: 'Role:',
        factRoleVal: 'Full-Stack Developer',
        factExpertise: 'Expertise:',
        factExpertiseVal: 'Backend, AI, Cloud',
        factLanguages: 'Languages:',
        factLanguagesVal: 'Vietnamese, English, Chinese',
        strengths: '💪 Strengths',
        strengthProblem: 'Problem Solving',
        strengthLearner: 'Quick Learner',
        strengthTeam: 'Team Player',
        strengthMotivated: 'Self-Motivated',
        strengthDetail: 'Detail-Oriented',
        strengthCreative: 'Creative Thinker',
        currentFocus: '🎯 Current Focus',

        // Timeline
        myJourney: '🗓️ My Journey',
        timeline2006Title: '🎂 Born in Thai Binh',
        timeline2006Desc: 'Born in Thai Binh, Vietnam',
        timeline2022Title: '💻 Started Coding Journey',
        timeline2022Desc: 'Started learning to code with Java, HTML, CSS',
        timeline2023Title: '🎓 University Life Begins',
        timeline2023Desc: 'Enrolled in Computer Science program',
        timeline2024Title: '🏆 Major Achievements',
        timeline2024Desc: 'Full scholarship, GameKren Prize 16M, Google Cloud Certified',
        timeline2025Title: '🚀 Advanced Skills',
        timeline2025Desc: 'Deep dive into AI, Microservices, Cloud Architecture',
        timeline2026Title: '🎯 Current Focus',
        timeline2026Desc: 'Building scalable systems, AI integration, Open source contribution',

        // Tech Stack Section
        techStackTag: '🛠️ Technologies',
        techStackTitle: 'Tech Stack',
        techStackDesc: 'Technologies and tools I am proficient in and use daily',
        techProficiency: '💪 Technical Proficiency',
        skillBackend: 'Backend Development',
        skillFrontend: 'Frontend Development',
        skillMobile: 'Mobile Development',
        skillAI: 'AI & Machine Learning',
        skillDB: 'Database & Storage',
        skillDevOps: 'DevOps & Cloud',

        // AI Research Section
        aiResearchTag: '🤖 AI Research',
        aiResearchTitle: 'AI Research & Applications',
        aiResearchDesc: 'Exploring AI projects, LLM research, and real-world Machine Learning applications',
        aiFocusLLM: 'Large Language Models',
        aiFocusLLMDesc: 'Research and apply GPT-4, Claude, Gemini in real-world systems',
        aiFocusChat: 'Conversational AI',
        aiFocusChatDesc: 'Building intelligent chatbots with context awareness and multi-turn conversation',
        aiFocusAgents: 'AI Agents & Automation',
        aiFocusAgentsDesc: 'Developing AI agents to automate workflows and decision making',
        aiFocusData: 'Data Analysis & ML',
        aiFocusDataDesc: 'Data analysis and building Machine Learning models for business insights',
        aiProjectsHighlights: '🚀 AI Project Highlights',
        aiFeatured: 'Featured',
        aiExpenseTitle: 'Intelligent Expense Tracker',
        aiExpenseSubtitle: 'AI-Powered Financial Assistant',
        aiExpenseProblem: '<strong>Problem:</strong> Manual expense tracking is time-consuming and error-prone',
        aiExpenseSolution: '<strong>Solution:</strong> Integrate AI for auto-categorizing transactions, predicting spending, and providing smart financial insights',
        aiExpenseF1: 'Auto-categorization with NLP',
        aiExpenseF2: 'Spending prediction with Time Series',
        aiExpenseF3: 'Personalized financial advice from GPT-4',
        aiExpenseF4: 'Anomaly detection for unusual transactions',
        aiMetricAccuracy: 'Accuracy',
        aiMetricTimeSaved: 'Time Saved',
        aiMetricResponse: 'Response Time',
        viewOnGithub: 'View on GitHub',
        aiHRTitle: 'HR Management Chatbot',
        aiHRSubtitle: 'Conversational AI for HR Tasks',
        aiHRDesc: 'AI chatbot helping employees with HR policies, leave requests, and company information',
        aiHRF1: 'RAG with company knowledge base',
        aiHRF2: 'Multi-turn conversation context',
        aiHRF3: 'Intent classification & slot filling',
        aiCodeTitle: 'AI Code Review Assistant',
        aiCodeSubtitle: 'Automated Code Analysis',
        aiCodeDesc: 'AI assistant that auto-reviews code, detects bugs, suggests improvements, and generates unit tests',
        aiCodeF1: 'Code smell detection',
        aiCodeF2: 'Security vulnerability scan',
        aiCodeF3: 'Auto test generation',
        researchInterests: '📚 Research Interests & Learning',
        researchPrompt: 'Prompt Engineering',
        researchPromptItems: ['Few-shot & Zero-shot learning', 'Chain-of-Thought prompting', 'ReAct & Self-consistency', 'Prompt optimization techniques'],
        researchRAG: 'Retrieval Augmented Generation',
        researchRAGItems: ['Vector embeddings & similarity search', 'Hybrid search strategies', 'Context window optimization', 'Re-ranking algorithms'],
        researchFineTuning: 'LLM Fine-tuning',
        researchFineTuningItems: ['LoRA & QLoRA techniques', 'Domain-specific adaptation', 'Instruction tuning', 'Model evaluation metrics'],
        researchSafety: 'AI Safety & Ethics',
        researchSafetyItems: ['Prompt injection prevention', 'Bias detection & mitigation', 'Content moderation', 'Responsible AI development'],
        activelyResearching: 'Actively Researching',
        learning: 'Learning',
        aiLearningJourney: '🎓 AI Learning Journey',
        aiLearn1Title: 'Foundations of AI & ML',
        aiLearn1Desc: 'Learned Python, NumPy, Pandas, basic Machine Learning algorithms',
        aiLearn2Title: 'Deep Learning & Neural Networks',
        aiLearn2Desc: 'Research on neural networks, backpropagation, and optimization techniques',
        aiLearn3Title: 'LLMs & API Integration',
        aiLearn3Desc: 'Integrated OpenAI, Gemini, Claude APIs into real-world applications',
        aiLearn4Title: 'Advanced RAG & Vector Databases',
        aiLearn4Desc: 'Deep research on RAG patterns, embeddings, and vector search optimization',
        aiLearn5Title: 'LLM Fine-tuning & Deployment',
        aiLearn5Desc: 'Planning to learn model fine-tuning and deploying LLMs at scale',
        aiLearnCurrent: '2026 (Current)',
        aiLearnPlanned: '2026 Q4 (Planned)',

        // Guestbook
        guestbookTag: '✍️ Guestbook',
        guestbookTitle: 'Guestbook',
        guestbookDesc: 'Leave me a message!',
        guestbookName: 'Your Name',
        guestbookMessage: 'Your Message',
        guestbookSubmit: 'Send Message',

        // Projects Section
        projectsTag: '🚀 Projects',
        myProjects: 'My Projects',
        projectsDesc: 'Projects and work that I have completed',
        projectName: 'Project',
        techStackCol: 'Tech Stack',
        description: 'Description',
        link: 'Link',
        projAppFlutter: 'Expense tracker app with NestJS backend & Flutter mobile',
        projLearnAI: 'AI learning project using Python with OpenAI & Gemini APIs, LangChain integration',
        projHR: 'Human resource management system with Spring Security & Spring Cloud',
        projLibrary: 'Desktop app for book borrowing & management',
        projLinkky: 'Containerized desktop app for book management',
        projBlog: 'Personal blog platform built with NodeJS & Cloudinary',
        projHotel: 'Hotel & tour booking website using Java Servlet JSP',
        projADC: 'Desktop software built with C# .NET',
        projGoLang: 'Cloud & DevOps project built with GoLang (microservices, Docker, CI/CD)',

        // Achievements Section
        achievementTag: '🏆 Achievements',
        myAchievements: 'My Achievements',
        achievementsDesc: 'Certifications and achievements showing my learning and development progress',
        achGCloud: 'Google Cloud Certified',
        achGCloudDesc: 'Google Cloud Certified Cloud Digital Leader - Certification in Google Cloud platform knowledge',
        achProfessional: 'Professional Achievement',
        achProfessionalDesc: 'Recognized for excellent performance in software development and problem-solving',
        achScholarship: 'Full Scholarship',
        achScholarshipDesc: 'Earned a full scholarship from university - Recognition of outstanding academic performance',
        achGameKren: 'GameKren Prize - 16M VND',
        achGameKrenDesc: 'Award for outstanding graduation exam results in 2024',
        achMilestone: 'Personal Milestone',
        achMilestoneDesc: 'Memorable achievement in personal and professional development journey',

        // Experience Section
        experienceTag: '💼 Experience',
        myExperience: 'My Experience',
        experienceDesc: 'Professional experience and skill development',
        expWebTitle: '💻 Web App Development',
        expWebRole: 'Full-Stack Development',
        expWebDesc: 'Developing complete web applications using Spring Boot, Node.js, React and Flutter. Designing and building highly scalable backend systems with RESTful APIs and responsive frontends.',
        expAITitle: '🤖 AI Agent Research',
        expAIRole: 'AI / Machine Learning',
        expAIDesc: 'Researching and developing intelligent AI Agents using Python, LLM APIs (OpenAI, Gemini), LangChain, and modern AI technologies. Building integrated AI applications to automate complex tasks.',
        expCloudTitle: '☁️ Google Cloud Infrastructure',
        expCloudRole: 'Cloud & DevOps',
        expCloudDesc: 'Designing and managing infrastructure on Google Cloud Platform (GCP). Deploying applications using Cloud Run, Compute Engine, App Engine. Configuring CI/CD pipelines, monitoring, and optimizing cloud costs.',
        ongoing: 'Ongoing',

        // Interests Section
        interestsTag: '🎮 Interests',
        myInterests: 'My Interests',
        interestsDesc: 'Things I love besides coding',
        interestGaming: '🎮 Gaming',
        interestGamingDesc: 'Love playing strategic and creative games. Arena of Valor develops strategic thinking, while Roblox allows creativity and virtual world exploration.',
        interestReading: '📚 Reading',
        interestReadingDesc: 'Reading about technology, AI, data science, and self-improvement. Love discovering new knowledge and applying it to practice.',
        interestReadingItem1: 'Tech & Science',
        interestReadingItem2: 'Self-Development',
        interestMusic: '🎵 Music',
        interestMusicDesc: 'Music is an important part of my life. Love Indie, EDM, and meaningful songs. Music helps me relax and boost productivity at work.',

        // Contact Section
        getInTouch: '📬 Get In Touch',
        contactTitle: 'Get In Touch',
        contactDesc: 'Contact me for collaboration opportunities or just a friendly conversation!',

        // Footer
        devPortfolioFooter: 'DevPortfolio',
        madeWith: 'Made with',

        // Settings Panel
        settingsTitle: '⚙️ Customize',
        settingBrightness: 'Brightness',
        settingContrast: 'Contrast',
        settingSaturation: 'Saturation',
        settingThemeColor: 'Theme Color',
        settingBackground: 'Background',
        settingMusic: 'Background Music',
        settingResetAll: 'Reset All',

        // Chatbot
        chatbotTitle: 'Portfolio AI Assistant',
        chatbotStatus: 'Powered by Gemini AI',
        chatbotWelcome: '👋 Hello! I am Dang Quang Doanh\'s AI Assistant.',
        chatbotHelp: 'I can help you with:',
        chatbotHelp1: '📋 Information about experience and skills',
        chatbotHelp2: '💼 Project details',
        chatbotHelp3: '🤖 AI research & technology',
        chatbotHelp4: '📧 Contact information',
        chatbotAsk: 'Feel free to ask me anything! 😊',
        chatbotPlaceholder: 'Type your question...',
        chatbotQuick1: '💼 Experience',
        chatbotQuick2: '🤖 AI Projects',
        chatbotQuick3: '⭐ Skills',
        chatbotQuestion1: 'What is your work experience?',
        chatbotQuestion2: 'What AI projects do you have?',
        chatbotQuestion3: 'What are your key skills?',
    },
    zh: {
        // Navigation
        devPortfolio: '开发组合',
        home: '首页',
        about: '关于',
        techStack: '技术栈',
        achievements: '成就',
        contact: '联系',
        projects: '项目',
        aiResearch: 'AI研究',

        // Hero Section
        hello: '👋 你好，我是',
        heroRoles: ['Web 开发者', '移动应用开发者', 'AI 研究员', '自由职业者'],
        heroDescription: '🚀 热衷于构建创新解决方案 | 💻 Spring Boot • Node.js • Flutter • Python AI',
        passionate: '热衷',
        buildingInnovative: '构建创新解决方案',
        dateOfBirth: '出生日期：',
        birthPlace: '出生地：',
        university: '大学：',
        computerScience: '计算机科学二年级',
        viewProjects: '查看项目',
        contactMe: '联系我',
        availableForWork: '可以工作',

        // Stats
        statProjects: '项目',
        statAchievements: '成就',
        statYearsCoding: '编程年数',

        // View counter
        views: '浏览',

        // About Section
        aboutTag: '👨‍💻 关于我',
        aboutTitle: '了解我',
        aboutDesc: '从技术爱好者到开发者的旅程',
        myStory: '📖 我的故事',
        aboutStory1: '你好！我是<strong>Đặng Quang Doanh</strong>，来自太平省的计算机科学二年级学生。从小我就对技术充满热情，热衷于它改变人们生活的方式。',
        aboutStory2: '我的编程之旅始于2022年，当时我第一次用Java写了"Hello World"。从那时起，我不断学习和成长——从Spring Boot、Node.js的后端，到React的前端，以及Flutter的移动开发。',
        aboutStory3: '2024年是特别的一年，取得了许多成就：获得全额奖学金、赢得GameKren奖16M VND、以及获得Google Cloud认证。这些成功不仅是动力，也是不懈努力的证明。',
        philosophy: '🎯 理念',
        philosophyQuote: '"代码不仅仅是解决问题，更是创造让生活更美好的解决方案。"',
        quickFacts: '📋 快速了解',
        factBirthday: '生日：',
        factBirthdayVal: '2006年12月29日（18岁）',
        factHometown: '家乡：',
        factHometownVal: '越南太平省',
        factEducation: '学历：',
        factEducationVal: '计算机科学 - 二年级',
        factRole: '角色：',
        factRoleVal: '全栈开发者',
        factExpertise: '专长：',
        factExpertiseVal: '后端、AI、云计算',
        factLanguages: '语言：',
        factLanguagesVal: '越南语、英语、中文',
        strengths: '💪 优势',
        strengthProblem: '问题解决',
        strengthLearner: '快速学习',
        strengthTeam: '团队合作',
        strengthMotivated: '自我驱动',
        strengthDetail: '注重细节',
        strengthCreative: '创造性思维',
        currentFocus: '🎯 当前重点',

        // Timeline
        myJourney: '🗓️ 我的旅程',
        timeline2006Title: '🎂 出生于太平',
        timeline2006Desc: '出生于越南太平省',
        timeline2022Title: '💻 开始编程之旅',
        timeline2022Desc: '开始学习Java、HTML、CSS编程',
        timeline2023Title: '🎓 大学生活开始',
        timeline2023Desc: '进入计算机科学专业',
        timeline2024Title: '🏆 重大成就',
        timeline2024Desc: '全额奖学金、GameKren奖16M、Google Cloud认证',
        timeline2025Title: '🚀 高级技能',
        timeline2025Desc: '深入AI、微服务、云架构',
        timeline2026Title: '🎯 当前重点',
        timeline2026Desc: '构建可扩展系统、AI集成、开源贡献',

        // Tech Stack Section
        techStackTag: '🛠️ 技术',
        techStackTitle: '技术栈',
        techStackDesc: '我精通并日常使用的技术和工具',
        techProficiency: '💪 技术水平',
        skillBackend: '后端开发',
        skillFrontend: '前端开发',
        skillMobile: '移动开发',
        skillAI: 'AI & 机器学习',
        skillDB: '数据库 & 存储',
        skillDevOps: 'DevOps & 云计算',

        // AI Research Section
        aiResearchTag: '🤖 AI研究',
        aiResearchTitle: 'AI研究与应用',
        aiResearchDesc: '探索AI项目、LLM研究和机器学习的实际应用',
        aiFocusLLM: '大语言模型',
        aiFocusLLMDesc: '研究和应用GPT-4、Claude、Gemini于实际系统中',
        aiFocusChat: '对话式AI',
        aiFocusChatDesc: '构建具有上下文感知和多轮对话的智能聊天机器人',
        aiFocusAgents: 'AI代理 & 自动化',
        aiFocusAgentsDesc: '开发AI代理以自动化工作流程和决策',
        aiFocusData: '数据分析 & ML',
        aiFocusDataDesc: '数据分析和构建机器学习模型以获取商业洞察',
        aiProjectsHighlights: '🚀 AI项目亮点',
        aiFeatured: '精选',
        aiExpenseTitle: '智能支出追踪器',
        aiExpenseSubtitle: 'AI驱动的财务助手',
        aiExpenseProblem: '<strong>问题：</strong>手动管理支出费时且容易出错',
        aiExpenseSolution: '<strong>解决方案：</strong>集成AI自动分类交易、预测支出、提供智能财务洞察',
        aiExpenseF1: 'NLP自动分类',
        aiExpenseF2: '时间序列支出预测',
        aiExpenseF3: 'GPT-4个性化财务建议',
        aiExpenseF4: '异常交易检测',
        aiMetricAccuracy: '准确率',
        aiMetricTimeSaved: '节省时间',
        aiMetricResponse: '响应时间',
        viewOnGithub: '在GitHub上查看',
        aiHRTitle: 'HR管理聊天机器人',
        aiHRSubtitle: '人力资源对话AI',
        aiHRDesc: 'AI聊天机器人帮助员工处理人力资源政策、请假申请和公司信息',
        aiHRF1: 'RAG与公司知识库',
        aiHRF2: '多轮对话上下文',
        aiHRF3: '意图分类和槽填充',
        aiCodeTitle: 'AI代码审查助手',
        aiCodeSubtitle: '自动化代码分析',
        aiCodeDesc: 'AI助手自动审查代码、检测错误、建议改进并生成单元测试',
        aiCodeF1: '代码异味检测',
        aiCodeF2: '安全漏洞扫描',
        aiCodeF3: '自动生成测试',
        researchInterests: '📚 研究兴趣与学习',
        researchPrompt: '提示工程',
        researchPromptItems: ['Few-shot & Zero-shot学习', 'Chain-of-Thought提示', 'ReAct & Self-consistency', '提示优化技术'],
        researchRAG: '检索增强生成',
        researchRAGItems: ['向量嵌入和相似性搜索', '混合搜索策略', '上下文窗口优化', '重排序算法'],
        researchFineTuning: 'LLM微调',
        researchFineTuningItems: ['LoRA & QLoRA技术', '特定领域适应', '指令调优', '模型评估指标'],
        researchSafety: 'AI安全与伦理',
        researchSafetyItems: ['提示注入防护', '偏见检测与减轻', '内容审核', '负责任的AI开发'],
        activelyResearching: '积极研究中',
        learning: '学习中',
        aiLearningJourney: '🎓 AI学习之旅',
        aiLearn1Title: 'AI & ML基础',
        aiLearn1Desc: '学习Python、NumPy、Pandas、基本机器学习算法',
        aiLearn2Title: '深度学习 & 神经网络',
        aiLearn2Desc: '研究神经网络、反向传播和优化技术',
        aiLearn3Title: 'LLM & API集成',
        aiLearn3Desc: '将OpenAI、Gemini、Claude API集成到实际应用中',
        aiLearn4Title: '高级RAG & 向量数据库',
        aiLearn4Desc: '深入研究RAG模式、嵌入和向量搜索优化',
        aiLearn5Title: 'LLM微调 & 部署',
        aiLearn5Desc: '计划学习模型微调和大规模部署LLM',
        aiLearnCurrent: '2026（当前）',
        aiLearnPlanned: '2026 Q4（计划）',

        // Projects Section
        projectsTag: '🚀 项目',
        myProjects: '我的项目',
        projectsDesc: '我完成的项目和工作',
        projectName: '项目',
        techStackCol: '技术栈',
        description: '描述',
        link: '链接',
        projAppFlutter: '使用NestJS后端和Flutter移动端的支出追踪应用',
        projLearnAI: '使用Python和OpenAI & Gemini API、LangChain的AI学习项目',
        projHR: '使用Spring Security & Spring Cloud的人力资源管理系统',
        projLibrary: '图书借阅管理桌面应用',
        projLinkky: '容器化图书管理桌面应用',
        projBlog: '使用NodeJS & Cloudinary构建的个人博客平台',
        projHotel: '使用Java Servlet JSP的酒店和旅游预订网站',
        projADC: '使用C# .NET构建的桌面软件',
        projGoLang: '使用GoLang的Cloud & DevOps项目（微服务、Docker、CI/CD）',

        // Achievements Section
        achievementTag: '🏆 成就',
        myAchievements: '我的成就',
        achievementsDesc: '显示我学习和发展进度的认证和成就',
        achGCloud: 'Google Cloud认证',
        achGCloudDesc: 'Google Cloud Certified Cloud Digital Leader - Google Cloud平台知识认证',
        achProfessional: '专业成就',
        achProfessionalDesc: '因在软件开发和问题解决方面的出色表现而获得认可',
        achScholarship: '全额奖学金',
        achScholarshipDesc: '获得大学全额奖学金 - 对优秀学业成绩的认可',
        achGameKren: 'GameKren奖 - 16M VND',
        achGameKrenDesc: '2024年优秀毕业考试成绩奖',
        achMilestone: '个人里程碑',
        achMilestoneDesc: '个人和专业发展旅程中的难忘成就',

        // Experience Section
        experienceTag: '💼 经验',
        myExperience: '我的经验',
        experienceDesc: '专业经验和技能发展',
        expWebTitle: '💻 Web应用开发',
        expWebRole: '全栈开发',
        expWebDesc: '使用Spring Boot、Node.js、React和Flutter开发完整的Web应用。设计和构建高度可扩展的后端系统，包括RESTful API和响应式前端。',
        expAITitle: '🤖 AI代理研究',
        expAIRole: 'AI / 机器学习',
        expAIDesc: '使用Python、LLM API（OpenAI、Gemini）、LangChain和现代AI技术研究和开发智能AI代理。构建集成AI应用以自动化复杂任务。',
        expCloudTitle: '☁️ Google Cloud基础设施',
        expCloudRole: '云计算 & DevOps',
        expCloudDesc: '在Google Cloud Platform（GCP）上设计和管理基础设施。使用Cloud Run、Compute Engine、App Engine部署应用。配置CI/CD管道、监控和优化云成本。',
        ongoing: '进行中',

        // Interests Section
        interestsTag: '🎮 兴趣',
        myInterests: '我的兴趣',
        interestsDesc: '除了编程之外我喜欢的东西',
        interestGaming: '🎮 游戏',
        interestGamingDesc: '喜欢玩策略和创意游戏。王者荣耀培养战略思维，而Roblox允许创意和虚拟世界探索。',
        interestReading: '📚 阅读',
        interestReadingDesc: '阅读关于技术、AI、数据科学和自我提升的书籍。热爱发现新知识并将其应用于实践。',
        interestReadingItem1: '技术与科学',
        interestReadingItem2: '自我发展',
        interestMusic: '🎵 音乐',
        interestMusicDesc: '音乐是我生活中重要的一部分。喜欢Indie、EDM和有意义的歌曲。音乐帮助我放松并提高工作效率。',

        // Contact Section
        getInTouch: '📬 联系我',
        contactTitle: '联系我',
        contactDesc: '联系我获取合作机会或只是友好的交谈！',

        // Footer
        devPortfolioFooter: '开发组合',
        madeWith: '用',

        // Settings Panel
        settingsTitle: '⚙️ 自定义',
        settingBrightness: '亮度',
        settingContrast: '对比度',
        settingSaturation: '饱和度',
        settingThemeColor: '主题颜色',
        settingBackground: '背景',
        settingMusic: '背景音乐',
        settingResetAll: '重置全部',

        // Chatbot
        chatbotTitle: '作品集AI助手',
        chatbotStatus: '由Gemini AI提供支持',
        chatbotWelcome: '👋 你好！我是Đặng Quang Doanh的AI助手。',
        chatbotHelp: '我可以帮你：',
        chatbotHelp1: '📋 经验和技能信息',
        chatbotHelp2: '💼 项目详情',
        chatbotHelp3: '🤖 AI研究与技术',
        chatbotHelp4: '📧 联系信息',
        chatbotAsk: '随时问我任何问题！😊',
        chatbotPlaceholder: '输入您的问题...',
        chatbotQuick1: '💼 经验',
        chatbotQuick2: '🤖 AI项目',
        chatbotQuick3: '⭐ 技能',
        chatbotQuestion1: '你的工作经验是什么？',
        chatbotQuestion2: '你有哪些AI项目？',
        chatbotQuestion3: '你的主要技能是什么？',
    }
};

// Current language (default: Vietnamese)
let currentLanguage = localStorage.getItem('language') || 'vi';

// Initialize i18n
function initI18n() {
    // Set initial language
    setLanguage(currentLanguage);

    // Set active language button
    updateLanguageButtons();

    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

// Set language and update all text elements
function setLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language '${lang}' not found, using Vietnamese`);
        lang = 'vi';
    }

    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if the value contains HTML
            const value = translations[lang][key];
            if (typeof value === 'string' && (value.includes('<strong>') || value.includes('<em>') || value.includes('<br>'))) {
                element.innerHTML = value;
            } else if (element.children.length > 0 && !element.querySelector('[data-i18n]')) {
                // For elements with child elements that are NOT i18n children, only update text nodes
                let textContent = value;
                element.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = textContent;
                    }
                });
            } else if (element.children.length === 0) {
                element.textContent = value;
            } else {
                // Has children with data-i18n, skip parent to avoid overwriting children
                element.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                        node.textContent = value;
                    }
                });
            }
        }
    });

    // Update all elements with data-i18n-html attribute (for innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update all elements with data-i18n-placeholder attribute (for input/textarea)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update research list items (special handling for arrays)
    updateResearchLists(lang);

    // Update language attribute
    document.documentElement.lang = lang;

    // Update language buttons
    updateLanguageButtons();

    // Trigger any custom i18n change events
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Update research lists with array translations
function updateResearchLists(lang) {
    const listMappings = [
        { selector: '.research-card:nth-child(1) .research-list', key: 'researchPromptItems' },
        { selector: '.research-card:nth-child(2) .research-list', key: 'researchRAGItems' },
        { selector: '.research-card:nth-child(3) .research-list', key: 'researchFineTuningItems' },
        { selector: '.research-card:nth-child(4) .research-list', key: 'researchSafetyItems' },
    ];

    listMappings.forEach(({ selector, key }) => {
        const list = document.querySelector(selector);
        if (list && translations[lang][key]) {
            const items = list.querySelectorAll('li');
            const values = translations[lang][key];
            items.forEach((item, index) => {
                if (values[index]) {
                    item.textContent = values[index];
                }
            });
        }
    });
}

// Update language button states
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === currentLanguage) {
            btn.classList.add('active');
            btn.style.background = 'var(--gradient)';
            btn.style.color = 'white';
        } else {
            btn.classList.remove('active');
            btn.style.background = '';
            btn.style.color = '';
        }
    });
}

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Get all translations
function getTranslations() {
    return translations;
}

// Change language (public API)
function changeLanguage(lang) {
    setLanguage(lang);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initI18n();
    });
} else {
    initI18n();
}
