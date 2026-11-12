import { Link } from "react-router-dom";
import { ArrowLeft, ClipboardList, PenSquare, LayoutTemplate, Server, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import DemoSlideshow from "../components/DemoSlideshow";
import TongQuan from "../assets/AchiPictures/TongQuan.webp";
import BaiViet from "../assets/AchiPictures/BaiViet.webp";
import HeroTrangChu from "../assets/AchiPictures/HeroTrangChu.webp";
import LichNamHoc from "../assets/AchiPictures/LichNamHoc.webp";
import CoSoVatChat from "../assets/AchiPictures/CoSoVatChat.webp";

/* ─────────────────────────────────────────────
   BILINGUAL CONTENT
───────────────────────────────────────────── */
const content = {
    en: {
        backBtn: "Back to Experience",
        eyebrow: "Freelance Project · AQ.LAB Vietnam",
        title: "Achi Home Montessori",
        subtitle: "Kindergarten website & admin CMS, self-hosted on a company VPS",
        stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Supabase", "Docker"],
        liveLabel: "Visit live website",

        overviewTitle: "Overview",
        overviewText:
            "Built and deployed a 33-page, mobile-first website for a Montessori kindergarten together with a custom admin CMS, so the school can manage visit registrations, weekly menus, news and page content on their own. The whole stack is self-hosted on the company VPS with Docker.",

        builtTitle: "What I Built",
        builtItems: [
            "Visit registration flow: form with validation and spam protection, admin list with status pipeline, internal notes, statistics and Excel export",
            "News CMS with a rich-text editor (Tiptap), in-browser image compression, focal-point picking, show/hide and SEO fields",
            "Page-content editor for 9 sections (hero slider, team, FAQ, tuition with auto-calculated totals, school calendar, daily schedules…) – 17 of 33 pages editable without code",
            "Self-hosted Supabase (PostgreSQL, Auth, Storage, RLS) and Next.js in Docker behind Nginx with SSL, nightly backups, sitemap and structured data for SEO",
        ],

        demoTitle: "Admin Demo",
        demoImages: [
            { src: TongQuan, caption: "Dashboard with new visit registrations" },
            { src: BaiViet, caption: "News management: search, filter, show/hide" },
            { src: HeroTrangChu, caption: "Edit the homepage hero slider with focal-point picking" },
            { src: LichNamHoc, caption: "School-year calendar editor, events grouped by month" },
            { src: CoSoVatChat, caption: "Facilities page editor with fixed-layout image slots" },
        ],
    },

    vi: {
        backBtn: "Quay lại Kinh nghiệm",
        eyebrow: "Dự án Freelance · AQ.LAB Việt Nam",
        title: "Achi Home Montessori",
        subtitle: "Website trường mầm non & trang quản trị, tự triển khai trên VPS công ty",
        stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Supabase", "Docker"],
        liveLabel: "Xem website đang chạy",

        overviewTitle: "Tổng quan",
        overviewText:
            "Xây dựng và triển khai website 33 trang, ưu tiên mobile cho một trường mầm non Montessori, kèm trang quản trị riêng giúp nhà trường tự quản lý đăng ký tham quan, thực đơn tuần, tin tức và nội dung các trang. Toàn bộ hệ thống tự triển khai trên VPS công ty bằng Docker.",

        builtTitle: "Tôi đã xây dựng gì",
        builtItems: [
            "Luồng đăng ký tham quan: form có kiểm tra dữ liệu và chống spam, trang quản lý theo trạng thái, ghi chú nội bộ, thống kê và xuất Excel",
            "Quản lý tin tức với trình soạn thảo (Tiptap), nén ảnh ngay trên trình duyệt, chọn điểm lấy nét, ẩn/hiện bài và trường SEO",
            "Trình sửa nội dung cho 9 mục (slider trang chủ, đội ngũ, hỏi đáp, học phí tự cộng tổng, lịch năm học, lịch sinh hoạt…) – 17/33 trang sửa được không cần code",
            "Tự host Supabase (PostgreSQL, Auth, Storage, RLS) và Next.js bằng Docker sau Nginx có SSL, sao lưu tự động mỗi đêm, sitemap và dữ liệu cấu trúc cho SEO",
        ],

        demoTitle: "Demo trang quản trị",
        demoImages: [
            { src: TongQuan, caption: "Tổng quan với các đăng ký tham quan mới" },
            { src: BaiViet, caption: "Quản lý bài viết: tìm kiếm, lọc, ẩn/hiện" },
            { src: HeroTrangChu, caption: "Sửa slider trang chủ, chọn điểm lấy nét ảnh" },
            { src: LichNamHoc, caption: "Sửa lịch năm học, sự kiện theo từng tháng" },
            { src: CoSoVatChat, caption: "Sửa trang Cơ sở vật chất với các ô ảnh cố định" },
        ],
    },
};

const builtIcons = [ClipboardList, PenSquare, LayoutTemplate, Server];
const LIVE_URL = "https://achihome.edu.vn/";

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function AchiExperience() {
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
                            const Icon = builtIcons[idx] ?? ClipboardList;
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
