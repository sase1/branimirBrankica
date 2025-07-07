import {Link} from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-xl navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand ps-4" to="/">
                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Site Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav ms-auto py-2 pe-4">
                        <li className="nav-item">
                            <Link className="nav-link" to="/танц">Танц</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Вежбање</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/за-нас">За Нас</Link>
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
                            <Link className="nav-link" to="/контакт">Контакт</Link>
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