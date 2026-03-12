
import { Link } from "react-router-dom";
import "./CustomLink.css";
import LanguageLink from "./LanguageLink";

export default function CustomLink({ to, text, className = "", onClick, blank = false }) {
    if (blank) {
        return (
            <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClick}
                className={`text-decoration-none text-white about d-inline-flex align-items-center customLink ${className}`}
            >
                {text}
                <img
                    src={`${process.env.PUBLIC_URL}/images/btn-arrow.png`}
                    alt="instagram-logo"
                    className="h-75 ms-3"
                />
            </a>
        );
    }

    return (
        <LanguageLink
            to={to}
            onClick={onClick}
            className={`text-decoration-none text-white about d-inline-flex align-items-center customLink ${className}`}
        >
            {text}
            <img
                src={`${process.env.PUBLIC_URL}/images/btn-arrow.png`}
                alt="instagram-logo"
                className="h-75 ms-3"
            />
        </LanguageLink>
    );
}
