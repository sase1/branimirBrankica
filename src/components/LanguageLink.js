import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LanguageLink({ to, children, ...props }) {
    const { i18n } = useTranslation();
    const lang = i18n.language || "mk";

    return <Link to={`/${lang}${to}`} {...props}>{children}</Link>;
}