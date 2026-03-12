import {Link, useLocation} from "react-router-dom";
import './Navbar.css';
import {useEffect} from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import {useTranslation} from "react-i18next";
import LanguageLink from "./LanguageLink";

export default function Navbar() {

    const location = useLocation();
    // const [isMegaOpen, setIsMegaOpen] = useState(false);

    useEffect(() => {
        const collapseEl = document.getElementById("mynavbar");
        const toggler = document.querySelector(".navbar-toggler");

        if (collapseEl?.classList.contains("show")) {
            collapseEl.classList.remove("show");
            toggler?.setAttribute("aria-expanded", "false");
            toggler?.classList.add("collapsed");
        }
        // setIsMegaOpen(false);
    }, [location]);

    const { i18n } = useTranslation();
    const lang = i18n.language || "mk";

    return (
        <nav
            className="navbar navbar-expand-xxl navbar-dark navbarLinks navbarLinksNavbar position-relative d-none d-sm-block">
            <div className="container-fluid">
                <LanguageLink className="navbar-brand ps-4" to="/">
                    <img src={`${process.env.PUBLIC_URL}/images/navbar-logo.png`} alt="Site Logo"/>
                </LanguageLink>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                    <span></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav justify-content-center py-2 pe-4 cst">
                        <li className={`nav-item mega-dropdown`}>
                            <LanguageLink className="nav-link" to="/танц">Танц
                                {/*<span className="dropdown-toggle text-white ms-2" role="button">*/}
                                {/*      </span>*/}
                                <img className="ms-2" src={`${process.env.PUBLIC_URL}/images/arrow-down.png`}
                                     alt="arrow logo"/>
                            </LanguageLink>

                            <div className="dropdown-menu mega-menu">
                                <div className="row">
                                    <div className="col">
                                        <LanguageLink to="/танц/латино-танци" className="dropdown-item">Латино Танци</LanguageLink>
                                        <LanguageLink to="/танц/друштвени-танци" className="dropdown-item">Social Dances</LanguageLink>
                                    </div>
                                    <div className="col">
                                        <LanguageLink to="/танц/уличен-танц?scrollToTitleRound=true" className="dropdown-item">Хип
                                            Хоп</LanguageLink>
                                        <LanguageLink to="/танц/уличен-танц?scrollToTitle=true" className="dropdown-item">Ragga
                                            Jam</LanguageLink>
                                    </div>
                                    {/*<div className="col">*/}
                                    {/*    <Link to="/танц/спортски-танцови-двојки" className="dropdown-item">Спортски*/}
                                    {/*        Танцови Двојки</Link>*/}
                                    {/*    <Link to="/танц/уличен-танц" className="dropdown-item">Street Dance</Link>*/}
                                    {/*</div>*/}
                                    <div className="col">
                                        <LanguageLink to="/танц/свадбен-танц" className="dropdown-item">Свадбен танц</LanguageLink>

                                        <Link to="/" className="dropdown-item last-link">Приватни Часови</Link>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={`nav-item mega-dropdown`}>
                            {/*<li className={`nav-item mega-dropdown ${isMegaOpen ? 'open' : ''}`}>*/}
                            <LanguageLink className="nav-link" to="/фит-универзум">ФитВерзум
                                {/*<span className="dropdown-toggle text-white ms-2" role="button">*/}
                                {/*      </span>*/}
                                <img className="ms-2" src={`${process.env.PUBLIC_URL}/images/arrow-down.png`}
                                     alt="arrow logo"/>
                            </LanguageLink>
                            {/*<span className="nav-link dropdown-toggle text-white" role="button"*/}
                            {/*      onClick={() => setIsMegaOpen(prev => !prev)}>ФитУниверзум</span>*/}
                            {/*{isMegaOpen && (*/}
                            <div className="dropdown-menu mega-menu">
                                <div className="row">
                                    <div className="col">
                                        <LanguageLink to="/фит-универзум/пилатес" className="dropdown-item">Пилатес</LanguageLink>
                                        <LanguageLink to="/фит-универзум/реформер" className="dropdown-item">Reformer</LanguageLink>
                                        <LanguageLink to="/фит-универзум/pain-relief" className="dropdown-item">Pain
                                            Relief</LanguageLink>
                                    </div>
                                    <div className="col">
                                        <LanguageLink to="/фит-универзум/зумба" className="dropdown-item">Зумба</LanguageLink>
                                        <LanguageLink to="/фит-универзум/аеробик?scrollToTitleRound=true"
                                              className="dropdown-item">Step Aerobic</LanguageLink>
                                        <LanguageLink to="/фит-универзум/аеробик?scrollToTitle=true" className="dropdown-item">Kick
                                            Box Aerobic</LanguageLink>

                                    </div>
                                    <div className="col">
                                        <LanguageLink to="/фит-универзум/bfit-teen" className="dropdown-item">B-Fit Teen</LanguageLink>
                                        <LanguageLink to="/фит-универзум/превентивно-корективна-гимнастика"
                                              className="dropdown-item">Превентивно Корективна Гимнастика</LanguageLink>
                                    </div>
                                    <div className="col">
                                        <Link to="/фит-универзум/функционален-фитнес?scrollToTitle=true"
                                              className="dropdown-item">Ultimate Bag Workout</Link>
                                        <LanguageLink to="/фит-универзум/функционален-фитнес" className="dropdown-item">Функционален
                                            фитнес</LanguageLink>
                                    </div>
                                    <div className="col">
                                        <LanguageLink to="/фит-универзум/б-јога" className="dropdown-item">Yoga - BYoga
                                        </LanguageLink>
                                        <LanguageLink to="/фит-универзум/б-јога?scrollToRound=true" className="dropdown-item">Meuna
                                        </LanguageLink>
                                    </div>

                                    <div className="col">
                                        <LanguageLink to="/фит-универзум/персонални-тренинзи"
                                              className="dropdown-item last-link">Персонални
                                            тренинзи</LanguageLink>
                                    </div>
                                </div>
                            </div>
                            {/*)}*/}
                        </li>

                        <li className="nav-item">
                            <LanguageLink className="nav-link" to="/за-нас">За Нас</LanguageLink>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <Link className="nav-link" target="_blank"*/}
                        {/*          to="https://online.branimirbrankica.mk/login">Онлајн</Link>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <LanguageLink className="nav-link" to="/меуна"
                            >Меуна</LanguageLink>
                        </li>
                        <li className="nav-item">
                            <LanguageLink className="nav-link"
                                  to="/партнери">Партнери</LanguageLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Новости</Link>
                        </li>
                        <li className="nav-item">
                            <LanguageLink className="nav-link" to="/продавница">Продавница</LanguageLink>
                        </li>
                        <li className="nav-item">
                            <LanguageLink className="nav-link" to="/галерија">Галерија</LanguageLink>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*<Link className="nav-link" to="/продукти">Продукти</Link>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <LanguageLink className="nav-link" to="/контакт">Контакт</LanguageLink>
                        </li>

                    </ul>
                    <div className="mobile pe-4">
                        <Link className="nav-link" to="tel:+38971968582">
                        <img className="icon me-1" alt="logo"
                                 src={`${process.env.PUBLIC_URL}/images/phone-icon.svg`}/> +389
                            71 968 582</Link>

                        <LanguageSwitcher/>
                    </div>
                </div>
            </div>
        </nav>
    )
}