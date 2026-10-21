import { Link } from "react-router-dom";
import { ArrowLeft, Map, LayoutDashboard, BadgeDollarSign, PenSquare, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import DemoSlideshow from "../components/DemoSlideshow";
import ManagePrices from "../assets/PuraPictures/ManagePrices.png";
import EditServices from "../assets/PuraPictures/EditServices.jpg";
import BlogEditor from "../assets/PuraPictures/BlogEditor.png";

/* ─────────────────────────────────────────────
   BILINGUAL CONTENT
───────────────────────────────────────────── */
const content = {
    en: {
        backBtn: "Back to Experience",
        eyebrow: "Freelance Project · AQ.LAB Vietnam",
        title: "Pura Ha Giang Loop",
        subtitle: "Tour booking website & admin CMS for a Ha Giang tour operator",
        stack: ["React", "Vite", "Supabase", "JavaScript", "HTML/CSS"],
        liveLabel: "Visit live website",

        overviewTitle: "Overview",
        overviewText:
            "Built and deployed a tour booking website together with an admin CMS, so the client can update content, prices and blog posts on their own without a developer.",

        builtTitle: "What I Built",
        builtItems: [
            "Public site with tour listings, booking & rates, services, blog and an interactive route map with 13 clickable stops",
            "In-place page editing: admins change text and images directly on the live page layout",
            "Price management for room upgrades and transport routes — new prices apply instantly for guests",
            "Blog editor with cover slideshow, drafts, preview, publish checklist and media stored on Supabase Storage",
        ],

        demoTitle: "Admin Demo",
        demoImages: [
            { src: ManagePrices, caption: "Manage prices for add-ons and transport routes" },
            { src: EditServices, caption: "Edit service page content and room images in place" },
            { src: BlogEditor, caption: "Blog editor with cover photos, drafts and publishing" },
        ],
    },

    vi: {
        backBtn: "Quay lại Kinh nghiệm",
        eyebrow: "Dự án Freelance · AQ.LAB Việt Nam",
        title: "Pura Ha Giang Loop",
        subtitle: "Website đặt tour & trang quản trị cho đơn vị tour Hà Giang",
        stack: ["React", "Vite", "Supabase", "JavaScript", "HTML/CSS"],
        liveLabel: "Xem website đang chạy",

        overviewTitle: "Tổng quan",
        overviewText:
            "Xây dựng và triển khai website đặt tour kèm trang quản trị (CMS), giúp khách hàng tự cập nhật nội dung, giá và bài blog mà không cần lập trình viên.",

        builtTitle: "Tôi đã xây dựng gì",
        builtItems: [
            "Trang công khai gồm danh sách tour, bảng giá & đặt tour, dịch vụ, blog và bản đồ cung đường tương tác với 13 điểm dừng",
            "Chỉnh sửa trực tiếp trên trang: admin thay đổi chữ và hình ảnh ngay trên bố cục thật của website",
            "Quản lý giá nâng hạng phòng và tuyến xe — giá mới áp dụng ngay cho khách đặt tour",
            "Trình soạn blog với slideshow ảnh bìa, lưu nháp, xem trước, checklist trước khi xuất bản và lưu media trên Supabase Storage",
        ],

        demoTitle: "Demo trang quản trị",
        demoImages: [
            { src: ManagePrices, caption: "Quản lý giá dịch vụ và tuyến xe" },
            { src: EditServices, caption: "Chỉnh sửa nội dung và ảnh phòng ngay trên trang Dịch vụ" },
            { src: BlogEditor, caption: "Trình soạn blog với ảnh bìa, lưu nháp và xuất bản" },
        ],
    },
};

const builtIcons = [Map, LayoutDashboard, BadgeDollarSign, PenSquare];
const LIVE_URL = "https://purahagiangloop.com/";

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function PuraExperience() {
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
                            const Icon = builtIcons[idx] ?? Map;
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
