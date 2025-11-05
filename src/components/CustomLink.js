import { Link } from "react-router-dom";
import "./CustomLink.css"

export default function CustomLink({ to, text, className = "", onClick  }) {
    return (
        <Link
            to={to}
            onClick={onClick}
            className={`text-decoration-none text-white about d-inline-flex align-items-center customLink ${className}`}
        >
            {text} <img src={`${process.env.PUBLIC_URL}/images/btn-arrow.png`} alt="instagram-logo" className="h-75 ms-3"/>
        </Link>
    );
}
