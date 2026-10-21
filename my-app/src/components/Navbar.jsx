
import { NavLink } from "react-router-dom";
import { Home, Briefcase, FolderGit2, Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

/* 
  linkClass:
  - Tác dụng: tự gắn class "active" khi route đang được chọn
  - Dùng cho: tất cả NavLink trong Navbar
*/
const linkClass = ({ isActive }) => "nav-link" + (isActive ? " nav-link--active" : "");

export default function Navbar() {
    const { lang, toggleLanguage } = useLanguage();

    const labels = lang === "vi"
        ? { brand: "I'm Đức Long", home: "Trang chủ", exp: "Kinh nghiệm", projects: "Dự án" }
        : { brand: "I'm Duc Long", home: "Home", exp: "Experience", projects: "Projects" };

    return (
        <header className="navbar">
            {/* 
        container:
        - Tác dụng: giới hạn chiều rộng + căn giữa + padding 2 bên
        - Dùng chung cho nhiều trang/component
      */}
            <div className="container navbar__inner">
                {/* Khối bên trái: nav__eyebrow */}
                <div className="navbar__block navbar__block--left">
                    <span className="nav__eyebrow">Portfolio</span>
                </div>

                {/* Khối ở giữa: navbar__nav */}
                <nav className="navbar__block navbar__block--center navbar__nav" aria-label="Primary">
                    <NavLink to="/" end className={linkClass}>
                        <Home className="nav-icon" aria-hidden="true" />
                        <span>{labels.home}</span>
                    </NavLink>

                    <NavLink to="/experience" className={linkClass}>
                        <Briefcase className="nav-icon" aria-hidden="true" />
                        <span>{labels.exp}</span>
                    </NavLink>

                    <NavLink to="/projects" className={linkClass}>
                        <FolderGit2 className="nav-icon" aria-hidden="true" />
                        <span>{labels.projects}</span>
                    </NavLink>
                </nav>

                {/* Khối bên phải: nút đổi ngôn ngữ */}
                <div className="navbar__block navbar__block--right">
                    <button
                        type="button"
                        className="nav-lang-btn"
                        onClick={toggleLanguage}
                        aria-label={lang === "vi" ? "Chuyển sang tiếng Anh" : "Switch to Vietnamese"}
                    >
                        <Languages className="nav-icon" aria-hidden="true" />
                        <span className="nav-lang-full">{lang === "vi" ? "PHIÊN BẢN TIẾNG VIỆT" : "ENGLISH VERSION"}</span>
                        <span className="nav-lang-short">{lang === "vi" ? "VI" : "EN"}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
