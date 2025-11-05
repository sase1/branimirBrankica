import {Link} from "react-router-dom";
import "./Footer.css"

export default function Footer() {
    return (
        <div className="row footer">
            <div className="col-lg-8 offset-lg-2 my-5 aboveFooter">
                <div className="row">
                    <div className="col-lg-4 align-items-center justify-content-center d-flex">
                        <img src={`${process.env.PUBLIC_URL}/images/footer-logo.png`} alt="Site Logo" className="img-fluid footerLogo"/>
                    </div>
                    <div className="col-lg-4  text-white text-center my-4 my-lg-0">
                        <h4>Контакт:</h4>
                        <Link className="text-decoration-none d-block text-white" to="tel:+38971968582"> <img className="icon me-1" alt="logo" src={`${process.env.PUBLIC_URL}/images/phone-icon.svg`}/> +389
                            71 968
                            582</Link>
                        <Link className="text-decoration-none d-block text-white" to="tel:+38971968582"> <img className="icon me-1" alt="logo" src={`${process.env.PUBLIC_URL}/images/phone-icon.svg`}/> +389
                            76 208
                            508</Link>
                        <Link className="text-decoration-none d-block text-white"
                              to="mailto:contact@branimirbrankica.mk"> <img className="icon me-1" alt="logo" src={`${process.env.PUBLIC_URL}/images/mail-icon.svg`}/> contact@branimirbrankica.mk</Link>
                    </div>
                    <div className="col-lg-4 text-white text-center">
                        <h4>Локации:</h4>
                        <Link target="_blank"
                              to="https://www.google.com/maps/place/Elementary+School+%22Kiro+Gligorov%22/@41.9928328,21.4121346,808m/data=!3m2!1e3!4b1!4m6!3m5!1s0x135415e33a78561d:0x3ce497e6cad8cc21!8m2!3d41.9928288!4d21.4147095!16s%2Fg%2F11h_4q4mbz?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                              className="text-decoration-none d-block text-white"> <img className="icon" alt="logo" src={`${process.env.PUBLIC_URL}/images/location-icon.svg`}/> ООУ
                            "Ќиро Глигоров", Капиштец</Link>
                        <Link target="_blank"
                              to="https://www.google.com/maps/place/Shopping+Center+SP+Planet/@42.006854,21.3623931,808m/data=!3m2!1e3!4b1!4m6!3m5!1s0x13541392fdffa7ed:0x31ababfa9a994f16!8m2!3d42.00685!4d21.364968!16s%2Fg%2F1hd_9qysv?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                              className="text-decoration-none d-block text-white"> <img className="icon" alt="logo" src={`${process.env.PUBLIC_URL}/images/location-icon.svg`}/> ТЦ
                            СП Планет,Ѓорче Петров</Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-10 offset-lg-1">
                <nav className="navbar navbar-expand border-top">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav py-2 w-100 align-items-center">
                            <div className="d-flex flex-column flex-lg-row footerNavbarLinks">
                                <li className="nav-item ms-lg-0">
                                    <Link className="nav-link text-white" to="/танц">Танц</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/фит-универзум">ФитВерзум</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/за-нас">За Нас</Link>
                                </li>
                                {/*<li className="nav-item">*/}
                                {/*    <Link className="nav-link text-white" target="_blank"*/}
                                {/*          to="https://online.branimirbrankica.mk/login">Онлајн</Link>*/}
                                {/*</li>*/}
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/меуна">Меуна</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/партнери">Партнери</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/">Новости</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/галерија">Галерија</Link>
                                </li>
                                {/*<li className="nav-item">*/}
                                {/*    <Link className="nav-link text-white" to="/продукти">Продукти</Link>*/}
                                {/*</li>*/}
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/контакт">Контакт</Link>
                                </li>
                            </div>

                            <div className="d-flex ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" target="_blank" to="https://www.facebook.com/sportbranimirbrankica/">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/fb-logo.png`}
                                            alt="fb-logo"/>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="https://www.instagram.com/branimir_i_brankica/?hl=en" target="_blank">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/insta-logo.png`}
                                            alt="instagram-logo"/>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="https://www.youtube.com/@BrankicaNesik/featured" target="_blank">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/yt-logo.png`}
                                            alt="youtube-logo"/>
                                    </Link>
                                </li>
                            </div>
                            <div className="position-absolute bottom-5 text-white"
                                 style={{ right: "-3%", cursor: "pointer"}}
                                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            >
                                <h2>↑</h2>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>


        </div>
    )
}