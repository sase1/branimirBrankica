import {Link} from "react-router-dom";
import "./Footer.css"

export default function Footer() {
    return (
        <div className="row footer">
            <div className="col-lg-8 offset-lg-2 my-5">
                <div className="row">
                    <div className="col-lg-4 align-items-center justify-content-center d-flex">
                        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Site Logo" className="img-fluid footerLogo"/>
                    </div>
                    <div className="col-lg-4  text-white text-center my-4 my-lg-0">
                        <h4>Контакт:</h4>
                        <Link className="text-decoration-none d-block text-white" to="tel:+38971968582">+389 71 968
                            582</Link>
                        <Link className="text-decoration-none d-block text-white" to="tel:+38971968582">+389 76 208
                            508</Link>
                        <Link className="text-decoration-none d-block text-white"
                              to="mailto:contact@branimirbrankica.mk">contact@branimirbrankica.mk</Link>
                    </div>
                    <div className="col-lg-4 text-white text-center">
                        <h4>Локации:</h4>
                        <Link target="_blank"
                              to="https://www.google.com/maps/place/Elementary+School+%22Kiro+Gligorov%22/@41.9928328,21.4121346,808m/data=!3m2!1e3!4b1!4m6!3m5!1s0x135415e33a78561d:0x3ce497e6cad8cc21!8m2!3d41.9928288!4d21.4147095!16s%2Fg%2F11h_4q4mbz?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                              className="text-decoration-none d-block text-white">ООУ "Ќиро Глигоров", Капиштец</Link>
                        <Link target="_blank"
                              to="https://www.google.com/maps/place/Shopping+Center+SP+Planet/@42.006854,21.3623931,808m/data=!3m2!1e3!4b1!4m6!3m5!1s0x13541392fdffa7ed:0x31ababfa9a994f16!8m2!3d42.00685!4d21.364968!16s%2Fg%2F1hd_9qysv?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                              className="text-decoration-none d-block text-white">ТЦ СП Планет,Ѓорче Петров</Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-10 offset-lg-1">
                <nav className="navbar navbar-expand border-top">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav py-2 w-100 align-items-center">
                            <div className="d-flex flex-column flex-lg-row">
                                <li className="nav-item ms-lg-0">
                                    <Link className="nav-link text-white" to="/">Танц</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/">Вежбање</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/">За Нас</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white"
                                          to="https://online.branimirbrankica.mk/login">Онлајн</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/">Новости</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/">Галерија</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/">Контакт</Link>
                                </li>
                            </div>

                            <div className="d-flex ms-auto logos">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s"
                                            alt="fb-logo"/>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                                            alt="instagram-logo"/>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfPimrl1lwgrW3OHOuuyReVPqtc_Hd7mp4A&s"
                                            alt="twitter-logo"/>
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>


        </div>
    )
}