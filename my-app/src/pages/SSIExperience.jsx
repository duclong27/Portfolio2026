import { Link } from "react-router-dom";
import { ArrowLeft, Bot, Zap, Users, BarChart3, ExternalLink, FileText, Brain, BarChart2, Clock, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import DemoSlideshow from "../components/DemoSlideshow";
import CreateIssue from "../assets/SSIPictures/CreateIssue.png";
import GetDetailsIssue from "../assets/SSIPictures/GetIssue.png";
import MyAssignIssue from "../assets/SSIPictures/MyAssignsIssue.png";
import TransitionWorkflow from "../assets/SSIPictures/TransitionWorkflows.png";
import UpdateIssueDescription from "../assets/SSIPictures/UpdateDescription.png";
import AnalyzeCV from "../assets/SSIPictures/Analyze.png";
import ManageJD from "../assets/SSIPictures/ManageJD.png";
import Result  from "../assets/SSIPictures/Result.png";
import ExcelResult from "../assets/SSIPictures/ExcelResult.png";




/* ─────────────────────────────────────────────
   BILINGUAL CONTENT
───────────────────────────────────────────── */
const content = {
    en: {
        backBtn: "Back to Experience",
        eyebrow: "Deployment Project · SSI Securities",
        title: "AI-powered Jira Assistant for Microsoft Teams",
        stack: ["Java", "Spring Boot", "Power Automate", "Microsoft Teams", "Jira API", "AI / Gemini API"],

        overviewTitle: "Overview",
        overviewText:
            "Built an AI-powered chatbot in Microsoft Teams to manage Jira issues, using Power Automate to connect systems and AI summarization to simplify ticket review.",

        builtTitle: "What I Built",
        builtItems: [
            "Integrated bot with Microsoft Teams for real-time Jira interaction via chat",
            "Create, edit, and assign Jira issues directly from a Teams conversation",
            "View all issues assigned to the current user without opening a browser",
            "AI-powered summarization of issue descriptions using Gemini API",
            "RESTful integration with Jira APIs (issue CRUD, user lookup, project metadata)",
            "Power Automate flows to orchestrate multi-step notifications and routing",
        ],

        demoTitle: "Demo",
        demoImages: [
            { src: CreateIssue, caption: "Bot conversation — create issue flow" },
            { src: GetDetailsIssue, caption: "Issue detail card with AI summary" },
            { src: MyAssignIssue, caption: "My assigned issues list in Teams" },
            { src: TransitionWorkflow, caption: "Transition issue workflow status" },
            { src: UpdateIssueDescription, caption: "Update issue description via bot" },
        ],

        impactTitle: "Impact",
        impactItems: [
            "Reduced average time to review and triage Jira issues by eliminating context-switching",
            "Simplified Jira operations for non-technical team members within Teams",
            "Improved internal workflow visibility with real-time ticket notifications",
            "Established a reusable integration pattern for future bot development at SSI",
        ],

        challengesTitle: "Challenges & Solutions",
        challenges: [
            {
                problem: "Jira webhook payloads varied by event type, making parsing complex",
                solution: "Built a normaliser layer in Spring Boot that mapped all event types to a unified DTO before forwarding to Teams.",
            },
            {
                problem: "Gemini Studio had limited support for dynamic data at design time",
                solution: "Delegated AI intent parsing to Gemini and handled data fetching entirely in the Spring Boot service layer.",
            },
            {
                problem: "Power Automate Desktop flow reliability on SSI's internal network",
                solution: "Added retry logic and email-based fallback triggers to handle intermittent connectivity issues.",
            },
        ],

        /* ── CV Matcher ── */
        cvEyebrow: "AI Recruitment Tool · SSI Securities",
        cvTitle: "CV Matcher — AI Recruitment Analyzer",
        cvSubtitle: "Automated system that analyzes candidate CVs against Job Descriptions using local AI",
        cvStack: ["Python", "FastAPI", "React", "Ollama", "Mistral"],

        cvOverviewTitle: "Overview",
        cvOverviewText:
            "Built an internal recruitment tool that auto-analyzes CVs against JDs using local AI (Ollama + Mistral), scoring candidates across 3 weighted criteria — fully offline.",

        cvBuiltTitle: "What I Built",
        cvBuiltItems: [
            "Upload & parse PDF files for both Job Description and CV documents",
            "Local AI analysis via Ollama + Mistral — fully offline, no sensitive data leakage",
            "3-criteria weighted scoring: Hard Skills (40%), Experience (40%), Education (20%)",
            "History tab to look up all previous analysis sessions",
            "Export full analysis results to Excel for HR reporting",
            "RESTful backend with FastAPI + interactive Swagger docs at /docs",
        ],

        cvDemoTitle: "Demo",
        cvDemoImages: [          
            { src: AnalyzeCV ,   caption: "Upload CV and trigger AI analysis and display details why candidate is or is not a good fit" },
            { src: ManageJD ,  caption: "Upload & manage Job Description" },
            { src: Result,   caption: "Display analysis results for each candidate with detailed explanations" },
            { src: ExcelResult,    caption: "Export results to Excel" },
        ],

        cvImpactTitle: "Impact",
        cvImpactItems: [
            "Reduced manual CV review time for HR team significantly",
            "Standardized candidate scoring with consistent, objective criteria",
            "100% offline processing — sensitive recruitment data never leaves SSI network",
            "Excel export streamlines reporting and handoff to hiring managers",
        ],

        cvChallengesTitle: "Challenges & Solutions",
        cvChallenges: [
            {
                problem: "Ollama runs locally — each CV analysis takes 1–2 minutes",
                solution: "Added a loading indicator with async polling so the UI stays responsive and users know analysis is in progress.",
            },
            {
                problem: "PDF parsing quality varied across different CV formats",
                solution: "Implemented a pre-processing normalization step to clean extracted text before passing to the AI model.",
            },
            {
                problem: "Scoring fairness across different JD styles and verbosity",
                solution: "Designed the prompt to instruct Mistral to extract only explicitly stated requirements, reducing hallucinated skill matches.",
            },
        ],
    },

    vi: {
        backBtn: "Quay lại Kinh nghiệm",
        eyebrow: "Dự án thực tập · SSI Securities",
        title: "Trợ lý Jira tích hợp AI cho Microsoft Teams",
        subtitle: "Thực tập sinh Tự động hóa — Công ty Chứng khoán SSI",
        stack: ["Java", "Spring Boot", "Power Automate", "Microsoft Teams", "Jira API", "AI / Gemini Studio"],

        overviewTitle: "Tổng quan",
        overviewText:
            "Trong thời gian thực tập tại SSI, tôi xây dựng chatbot tích hợp Microsoft Teams để thao tác Jira trực tiếp, sử dụng AI tóm tắt ticket và Power Automate để kết nối các hệ thống.",

        builtTitle: "Tôi đã xây dựng gì",
        builtItems: [
            "Tích hợp bot vào Microsoft Teams để tương tác Jira theo thời gian thực qua chat",
            "Tạo, chỉnh sửa và gán Jira issue trực tiếp từ cuộc trò chuyện trong Teams",
            "Xem tất cả issue được giao cho người dùng hiện tại mà không cần mở trình duyệt",
            "Tóm tắt mô tả issue bằng AI thông qua Gemini Studio",
            "Tích hợp RESTful với Jira APIs (CRUD issue, tra cứu user, metadata dự án)",
            "Power Automate flows để điều phối thông báo và routing nhiều bước",
        ],

        demoTitle: "Demo",
        demoImages: [
            { src: CreateIssue, caption: "Cuộc hội thoại bot — luồng tạo issue" },
            { src: GetDetailsIssue, caption: "Card chi tiết issue với tóm tắt AI" },
            { src: MyAssignIssue, caption: "Danh sách issue được giao trong Teams" },
            { src: TransitionWorkflow, caption: "Chuyển trạng thái workflow của issue" },
            { src: UpdateIssueDescription, caption: "Cập nhật mô tả issue qua bot" },
        ],

        impactTitle: "Kết quả đạt được",
        impactItems: [
            "Giảm thời gian review và phân loại Jira issue bằng cách loại bỏ việc chuyển đổi ngữ cảnh",
            "Đơn giản hóa thao tác Jira cho thành viên không kỹ thuật ngay trong Teams",
            "Cải thiện khả năng hiển thị quy trình nội bộ với thông báo ticket theo thời gian thực",
            "Thiết lập mẫu tích hợp có thể tái sử dụng cho các dự án bot tương lai tại SSI",
        ],

        challengesTitle: "Thách thức & Giải pháp",
        challenges: [
            {
                problem: "Payload webhook của Jira khác nhau theo từng loại sự kiện, khiến việc parse phức tạp",
                solution: "Xây dựng một lớp normaliser trong Spring Boot để map tất cả event types về một DTO thống nhất trước khi forward sang Teams.",
            },
            {
                problem: "Gemini Studio hỗ trợ hạn chế cho dữ liệu động tại thời điểm thiết kế",
                solution: "Ủy thác việc parse intent AI cho Gemini, còn toàn bộ fetch dữ liệu xử lý trong service layer của Spring Boot.",
            },
            {
                problem: "Độ tin cậy của Power Automate Desktop flow trên mạng nội bộ SSI",
                solution: "Thêm retry logic và fallback trigger qua email để xử lý các sự cố kết nối không liên tục.",
            },
        ],

        /* ── CV Matcher ── */
        cvEyebrow: "Công cụ tuyển dụng AI · SSI Securities",
        cvTitle: "CV Matcher — Hệ thống phân tích CV tự động",
        cvSubtitle: "Hệ thống tự động phân tích CV ứng viên và đánh giá mức độ phù hợp với JD thông qua AI",
        cvStack: ["Python", "FastAPI", "React", "Ollama", "Mistral"],

        cvOverviewTitle: "Tổng quan",
        cvOverviewText:
            "Xây dựng công cụ tuyển dụng nội bộ tự động phân tích CV và JD qua AI (Ollama + Mistral), chấm điểm theo 3 tiêu chí, toàn bộ dữ liệu xử lý offline.",

        cvBuiltTitle: "Tôi đã xây dựng gì",
        cvBuiltItems: [
            "Upload & parse file PDF cho cả Job Description và CV ứng viên",
            "Phân tích AI local qua Ollama + Mistral — hoàn toàn offline, không rò rỉ dữ liệu",
            "Chấm điểm 3 tiêu chí: Hard Skills (40%), Kinh nghiệm (40%), Học vấn (20%)",
            "Tab Lịch sử để tra cứu tất cả các lần phân tích trước",
            "Xuất kết quả phân tích ra file Excel để báo cáo HR",
            "Backend RESTful với FastAPI + Swagger docs tại /docs",
        ],

        cvDemoTitle: "Demo",
        cvDemoImages: [          
            { src: AnalyzeCV ,   caption: "Đăng tải CV và kích hoạt phân tích AI" },
            { src: ManageJD ,  caption: "Đăng tải và quản lý Job Description, phân tích đẩy lý do tại sao ứng viên phù hợp và không phù hợp cho từng tiêu chí" },
            { src: Result,   caption: "Hiển thị kết quả cho từng ứng viên với từng JD" },
            { src: ExcelResult,    caption: "Xuất kết quả ra file Excel" },
        ],

        cvImpactTitle: "Kết quả đạt được",
        cvImpactItems: [
            "Giảm đáng kể thời gian review CV thủ công cho team HR",
            "Chuẩn hóa việc chấm điểm ứng viên với tiêu chí nhất quán, khách quan",
            "Xử lý 100% offline — dữ liệu tuyển dụng nhạy cảm không rời khỏi mạng SSI",
            "Export Excel giúp streamline quy trình báo cáo và bàn giao cho hiring manager",
        ],

        cvChallengesTitle: "Thách thức & Giải pháp",
        cvChallenges: [
            {
                problem: "Ollama chạy local — mỗi lần phân tích CV mất 1–2 phút",
                solution: "Thêm loading indicator với async polling để UI vẫn responsive và người dùng biết phân tích đang chạy.",
            },
            {
                problem: "Chất lượng parse PDF khác nhau giữa các định dạng CV",
                solution: "Thêm bước pre-processing normalize text trước khi đưa vào AI model.",
            },
            {
                problem: "Độ công bằng khi chấm điểm với các JD có độ chi tiết khác nhau",
                solution: "Thiết kế prompt yêu cầu Mistral chỉ extract các yêu cầu được nêu rõ ràng, tránh hallucinate skill.",
            },
        ],
    },
};

/* ─────────────────────────────────────────────
   ICON MAPS
───────────────────────────────────────────── */
const builtIcons   = [Bot, Zap, Users, BarChart3, ExternalLink, Zap];
const cvBuiltIcons = [FileText, Brain, BarChart2, Clock, Download, ExternalLink];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function SSIExperience() {
    const { lang } = useLanguage();
    const t = content[lang];

    return (
        <section className="detail container">

            {/* ── Back button top ── */}
            <div className="detail__back-row">
                <Link to="/experience" className="detail__back-btn">
                    <ArrowLeft size={18} aria-hidden="true" />
                    <span>{t.backBtn}</span>
                </Link>
            </div>

            {/* ════════════════════════════════════
                PROJECT 1 — SSI Jira Bot
            ════════════════════════════════════ */}

            <header className="detail__header">
                <span className="detail__eyebrow">{t.eyebrow}</span>
                <h1 className="detail__title">{t.title}</h1>
                <p className="detail__subtitle">{t.subtitle}</p>
                <div className="detail__stack">
                    {t.stack.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                    ))}
                </div>
            </header>

            <div className="detail__panel">
                <div className="detail__section">
                    <h2 className="detail__section-title">{t.overviewTitle}</h2>
                    <p className="detail__body">{t.overviewText}</p>
                </div>

                <div className="detail__section">
                    <h2 className="detail__section-title">{t.builtTitle}</h2>
                    <ul className="detail__built-list">
                        {t.builtItems.map((item, idx) => {
                            const Icon = builtIcons[idx] ?? Zap;
                            return (
                                <li key={idx} className="detail__built-item">
                                    <span className="detail__built-icon" aria-hidden="true">
                                        <Icon size={18} />
                                    </span>
                                    <span>{item}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className="detail__section">
                <h2 className="detail__section-title">{t.demoTitle}</h2>
                <DemoSlideshow
                    images={t.demoImages}
                    emptyText={lang === "vi" ? "Ảnh demo sẽ được cập nhật sớm" : "Demo screenshots coming soon"}
                />
            </div>

            <div className="detail__two-col">
                <div className="detail__stat-card">
                    <h2 className="detail__section-title">{t.impactTitle}</h2>
                    <ul className="detail__impact-list">
                        {t.impactItems.map((item, idx) => (
                            <li key={idx} className="detail__impact-item">{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="detail__stat-card detail__stat-card--accent">
                    <h2 className="detail__section-title">{t.challengesTitle}</h2>
                    <div className="detail__challenges">
                        {t.challenges.map((c, idx) => (
                            <div key={idx} className="detail__challenge-item">
                                <p className="detail__challenge-problem">
                                    <span className="detail__challenge-label">
                                        {lang === "vi" ? "Vấn đề" : "Problem"}
                                    </span>
                                    {c.problem}
                                </p>
                                <p className="detail__challenge-solution">
                                    <span className="detail__challenge-label detail__challenge-label--solution">
                                        {lang === "vi" ? "Giải pháp" : "Solution"}
                                    </span>
                                    {c.solution}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ════════════════════════════════════
                DIVIDER
            ════════════════════════════════════ */}
            <div className="detail__project-divider">
                
            </div>

            {/* ════════════════════════════════════
                PROJECT 2 — CV Matcher
            ════════════════════════════════════ */}

            <header className="detail__header">
                <div className="detail__eyebrow-row">
                    <span className="detail__eyebrow">{t.cvEyebrow}</span>
                </div>
                <h1 className="detail__title">{t.cvTitle}</h1>
                <p className="detail__subtitle">{t.cvSubtitle}</p>
                <div className="detail__stack">
                    {t.cvStack.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                    ))}
                </div>
            </header>

            <div className="detail__panel">
                <div className="detail__section">
                    <h2 className="detail__section-title">{t.cvOverviewTitle}</h2>
                    <p className="detail__body">{t.cvOverviewText}</p>
                </div>

                <div className="detail__section">
                    <h2 className="detail__section-title">{t.cvBuiltTitle}</h2>
                    <ul className="detail__built-list">
                        {t.cvBuiltItems.map((item, idx) => {
                            const Icon = cvBuiltIcons[idx] ?? Zap;
                            return (
                                <li key={idx} className="detail__built-item">
                                    <span className="detail__built-icon" aria-hidden="true">
                                        <Icon size={18} />
                                    </span>
                                    <span>{item}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className="detail__section">
                <h2 className="detail__section-title">{t.cvDemoTitle}</h2>
                <DemoSlideshow
                    images={t.cvDemoImages}
                    emptyText={lang === "vi" ? "Ảnh demo sẽ được cập nhật sớm" : "Demo screenshots coming soon"}
                />
            </div>

            <div className="detail__two-col">
                <div className="detail__stat-card">
                    <h2 className="detail__section-title">{t.cvImpactTitle}</h2>
                    <ul className="detail__impact-list">
                        {t.cvImpactItems.map((item, idx) => (
                            <li key={idx} className="detail__impact-item">{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="detail__stat-card detail__stat-card--accent">
                    <h2 className="detail__section-title">{t.cvChallengesTitle}</h2>
                    <div className="detail__challenges">
                        {t.cvChallenges.map((c, idx) => (
                            <div key={idx} className="detail__challenge-item">
                                <p className="detail__challenge-problem">
                                    <span className="detail__challenge-label">
                                        {lang === "vi" ? "Vấn đề" : "Problem"}
                                    </span>
                                    {c.problem}
                                </p>
                                <p className="detail__challenge-solution">
                                    <span className="detail__challenge-label detail__challenge-label--solution">
                                        {lang === "vi" ? "Giải pháp" : "Solution"}
                                    </span>
                                    {c.solution}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Bottom back button ── */}
            <div className="detail__back-row detail__back-row--bottom">
                <Link to="/experience" className="detail__back-btn">
                    <ArrowLeft size={18} aria-hidden="true" />
                    <span>{t.backBtn}</span>
                </Link>
            </div>

        </section>
    );
}

