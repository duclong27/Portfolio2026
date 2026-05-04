import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
const coreStacks = ["Java Spring Boot", "JavaScript", "TypeScript", "Node.js", "REST APIs", "MySQL"];


const experiencesByLang = {
  en: [
    {
      time: "02/2026 — 04/2026",
      role: "Process Automation Intern",
      company: "SSI Securities Corporation ",
      location: "Hanoi",
      stack: [
        "Java",
        "Spring Boot",
        "Power Automate",
        "Microsoft Teams",
        "Jira API",
        "AI / Gemini Studio",
      ],
      highlights: [
        "Built an AI-powered Jira assistant bot integrated with Microsoft Teams for real-time issue interaction.",
        "Built and developed an AI-powered CV screening tool using Python, FastAPI, React and Ollama (Mistral) to automatically match candidates against Job Descriptions",
        "Developed Power Automate  flows to automate onboarding and document-signing workflows.",
      ],
      detailLink: "/SSIExperience",
      detailLabel: "View project details →",
    },
    {
      time: "10/2025 — 12/2025",
      role: "Fullstack Developer Intern",
      company: "Professional and Global Software Corporation",
      location: "Hanoi",
      stack: [
        ".NET",
        "Java",
        "JavaScript",
        "jQuery",
        "HTML/CSS",
        "SQL Server",
        "REST APIs",
      ],
      highlights: [
        "Developed and maintained backend modules for a Travel Management System (TMS), including supplier management and payment workflows.",
        "Implemented RESTful APIs to integrate with the MISA accounting system for accounting data synchronization.",
        "Built internal admin UI features using JavaScript and jQuery, including file and image management with elFinder.",
      ],
    },
    {
      time: "12/2024 — 03/2025",
      role: "Java Backend Intern",
      company: "HT Vietnam Group JSC",
      location: "Hanoi",
      stack: ["Java", "Spring Boot", "MySQL", "REST APIs", "Git"],
      highlights: [
        "Developed RESTful APIs using Java Spring Boot for a student management system.",
        "Handled MySQL data persistence, queries, and backend processing logic.",
        "Collaborated with frontend and QA teams in an Agile/Scrum environment.",
      ],
    },
  ],

  vi: [
    {
      time: "02/2026 — 04/2026",
      role: "Thực tập sinh Tự động hóa quy trình",
      company: "Công ty Cổ phần Chứng khoán SSI",
      location: "Hà Nội",
      stack: [
        "Java",
        "Spring Boot",
        "Power Automate",
        "Microsoft Teams",
        "Jira API",
        "AI / Gemini Studio",
      ],
      highlights: [
        "Xây dựng bot trợ lý Jira tích hợp AI vào Microsoft Teams để tương tác issue theo thời gian thực.",
        "Xây dựng và phát triển công cụ sàng lọc CV tự động sử dụng AI, tích hợp Python, FastAPI, React và Ollama (Mistral) để đánh giá mức độ phù hợp của ứng viên với JD",
        "Phát triển Power Automate flows để tự động hóa quy trình onboarding và ký tài liệu điện tử.",
      ],
      detailLink: "/SSIExperience",
      detailLabel: "Xem chi tiết dự án →",
    },
    {
      time: "10/2025 — 12/2025",
      role: "Thực tập sinh Fullstack",
      company: "Công ty Cổ phần Phần mềm Chuyên Nghiệp Toàn cầu",
      location: "Hà Nội",
      stack: [
        ".NET",
        "Java",
        "JavaScript",
        "jQuery",
        "HTML/CSS",
        "SQL Server",
        "REST API",
      ],
      highlights: [
        "Phát triển và bảo trì các module backend cho hệ thống quản lý du lịch (TMS), bao gồm quản lý nhà cung cấp và quy trình thanh toán.",
        "Xây dựng RESTful API tích hợp với hệ thống kế toán MISA để đồng bộ dữ liệu tài chính.",
        "Xây dựng giao diện quản trị nội bộ bằng JavaScript/jQuery, tích hợp elFinder để quản lý file và hình ảnh.",
      ],
    },
    {
      time: "12/2024 — 03/2025",
      role: "Thực tập sinh Java Backend",
      company: "Công ty Cổ phần Tập đoàn HT Việt Nam",
      location: "Hà Nội",
      stack: ["Java", "Spring Boot", "MySQL", "REST API", "Git"],
      highlights: [
        "Phát triển RESTful API bằng Java Spring Boot cho hệ thống quản lý sinh viên.",
        "Xử lý lưu trữ và truy vấn dữ liệu MySQL cho backend.",
        "Phối hợp làm việc cùng frontend, QA theo mô hình Agile/Scrum.",
      ],
    },
  ],
};

const textByLang = {
  vi: {
    eyebrow: "Timeline sự nghiệp",
    title: "Kinh nghiệm",
    lead: "Sản phẩm web sạch, dễ bảo trì, tập trung vào performance và trải nghiệm người dùng. Đây là hành trình tôi đã và đang xây dựng.",
    focus: ["Frontend • UI/UX", "Full-stack", "Clean code & review"],
    shippedLabel: "Dự án đã triển khai",
    shippedDesc: "Dashboard, e-commerce, microsite marketing",
    highlightLabel: "Kết quả nổi bật",
    highlightItems: [
      "Tối ưu hiệu năng, giảm 30–40% thời gian tải",
      "Thiết lập CI/CD: build, test, deploy tự động",
      "Đồng bộ design system, giảm lỗi UI lặp lại",
    ],
    stackTitle: "Tech stack tôi dùng nhiều",
  },
  en: {
    eyebrow: "Career timeline",
    title: "Experience",
    lead: "Clean, maintainable web products with a focus on performance and user experience — this is the path I'm building.",
    focus: ["Frontend • UI/UX", "Full-stack", "Clean code & reviews"],
    shippedLabel: "Shipped projects",
    shippedDesc: "Dashboards, e‑commerce, marketing microsites",
    highlightLabel: "Key outcomes",
    highlightItems: [
      "Optimised performance, cut 30–40% load time",
      "Set up CI/CD for automated build, test, and deploy",
      "Aligned design system to reduce recurring UI issues",
    ],
    stackTitle: "Tech stack I use most",
  },
};

export default function Experience() {
  const { lang } = useLanguage();
  const t = textByLang[lang];
  const experiences = experiencesByLang[lang];

  return (
    <section className="exp container">
      <div className="exp__hero">

        <h1 className="exp__title">{t.title}</h1>
        <p className="exp__lead">{t.lead}</p>

        <div className="exp__pill-row" aria-label="Focus areas">
          {t.focus.map((label) => (
            <span className="pill" key={label}>
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="exp__grid">
        <aside className="exp__aside">
          <div className="exp__stat-card">
            <p className="exp__stat-label">{t.shippedLabel}</p>
            <p className="exp__stat-value">3+</p>
            <p className="exp__stat-desc">{t.shippedDesc}</p>
          </div>

          <div className="exp__stat-card exp__stat-card--accent">
            <p className="exp__stat-label">{t.highlightLabel}</p>
            <ul className="exp__list">
              {t.highlightItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="exp__stack">
            <p className="exp__stack-title">{t.stackTitle}</p>
            <div className="exp__tags">
              {coreStacks.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <div className="exp__timeline">
          <div className="exp__line" aria-hidden="true" />

          {experiences.map((exp, idx) => (
            <article className="exp__item" key={exp.company + idx}>
              <div className="exp__dot" aria-hidden="true" />
              <div className="exp__card">
                <header className="exp__item-head">
                  <div>
                    <p className="exp__time">{exp.time}</p>
                    <h3 className="exp__role">
                      {exp.role} — <span className="exp__company">{exp.company}</span>
                    </h3>
                    <p className="exp__location">{exp.location}</p>
                  </div>
                  <div className="exp__stack-mini">
                    {exp.stack.map((tech) => (
                      <span className="chip" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </header>

                <ul className="exp__list">
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {/* Nút "Xem chi tiết" — chỉ render nếu card có detailLink */}
                {exp.detailLink && (
                  <div className="exp__detail-row">
                    <Link to={exp.detailLink} className="exp__detail-btn">
                      {exp.detailLabel}
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
