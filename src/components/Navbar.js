import {Link, useLocation} from "react-router-dom";
import './Navbar.css';
import {useEffect} from "react";

export default function Navbar() {

    const location = useLocation();

    useEffect(() => {
        const collapseEl = document.getElementById("mynavbar");
        const toggler = document.querySelector(".navbar-toggler");

        if (collapseEl?.classList.contains("show")) {
            collapseEl.classList.remove("show");
            toggler?.setAttribute("aria-expanded", "false");
        }
    }, [location]);

    return (
        <nav className="navbar navbar-expand-xl navbar-dark navbarLinks navbarLinksNavbar position-relative">
            <div className="container-fluid">
                <Link className="navbar-brand ps-4" to="/">
                    <img src={`${process.env.PUBLIC_URL}/images/navbar-logo.png`} alt="Site Logo"/>
                </Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                    <span></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav justify-content-center py-2 pe-4 cst">
                        <li className="nav-item">
                            <Link className="nav-link" to="/танц">Танц</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/вежбање">Вежбање</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/за-нас">За Нас</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" target="_blank"
                                  to="https://online.branimirbrankica.mk/login">Онлајн</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Новости</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/галерија">Галерија</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/контакт">Контакт</Link>
                        </li>

                    </ul>
                    <div className="mobile pe-4">
                        <Link className="nav-link" to="tel:+38971968582"> <img className="icon me-1" alt="logo" src={`${process.env.PUBLIC_URL}/images/phone-icon.svg`}/> +389
                            71 968 582</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}