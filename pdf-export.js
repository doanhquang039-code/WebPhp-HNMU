// ===== PDF CV Export =====
function exportCV() {
    const btn = document.getElementById('downloadCvBtn');
    if (btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang tạo PDF...';
        btn.disabled = true;
    }

    // Build CV content
    const cvContent = buildCVHTML();
    const container = document.createElement('div');
    container.innerHTML = cvContent;
    container.style.cssText = 'position:fixed;left:-9999px;top:0;width:794px;background:#fff;';
    document.body.appendChild(container);

    const opt = {
        margin: [10, 10, 10, 10],
        filename: 'DangQuangDoanh_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(container).save().then(() => {
        document.body.removeChild(container);
        if (btn) {
            btn.innerHTML = '<i class="fas fa-check"></i> Tải thành công!';
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-file-pdf"></i> <span>Tải CV (PDF)</span>';
                btn.disabled = false;
            }, 2500);
        }
        if (typeof showNotification === 'function') showNotification('✅ CV đã được tải xuống!');
    }).catch(() => {
        document.body.removeChild(container);
        if (btn) {
            btn.innerHTML = '<i class="fas fa-file-pdf"></i> <span>Tải CV (PDF)</span>';
            btn.disabled = false;
        }
    });
}

function buildCVHTML() {
    return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a2e; padding: 24px; max-width: 794px; margin: 0 auto; background: #fff;">

        <!-- Header -->
        <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%); border-radius: 12px; padding: 28px 32px; color: white; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h1 style="margin:0 0 6px 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">Đặng Quang Doanh</h1>
                <p style="margin:0 0 4px 0; font-size: 15px; opacity: 0.9; font-weight: 500;">Full-Stack Developer & AI Enthusiast</p>
                <p style="margin:0; font-size: 13px; opacity: 0.75;">Sinh viên CNTT Năm 2 | Sẵn sàng làm việc</p>
            </div>
            <div style="text-align: right; font-size: 12px; opacity: 0.9; line-height: 1.8;">
                <div>📧 doanhquang040@gmail.com</div>
                <div>📱 0373 542 892 (Zalo)</div>
                <div>🌐 github.com/doanhquang039-code</div>
                <div>📍 Thái Bình → Hà Nội, Việt Nam</div>
            </div>
        </div>

        <!-- Two columns -->
        <div style="display: flex; gap: 20px;">

            <!-- Left column -->
            <div style="width: 35%;">

                <!-- About -->
                <div style="margin-bottom: 20px;">
                    <h2 style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 4px; margin-bottom: 10px;">Về Tôi</h2>
                    <p style="font-size: 12px; line-height: 1.7; color: #444;">Sinh viên CNTT đam mê công nghệ, chuyên về Full-Stack Development và AI. Có kinh nghiệm xây dựng các hệ thống từ Backend đến Frontend và tích hợp AI vào ứng dụng thực tế.</p>
                </div>

                <!-- Skills -->
                <div style="margin-bottom: 20px;">
                    <h2 style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 4px; margin-bottom: 10px;">Kỹ Năng</h2>
                    ${buildSkillItem('Spring Boot, Node.js, Go', 90)}
                    ${buildSkillItem('React, HTML5, CSS3', 82)}
                    ${buildSkillItem('Flutter, Android', 75)}
                    ${buildSkillItem('Python, OpenAI, Gemini', 72)}
                    ${buildSkillItem('MySQL, MongoDB', 82)}
                    ${buildSkillItem('Docker, GCP, CI/CD', 70)}
                </div>

                <!-- Achievements -->
                <div style="margin-bottom: 20px;">
                    <h2 style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 4px; margin-bottom: 10px;">Thành Tựu</h2>
                    <div style="font-size: 12px; line-height: 2;">
                        <div>🏆 <strong>Google Cloud Certified</strong> (2026)</div>
                        <div>🎓 <strong>Học Bổng Toàn Phần</strong> (2024)</div>
                        <div>🎮 <strong>GameKren Prize 16M VND</strong> (2024)</div>
                    </div>
                </div>

                <!-- Languages -->
                <div>
                    <h2 style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 4px; margin-bottom: 10px;">Ngôn Ngữ</h2>
                    <div style="font-size: 12px; line-height: 2;">
                        <div>🇻🇳 Tiếng Việt (Bản ngữ)</div>
                        <div>🇺🇸 English (Đọc hiểu tốt)</div>
                        <div>🇨🇳 Tiếng Trung (Cơ bản)</div>
                    </div>
                </div>
            </div>

            <!-- Right column -->
            <div style="width: 65%;">

                <!-- Education -->
                <div style="margin-bottom: 20px;">
                    <h2 style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 4px; margin-bottom: 12px;">Học Vấn</h2>
                    <div style="border-left: 3px solid #e0e7ff; padding-left: 14px;">
                        <div style="font-weight: 700; font-size: 13px;">Đại học Ngành Công nghệ Thông tin</div>
                        <div style="font-size: 12px; color: #6366f1; margin: 2px 0;">2023 – Hiện tại | Năm 2</div>
                        <div style="font-size: 12px; color: #666;">Học bổng toàn phần – GPA xuất sắc</div>
                    </div>
                </div>

                <!-- Projects -->
                <div style="margin-bottom: 20px;">
                    <h2 style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 4px; margin-bottom: 12px;">Dự Án Nổi Bật</h2>
                    ${buildProjectItem('Intelligent Expense Tracker', 'Python · OpenAI · FastAPI · Flutter', 'AI tự động phân loại chi tiêu với độ chính xác 95%, dự đoán chi tiêu bằng Time Series, tư vấn tài chính bằng GPT-4.')}
                    ${buildProjectItem('HR Management Chatbot', 'LangChain · ChromaDB · Spring Boot', 'Chatbot AI sử dụng RAG với company knowledge base, hỗ trợ hội thoại đa lượt.')}
                    ${buildProjectItem('AI Code Review Assistant', 'GPT-4 · GitHub API · Node.js', 'Phát hiện code smell, quét lỗ hổng bảo mật tự động, tích hợp CI/CD pipeline.')}
                    ${buildProjectItem('Banking System', 'Spring Boot · React · MySQL', 'Hệ thống ngân hàng full-stack với Spring Security, quản lý giao dịch, tài khoản.')}
                    ${buildProjectItem('GoLang Microservices (EduSoft)', 'Go · Docker · CI/CD · GCP', 'Kiến trúc microservices cloud-native, triển khai Docker, tích hợp CI/CD.')}
                </div>

                <!-- Focus -->
                <div>
                    <h2 style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 4px; margin-bottom: 10px;">Đang Tập Trung</h2>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        ${['AI/LLM Integration', 'Microservices', 'Cloud Architecture', 'RAG Systems', 'System Design'].map(t => `<span style="background:#f0f0ff; color:#6366f1; padding:3px 10px; border-radius:20px; font-size:11px; font-weight:600;">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div style="text-align: center; margin-top: 20px; padding-top: 14px; border-top: 1px solid #eee; font-size: 11px; color: #999;">
            Generated from Portfolio Website • ${new Date().toLocaleDateString('vi-VN')} • doanhquang039-code.github.io
        </div>
    </div>`;
}

function buildSkillItem(name, pct) {
    return `
    <div style="margin-bottom: 8px;">
        <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 3px;">
            <span style="font-weight: 500;">${name}</span>
            <span style="color: #6366f1;">${pct}%</span>
        </div>
        <div style="background: #f0f0f0; border-radius: 4px; height: 5px;">
            <div style="background: linear-gradient(90deg,#6366f1,#ec4899); border-radius: 4px; height: 5px; width: ${pct}%;"></div>
        </div>
    </div>`;
}

function buildProjectItem(name, stack, desc) {
    return `
    <div style="border-left: 3px solid #e0e7ff; padding-left: 14px; margin-bottom: 12px;">
        <div style="font-weight: 700; font-size: 13px;">${name}</div>
        <div style="font-size: 11px; color: #6366f1; font-weight: 600; margin: 2px 0;">${stack}</div>
        <div style="font-size: 12px; color: #555; line-height: 1.5;">${desc}</div>
    </div>`;
}

// Attach to button when DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('downloadCvBtn');
    if (btn) btn.addEventListener('click', exportCV);
});
