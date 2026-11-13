import { Link } from "react-router-dom";
import { ArrowLeft, House, Database, Inbox, Globe, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import DemoSlideshow from "../components/DemoSlideshow";
import VillaEdit from "../assets/KaitranPictures/VillaEdit.webp";
import DichVuEdit from "../assets/KaitranPictures/DichVuEdit.webp";
import Pages from "../assets/KaitranPictures/Pages.webp";

/* ─────────────────────────────────────────────
   BILINGUAL CONTENT
───────────────────────────────────────────── */
const content = {
    en: {
        backBtn: "Back to Experience",
        eyebrow: "Project · AQ.LAB Vietnam",
        title: "Kaitran Villas",
        subtitle: "Multilingual private-pool villa rental website with booking requests and admin",
        stack: ["WordPress", "PHP", "JavaScript", "SCF (Custom Fields)", "GTranslate", "Rank Math SEO"],
        liveLabel: "Visit live website",

        overviewTitle: "Overview",
        overviewText:
            "Built a website for a private-pool villa rental service in Ho Chi Minh City, bundled with food & entertainment, car rental and multilingual tour guides. Guests can filter villas and send booking requests, while staff manage listings, services and requests from a structured WordPress admin.",

        builtTitle: "What I Built",
        builtItems: [
            "Custom WordPress theme with villa search filters (area, guests, bedrooms) and listings showing rooms, capacity, amenities and availability status",
            "Custom post types and fields (SCF) for villas, food & entertainment, cars and guides, with taxonomies for areas, amenities and service types",
            "Booking & contact request management: requests saved in the admin with status and type filters and CSV export, email delivery via WP Mail SMTP",
            "5 languages (Vietnamese, English, Chinese, Korean, Japanese), chat links for Zalo, WhatsApp, WeChat and KakaoTalk, SEO with Rank Math and WebP images",
        ],

        demoTitle: "Admin Demo",
        demoImages: [
            { src: VillaEdit, caption: "Add a villa: custom fields, availability status and area taxonomy" },
            { src: DichVuEdit, caption: "Add a food & entertainment service with capacity, price and service type" },
            { src: Pages, caption: "Site pages built on the custom theme" },
        ],
    },

    vi: {
        backBtn: "Quay lại Kinh nghiệm",
        eyebrow: "Dự án · AQ.LAB Việt Nam",
        title: "Kaitran Villas",
        subtitle: "Website cho thuê villa hồ bơi riêng đa ngôn ngữ, có yêu cầu đặt và trang quản trị",
        stack: ["WordPress", "PHP", "JavaScript", "SCF (Custom Fields)", "GTranslate", "Rank Math SEO"],
        liveLabel: "Xem website đang chạy",

        overviewTitle: "Tổng quan",
        overviewText:
            "Xây dựng website cho thuê villa có hồ bơi riêng tại TP.HCM, kèm dịch vụ ẩm thực & giải trí, thuê xe và hướng dẫn viên nhiều thứ tiếng. Khách lọc villa và gửi yêu cầu đặt, còn nhân viên tự quản lý villa, dịch vụ và yêu cầu trong trang quản trị WordPress được tổ chức rõ ràng.",

        builtTitle: "Tôi đã xây dựng gì",
        builtItems: [
            "Theme WordPress riêng với bộ lọc tìm villa (khu vực, số khách, số phòng ngủ) và danh sách villa hiển thị số phòng, sức chứa, tiện ích, trạng thái còn nhận khách",
            "Custom post type và trường tuỳ chỉnh (SCF) cho villa, ẩm thực & giải trí, xe và hướng dẫn viên, kèm phân loại khu vực, tiện ích, loại dịch vụ",
            "Quản lý yêu cầu đặt và liên hệ: lưu trong trang quản trị, lọc theo trạng thái và loại, xuất CSV, gửi email qua WP Mail SMTP",
            "5 ngôn ngữ (Việt, Anh, Trung, Hàn, Nhật), nút liên hệ Zalo, WhatsApp, WeChat, KakaoTalk, SEO với Rank Math và ảnh WebP",
        ],

        demoTitle: "Demo trang quản trị",
        demoImages: [
            { src: VillaEdit, caption: "Thêm villa: trường tuỳ chỉnh, trạng thái và khu vực" },
            { src: DichVuEdit, caption: "Thêm dịch vụ ẩm thực & giải trí với sức chứa, giá và loại dịch vụ" },
            { src: Pages, caption: "Các trang của website trên theme tự xây" },
        ],
    },
};

const builtIcons = [House, Database, Inbox, Globe];
const LIVE_URL = "https://kaitranvillas.com/";

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function KaitranExperience() {
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
                            const Icon = builtIcons[idx] ?? House;
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
