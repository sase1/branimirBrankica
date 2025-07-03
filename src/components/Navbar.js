import {Link} from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="images/logo.png" alt="Site Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav ms-auto py-2">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Танц</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Вежбање</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">За Нас</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="https://online.branimirbrankica.mk/login">Онлајн</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Новости</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Галерија</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Контакт</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="tel:+38971968582">+389 71 968 582</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}