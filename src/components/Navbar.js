import {Link, useLocation} from "react-router-dom";
import './Navbar.css';
import {useEffect} from "react";

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

    return (
        <nav className="navbar navbar-expand-xl navbar-dark navbarLinks navbarLinksNavbar position-relative">
            <div className="container-fluid">
                <Link className="navbar-brand ps-4" to="/">
                    <img src={`${process.env.PUBLIC_URL}/images/navbar-logo.png`} alt="Site Logo"/>
                </Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                    <span></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav justify-content-center py-2 pe-4 cst">
                        <li className="nav-item">
                            <Link className="nav-link" to="/танц">Танц</Link>
                        </li>

                        <li className={`nav-item mega-dropdown`}>
                            {/*<li className={`nav-item mega-dropdown ${isMegaOpen ? 'open' : ''}`}>*/}
                            <Link className="nav-link" to="/фит-универзум">ФитУниверзум
                                <span className="dropdown-toggle text-white ms-2" role="button">
                                      </span>
                            </Link>
                            {/*<span className="nav-link dropdown-toggle text-white" role="button"*/}
                            {/*      onClick={() => setIsMegaOpen(prev => !prev)}>ФитУниверзум</span>*/}
                            {/*{isMegaOpen && (*/}
                            <div className="dropdown-menu mega-menu">
                                <div className="row">
                                    <div className="col">
                                        <Link to="/фит-универзум/пилатес" className="dropdown-item">Пилатес</Link>
                                        <Link to="/фит-универзум/reformer" className="dropdown-item">Reformer</Link>
                                        <Link to="/фит-универзум/step-aerobic" className="dropdown-item">Step
                                            Aerobic</Link>
                                    </div>
                                    <div className="col">
                                        <Link to="/фит-универзум/kickbox" className="dropdown-item">Kickbox
                                            Aerobic</Link>
                                        <Link to="/фит-универзум/total-body" className="dropdown-item">Total Body
                                            Workout</Link>
                                        <Link to="/фит-универзум/pain-relief" className="dropdown-item">Pain
                                            Relief</Link>
                                    </div>
                                    <div className="col">
                                        <Link to="/фит-универзум/zumba" className="dropdown-item">Zumba</Link>
                                        <Link to="/фит-универзум/bfitteen" className="dropdown-item">BFiTeen</Link>
                                        <Link to="/фит-универзум/корективна" className="dropdown-item">Корективна
                                            гимнастика</Link>
                                    </div>
                                    <div className="col">
                                        <Link to="/фит-универзум/ultimate-bag" className="dropdown-item">Ultimate
                                            Bag
                                            Workout</Link>
                                        <Link to="/фит-универзум/функционален-фитнес" className="dropdown-item">Функционален
                                            фитнес</Link>
                                        <Link to="/фит-универзум/меуна" className="dropdown-item">Meuna</Link>
                                    </div>
                                    <div className="col">
                                        <Link to="/фит-универзум/yoga" className="dropdown-item">Yoga - BYoga</Link>
                                        <Link to="/фит-универзум/персонални" className="dropdown-item">Персонални
                                            тренинзи</Link>
                                    </div>
                                </div>
                            </div>
                            {/*)}*/}
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
                        <Link className="nav-link" to="tel:+38971968582"> <img className="icon me-1" alt="logo"
                                                                               src={`${process.env.PUBLIC_URL}/images/phone-icon.svg`}/> +389
                            71 968 582</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}