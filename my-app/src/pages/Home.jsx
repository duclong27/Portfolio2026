import {
    Atom,
    Type,
    Route,
    Wind,
    Server,
    Boxes,
    KeyRound,
    Cloud,
    Database,
    GitBranch,
    Send,
    Coffee,
    Container, ShieldCheck, Workflow, Globe, ServerCog, Languages
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

import duclongPortrait from "../assets/LongPotrait.jpg";

const content = {
    vi: {
        heroTitle: " Nguyễn Đức Long — Fullstack Developer",
        heroLead:
            "Xây dựng ứng dụng web sạch, dễ bảo trì, chú trọng performance, bảo mật và trải nghiệm người dùng.",
        ctaProfile: "Xem Profile",
        ctaContact: "Liên hệ nhanh",
        stats: [
            { value: "8+", label: "Tháng kinh nghiệm" },
            { value: "3+", label: "Dự án đã triển khai" },
            { value: "99.9%", label: "Uptime đã duy trì" },
        ],
        aboutTitle: "Về tôi",
        aboutDesc:
            "Mình thích biến yêu cầu phức tạp thành sản phẩm gọn gàng, dễ mở rộng. Luôn ưu tiên clean code, luồng dữ liệu rõ, testing và quan tâm tới cảm nhận người dùng cuối.",
        values: [
            {
                title: "Kiến trúc gọn gàng",
                desc: "Ưu tiên cấu trúc rõ ràng, tách biệt concern, luồng dữ liệu dễ theo dõi.",
            },
            {
                title: "Performance & ổn định",
                desc: "Tối ưu tốc độ, kiểm soát lỗi, đảm bảo dữ liệu nhất quán.",
            },
            {
                title: "Responsive & UX",
                desc: "UI mượt trên mọi thiết bị, focus accessibility và tương tác nhỏ tinh tế.",
            },
        ],
        skillsTitle: "Kỹ năng",
        skillsDesc: "Những công cụ mình dùng thường xuyên.",
        languagesTitle: "Trình độ ngoại ngữ",
        languagesDesc: "Khả năng sử dụng ngôn ngữ của tôi.",
        portraitText: "Ảnh chân dung của bạn",
        portraitNote: "(thay bằng ảnh thật)",
        contactTitle: "Sẵn sàng hợp tác?",
    },
    en: {
        heroTitle: "Nguyen Duc Long — Fullstack Developer",
        heroLead:
            "I build clean, maintainable web applications with a focus on performance, security, and user experience.",
        ctaProfile: "View Profile",
        ctaContact: "Quick contact",
        stats: [
            { value: "6+", label: "Months of experience" },
            { value: "3+", label: "Shipped projects" },
            { value: "99.9%", label: "Uptime maintained" },
        ],
        aboutTitle: "About",
        aboutDesc:
            "I enjoy turning complex requirements into simple, extendable products. I care about clean code, clear data flows, testing, and how the final user actually feels using the app.",
        values: [
            {
                title: "Architecture mindset",
                desc: "Prefer clear structure, separation of concerns, and predictable patterns.",
            },
            {
                title: "Performance & reliability",
                desc: "Focus on fast pages, controlled errors, and consistent data.",
            },
            {
                title: "Responsive & UX",
                desc: "Layouts that stay smooth across desktop, tablet, and mobile, with attention to details.",
            },
        ],
        skillsTitle: "Skills",
        skillsDesc: "A snapshot of tools I use the most.",
        languagesTitle: "Language Proficiency",
        languagesDesc: "My language skills and proficiency levels.",
        portraitText: "Your portrait photo",
        portraitNote: "(replace with your real photo)",
        contactTitle: "Ready to collaborate?",
    },
};


const skillGroups2 = [
    {
        title: { vi: "Frontend", en: "Frontend" },
        items: [
            { label: "React", Icon: Atom },
            { label: "TypeScript", Icon: Type },
            { label: "React Router", Icon: Route },
            { label: "Tailwind", Icon: Wind },
        ],
    },
    {
        title: { vi: "Backend", en: "Backend" },
        items: [
            { label: "Node.js", Icon: Server },
            { label: "Express", Icon: Boxes },
            { label: "JWT Auth", Icon: KeyRound },
            { label: "REST APIs", Icon: Cloud },
            { label: "Java", Icon: Coffee },
        ],
    },
    {
        title: { vi: "Database / Tools", en: "Database / Tools" },
        items: [
            { label: "MySQL", Icon: Database },
            { label: "SQL", Icon: Database },
            { label: "Git", Icon: GitBranch },
            { label: "Postman", Icon: Send },
        ],
    },
    {
        title: { vi: "Deploy / DevOps", en: "Deploy / DevOps" },
        items: [
            { label: "Docker", Icon: Container },
            { label: "Nginx", Icon: ServerCog },
            { label: "Vercel", Icon: Globe },
            { label: "Render", Icon: ServerCog },
            { label: "GitHub Actions", Icon: Workflow },
        ],
    },
];

const languages = [
    {
        name: { vi: "Tiếng Anh", en: "English" },
        proficiency: {
            vi: "Thành thạo giao tiếp tiếng Anh, có kinh nghiệm dịch thuật tiếng Anh cho doanh nghiệp gia đình.",
            en: "Proficiency in English communication, experienced in English translation for family's business."
        },
        icon: Languages
    },
];

export default function Home() {
    const { lang } = useLanguage();
    const t = content[lang];

    return (
        <section className="home container">
            <div className="home__grid">
                <div className="home__intro">

                    <h1 className="home__title">{t.heroTitle}</h1>
                    <p className="home__lead">{t.heroLead}</p>

                    <div className="home__cta">
                        <a className="home__btn home__btn--solid" href="#profile">
                            {t.ctaProfile}
                        </a>
                        <a className="home__btn home__btn--ghost" href="#contact">
                            {t.ctaContact}
                        </a>
                    </div>

                    <div className="home__stats">
                        {t.stats.map((s) => (
                            <div key={s.label}>
                                <p className="home__stat-value">{s.value}</p>
                                <p className="home__stat-label">{s.label}</p>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="home__portrait">
                    <div className="home__portrait-frame">
                        <img
                            src={duclongPortrait}
                            alt="Duc Long portrait"
                            className="home__portrait-img"
                        />
                    </div>
                </div>
            </div>

            <div id="profile" className="home__panel">
                <div className="home__section">
                    <h2 className="home__section-title">{t.aboutTitle}</h2>


                    <div className="home__values">
                        {t.values.map((v) => (
                            <article key={v.title} className="home__card">
                                <p className="home__card-title">{v.title}</p>
                                <p className="home__card-desc">{v.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="home__section">
                    <h2 className="home__section-title">{t.skillsTitle}</h2>


                    <div className="home__skills">
                        {skillGroups2.map((group) => (
                            <div key={group.title.en} className="home__skill-card">
                                <p className="home__card-title">{group.title[lang]}</p>

                                <div className="home__tags">
                                    {group.items.map(({ label, Icon }) => (
                                        <span key={label} className="tag tag--icon">
                                            <Icon size={30} />
                                            <span>{label}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="home__section">
                    <h2 className="home__section-title">{t.languagesTitle}</h2>

                    <div className="home__languages">
                        {languages.map((langItem) => (
                            <div key={langItem.name.en} className="home__language-card">
                                <div className="home__language-header">
                                    <div className="home__language-icon">
                                        <langItem.icon size={48} />
                                    </div>
                                    <div className="home__language-info">
                                        <h3 className="home__language-name">{langItem.name[lang]}</h3>
                                    </div>
                                </div>
                                <p className="home__language-proficiency">{langItem.proficiency[lang]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="contact" className="home__contact">
                <div className="home__contact-content">
                    <h2 className="home__contact-title">{t.contactTitle}</h2>
                    <p className="home__contact-desc">
                        {lang === "vi"
                            ? "Hãy liên hệ với tôi để cùng nhau tạo ra những sản phẩm tuyệt vời!"
                            : "Let's get in touch and create something amazing together!"
                        }
                    </p>
                    <div className="home__contact-links">
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=longpubg27@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="home__contact-btn home__contact-btn--primary"
                        >
                            <span>Email</span>
                        </a>
                        <a
                            href="https://github.com/duclong27"
                            className="home__contact-btn home__contact-btn--secondary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.facebook.com/uclong.632376/"
                            className="home__contact-btn home__contact-btn--secondary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}


