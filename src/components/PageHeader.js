import { Link, useLocation } from "react-router-dom";
import "./PageHeader.css"
import LanguageLink from "./LanguageLink";

export default function PageHeader({ title }) {
    const location = useLocation();
    const pathParts = location.pathname.split("/").filter(Boolean).filter(part => part !== "mk" && part !== "en");
    return (
        <div className="page-header text-white text-center customBorder position-relative">
            <h1 className="mb-4">{title}</h1>
            <nav aria-label="breadcrumb" className="d-flex align-items-center justify-content-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/" className="text-white text-decoration-none">Дома</Link>
                    </li>
                    {pathParts.map((part, index) => {
                        const isLast = index === pathParts.length - 1;
                        const path = "/" + pathParts.slice(0, index + 1).join("/");

                        return (
                            <li
                                key={index}
                                className={`breadcrumb-item ${isLast ? "active text-white text-capitalize" : ""}`}
                                aria-current={isLast ? "page" : undefined}
                            >
                                {isLast ? (
                                    decodeURIComponent(part.replace(/-/g, " "))
                                ) : (
                                    <LanguageLink to={path} className="text-white text-decoration-none text-capitalize">
                                        {decodeURIComponent(part.replace(/-/g, " "))}
                                    </LanguageLink>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
}
