import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <div className="text-center py-5 text-white">
            <h1>404 - Страницата не постои</h1>
            <p>Вратете се на <Link to="/">почетната страница</Link>.</p>
        </div>
    );
}
