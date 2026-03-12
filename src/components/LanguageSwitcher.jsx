import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);

        const newPath = location.pathname.replace(/^\/(mk|en)/, "");
        navigate(`/${lang}${newPath}${location.search}`, { replace: true });
    };

    return (
        <div className="language-switcher">
            <button
                className={i18n.language === "mk" ? "active" : ""}
                onClick={() => changeLanguage("mk")}
            >
                MK
            </button>

            <span className="divider">|</span>

            <button
                className={i18n.language === "en" ? "active" : ""}
                onClick={() => changeLanguage("en")}
            >
                EN
            </button>
        </div>
    );
}