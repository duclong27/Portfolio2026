import { Link } from "react-router-dom";
import { ArrowLeft, LayoutGrid, Languages, FolderKanban, ListChecks, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import DemoSlideshow from "../components/DemoSlideshow";
import DuAn from "../assets/PhucHuyPictures/DuAn.webp";
import HauTruong from "../assets/PhucHuyPictures/HauTruong.webp";
import KyNang from "../assets/PhucHuyPictures/KyNang.webp";
import SuaKyNang from "../assets/PhucHuyPictures/SuaKyNang.webp";

/* ─────────────────────────────────────────────
   BILINGUAL CONTENT
───────────────────────────────────────────── */
const content = {
    en: {
        backBtn: "Back to Experience",
        eyebrow: "Freelance Project · AQ.LAB Vietnam",
        title: "Phúc Huy – Event Project Manager",
        subtitle: "Bilingual personal portfolio landing page with a content admin",
        stack: ["WordPress", "PHP", "JavaScript", "SCF (Custom Fields)", "Custom i18n (VI/EN)"],
        liveLabel: "Visit live website",

        overviewTitle: "Overview",
        overviewText:
            "Built a Vietnamese/English portfolio landing page for an event project manager with 15+ years of experience, presenting projects, career timeline, skills and behind-the-scenes albums. Every section is managed from a tailored WordPress admin, so the owner can update content in both languages on his own.",

        builtTitle: "What I Built",
        builtItems: [
            "Custom theme: hero with stats ticker, client logos, portfolio in 7 event categories with case-study pages, experience timeline, skills circle, behind-the-scenes albums and contact form",
            "Built-in bilingual system (VI/EN with /en/ URLs): side-by-side Vietnamese and English fields, English falls back to Vietnamese when empty, and a \"Missing EN\" column to track untranslated content",
            "Custom post types for projects (event types, tags), behind-the-scenes albums (up to 10 photos + YouTube link), skills (icon picker, auto-numbered nodes on the circle), testimonials and contact messages",
            "Admin made easy for a non-technical owner: drag-and-drop ordering in every list and short guidance notes on each screen",
        ],

        demoTitle: "Admin Demo",
        demoImages: [
            { src: DuAn, caption: "Projects list with event types, tags and a \"Missing EN\" column" },
            { src: HauTruong, caption: "Behind-the-scenes albums with drag-and-drop ordering" },
            { src: KyNang, caption: "Skills shown as nodes on the skills circle" },
            { src: SuaKyNang, caption: "Edit a skill: icon, side-by-side VI/EN fields and bullet list" },
        ],
    },

    vi: {
        backBtn: "Quay lại Kinh nghiệm",
        eyebrow: "Dự án Freelance · AQ.LAB Việt Nam",
        title: "Phúc Huy – Event Project Manager",
        subtitle: "Landing page portfolio cá nhân song ngữ kèm trang quản trị nội dung",
        stack: ["WordPress", "PHP", "JavaScript", "SCF (Custom Fields)", "Song ngữ tự xây (VI/EN)"],
        liveLabel: "Xem website đang chạy",

        overviewTitle: "Tổng quan",
        overviewText:
            "Xây dựng landing page portfolio song ngữ Việt – Anh cho một quản lý dự án sự kiện hơn 15 năm kinh nghiệm, giới thiệu dự án, hành trình nghề nghiệp, kỹ năng và album hậu trường. Mọi phần đều quản lý trong trang quản trị WordPress được thiết kế riêng, giúp chủ website tự cập nhật nội dung cả hai ngôn ngữ.",

        builtTitle: "Tôi đã xây dựng gì",
        builtItems: [
            "Theme riêng: hero có dải số liệu chạy, logo khách hàng, portfolio 7 nhóm sự kiện kèm trang chi tiết, timeline kinh nghiệm, vòng tròn kỹ năng, album hậu trường và form liên hệ",
            "Hệ song ngữ tự xây (VI/EN, đường dẫn /en/): trường tiếng Việt và tiếng Anh đặt cạnh nhau, để trống tiếng Anh thì tự hiện tiếng Việt, có cột \"Thiếu EN\" để theo dõi phần chưa dịch",
            "Custom post type cho dự án (loại sự kiện, tag), album hậu trường (tối đa 10 ảnh + link YouTube), kỹ năng (chọn biểu tượng, tự đánh số trên vòng tròn), nhận xét và liên hệ",
            "Trang quản trị dễ dùng cho người không rành kỹ thuật: kéo thả đổi thứ tự ở mọi danh sách, ghi chú hướng dẫn ngắn trên từng màn hình",
        ],

        demoTitle: "Demo trang quản trị",
        demoImages: [
            { src: DuAn, caption: "Danh sách dự án với loại sự kiện, tag và cột \"Thiếu EN\"" },
            { src: HauTruong, caption: "Album hậu trường, kéo thả để đổi thứ tự" },
            { src: KyNang, caption: "Kỹ năng hiển thị thành các nút trên vòng tròn" },
            { src: SuaKyNang, caption: "Sửa kỹ năng: biểu tượng, trường VI/EN song song và gạch đầu dòng" },
        ],
    },
};

const builtIcons = [LayoutGrid, Languages, FolderKanban, ListChecks];
const LIVE_URL = "https://huynp18.com/";

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function PhucHuyExperience() {
    const { lang } = useLanguage();
    const t = content[lang];

    return (
        <section className="detail container">
            <div className="detail__back-row">
                <Link to="/experience" className="detail__back-btn">
                    <ArrowLeft size={18} aria-hidden="true" />
                    <span>{t.backBtn}</span>
                </Link>
            </div>

            <header className="detail__header">
                <span className="detail__eyebrow">{t.eyebrow}</span>
                <h1 className="detail__title">{t.title}</h1>
                <p className="detail__subtitle">{t.subtitle}</p>
                <div className="detail__stack">
                    {t.stack.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                    ))}
                </div>
                <a
                    href={LIVE_URL}
                    className="exp__detail-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ExternalLink size={16} aria-hidden="true" />
                    {t.liveLabel}
                </a>
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
                            const Icon = builtIcons[idx] ?? LayoutGrid;
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
                <DemoSlideshow images={t.demoImages} />
            </div>

            <div className="detail__back-row detail__back-row--bottom">
                <Link to="/experience" className="detail__back-btn">
                    <ArrowLeft size={18} aria-hidden="true" />
                    <span>{t.backBtn}</span>
                </Link>
            </div>
        </section>
    );
}
