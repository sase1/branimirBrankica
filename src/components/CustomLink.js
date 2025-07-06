import { Link } from "react-router-dom";
import "./CustomLink.css"

export default function CustomLink({ to, text, className = "" }) {
    return (
        <Link
            to={to}
            className={`text-decoration-none text-white about d-inline-block customLink ${className}`}
        >
            {text}
        </Link>
    );
}
