<?php
// Mã PHP tự động quét các thư mục bài tập Buổi trong dự án
$buoiFolders = glob(__DIR__ . '/Buoi*', GLOB_ONLYDIR);
natsort($buoiFolders);
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

    <!-- ===== SEO Core ===== -->
    <title>Đặng Quang Doanh - Full-Stack Developer & AI Enthusiast</title>
    <meta name="description" content="Portfolio cá nhân của Đặng Quang Doanh - Full-Stack Developer, AI Enthusiast. Sinh viên CNTT năm 2, chuyên Spring Boot, Node.js, Flutter, Python AI.">
    <meta name="keywords" content="Đặng Quang Doanh, Portfolio, Full-Stack Developer, AI, Spring Boot, Node.js, Flutter, Vietnam Developer">
    <meta name="author" content="Đặng Quang Doanh">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://doanhquang039-code.github.io/">

    <!-- ===== Open Graph (Facebook, LinkedIn) ===== -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://doanhquang039-code.github.io/">
    <meta property="og:title" content="Đặng Quang Doanh - Full-Stack Developer & AI Enthusiast">
    <meta property="og:description" content="Portfolio cá nhân của Đặng Quang Doanh. Sinh viên CNTT năm 2 với đam mê xây dựng các giải pháp sáng tạo bằng Spring Boot, Node.js, Flutter & Python AI.">
    <meta property="og:image" content="https://doanhquang039-code.github.io/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="DevPortfolio - Đặng Quang Doanh">

    <!-- ===== Twitter Card ===== -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Đặng Quang Doanh - Full-Stack Developer">
    <meta name="twitter:description" content="Portfolio cá nhân - Spring Boot, Node.js, Flutter, Python AI. Google Cloud Certified.">
    <meta name="twitter:image" content="https://doanhquang039-code.github.io/og-image.jpg">

    <!-- ===== PWA ===== -->
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#6366f1">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="DevPortfolio">

    <!-- ===== JSON-LD Structured Data ===== -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Đặng Quang Doanh",
      "jobTitle": "Full-Stack Developer & AI Enthusiast",
      "url": "https://doanhquang039-code.github.io/",
      "email": "doanhquang040@gmail.com",
      "address": { "@type": "PostalAddress", "addressCountry": "VN", "addressLocality": "Hà Nội" },
      "sameAs": [
        "https://github.com/doanhquang039-code",
        "https://www.linkedin.com/in/doanh-quang-0a4561407/"
      ],
      "knowsAbout": ["Spring Boot","Node.js","Flutter","Python","AI","Machine Learning","React","Docker","GCP"]
    }
    </script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="enhancements.css">
    <link rel="stylesheet" href="chatbot.css">

    <!-- Firebase SDKs -->
    <script src="https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.9.0/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.9.0/firebase-database-compat.js"></script>

    <!-- tsParticles -->
    <script src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"></script>

    <!-- Leaflet.js (Visitor Map) -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <!-- html2pdf (CV Export) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

    <!-- Chart.js (Radar Chart) -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
</head>
<body>
    <!-- ===== Scroll Progress Bar ===== -->
    <div id="scrollProgress" class="scroll-progress-bar"></div>

    <!-- ===== PWA Install Banner ===== -->
    <div id="pwaInstallBanner" class="pwa-banner">
        <div class="pwa-banner-content">
            <i class="fas fa-mobile-alt"></i>
            <div>
                <strong>Cài đặt Portfolio App</strong>
                <p>Thêm vào màn hình chính của bạn để truy cập nhanh!</p>
            </div>
        </div>
        <div class="pwa-banner-actions">
            <button id="pwaInstallBtn" class="pwa-install-btn"><i class="fas fa-download"></i> Cài</button>
            <button id="pwaDismissBtn" class="pwa-dismiss-btn"><i class="fas fa-times"></i></button>
        </div>
    </div>
    <!-- View Counter, Login & Settings -->
    <div class="top-controls">
        <div id="authContainer" class="auth-container">
            <button id="loginBtn" class="auth-btn">
                <i class="fas fa-sign-in-alt"></i> <span data-i18n="login">Login</span>
            </button>
            <div id="loginDropdown" class="login-dropdown">
                <button id="googleLoginBtn" class="login-provider-btn google-btn">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" width="20" height="20"> Google
                </button>
                <button id="githubLoginBtn" class="login-provider-btn github-btn">
                    <i class="fab fa-github"></i> GitHub
                </button>
                <button id="microsoftLoginBtn" class="login-provider-btn microsoft-btn">
                    <i class="fab fa-windows"></i> Microsoft
                </button>
                <button id="twitterLoginBtn" class="login-provider-btn twitter-btn">
                    <i class="fab fa-x-twitter"></i> Twitter / X
                </button>
                <button id="facebookLoginBtn" class="login-provider-btn facebook-btn">
                    <i class="fab fa-facebook"></i> Facebook
                </button>
            </div>
            <div id="userProfile" class="user-profile" style="display: none;">
                <img id="userAvatar" src="" alt="User" class="user-avatar" title="Logged in">
                <button id="logoutBtn" class="logout-btn" title="Logout"><i class="fas fa-sign-out-alt"></i></button>
            </div>
        </div>
        
        <div class="view-counter">
            <i class="fas fa-eye"></i>
            <span id="viewCount">0</span>
            <span class="view-label" data-i18n="views">Lượt xem</span>
        </div>
        
        <button id="settingsBtn" class="settings-btn" title="Customize Theme">
            <i class="fas fa-cog"></i>
        </button>
    </div>


    <!-- Settings Panel Overlay -->
    <div id="settingsOverlay" class="settings-overlay"></div>

    <!-- Settings Panel -->
    <div id="settingsPanel" class="settings-panel">
        <div class="settings-header">
            <h3 data-i18n="settingsTitle">⚙️ Tùy chỉnh</h3>
            <button id="closeSettings" class="close-settings">&times;</button>
        </div>
        
        <div class="settings-content">
            <!-- Brightness -->
            <div class="setting-item">
                <label for="brightness" data-i18n="settingBrightness">Độ sáng</label>
                <div class="slider-group">
                    <i class="fas fa-sun"></i>
                    <input type="range" id="brightness" min="50" max="150" value="100" class="slider">
                    <span id="brightnessValue">100%</span>
                </div>
            </div>

            <!-- Contrast -->
            <div class="setting-item">
                <label for="contrast" data-i18n="settingContrast">Tương phản</label>
                <div class="slider-group">
                    <i class="fas fa-adjust"></i>
                    <input type="range" id="contrast" min="80" max="150" value="100" class="slider">
                    <span id="contrastValue">100%</span>
                </div>
            </div>

            <!-- Saturation -->
            <div class="setting-item">
                <label for="saturation" data-i18n="settingSaturation">Bão hòa</label>
                <div class="slider-group">
                    <i class="fas fa-palette"></i>
                    <input type="range" id="saturation" min="0" max="150" value="100" class="slider">
                    <span id="saturationValue">100%</span>
                </div>
            </div>

            <!-- Theme Colors -->
            <div class="setting-item">
                <label data-i18n="settingThemeColor">Màu chủ đề</label>
                <div class="color-options">
                    <button class="color-btn" data-color="purple" title="Purple" style="background: linear-gradient(135deg, #6366f1, #8b5cf6);"></button>
                    <button class="color-btn" data-color="blue" title="Blue" style="background: linear-gradient(135deg, #3b82f6, #06b6d4);"></button>
                    <button class="color-btn" data-color="green" title="Green" style="background: linear-gradient(135deg, #10b981, #14b8a6);"></button>
                    <button class="color-btn" data-color="pink" title="Pink" style="background: linear-gradient(135deg, #ec4899, #f43f5e);"></button>
                    <button class="color-btn" data-color="orange" title="Orange" style="background: linear-gradient(135deg, #f97316, #fb923c);"></button>
                </div>
            </div>

            <!-- Background -->
            <div class="setting-item">
                <label data-i18n="settingBackground">Nền</label>
                <div class="bg-options">
                    <button class="bg-btn" data-bg="dark" title="Dark">🌙</button>
                    <button class="bg-btn" data-bg="light" title="Light">☀️</button>
                    <button class="bg-btn" data-bg="gradient" title="Gradient">🌌</button>
                </div>
            </div>

            <!-- Music Toggle -->
            <div class="setting-item">
                <label for="musicToggle" data-i18n="settingMusic">Nhạc nền</label>
                <div class="music-toggle">
                    <input type="checkbox" id="musicToggle">
                    <span>OFF</span>
                    <i class="fas fa-music"></i>
                </div>
            </div>

            <!-- Reset -->
            <button id="resetSettings" class="reset-btn">
                <i class="fas fa-redo"></i> <span data-i18n="settingResetAll">Đặt lại tất cả</span>
            </button>
        </div>
    </div>

    <!-- Language Selector -->
    <div class="language-selector">
        <button class="lang-btn" data-lang="vi" title="Tiếng Việt">
            <span>VN</span>
        </button>
        <button class="lang-btn" data-lang="en" title="English">
            <span>EN</span>
        </button>
        <button class="lang-btn" data-lang="zh" title="中文">
            <span>中</span>
        </button>
    </div>

    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <i class="fas fa-code"></i>
                <span data-i18n="devPortfolio">DevPortfolio</span>
            </div>
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link" data-i18n="home">Trang chủ</a></li>
                <li><a href="#about" class="nav-link" data-i18n="about">Giới thiệu</a></li>
                <li><a href="#tech" class="nav-link" data-i18n="techStack">Công nghệ</a></li>
                <li><a href="#ai-research" class="nav-link" data-i18n="aiResearch">AI Research</a></li>
                <li><a href="#projects" class="nav-link" data-i18n="projects">Dự án</a></li>
                <li><a href="#github-activity" class="nav-link">GitHub</a></li>
                <li><a href="#contact" class="nav-link" data-i18n="contact">Liên hệ</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <!-- tsParticles canvas -->
        <div id="tsparticles" class="particles-canvas"></div>
        <div class="hero-particles"></div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <span class="greeting" data-i18n="hello">👋 Xin chào, tôi là</span>
                    <h1 class="hero-title">
                        <span class="gradient-text typing-text">Đặng Quang Doanh</span>
                    </h1>
                    <h2 class="hero-subtitle">
                        <span class="role-animator"></span><span class="cursor">|</span>
                    </h2>
                    <p class="hero-description" data-i18n="heroDescription">
                        🚀 Đam mê xây dựng những giải pháp sáng tạo | 💻 Spring Boot • Node.js • Flutter • Python AI
                    </p>
                    
                    <!-- Stats Cards -->
                    <div class="auth-gated">
                        <div class="gated-overlay">
                            <i class="fas fa-lock"></i>
                            <span data-i18n="loginToView">Vui lòng đăng nhập để xem nội dung</span>
                        </div>
                        <div class="stats-cards">
                            <div class="stat-card">
                            <div class="stat-icon">💼</div>
                            <div class="stat-content">
                                <span class="stat-number" data-count="9">0</span>
                                <span class="stat-label" data-i18n="statProjects">Dự án</span>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">🏆</div>
                            <div class="stat-content">
                                <span class="stat-number" data-count="5">0</span>
                                <span class="stat-label" data-i18n="statAchievements">Thành tựu</span>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">⭐</div>
                            <div class="stat-content">
                                <span class="stat-number" data-count="2">0</span>
                                <span class="stat-label" data-i18n="statYearsCoding">Năm lập trình</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="hero-info">
                        <div class="info-item">
                            <i class="fas fa-birthday-cake"></i>
                            <div>
                                <strong data-i18n="dateOfBirth">Ngày sinh:</strong>
                                <span>29/12/2006</span>
                            </div>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <strong data-i18n="birthPlace">Nơi sinh:</strong>
                                <span>Thái Bình, Việt Nam</span>
                            </div>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-graduation-cap"></i>
                            <div>
                                <strong data-i18n="university">Trường:</strong>
                                <span data-i18n="computerScience">Sinh viên CNTT - Năm 2</span>
                            </div>
                        </div>
                    </div>
                    <div style="height: 30px;"></div>
                    <div class="hero-buttons">
                        <a href="#projects" class="btn btn-primary">
                            <i class="fas fa-code"></i> <span data-i18n="viewProjects">Xem dự án</span>
                        </a>
                        <a href="#contact" class="btn btn-secondary">
                            <i class="fas fa-envelope"></i> <span data-i18n="contactMe">Liên hệ</span>
                        </a>
                        <button id="downloadCvBtn" class="btn btn-cv">
                            <i class="fas fa-file-pdf"></i> <span>Tải CV (PDF)</span>
                        </button>
                    </div>
                    <div class="social-links">
                        <a href="https://github.com/doanhquang039-code" target="_blank" class="social-icon" title="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/doanh-quang-0a4561407/" target="_blank" class="social-icon" title="LinkedIn">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:doanhquang039@gmail.com" class="social-icon" title="Email">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <a href="https://zalo.me/0373542892" target="_blank" class="social-icon" title="Zalo">
                            <i class="fas fa-phone"></i>
                        </a>
                        <a href="javascript:void(0);" id="chatbotTrigger" class="social-icon auth-gated-btn" title="AI Chatbot">
                            <i class="fas fa-robot"></i>
                        </a>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="profile-card">
                        <div class="profile-img-wrapper">
                            <img src="1786092749302_423698007583510178_5649508933815108388_bad0bd430a7306303b6d712279a0d8ef.jpg" alt="Đặng Quang Doanh" class="profile-img">
                            <div class="profile-ring"></div>
                            <button id="chatbotProfileTrigger" class="profile-chatbot-btn auth-gated-btn" title="💬 Chat với tôi">
                                <i class="fas fa-robot"></i>
                                <span class="chat-pulse"></span>
                            </button>
                        </div>
                        <div class="status-badge">
                            <span class="status-dot"></span>
                            <span data-i18n="availableForWork">Sẵn sàng làm việc</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-indicator">
            <div class="mouse"></div>
        </div>
    </section>

    <!-- About Me Section -->
    <section id="about" class="about-me">
        <div class="container">
            <div class="section-header">
                <span class="section-tag" data-i18n="aboutTag">👨‍💻 Giới thiệu</span>
                <h2 class="section-title" data-i18n="aboutTitle">Tìm Hiểu Về Tôi</h2>
                <p class="section-description" data-i18n="aboutDesc">Hành trình từ người đam mê công nghệ đến Developer</p>
            </div>

            <div class="about-grid">
                <div class="about-story">
                    <h3 data-i18n="myStory">📖 Câu Chuyện Của Tôi</h3>
                    <p data-i18n-html="aboutStory1">Xin chào! Tôi là <strong>Đặng Quang Doanh</strong>, sinh viên năm 2 ngành Công nghệ Thông tin, đến từ Thái Bình. Từ nhỏ, tôi đã say mê với công nghệ và cách nó thay đổi cuộc sống con người.</p>
                    
                    <p data-i18n="aboutStory2">Hành trình lập trình của tôi bắt đầu từ năm 2022, khi lần đầu tiên viết dòng code "Hello World" bằng Java. Từ đó, tôi không ngừng học hỏi và phát triển, từ backend với Spring Boot, Node.js, đến frontend với React, và cả mobile development với Flutter.</p>
                    
                    <p data-i18n="aboutStory3">Năm 2024 là năm đặc biệt với nhiều thành tựu: Đạt học bổng toàn phần, giành giải thưởng GameKren 16M VND, và đạt chứng chỉ Google Cloud Certified. Những thành công này không chỉ là động lực mà còn là minh chứng cho sự cố gắng không ngừng nghỉ.</p>
                    
                    <h4 data-i18n="philosophy">🎯 Triết lý</h4>
                    <blockquote>
                        <span data-i18n="philosophyQuote">"Code không chỉ là giải quyết vấn đề, mà là tạo ra những giải pháp giúp cuộc sống tốt đẹp hơn."</span>
                    </blockquote>
                </div>

                <div class="about-details">
                    <h3 data-i18n="quickFacts">📋 Thông Tin Nhanh</h3>
                    <div class="fact-list">
                        <div class="fact-item">
                            <span class="fact-icon">🎂</span>
                            <div>
                                <strong data-i18n="factBirthday">Ngày sinh:</strong>
                                <span data-i18n="factBirthdayVal">29/12/2006 (19 tuổi)</span>
                            </div>
                        </div>
                        <div class="fact-item">
                            <span class="fact-icon">🏠</span>
                            <div>
                                <strong data-i18n="factHometown">Quê quán:</strong>
                                <span data-i18n="factHometownVal">Thái Bình, Việt Nam</span>
                            </div>
                        </div>
                        <div class="fact-item">
                            <span class="fact-icon">🎓</span>
                            <div>
                                <strong data-i18n="factEducation">Trình độ:</strong>
                                <span data-i18n="factEducationVal">Sinh viên CNTT - Năm 3</span>
                            </div>
                        </div>
                        <div class="fact-item">
                            <span class="fact-icon">💼</span>
                            <div>
                                <strong data-i18n="factRole">Vai trò:</strong>
                                <span data-i18n="factRoleVal">Full-Stack Developer-Cloud Engineering-System Design</span>
                            </div>
                        </div>
                        <div class="fact-item">
                            <span class="fact-icon">🌟</span>
                            <div>
                                <strong data-i18n="factExpertise">Chuyên môn:</strong>
                                <span data-i18n="factExpertiseVal">Backend, AI, Cloud</span>
                            </div>
                        </div>
                        <div class="fact-item">
                            <span class="fact-icon">🗣️</span>
                            <div>
                                <strong data-i18n="factLanguages">Ngôn ngữ:</strong>
                                <span data-i18n="factLanguagesVal">Tiếng Việt, English, 中文</span>
                            </div>
                        </div>
                    </div>

                    <h3 data-i18n="strengths">💪 Điểm Mạnh</h3>
                    <div class="strengths-list">
                        <div class="strength-tag" data-i18n="strengthProblem">Giải quyết vấn đề</div>
                        <div class="strength-tag" data-i18n="strengthLearner">Học nhanh</div>
                        <div class="strength-tag" data-i18n="strengthTeam">Làm việc nhóm</div>
                        <div class="strength-tag" data-i18n="strengthMotivated">Tự thúc đẩy</div>
                        <div class="strength-tag" data-i18n="strengthDetail">Chi tiết</div>
                        <div class="strength-tag" data-i18n="strengthCreative">Tư duy sáng tạo</div>
                    </div>

                    <h3 data-i18n="currentFocus">🎯 Đang Tập Trung</h3>
                    <div class="focus-list">
                        <div class="focus-item">
                            <div class="focus-bar">
                                <div class="focus-progress" style="width: 85%"></div>
                            </div>
                            <span>Spring Boot Microservices</span>
                        </div>
                        <div class="focus-item">
                            <div class="focus-bar">
                                <div class="focus-progress" style="width: 75%"></div>
                            </div>
                            <span>AI & LLM Integration</span>
                        </div>
                        <div class="focus-item">
                            <div class="focus-bar">
                                <div class="focus-progress" style="width: 70%"></div>
                            </div>
                            <span>Google Cloud Platform</span>
                        </div>
                        <div class="focus-item">
                            <div class="focus-bar">
                                <div class="focus-progress" style="width: 80%"></div>
                            </div>
                            <span>Flutter Development</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Timeline -->
            <div class="life-timeline auth-gated">
                <div class="gated-overlay">
                    <i class="fas fa-lock"></i>
                    <span data-i18n="loginToView">Vui lòng đăng nhập để xem nội dung</span>
                </div>
                <h3 class="timeline-title" data-i18n="myJourney">🗓️ Hành Trình Của Tôi</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-date">2006</div>
                        <div class="timeline-content">
                            <h4 data-i18n="timeline2006Title">🎂 Chào đời tại Thái Bình</h4>
                            <p data-i18n="timeline2006Desc">Chào đời tại Thái Bình, Việt Nam</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">2022</div>
                        <div class="timeline-content">
                            <h4 data-i18n="timeline2022Title">💻 Bắt đầu hành trình lập trình</h4>
                            <p data-i18n="timeline2022Desc">Bắt đầu học lập trình với Java, HTML, CSS</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">2023</div>
                        <div class="timeline-content">
                            <h4 data-i18n="timeline2023Title">🎓 Bắt đầu đại học</h4>
                            <p data-i18n="timeline2023Desc">Nhập học ngành Công nghệ Thông tin</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">2024</div>
                        <div class="timeline-content">
                            <h4 data-i18n="timeline2024Title">🏆 Những thành tựu lớn</h4>
                            <p data-i18n="timeline2024Desc">Học bổng toàn phần, GameKren Prize 16M, Google Cloud Certified</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">2025</div>
                        <div class="timeline-content">
                            <h4 data-i18n="timeline2025Title">🚀 Nâng cao kỹ năng</h4>
                            <p data-i18n="timeline2025Desc">Chuyên sâu AI, Microservices, Cloud Architecture</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">2026</div>
                        <div class="timeline-content">
                            <h4 data-i18n="timeline2026Title">🎯 Hiện tại</h4>
                            <p data-i18n="timeline2026Desc">Xây dựng hệ thống scalable, tích hợp AI, đóng góp mã nguồn mở</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech" class="tech-stack">
        <div class="container">
            <div class="section-header">
                <span class="section-tag" data-i18n="techStackTag">🛠️ Công nghệ</span>
                <h2 class="section-title" data-i18n="techStackTitle">Công Nghệ</h2>
                <p class="section-description" data-i18n="techStackDesc">Các công nghệ và công cụ mà tôi thành thạo và sử dụng hàng ngày</p>
            </div>

            <!-- Skills Progress Bars -->
            <div class="skills-overview">
                <h3 data-i18n="techProficiency">💪 Trình Độ Chuyên Môn</h3>
                <div class="skills-grid">
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name" data-i18n="skillBackend">Phát triển Backend</span>
                            <span class="skill-percent">90%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-progress="90"></div>
                        </div>
                        <div class="skill-tags">
                            <span>Spring Boot</span>
                            <span>Node.js</span>
                            <span>Go</span>
                        </div>
                    </div>

                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name" data-i18n="skillFrontend">Phát triển Frontend</span>
                            <span class="skill-percent">80%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-progress="80"></div>
                        </div>
                        <div class="skill-tags">
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>CSS3</span>
                        </div>
                    </div>

                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name" data-i18n="skillMobile">Phát triển Mobile</span>
                            <span class="skill-percent">75%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-progress="75"></div>
                        </div>
                        <div class="skill-tags">
                            <span>Flutter</span>
                            <span>Android</span>
                        </div>
                    </div>

                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name" data-i18n="skillAI">AI & Machine Learning</span>
                            <span class="skill-percent">70%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-progress="70"></div>
                        </div>
                        <div class="skill-tags">
                            <span>Python</span>
                            <span>OpenAI</span>
                            <span>LangChain</span>
                        </div>
                    </div>

                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name" data-i18n="skillDB">Cơ sở dữ liệu & Lưu trữ</span>
                            <span class="skill-percent">85%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-progress="85"></div>
                        </div>
                        <div class="skill-tags">
                            <span>MySQL</span>
                            <span>MongoDB</span>
                            <span>Redis</span>
                        </div>
                    </div>

                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name" data-i18n="skillDevOps">DevOps & Cloud</span>
                            <span class="skill-percent">75%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-progress="75"></div>
                        </div>
                        <div class="skill-tags">
                            <span>Docker</span>
                            <span>GCP</span>
                            <span>CI/CD</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="tech-category">
                <h3 class="category-title">Backend</h3>
                <div class="tech-grid">
                    <div class="tech-card"><i class="fab fa-java"></i><span>Java</span></div>
                    <div class="tech-card"><i class="fas fa-leaf"></i><span>Spring Boot</span></div>
                    <div class="tech-card"><i class="fab fa-node"></i><span>Node.js</span></div>
                    <div class="tech-card"><i class="fas fa-server"></i><span>Express.js</span></div>
                    <div class="tech-card"><i class="fab fa-golang"></i><span>Go</span></div>
                    <div class="tech-card"><i class="fas fa-hashtag"></i><span>C#</span></div>
                    <div class="tech-card"><i class="fas fa-code"></i><span>.NET</span></div>
                    <div class="tech-card"><i class="fab fa-android"></i><span>Android</span></div>
                    <!-- Duplicate for infinite scroll -->
                    <div class="tech-card"><i class="fab fa-java"></i><span>Java</span></div>
                    <div class="tech-card"><i class="fas fa-leaf"></i><span>Spring Boot</span></div>
                    <div class="tech-card"><i class="fab fa-node"></i><span>Node.js</span></div>
                    <div class="tech-card"><i class="fas fa-server"></i><span>Express.js</span></div>
                    <div class="tech-card"><i class="fab fa-golang"></i><span>Go</span></div>
                    <div class="tech-card"><i class="fas fa-hashtag"></i><span>C#</span></div>
                    <div class="tech-card"><i class="fas fa-code"></i><span>.NET</span></div>
                    <div class="tech-card"><i class="fab fa-android"></i><span>Android</span></div>
                </div>
            </div>

            <div class="tech-category">
                <h3 class="category-title">AI & Python</h3>
                <div class="tech-grid">
                    <div class="tech-card"><i class="fab fa-python"></i><span>Python</span></div>
                    <div class="tech-card"><i class="fas fa-robot"></i><span>OpenAI API</span></div>
                    <div class="tech-card"><i class="fas fa-brain"></i><span>Gemini API</span></div>
                    <div class="tech-card"><i class="fas fa-link"></i><span>LangChain</span></div>
                    <div class="tech-card"><i class="fas fa-bolt"></i><span>FastAPI</span></div>
                    <!-- Duplicate for infinite scroll -->
                    <div class="tech-card"><i class="fab fa-python"></i><span>Python</span></div>
                    <div class="tech-card"><i class="fas fa-robot"></i><span>OpenAI API</span></div>
                    <div class="tech-card"><i class="fas fa-brain"></i><span>Gemini API</span></div>
                    <div class="tech-card"><i class="fas fa-link"></i><span>LangChain</span></div>
                    <div class="tech-card"><i class="fas fa-bolt"></i><span>FastAPI</span></div>
                </div>
            </div>

            <div class="tech-category">
                <h3 class="category-title">Frontend & Mobile</h3>
                <div class="tech-grid">
                    <div class="tech-card"><i class="fab fa-js"></i><span>JavaScript</span></div>
                    <div class="tech-card"><i class="fab fa-react"></i><span>TypeScript</span></div>
                    <div class="tech-card"><i class="fab fa-html5"></i><span>HTML5</span></div>
                    <div class="tech-card"><i class="fab fa-css3"></i><span>CSS3</span></div>
                    <div class="tech-card"><i class="fas fa-mobile-alt"></i><span>Flutter</span></div>
                    <!-- Duplicate for infinite scroll -->
                    <div class="tech-card"><i class="fab fa-js"></i><span>JavaScript</span></div>
                    <div class="tech-card"><i class="fab fa-react"></i><span>TypeScript</span></div>
                    <div class="tech-card"><i class="fab fa-html5"></i><span>HTML5</span></div>
                    <div class="tech-card"><i class="fab fa-css3"></i><span>CSS3</span></div>
                    <div class="tech-card"><i class="fas fa-mobile-alt"></i><span>Flutter</span></div>
                </div>
            </div>

            <div class="tech-category">
                <h3 class="category-title">Database</h3>
                <div class="tech-grid">
                    <div class="tech-card"><i class="fas fa-database"></i><span>MySQL</span></div>
                    <div class="tech-card"><i class="fas fa-leaf"></i><span>MongoDB</span></div>
                    <div class="tech-card"><i class="fas fa-server"></i><span>SQL Server</span></div>
                    <!-- Duplicate for infinite scroll -->
                    <div class="tech-card"><i class="fas fa-database"></i><span>MySQL</span></div>
                    <div class="tech-card"><i class="fas fa-leaf"></i><span>MongoDB</span></div>
                    <div class="tech-card"><i class="fas fa-server"></i><span>SQL Server</span></div>
                </div>
            </div>

            <div class="tech-category">
                <h3 class="category-title">Tools & DevOps</h3>
                <div class="tech-grid">
                    <div class="tech-card"><i class="fab fa-git-alt"></i><span>Git</span></div>
                    <div class="tech-card"><i class="fab fa-github"></i><span>GitHub</span></div>
                    <div class="tech-card"><i class="fas fa-code"></i><span>VS Code</span></div>
                    <div class="tech-card"><i class="fab fa-docker"></i><span>Docker</span></div>
                    <div class="tech-card"><i class="fab fa-linux"></i><span>Linux</span></div>
                    <div class="tech-card"><i class="fas fa-vial"></i><span>Postman</span></div>
                    <div class="tech-card"><i class="fas fa-cloud"></i><span>Cloudinary</span></div>
                    <div class="tech-card"><i class="fas fa-brain"></i><span>IntelliJ</span></div>
                    <!-- Duplicate for infinite scroll -->
                    <div class="tech-card"><i class="fab fa-git-alt"></i><span>Git</span></div>
                    <div class="tech-card"><i class="fab fa-github"></i><span>GitHub</span></div>
                    <div class="tech-card"><i class="fas fa-code"></i><span>VS Code</span></div>
                    <div class="tech-card"><i class="fab fa-docker"></i><span>Docker</span></div>
                    <div class="tech-card"><i class="fab fa-linux"></i><span>Linux</span></div>
                    <div class="tech-card"><i class="fas fa-vial"></i><span>Postman</span></div>
                    <div class="tech-card"><i class="fas fa-cloud"></i><span>Cloudinary</span></div>
                    <div class="tech-card"><i class="fas fa-brain"></i><span>IntelliJ</span></div>
                </div>
            </div>
        </div>
    </section>

    <!-- AI Research & Innovations Section -->
    <section id="ai-research" class="ai-research">
        <div class="container">
            <div class="section-header">
                <span class="section-tag" data-i18n="aiResearchTag">🤖 Nghiên cứu AI</span>
                <h2 class="section-title" data-i18n="aiResearchTitle">Nghiên Cứu & Ứng Dụng AI</h2>
                <p class="section-description" data-i18n="aiResearchDesc">Khám phá các dự án AI, nghiên cứu về LLMs, và ứng dụng thực tế của Machine Learning</p>
            </div>

            <!-- AI Focus Areas -->
            <div class="ai-focus-grid">
                <div class="ai-focus-card">
                    <div class="ai-focus-icon">🧠</div>
                    <h3 data-i18n="aiFocusLLM">Large Language Models</h3>
                    <p data-i18n="aiFocusLLMDesc">Nghiên cứu và ứng dụng GPT-4, Claude, Gemini trong các hệ thống thực tế</p>
                    <div class="ai-tech-tags">
                        <span>OpenAI API</span>
                        <span>LangChain</span>
                        <span>Prompt Engineering</span>
                    </div>
                </div>

                <div class="ai-focus-card">
                    <div class="ai-focus-icon">💬</div>
                    <h3 data-i18n="aiFocusChat">Conversational AI</h3>
                    <p data-i18n="aiFocusChatDesc">Xây dựng chatbot thông minh với context awareness và multi-turn conversation</p>
                    <div class="ai-tech-tags">
                        <span>RAG</span>
                        <span>Vector DB</span>
                        <span>Embedding</span>
                    </div>
                </div>

                <div class="ai-focus-card">
                    <div class="ai-focus-icon">🔍</div>
                    <h3 data-i18n="aiFocusAgents">AI Agents & Automation</h3>
                    <p data-i18n="aiFocusAgentsDesc">Phát triển AI agents tự động hóa workflow và decision making</p>
                    <div class="ai-tech-tags">
                        <span>AutoGPT</span>
                        <span>Function Calling</span>
                        <span>Tool Use</span>
                    </div>
                </div>

                <div class="ai-focus-card">
                    <div class="ai-focus-icon">📊</div>
                    <h3 data-i18n="aiFocusData">Data Analysis & ML</h3>
                    <p data-i18n="aiFocusDataDesc">Phân tích dữ liệu và xây dựng mô hình Machine Learning cho business insights</p>
                    <div class="ai-tech-tags">
                        <span>Python</span>
                        <span>Pandas</span>
                        <span>Scikit-learn</span>
                    </div>
                </div>
            </div>

            <!-- AI Projects Showcase -->
            <div class="ai-projects-showcase">
                <h3 class="showcase-title" data-i18n="aiProjectsHighlights">🚀 Dự Án AI Nổi Bật</h3>
                
                <div class="ai-project-cards">
                    <div class="ai-project-card featured">
                        <div class="project-badge" data-i18n="aiFeatured">Nổi bật</div>
                        <div class="ai-project-header">
                            <div class="ai-project-icon">💰</div>
                            <div>
                                <h4 data-i18n="aiExpenseTitle">Intelligent Expense Tracker</h4>
                                <p class="project-subtitle" data-i18n="aiExpenseSubtitle">Trợ lý tài chính AI</p>
                            </div>
                        </div>
                        <div class="ai-project-content">
                            <p data-i18n-html="aiExpenseProblem"><strong>Vấn đề:</strong> Quản lý chi tiêu thủ công tốn thời gian và dễ sai sót</p>
                            <p data-i18n-html="aiExpenseSolution"><strong>Giải pháp:</strong> Tích hợp AI để tự động phân loại giao dịch, dự đoán chi tiêu, và đưa ra insights tài chính thông minh</p>
                            
                            <div class="ai-features">
                                <div class="ai-feature-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-i18n="aiExpenseF1">Tự động phân loại với NLP</span>
                                </div>
                                <div class="ai-feature-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-i18n="aiExpenseF2">Dự đoán chi tiêu với Time Series</span>
                                </div>
                                <div class="ai-feature-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-i18n="aiExpenseF3">Lời khuyên tài chính cá nhân từ GPT-4</span>
                                </div>
                                <div class="ai-feature-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-i18n="aiExpenseF4">Phát hiện bất thường cho giao dịch lạ</span>
                                </div>
                            </div>

                            <div class="tech-stack-mini">
                                <span class="tech-mini">Python</span>
                                <span class="tech-mini">OpenAI API</span>
                                <span class="tech-mini">FastAPI</span>
                                <span class="tech-mini">Flutter</span>
                            </div>

                            <div class="ai-project-metrics">
                                <div class="metric">
                                    <span class="metric-value">95%</span>
                                    <span class="metric-label" data-i18n="aiMetricAccuracy">Độ chính xác</span>
                                </div>
                                <div class="metric">
                                    <span class="metric-value">40%</span>
                                    <span class="metric-label" data-i18n="aiMetricTimeSaved">Tiết kiệm thời gian</span>
                                </div>
                                <div class="metric">
                                    <span class="metric-value">1.2s</span>
                                    <span class="metric-label" data-i18n="aiMetricResponse">Thời gian phản hồi</span>
                                </div>
                            </div>
                        </div>
                        <div class="ai-project-footer">
                            <a href="https://github.com/doanhquang039-code" target="_blank" class="project-link-btn">
                                <i class="fab fa-github"></i> <span data-i18n="viewOnGithub">Xem trên GitHub</span>
                            </a>
                        </div>
                    </div>

                    <div class="ai-project-card">
                        <div class="ai-project-header">
                            <div class="ai-project-icon">🤖</div>
                            <div>
                                <h4 data-i18n="aiHRTitle">HR Management Chatbot</h4>
                                <p class="project-subtitle" data-i18n="aiHRSubtitle">AI cho tác vụ nhân sự</p>
                            </div>
                        </div>
                        <div class="ai-project-content">
                            <p data-i18n="aiHRDesc">Chatbot AI hỗ trợ nhân viên với các câu hỏi về HR policies, leave requests, và company information</p>
                            
                            <div class="ai-features">
                                <div class="ai-feature-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-i18n="aiHRF1">RAG với company knowledge base</span>
                                </div>
                                <div class="ai-feature-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-i18n="aiHRF2">Multi-turn conversation context</span>
                                </div>
                                <div class="ai-feature-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-i18n="aiHRF3">Intent classification & slot filling</span>
                                </div>
                            </div>

                            <div class="tech-stack-mini">
                                <span class="tech-mini">LangChain</span>
                                <span class="tech-mini">ChromaDB</span>
                                <span class="tech-mini">Spring Boot</span>
                            </div>
                        </div>
                    </div>

                    <div class="ai-project-card">
                        <div class="ai-project-header">
                            <div class="ai-project-icon">💻</div>
                            <div>
                                <h4 data-i18n="aiCodeTitle">AI Code Review Assistant</h4>
                                <p class="project-subtitle" data-i18n="aiCodeSubtitle">Phân tích code tự động</p>
                            </div>
                        </div>
                        <div class="ai-project-content">
                            <p data-i18n="aiCodeDesc">AI assistant tự động review code, detect bugs, suggest improvements và generate unit tests</p>
                            
                            <div class="ai-features">
                                <div class="ai-feature-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-i18n="aiCodeF1">Phát hiện code smell</span>
                                </div>
                                <div class="ai-feature-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-i18n="aiCodeF2">Quét lỗ hổng bảo mật</span>
                                </div>
                                <div class="ai-feature-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-i18n="aiCodeF3">Tự động tạo unit tests</span>
                                </div>
                            </div>

                            <div class="tech-stack-mini">
                                <span class="tech-mini">GPT-4</span>
                                <span class="tech-mini">GitHub API</span>
                                <span class="tech-mini">Node.js</span>
                            </div>
                        </div>
                    </div>

                    <div class="ai-project-card">
                        <div class="ai-project-header">
                            <div class="ai-project-icon">🐘</div>
                            <div>
                                <h4>Learn Prj Php with Hnmu</h4>
                                <p class="project-subtitle">Bài tập thực hành PHP</p>
                            </div>
                        </div>
                        <div class="ai-project-content">
                            <p>Tổng hợp các bài tập thực hành PHP qua từng buổi học tại trường HNMU.</p>
                            
                            <div class="ai-features" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                                <?php if (!empty($buoiFolders)): ?>
                                    <?php foreach ($buoiFolders as $folderPath): 
                                        $folderName = basename($folderPath);
                                        $label = str_replace('Buoi', 'Buổi ', $folderName);
                                    ?>
                                        <a href="<?php echo htmlspecialchars($folderName); ?>/" class="btn btn-sm btn-secondary" style="text-align:center; padding: 5px;">
                                            <?php echo htmlspecialchars($label); ?>
                                        </a>
                                    <?php endforeach; ?>
                                <?php else: ?>
                                    <p>Chưa có thư mục bài tập nào.</p>
                                <?php endif; ?>
                            </div>

                            <div class="tech-stack-mini" style="margin-top: 15px;">
                                <span class="tech-mini">PHP</span>
                                <span class="tech-mini">HTML/CSS</span>
                                <span class="tech-mini">HNMU</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Research Topics -->
            <div class="research-topics">
                <h3 class="showcase-title" data-i18n="researchInterests">📚 Hướng Nghiên Cứu & Học Tập</h3>
                
                <div class="research-grid">
                    <div class="research-card">
                        <div class="research-header">
                            <span class="research-icon">🔬</span>
                            <h4 data-i18n="researchPrompt">Prompt Engineering</h4>
                        </div>
                        <ul class="research-list">
                            <li>Few-shot & Zero-shot learning</li>
                            <li>Chain-of-Thought prompting</li>
                            <li>ReAct & Self-consistency</li>
                            <li>Kỹ thuật tối ưu prompt</li>
                        </ul>
                        <div class="research-status" data-i18n="activelyResearching">Đang nghiên cứu</div>
                    </div>

                    <div class="research-card">
                        <div class="research-header">
                            <span class="research-icon">🎯</span>
                            <h4 data-i18n="researchRAG">Retrieval Augmented Generation</h4>
                        </div>
                        <ul class="research-list">
                            <li>Vector embeddings & similarity search</li>
                            <li>Chiến lược tìm kiếm hybrid</li>
                            <li>Tối ưu hóa context window</li>
                            <li>Thuật toán re-ranking</li>
                        </ul>
                        <div class="research-status" data-i18n="activelyResearching">Đang nghiên cứu</div>
                    </div>

                    <div class="research-card">
                        <div class="research-header">
                            <span class="research-icon">⚡</span>
                            <h4 data-i18n="researchFineTuning">LLM Fine-tuning</h4>
                        </div>
                        <ul class="research-list">
                            <li>Kỹ thuật LoRA & QLoRA</li>
                            <li>Domain-specific adaptation</li>
                            <li>Instruction tuning</li>
                            <li>Đánh giá chất lượng mô hình</li>
                        </ul>
                        <div class="research-status" data-i18n="learning">Đang học</div>
                    </div>

                    <div class="research-card">
                        <div class="research-header">
                            <span class="research-icon">🛡️</span>
                            <h4 data-i18n="researchSafety">AI Safety & Ethics</h4>
                        </div>
                        <ul class="research-list">
                            <li>Phòng chống prompt injection</li>
                            <li>Phát hiện & giảm thiểu bias</li>
                            <li>Kiểm duyệt nội dung</li>
                            <li>Phát triển AI có trách nhiệm</li>
                        </ul>
                        <div class="research-status" data-i18n="learning">Đang học</div>
                    </div>
                </div>
            </div>

            <!-- AI Learning Path -->
            <div class="ai-learning-path">
                <h3 class="showcase-title" data-i18n="aiLearningJourney">🎓 Hành Trình Học AI</h3>
                
                <div class="learning-timeline">
                    <div class="learning-item completed">
                        <div class="learning-marker"></div>
                        <div class="learning-content">
                            <h4 data-i18n="aiLearn1Title">Nền tảng AI & ML</h4>
                            <p data-i18n="aiLearn1Desc">Học Python, NumPy, Pandas, cơ bản về Machine Learning algorithms</p>
                            <span class="learning-date">2023</span>
                        </div>
                    </div>

                    <div class="learning-item completed">
                        <div class="learning-marker"></div>
                        <div class="learning-content">
                            <h4 data-i18n="aiLearn2Title">Deep Learning & Neural Networks</h4>
                            <p data-i18n="aiLearn2Desc">Nghiên cứu về neural networks, backpropagation, và optimization techniques</p>
                            <span class="learning-date">2024 Q1</span>
                        </div>
                    </div>

                    <div class="learning-item completed">
                        <div class="learning-marker"></div>
                        <div class="learning-content">
                            <h4 data-i18n="aiLearn3Title">LLMs & Tích hợp API</h4>
                            <p data-i18n="aiLearn3Desc">Tích hợp OpenAI, Gemini, Claude APIs vào ứng dụng thực tế</p>
                            <span class="learning-date">2024 Q2</span>
                        </div>
                    </div>

                    <div class="learning-item in-progress">
                        <div class="learning-marker"></div>
                        <div class="learning-content">
                            <h4 data-i18n="aiLearn4Title">Advanced RAG & Vector Databases</h4>
                            <p data-i18n="aiLearn4Desc">Nghiên cứu sâu về RAG patterns, embeddings, và vector search optimization</p>
                            <span class="learning-date" data-i18n="aiLearnCurrent">2026 (Hiện tại)</span>
                        </div>
                    </div>

                    <div class="learning-item planned">
                        <div class="learning-marker"></div>
                        <div class="learning-content">
                            <h4 data-i18n="aiLearn5Title">LLM Fine-tuning & Deployment</h4>
                            <p data-i18n="aiLearn5Desc">Kế hoạch học fine-tuning models và deploying LLMs at scale</p>
                            <span class="learning-date" data-i18n="aiLearnPlanned">2026 Q4 (Kế hoạch)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <div class="section-header">
                <span class="section-tag" data-i18n="projectsTag">🚀 Dự án</span>
                <h2 class="section-title" data-i18n="myProjects">Dự Án Của Tôi</h2>
                <p class="section-description" data-i18n="projectsDesc">Các dự án và công việc mà tôi đã thực hiện</p>
                <div style="height: 2rem;"></div>

                <!-- Project Filter Buttons -->
                <div class="project-filters">
                    <button class="filter-btn active" data-filter="all">🌐 Tất cả</button>
                    <button class="filter-btn" data-filter="ai">🤖 AI / ML</button>
                    <button class="filter-btn" data-filter="backend">⚙️ Backend</button>
                    <button class="filter-btn" data-filter="frontend">🎨 Frontend</button>
                    <button class="filter-btn" data-filter="mobile">📱 Mobile</button>
                    <button class="filter-btn" data-filter="devops">☁️ DevOps</button>
                </div>
            </div>

            <!-- Mobile Project Cards -->
            <div class="projects-mobile-cards">
                <div class="project-mobile-card" data-tags="mobile frontend backend">
                    <div class="project-mobile-header">
                        <i class="fas fa-mobile-alt"></i>
                        <span>App Flutter</span>
                    </div>
                    <p class="project-mobile-desc" data-i18n="projAppFlutter">Ứng dụng theo dõi chi tiêu với NestJS backend & Flutter mobile</p>
                    <div class="tech-badges">
                        <span class="badge badge-typescript">TypeScript</span>
                        <span class="badge badge-flutter">Flutter</span>
                        <span class="badge badge-sqlserver">SQL Server</span>
                    </div>
                    <a href="https://github.com/doanhquang039-code" target="_blank" class="project-mobile-link"><i class="fas fa-star"></i> View</a>
                </div>
                <div class="project-mobile-card" data-tags="ai backend">
                    <div class="project-mobile-header">
                        <i class="fas fa-brain"></i>
                        <span>Learn AI</span>
                    </div>
                    <p class="project-mobile-desc" data-i18n="projLearnAI">Dự án học AI sử dụng Python với OpenAI & Gemini APIs, tích hợp LangChain</p>
                    <div class="tech-badges">
                        <span class="badge badge-python">Python</span>
                        <span class="badge badge-openai">OpenAI</span>
                        <span class="badge badge-gemini">Gemini</span>
                    </div>
                    <a href="https://github.com/doanhquang039-code" target="_blank" class="project-mobile-link"><i class="fas fa-star"></i> View</a>
                </div>
                <div class="project-mobile-card">
                    <div class="project-mobile-header">
                        <i class="fas fa-users"></i>
                        <span>HR Management System</span>
                    </div>
                    <p class="project-mobile-desc" data-i18n="projHR">Hệ thống quản lý nhân sự với Spring Security & Spring Cloud</p>
                    <div class="tech-badges">
                        <span class="badge badge-spring">Spring Boot</span>
                        <span class="badge badge-mysql">MySQL</span>
                        <span class="badge badge-docker">Docker</span>
                    </div>
                    <a href="https://github.com/doanhquang039-code" target="_blank" class="project-mobile-link"><i class="fas fa-star"></i> View</a>
                </div>
                <div class="project-mobile-card">
                    <div class="project-mobile-header">
                        <i class="fas fa-book"></i>
                        <span>Library System</span>
                    </div>
                    <p class="project-mobile-desc" data-i18n="projLibrary">Ứng dụng desktop quản lý mượn & trả sách</p>
                    <div class="tech-badges">
                        <span class="badge badge-java">Java</span>
                        <span class="badge badge-sqlserver">SQL Server</span>
                    </div>
                    <a href="https://github.com/doanhquang039-code" target="_blank" class="project-mobile-link"><i class="fas fa-star"></i> View</a>
                </div>
                <div class="project-mobile-card">
                    <div class="project-mobile-header">
                        <i class="fas fa-box"></i>
                        <span>Linkky</span>
                    </div>
                    <p class="project-mobile-desc" data-i18n="projLinkky">Ứng dụng desktop quản lý sách đóng gói container</p>
                    <div class="tech-badges">
                        <span class="badge badge-python">Python</span>
                        <span class="badge badge-docker">Docker</span>
                        <span class="badge badge-postgres">PostgreSQL</span>
                    </div>
                    <a href="https://github.com/doanhquang039-code" target="_blank" class="project-mobile-link"><i class="fas fa-star"></i> View</a>
                </div>
                <div class="project-mobile-card">
                    <div class="project-mobile-header">
                        <i class="fas fa-blog"></i>
                        <span>NodeJS Blog</span>
                    </div>
                    <p class="project-mobile-desc" data-i18n="projBlog">Nền tảng blog cá nhân xây dựng với NodeJS & Cloudinary</p>
                    <div class="tech-badges">
                        <span class="badge badge-nodejs">Node.js</span>
                        <span class="badge badge-ejs">EJS</span>
                        <span class="badge badge-mysql">MySQL</span>
                    </div>
                    <a href="https://github.com/doanhquang039-code" target="_blank" class="project-mobile-link"><i class="fas fa-star"></i> View</a>
                </div>
                <div class="project-mobile-card">
                    <div class="project-mobile-header">
                        <i class="fas fa-hotel"></i>
                        <span>Tour Hotel</span>
                    </div>
                    <p class="project-mobile-desc" data-i18n="projHotel">Website đặt phòng khách sạn & tour sử dụng Java Servlet JSP</p>
                    <div class="tech-badges">
                        <span class="badge badge-java">Java</span>
                        <span class="badge badge-jsp">JSP</span>
                        <span class="badge badge-mysql">MySQL</span>
                    </div>
                    <a href="https://github.com/doanhquang039-code" target="_blank" class="project-mobile-link"><i class="fas fa-star"></i> View</a>
                </div>
                <div class="project-mobile-card">
                    <div class="project-mobile-header">
                        <i class="fas fa-desktop"></i>
                        <span>ADC Software</span>
                    </div>
                    <p class="project-mobile-desc" data-i18n="projADC">Phần mềm desktop xây dựng với C# .NET</p>
                    <div class="tech-badges">
                        <span class="badge badge-csharp">C#</span>
                        <span class="badge badge-dotnet">.NET</span>
                    </div>
                    <a href="https://github.com/doanhquang039-code" target="_blank" class="project-mobile-link"><i class="fas fa-star"></i> View</a>
                </div>
                <div class="project-mobile-card">
                    <div class="project-mobile-header">
                        <i class="fas fa-cloud"></i>
                        <span>GoLang Cloud & DevOps</span>
                    </div>
                    <p class="project-mobile-desc" data-i18n="projGoLang">Dự án Cloud & DevOps với GoLang (microservices, Docker, CI/CD)</p>
                    <div class="tech-badges">
                        <span class="badge badge-go">Go</span>
                        <span class="badge badge-docker">Docker</span>
                        <span class="badge badge-kubernetes">Kubernetes</span>
                    </div>
                    <a href="https://github.com/doanhquang039-code" target="_blank" class="project-mobile-link"><i class="fas fa-star"></i> View</a>
                </div>
            </div>

            <!-- Desktop Project Table -->
            <div class="projects-table-wrapper">
                <table class="projects-table">
                    <thead>
                        <tr>
                            <th data-i18n="projectName">Dự án</th>
                            <th data-i18n="techStackCol">Công nghệ</th>
                            <th data-i18n="description">Mô tả</th>
                            <th data-i18n="link">Liên kết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><div class="project-name"><i class="fas fa-mobile-alt"></i><span>App Flutter</span></div></td>
                            <td><div class="tech-badges"><span class="badge badge-typescript">TypeScript</span><span class="badge badge-flutter">Flutter</span><span class="badge badge-sqlserver">SQL Server</span></div></td>
                            <td data-i18n="projAppFlutter">Ứng dụng theo dõi chi tiêu với NestJS backend & Flutter mobile</td>
                            <td><a href="https://github.com/doanhquang039-code" target="_blank" class="link-icon" title="View"><i class="fas fa-star"></i> View</a></td>
                        </tr>
                        <tr>
                            <td><div class="project-name"><i class="fas fa-brain"></i><span>Learn AI</span></div></td>
                            <td><div class="tech-badges"><span class="badge badge-python">Python</span><span class="badge badge-openai">OpenAI</span><span class="badge badge-gemini">Gemini</span><span class="badge badge-fastapi">FastAPI</span></div></td>
                            <td data-i18n="projLearnAI">Dự án học AI sử dụng Python với OpenAI & Gemini APIs, tích hợp LangChain</td>
                            <td><a href="https://github.com/doanhquang039-code" target="_blank" class="link-icon" title="View"><i class="fas fa-star"></i> View</a></td>
                        </tr>
                        <tr>
                            <td><div class="project-name"><i class="fas fa-users"></i><span>HR Management System</span></div></td>
                            <td><div class="tech-badges"><span class="badge badge-spring">Spring Boot</span><span class="badge badge-mysql">MySQL</span><span class="badge badge-docker">Docker</span><span class="badge badge-cloudinary">Cloudinary</span></div></td>
                            <td data-i18n="projHR">Hệ thống quản lý nhân sự với Spring Security & Spring Cloud</td>
                            <td><a href="https://github.com/doanhquang039-code" target="_blank" class="link-icon" title="View"><i class="fas fa-star"></i> View</a></td>
                        </tr>
                        <tr>
                            <td><div class="project-name"><i class="fas fa-book"></i><span>Library System</span></div></td>
                            <td><div class="tech-badges"><span class="badge badge-java">Java</span><span class="badge badge-sqlserver">SQL Server</span></div></td>
                            <td data-i18n="projLibrary">Ứng dụng desktop quản lý mượn & trả sách</td>
                            <td><a href="https://github.com/doanhquang039-code" target="_blank" class="link-icon" title="View"><i class="fas fa-star"></i> View</a></td>
                        </tr>
                        <tr>
                            <td><div class="project-name"><i class="fas fa-box"></i><span>Linkky</span></div></td>
                            <td><div class="tech-badges"><span class="badge badge-python">Python</span><span class="badge badge-docker">Docker</span><span class="badge badge-postgres">PostgreSQL</span></div></td>
                            <td data-i18n="projLinkky">Ứng dụng desktop quản lý sách đóng gói container</td>
                            <td><a href="https://github.com/doanhquang039-code" target="_blank" class="link-icon" title="View"><i class="fas fa-star"></i> View</a></td>
                        </tr>
                        <tr>
                            <td><div class="project-name"><i class="fas fa-blog"></i><span>NodeJS Blog</span></div></td>
                            <td><div class="tech-badges"><span class="badge badge-nodejs">Node.js</span><span class="badge badge-ejs">EJS</span><span class="badge badge-mysql">MySQL</span></div></td>
                            <td data-i18n="projBlog">Nền tảng blog cá nhân xây dựng với NodeJS & Cloudinary</td>
                            <td><a href="https://github.com/doanhquang039-code" target="_blank" class="link-icon" title="View"><i class="fas fa-star"></i> View</a></td>
                        </tr>
                        <tr>
                            <td><div class="project-name"><i class="fas fa-hotel"></i><span>Tour Hotel</span></div></td>
                            <td><div class="tech-badges"><span class="badge badge-java">Java</span><span class="badge badge-jsp">JSP</span><span class="badge badge-mysql">MySQL</span></div></td>
                            <td data-i18n="projHotel">Website đặt phòng khách sạn & tour sử dụng Java Servlet JSP</td>
                            <td><a href="https://github.com/doanhquang039-code" target="_blank" class="link-icon" title="View"><i class="fas fa-star"></i> View</a></td>
                        </tr>
                        <tr>
                            <td><div class="project-name"><i class="fas fa-desktop"></i><span>ADC Software</span></div></td>
                            <td><div class="tech-badges"><span class="badge badge-csharp">C#</span><span class="badge badge-dotnet">.NET</span></div></td>
                            <td data-i18n="projADC">Phần mềm desktop xây dựng với C# .NET</td>
                            <td><a href="https://github.com/doanhquang039-code" target="_blank" class="link-icon" title="View"><i class="fas fa-star"></i> View</a></td>
                        </tr>
                        <tr>
                            <td><div class="project-name"><i class="fas fa-cloud"></i><span>GoLang Cloud & DevOps</span></div></td>
                            <td><div class="tech-badges"><span class="badge badge-go">Go</span><span class="badge badge-docker">Docker</span><span class="badge badge-kubernetes">Kubernetes</span></div></td>
                            <td data-i18n="projGoLang">Dự án Cloud & DevOps với GoLang (microservices, Docker, CI/CD)</td>
                            <td><a href="https://github.com/doanhquang039-code" target="_blank" class="link-icon" title="View"><i class="fas fa-star"></i> View</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- Achievements Section -->
    <section id="achievements" class="achievements">
        <div class="container">
            <div class="section-header">
                <span class="section-tag" data-i18n="achievementTag">🏆 Thành tựu</span>
                <h2 class="section-title" data-i18n="myAchievements">Thành Tựu Của Tôi</h2>
                <p class="section-description" data-i18n="achievementsDesc">Chứng chỉ và những thành tựu cho thấy quá trình học tập và phát triển của tôi</p>
                <div style="height: 2rem;"></div>
            </div>
            <div class="achievements-grid">
                <div class="achievement-card">
                    <div class="achievement-image" style="position: relative; overflow: hidden; border-radius: 12px;">
                        <video controls style="width: 100%; max-height: 220px; object-fit: cover; display: block; border-radius: 12px 12px 0 0;">
                            <source src="1786370483800_423698007583510178_5649508933815108388.mp4" type="video/mp4">
                            Trình duyệt của bạn không hỗ trợ phát video.
                        </video>
                    </div>
                    <div class="achievement-content">
                        <h3>Video Highlight Thành Tựu</h3>
                        <p>Video ngắn ghi lại những khoảnh khắc đáng nhớ và kỷ niệm trong quá trình học tập & thi đấu</p>
                        <div class="achievement-tags">
                            <span class="tag">Video</span>
                            <span class="tag">Highlight</span>
                            <span class="tag">Media</span>
                        </div>
                    </div>
                </div>

                <div class="achievement-card">
                    <div class="achievement-image">
                        <img src="1782056650959_423698007583510178_5649508933815108388_b75fd7397a0a4d5c13559c9af43cf969.jpg" alt="Chứng nhận Hoạt động / Khen thưởng 1">
                        <div class="achievement-overlay">
                            <a href="1782056650959_423698007583510178_5649508933815108388_b75fd7397a0a4d5c13559c9af43cf969.jpg" target="_blank" class="achievement-link"><i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div class="achievement-content">
                        <h3>Chứng Nhận Hoạt Động & Khen Thưởng</h3>
                        <p>Chứng nhận tham gia và đạt thành tích xuất sắc trong các hoạt động phong trào & công nghệ</p>
                        <div class="achievement-tags">
                            <span class="tag">Certificate</span>
                            <span class="tag">Activity</span>
                            <span class="tag">2026</span>
                        </div>
                    </div>
                </div>

                <div class="achievement-card">
                    <div class="achievement-image">
                        <img src="1786370483211_423698007583510178_5649508933815108388_8b12b602649945791ffc17fe774919b3.jpg" alt="Chứng nhận Hoạt động / Khen thưởng 2">
                        <div class="achievement-overlay">
                            <a href="1786370483211_423698007583510178_5649508933815108388_8b12b602649945791ffc17fe774919b3.jpg" target="_blank" class="achievement-link"><i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div class="achievement-content">
                        <h3>Thành Tựu & Giải Thưởng Học Tập</h3>
                        <p>Ghi nhận nỗ lực xuất sắc trong học tập và rèn luyện kỹ năng chuyên môn</p>
                        <div class="achievement-tags">
                            <span class="tag">Academic</span>
                            <span class="tag">Award</span>
                            <span class="tag">2026</span>
                        </div>
                    </div>
                </div>

                <div class="achievement-card">
                    <div class="achievement-image">
                        <img src="1786370483534_423698007583510178_5649508933815108388_d42080fbfb22f038e42298725d63b49c.jpg" alt="Chứng nhận Hoạt động / Khen thưởng 3">
                        <div class="achievement-overlay">
                            <a href="1786370483534_423698007583510178_5649508933815108388_d42080fbfb22f038e42298725d63b49c.jpg" target="_blank" class="achievement-link"><i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div class="achievement-content">
                        <h3>Giấy Chứng Nhận Kỹ Năng & Thành Tích</h3>
                        <p>Minh chứng cho sự kiên trì và phát triển không ngừng trong sự nghiệp lập trình</p>
                        <div class="achievement-tags">
                            <span class="tag">Skills</span>
                            <span class="tag">Achievement</span>
                            <span class="tag">2026</span>
                        </div>
                    </div>
                </div>

                <div class="achievement-card">
                    <div class="achievement-image">
                        <img src="1782056644240_423698007583510178_5649508933815108388_60ac2f5b167dda1b207c092ccfcc587d.jpg" alt="Google Cloud Certification">
                        <div class="achievement-overlay">
                            <a href="1782056644240_423698007583510178_5649508933815108388_60ac2f5b167dda1b207c092ccfcc587d.jpg" target="_blank" class="achievement-link"><i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div class="achievement-content">
                        <h3 data-i18n="achGCloud">Google Cloud Certified</h3>
                        <p data-i18n="achGCloudDesc">Google Cloud Certified Cloud Digital Leader - Chứng nhận kiến thức về nền tảng Google Cloud</p>
                        <div class="achievement-tags">
                            <span class="tag">Google Cloud</span>
                            <span class="tag">Cloud Computing</span>
                            <span class="tag">2026</span>
                        </div>
                    </div>
                </div>

                <div class="achievement-card">
                    <div class="achievement-image">
                        <img src="1784278246064_423698007583510178_5649508933815108388_a8ccce0e93155531df25394b5c2c6e00.jpg" alt="Hoc Bong Toan Phan">
                        <div class="achievement-overlay">
                            <a href="1784278246064_423698007583510178_5649508933815108388_a8ccce0e93155531df25394b5c2c6e00.jpg" target="_blank" class="achievement-link"><i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div class="achievement-content">
                        <h3 data-i18n="achScholarship">Học Bổng Toàn Phần</h3>
                        <p data-i18n="achScholarshipDesc">Đạt học bổng toàn phần từ trường đại học - Công nhận thành tích học tập xuất sắc</p>
                        <div class="achievement-tags">
                            <span class="tag">Scholarship</span>
                            <span class="tag">Academic</span>
                            <span class="tag">2024</span>
                        </div>
                    </div>
                </div>

                <div class="achievement-card">
                    <div class="achievement-image">
                        <img src="1784278246614_423698007583510178_5649508933815108388_9394e4814305bc72a8b7912860e1f671.jpg" alt="GameKren Award">
                        <div class="achievement-overlay">
                            <a href="1784278246614_423698007583510178_5649508933815108388_9394e4814305bc72a8b7912860e1f671.jpg" target="_blank" class="achievement-link"><i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div class="achievement-content">
                        <h3 data-i18n="achGameKren">ITPlus - 16M VND</h3>
                        <p data-i18n="achGameKrenDesc">Giải thưởng, kết quả thi TN 2024</p>
                        <div class="achievement-tags">
                            <span class="tag">IT Dev</span>
                            <span class="tag">Award</span>
                            <span class="tag">2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="experience">
        <div class="container">
            <div class="section-header">
                <span class="section-tag" data-i18n="experienceTag">💼 Kinh Nghiệm</span>
                <h2 class="section-title" data-i18n="myExperience">Kinh Nghiệm Của Tôi</h2>
                <p class="section-description" data-i18n="experienceDesc">Quá trình làm việc và phát triển kỹ năng chuyên môn</p>
                <div style="height: 1.5rem;"></div>
            </div>
            
            <div class="experience-timeline">
                <div class="experience-item">
                    <div class="experience-marker"></div>
                    <div class="experience-content">
                        <div class="experience-header">
                            <h3 class="experience-title" data-i18n="expWebTitle">💻 Phát Triển Web App</h3>
                            <span class="experience-period" data-i18n="ongoing">Đang làm</span>
                        </div>
                        <div class="company-badge">
                            <i class="fas fa-code"></i>
                            <span data-i18n="expWebRole">Full-Stack Development</span>
                        </div>
                        <p class="experience-description" data-i18n="expWebDesc">
                            Phát triển các ứng dụng web hoàn chỉnh sử dụng Spring Boot, Node.js, React và Flutter. Thiết kế và xây dựng các hệ thống backend có khả năng mở rộng cao với API RESTful và frontend responsive.
                        </p>
                        <div class="experience-tech">
                            <span class="tech-badge">Spring Boot</span>
                            <span class="tech-badge">Node.js</span>
                            <span class="tech-badge">React</span>
                            <span class="tech-badge">Flutter</span>
                            <span class="tech-badge">MySQL</span>
                            <span class="tech-badge">Docker</span>
                        </div>
                    </div>
                </div>

                <div class="experience-item">
                    <div class="experience-marker"></div>
                    <div class="experience-content">
                        <div class="experience-header">
                            <h3 class="experience-title" data-i18n="expAITitle">🤖 Nghiên Cứu AI Agent</h3>
                            <span class="experience-period" data-i18n="ongoing">Đang làm</span>
                        </div>
                        <div class="company-badge">
                            <i class="fas fa-robot"></i>
                            <span data-i18n="expAIRole">AI / Machine Learning</span>
                        </div>
                        <p class="experience-description" data-i18n="expAIDesc">
                            Nghiên cứu và phát triển các AI Agent thông minh sử dụng Python, LLM APIs (OpenAI, Gemini), LangChain, và các công nghệ AI hiện đại. Xây dựng các ứng dụng AI tích hợp để tự động hóa tác vụ phức tạp.
                        </p>
                        <div class="experience-tech">
                            <span class="tech-badge">Python</span>
                            <span class="tech-badge">OpenAI API</span>
                            <span class="tech-badge">Gemini API</span>
                            <span class="tech-badge">LangChain</span>
                            <span class="tech-badge">FastAPI</span>
                            <span class="tech-badge">Machine Learning</span>
                        </div>
                    </div>
                </div>

                <div class="experience-item">
                    <div class="experience-marker"></div>
                    <div class="experience-content">
                        <div class="experience-header">
                            <h3 class="experience-title" data-i18n="expCloudTitle">☁️ Google Cloud Infrastructure</h3>
                            <span class="experience-period" data-i18n="ongoing">Đang làm</span>
                        </div>
                        <div class="company-badge">
                            <i class="fas fa-cloud"></i>
                            <span data-i18n="expCloudRole">Cloud & DevOps</span>
                        </div>
                        <p class="experience-description" data-i18n="expCloudDesc">
                            Thiết kế và quản lý hạ tầng trên Google Cloud Platform (GCP). Triển khai ứng dụng sử dụng Cloud Run, Compute Engine, App Engine. Cấu hình CI/CD pipelines, monitoring, và tối ưu hóa chi phí cloud.
                        </p>
                        <div class="experience-tech">
                            <span class="tech-badge">Google Cloud</span>
                            <span class="tech-badge">Cloud Run</span>
                            <span class="tech-badge">Compute Engine</span>
                            <span class="tech-badge">CI/CD</span>
                            <span class="tech-badge">Docker</span>
                            <span class="tech-badge">Kubernetes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Interests Section -->
    <section id="interests" class="interests">
        <div class="container">
            <div class="section-header">
                <span class="section-tag" data-i18n="interestsTag">🎮 Sở Thích</span>
                <h2 class="section-title" data-i18n="myInterests">Sở Thích Của Tôi</h2>
                <p class="section-description" data-i18n="interestsDesc">Những điều tôi yêu thích ngoài lập trình</p>
                <div style="height: 1.5rem;"></div>
            </div>
            
            <div class="interests-grid">
                <div class="interest-card">
                    <div class="interest-icon">
                        <i class="fas fa-gamepad"></i>
                    </div>
                    <h3 class="interest-title" data-i18n="interestGaming">🎮 Chơi game</h3>
                    <div class="interest-items">
                        <span class="interest-item">
                            <i class="fas fa-trophy"></i>
                            Liên Quân Mobile
                        </span>
                        <span class="interest-item">
                            <i class="fas fa-cube"></i>
                            Roblox
                        </span>
                    </div>
                    <p class="interest-description" data-i18n="interestGamingDesc">
                        Thích chơi các trò chơi chiến thuật và sáng tạo. Liên Quân giúp phát triển tư duy chiến lược, còn Roblox cho phép sáng tạo và khám phá thế giới ảo.
                    </p>
                </div>

                <div class="interest-card">
                    <div class="interest-icon">
                        <i class="fas fa-book"></i>
                    </div>
                    <h3 class="interest-title" data-i18n="interestReading">📚 Đọc sách</h3>
                    <div class="interest-items">
                        <span class="interest-item">
                            <i class="fas fa-brain"></i>
                            <span data-i18n="interestReadingItem1">Công nghệ & Khoa học</span>
                        </span>
                        <span class="interest-item">
                            <i class="fas fa-lightbulb"></i>
                            <span data-i18n="interestReadingItem2">Tự phát triển</span>
                        </span>
                    </div>
                    <p class="interest-description" data-i18n="interestReadingDesc">
                        Đọc sách về công nghệ, AI, khoa học dữ liệu và phát triển cá nhân. Yêu thích khám phá những kiến thức mới và áp dụng vào thực tiễn.
                    </p>
                </div>

                <div class="interest-card">
                    <div class="interest-icon">
                        <i class="fas fa-music"></i>
                    </div>
                    <h3 class="interest-title" data-i18n="interestMusic">🎵 Âm nhạc</h3>
                    <div class="interest-items">
                        <span class="interest-item">
                            <i class="fas fa-headphones"></i>
                            Indie & EDM
                        </span>
                        <span class="interest-item">
                            <i class="fas fa-heart"></i>
                            Spotify Lover
                        </span>
                    </div>
                    <p class="interest-description" data-i18n="interestMusicDesc">
                        Nghe nhạc là một phần quan trọng của cuộc sống tôi. Thích các bài nhạc Indie, EDM và những ca khúc có ý nghĩa. Nhạc giúp tôi thư giãn và tăng năng suất khi làm việc.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <span class="section-tag" data-i18n="getInTouch">📬 Liên hệ</span>
                <h2 class="section-title" data-i18n="contactTitle">Liên Hệ Với Tôi</h2>
                <p class="section-description" data-i18n="contactDesc">Hãy liên hệ với tôi cho những cơ hội hợp tác hoặc chỉ một cuộc trò chuyện thân thiện!</p>
            </div>
            <div class="contact-content">
                <div class="contact-methods">
                    <a href="mailto:doanhquang039@gmail.com" class="contact-card" target="_blank">
                        <i class="fas fa-envelope"></i>
                        <h3>Email</h3>
                        <p class="contact-value">doanhquang039@gmail.com</p>
                    </a>
                    <a href="https://github.com/doanhquang039-code" class="contact-card" target="_blank">
                        <i class="fab fa-github"></i>
                        <h3>GitHub</h3>
                        <p class="contact-value">@doanhquang039-code</p>
                    </a>
                    <a href="https://www.linkedin.com/in/doanh-quang-0a4561407/" class="contact-card" target="_blank">
                        <i class="fab fa-linkedin"></i>
                        <h3>LinkedIn</h3>
                        <p class="contact-value">Đặng Quang Doanh</p>
                    </a>
                    <a href="https://zalo.me/0373542892" class="contact-card" target="_blank">
                        <i class="fas fa-phone"></i>
                        <h3>Zalo</h3>
                        <p class="contact-value">037 354 2892</p>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Guestbook Section -->
    <section id="guestbook" class="section">
        <div class="container">
            <div class="section-header text-center">
                <span class="section-tag" data-i18n="guestbookTag">📝 Guestbook</span>
                <h2 class="section-title" data-i18n="guestbookTitle">Sổ Lưu Bút</h2>
                <p class="section-subtitle" data-i18n="guestbookDesc">Để lại dấu ấn của bạn tại đây!</p>
            </div>

            <div class="guestbook-container">
                <!-- Guestbook Form -->
                <div class="guestbook-form-container">
                    <div id="guestbookAuthWarning" class="auth-warning">
                        <i class="fas fa-lock"></i>
                        <p data-i18n="guestbookLoginPrompt">Vui lòng đăng nhập để viết vào sổ lưu bút.</p>
                        <button onclick="document.getElementById('loginBtn').click()" class="btn primary-btn" data-i18n="login">Đăng nhập</button>
                    </div>
                    
                    <form id="guestbookForm" class="guestbook-form" style="display: none;">
                        <div class="guestbook-user-info">
                            <img id="guestbookAvatar" src="" alt="Avatar">
                            <span id="guestbookName"></span>
                        </div>
                        <textarea id="guestbookMessage" placeholder="Viết gì đó thật ngầu nhé..." required></textarea>
                        <button type="submit" class="btn primary-btn">
                            <i class="fas fa-paper-plane"></i> <span data-i18n="guestbookSubmit">Gửi lời nhắn</span>
                        </button>
                    </form>
                </div>

                <!-- Messages List -->
                <div class="guestbook-messages">
                    <h3 data-i18n="guestbookRecent">Lời nhắn gần đây</h3>
                    <div id="messagesList" class="messages-list">
                        <div class="loading-messages">
                            <i class="fas fa-spinner fa-spin"></i> Loading...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Blog Section -->
    <section id="blog" class="section">
        <div class="container">
            <div class="section-header text-center">
                <span class="section-tag">✍️ Blog</span>
                <h2 class="section-title">Bài Viết Của Tôi</h2>
                <p class="section-subtitle">Chia sẻ kiến thức, kinh nghiệm và hành trình học tập của tôi</p>
            </div>

            <!-- Admin Panel (only visible to owner) -->
            <div id="blogAdminPanel" class="blog-admin-panel" style="display:none;">
                <h3><i class="fas fa-edit"></i> Viết bài mới</h3>
                <form id="blogPostForm" class="blog-write-form">
                    <div class="blog-form-row">
                        <input type="text" id="blogEmoji" placeholder="Emoji (VD: 💡)" maxlength="4" class="blog-input-sm">
                        <input type="text" id="blogTag" placeholder="Tag (VD: Spring Boot)" class="blog-input-sm">
                    </div>
                    <input type="text" id="blogTitle" placeholder="Tiêu đề bài viết..." required class="blog-input-full">
                    <textarea id="blogContent" placeholder="Nội dung bài viết..." required class="blog-textarea"></textarea>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-paper-plane"></i> Đăng bài
                    </button>
                </form>
            </div>

            <!-- Blog Posts Grid -->
            <div id="blogPostsList" class="blog-grid">
                <div class="blog-empty">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Đang tải bài viết...</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Visitor World Map Section -->
    <section id="visitor-map" class="section">
        <div class="container">
            <div class="section-header text-center">
                <span class="section-tag">🌍 Realtime</span>
                <h2 class="section-title">Bản Đồ Người Xem</h2>
                <p class="section-subtitle">Những người khách đã ghé thăm trang web của tôi từ khắp nơi trên thế giới</p>
            </div>

            <div class="map-stats-row">
                <div class="map-stat-badge">
                    <i class="fas fa-users"></i>
                    <span id="visitorMapCount">0</span>
                    <span>Lượt ghé thăm</span>
                </div>
                <div class="map-stat-badge">
                    <i class="fas fa-globe-asia"></i>
                    <span id="visitorCountryCount">0</span>
                    <span>Quốc gia</span>
                </div>
                <div class="map-stat-badge live">
                    <span class="live-dot"></span>
                    <span>LIVE</span>
                </div>
            </div>

            <div class="map-wrapper">
                <div id="visitorMapEl" class="visitor-map"></div>
            </div>
        </div>
    </section>

    <!-- GitHub Activity Section -->
    <section id="github-activity" class="section">
        <div class="container">
            <div class="section-header text-center">
                <span class="section-tag">⚡ Open Source</span>
                <h2 class="section-title" data-i18n="githubTitle">Hoạt Động GitHub</h2>
                <p class="section-subtitle" data-i18n="githubDesc">Hành trình code mỗi ngày được ghi lại đầy đủ</p>
            </div>

            <div class="github-stats-grid">
                <div class="github-stat-card">
                    <i class="fas fa-fire"></i>
                    <span class="stat-number" id="gh-repos">...</span>
                    <span class="stat-label" data-i18n="githubRepos">Public Repos</span>
                </div>
                <div class="github-stat-card">
                    <i class="fas fa-users"></i>
                    <span class="stat-number" id="gh-followers">...</span>
                    <span class="stat-label" data-i18n="githubFollowers">Followers</span>
                </div>
                <div class="github-stat-card">
                    <i class="fas fa-star"></i>
                    <span class="stat-number" id="gh-stars">...</span>
                    <span class="stat-label" data-i18n="githubStars">Total Stars</span>
                </div>
                <div class="github-stat-card">
                    <i class="fas fa-code-branch"></i>
                    <span class="stat-number" id="gh-commits">365+</span>
                    <span class="stat-label" data-i18n="githubCommits">Contributions</span>
                </div>
            </div>

            <!-- GitHub Contribution Calendar -->
            <div class="github-calendar-wrapper">
                <h3 class="calendar-title"><i class="fab fa-github"></i> Contribution Graph</h3>
                <div id="github-calendar-container">
                    <!-- Rendered by github-calendar -->
                </div>
            </div>

            <!-- GitHub Language Stats via github-readme-stats -->
            <div class="github-lang-section">
                <img 
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=doanhquang039-code&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=6366f1&text_color=a0aec0"
                    alt="Top Languages"
                    class="github-lang-img"
                    onerror="this.style.display='none'">
                <img 
                    src="https://github-readme-stats.vercel.app/api?username=doanhquang039-code&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=6366f1&text_color=a0aec0&icon_color=8b5cf6"
                    alt="GitHub Stats"
                    class="github-lang-img"
                    onerror="this.style.display='none'">
            </div>
        </div>
    </section>

    <!-- Interactive Terminal Modal -->
    <div id="terminalOverlay" class="terminal-overlay">
        <div id="terminalWindow" class="terminal-window">
            <div class="terminal-titlebar">
                <div class="terminal-dots">
                    <span class="dot red" id="terminalClose" title="Close (ESC)"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                </div>
                <span class="terminal-title">quangdoanh@portfolio:~$</span>
                <span class="terminal-hint">Press ESC to close</span>
            </div>
            <div id="terminalBody" class="terminal-body">
                <div class="terminal-welcome">
                    <pre class="terminal-ascii">  ___  ___  ___  ___  ___  _ _  ___  ___  ___  ___  _  _  _  _ 
 |   \|   ||   ||  ||  _ \| | ||   ||  ||   ||  _ \| || || || |
 | |\   |-||    | | ||   || O ||    | | ||    ||   || \/ || \| |
 |___/|___||___|___/ |_\_\|___||___|___/ |___|  |_\_\|__/ |_|\|
</pre>
                    <p class="term-intro">Welcome to the Interactive Portfolio Terminal v2.0</p>
                    <p class="term-intro">Type <span class="cmd-highlight">help</span> to see all available commands.</p>
                    <br>
                </div>
                <div id="terminalOutput"></div>
                <div class="terminal-input-line">
                    <span class="terminal-prompt">quangdoanh@portfolio <span class="prompt-path">~</span> $&nbsp;</span>
                    <input type="text" id="terminalInput" class="terminal-input" autocomplete="off" spellcheck="false" autofocus>
                </div>
            </div>
        </div>
    </div>

    <!-- Terminal Toggle Button -->
    <button id="terminalToggleBtn" class="terminal-toggle-btn" title="Open Terminal (Ctrl+`)">
        <i class="fas fa-terminal"></i>
    </button>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; <?php echo date('Y'); ?> <span data-i18n="devPortfolioFooter">DevPortfolio</span>. <span data-i18n="madeWith">Tạo ra với</span> <i class="fas fa-heart"></i> and <i class="fas fa-coffee"></i></p>
            <div class="footer-links">
                <a href="#home" data-i18n="home">Trang chủ</a>
                <a href="#about" data-i18n="about">Giới thiệu</a>
                <a href="#tech" data-i18n="techStack">Công nghệ</a>
                <a href="#projects" data-i18n="projects">Dự án</a>
                <a href="#contact" data-i18n="contact">Liên hệ</a>
            </div>
        </div>
    </footer>

    <script src="i18n.js?v=4.0"></script>
    <script src="script.js?v=4.0"></script>
    
    <!-- Background Music -->
    <audio id="bgMusic" loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
    </audio>

    <!-- AI Chatbot -->
    <div id="chatbotContainer" class="chatbot-container">
        <button id="chatbotToggle" class="chatbot-toggle" title="Chat with AI Assistant">
            <i class="fas fa-robot"></i>
            <span class="chatbot-badge">AI</span>
        </button>

        <div id="chatbotWindow" class="chatbot-window">
            <div class="chatbot-header">
                <div class="chatbot-header-info">
                    <div class="chatbot-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div>
                        <h4 data-i18n="chatbotTitle">Portfolio AI Assistant</h4>
                        <p class="chatbot-status">
                            <span class="status-dot online"></span>
                            <span data-i18n="chatbotStatus">Powered by Gemini AI</span>
                        </p>
                    </div>
                </div>
                <button id="chatbotClose" class="chatbot-close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <div id="chatbotMessages" class="chatbot-messages">
                <div class="message bot-message">
                    <div class="message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content">
                        <p data-i18n="chatbotWelcome">👋 Xin chào! Tôi là AI Assistant của Đặng Quang Doanh.</p>
                        <p data-i18n="chatbotHelp">Tôi có thể giúp bạn:</p>
                        <ul>
                            <li data-i18n="chatbotHelp1">📋 Thông tin về kinh nghiệm và kỹ năng</li>
                            <li data-i18n="chatbotHelp2">💼 Chi tiết các dự án</li>
                            <li data-i18n="chatbotHelp3">🤖 Nghiên cứu AI & công nghệ</li>
                            <li data-i18n="chatbotHelp4">📧 Thông tin liên hệ</li>
                        </ul>
                        <p data-i18n="chatbotAsk">Hãy hỏi tôi bất cứ điều gì! 😊</p>
                    </div>
                </div>
            </div>

            <div id="typingIndicator" class="typing-indicator" style="display: none;">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="quick-actions">
                <button class="quick-action-btn" data-question-key="chatbotQuestion1">
                    <span data-i18n="chatbotQuick1">💼 Kinh nghiệm</span>
                </button>
                <button class="quick-action-btn" data-question-key="chatbotQuestion2">
                    <span data-i18n="chatbotQuick2">🤖 Dự án AI</span>
                </button>
                <button class="quick-action-btn" data-question-key="chatbotQuestion3">
                    <span data-i18n="chatbotQuick3">⭐ Kỹ năng</span>
                </button>
            </div>

            <form id="chatbotForm" class="chatbot-input-form">
                <input 
                    type="text" 
                    id="chatbotInput" 
                    class="chatbot-input" 
                    data-i18n-placeholder="chatbotPlaceholder"
                    placeholder="Nhập câu hỏi của bạn..."
                    autocomplete="off"
                />
                <button type="submit" class="chatbot-send-btn" title="Send">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </form>

            <div id="apiKeyWarning" class="api-key-warning" style="display: none;">
                <i class="fas fa-exclamation-triangle"></i>
                <span>Vui lòng cấu hình Gemini API Key trong chatbot.js</span>
            </div>
        </div>
    </div>

    <!-- Auth & Database Logic -->
    <script src="auth.js"></script>
    <script src="chatbot.js?v=1.0"></script>

    <!-- GitHub Calendar Library -->
    <link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"/>
    <script src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"></script>

    <!-- Terminal & GitHub Stats -->
    <script src="terminal.js?v=1.0"></script>

    <!-- Particles Hero -->
    <script src="particles-config.js?v=1.0"></script>

    <!-- PDF CV Export -->
    <script src="pdf-export.js?v=1.0"></script>

    <!-- Visitor World Map -->
    <script src="visitor-map.js?v=1.0"></script>

    <!-- Portfolio Improvements (Scroll Progress, Filter, Radar, Mobile Nav, Lazy Load, PWA) -->
    <script src="improvements.js?v=1.0"></script>

    <!-- Blog Section -->
    <script src="blog.js?v=1.0"></script>
</body>
</html>
