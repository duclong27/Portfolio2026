import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Bot, Zap, Users, BarChart3, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import CreateIssue from "../assets/SSIPictures/CreateIssue.png";
import GetDetailsIssue from "../assets/SSIPictures/GetIssue.png";
import MyAssignIssue from "../assets/SSIPictures/MyAssignsIssue.png";
import TransitionWorkflow from "../assets/SSIPictures/TransitionWorkflows.png";
import UpdateIssueDescription from "../assets/SSIPictures/UpdateDescription.png";


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
    },
};

/* ─────────────────────────────────────────────
   ICON MAP
───────────────────────────────────────────── */
const builtIcons = [Bot, Zap, Users, BarChart3, ExternalLink, Zap];

/* ─────────────────────────────────────────────
   SLIDESHOW COMPONENT
───────────────────────────────────────────── */
function DemoSlideshow({ images }) {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => Math.max(0, c - 1));
    const next = () => setCurrent((c) => Math.min(images.length - 1, c + 1));

    const img = images[current];

    return (
        <div className="ssi__slideshow">

            {/* Ảnh — tự co theo kích thước thật */}
            <div className="ssi__slide-img-wrap">
                <img
                    key={current}          /* key để React re-mount khi đổi ảnh */
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                />
            </div>

            {/* Caption + Prev/Next + Counter */}
            <div className="ssi__slide-bar">
                <button
                    className="ssi__slide-btn"
                    onClick={prev}
                    disabled={current === 0}
                    aria-label="Previous"
                >
                    ‹
                </button>

                <span className="ssi__slide-caption">{img.caption}</span>

                <span className="ssi__slide-counter">
                    {current + 1} / {images.length}
                </span>

                <button
                    className="ssi__slide-btn"
                    onClick={next}
                    disabled={current === images.length - 1}
                    aria-label="Next"
                >
                    ›
                </button>
            </div>

            {/* Dot indicators */}
            {images.length > 1 && (
                <div className="ssi__slide-dots" role="tablist">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            role="tab"
                            aria-selected={idx === current}
                            aria-label={`Slide ${idx + 1}`}
                            className={
                                "ssi__slide-dot" +
                                (idx === current ? " ssi__slide-dot--active" : "")
                            }
                            onClick={() => setCurrent(idx)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function SSIExperience() {
    const { lang } = useLanguage();
    const t = content[lang];

    return (
        <section className="ssi container">

            {/* ── Back button ── */}
            <div className="ssi__back-row">
                <Link to="/experience" className="ssi__back-btn">
                    <ArrowLeft size={18} aria-hidden="true" />
                    <span>{t.backBtn}</span>
                </Link>
            </div>

            {/* ── Header ── */}
            <header className="ssi__header">
                <span className="ssi__eyebrow">{t.eyebrow}</span>
                <h1 className="ssi__title">{t.title}</h1>
                <p className="ssi__subtitle">{t.subtitle}</p>
                <div className="ssi__stack">
                    {t.stack.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                    ))}
                </div>
            </header>

            {/* ── Overview + What I Built ── */}
            <div className="ssi__panel">
                <div className="ssi__section">
                    <h2 className="ssi__section-title">{t.overviewTitle}</h2>
                    <p className="ssi__body">{t.overviewText}</p>
                </div>

                <div className="ssi__section">
                    <h2 className="ssi__section-title">{t.builtTitle}</h2>
                    <ul className="ssi__built-list">
                        {t.builtItems.map((item, idx) => {
                            const Icon = builtIcons[idx] ?? Zap;
                            return (
                                <li key={idx} className="ssi__built-item">
                                    <span className="ssi__built-icon" aria-hidden="true">
                                        <Icon size={18} />
                                    </span>
                                    <span>{item}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* ── Demo slideshow ── */}
            <div className="ssi__section">
                <h2 className="ssi__section-title">{t.demoTitle}</h2>
                <DemoSlideshow images={t.demoImages} />
            </div>

            {/* ── Impact + Challenges ── */}
            <div className="ssi__two-col">

                <div className="ssi__stat-card">
                    <h2 className="ssi__section-title">{t.impactTitle}</h2>
                    <ul className="ssi__impact-list">
                        {t.impactItems.map((item, idx) => (
                            <li key={idx} className="ssi__impact-item">{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="ssi__stat-card ssi__stat-card--accent">
                    <h2 className="ssi__section-title">{t.challengesTitle}</h2>
                    <div className="ssi__challenges">
                        {t.challenges.map((c, idx) => (
                            <div key={idx} className="ssi__challenge-item">
                                <p className="ssi__challenge-problem">
                                    <span className="ssi__challenge-label">
                                        {lang === "vi" ? "Vấn đề" : "Problem"}
                                    </span>
                                    {c.problem}
                                </p>
                                <p className="ssi__challenge-solution">
                                    <span className="ssi__challenge-label ssi__challenge-label--solution">
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
            <div className="ssi__back-row ssi__back-row--bottom">
                <Link to="/experience" className="ssi__back-btn">
                    <ArrowLeft size={18} aria-hidden="true" />
                    <span>{t.backBtn}</span>
                </Link>
            </div>

        </section>
    );
}
