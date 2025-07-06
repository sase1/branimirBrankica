import CarouselReviews from "../components/CarouselReviews";
import "./AboutUs.css"
import {Link} from "react-router-dom";
import CustomLink from "../components/CustomLink";
import HeaderMovingLines from "../components/HeaderMovingLines";
import PageHeader from "../components/PageHeader";

export default function AboutUs() {
    return (
        <>
            <div className="container aboutUs">
                <PageHeader title="За Нас" />
                <div className="row lifeStyle">
                    <div className="col-lg-7">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                    </div>
                    <div className="col-lg-5 align-content-center pt-5 pt-lg-0">
                        <div
                            className="d-flex justify-content-center align-items-center ps-1 ps-lg-5 text-white text-center text-lg-start">
                            <div className="textContent">
                                <img
                                    src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-letter-b-logo-png-image_6059146.jpg"
                                    alt="logo" style={{height: '80px'}} className="mb-0 mb-md-2"/>
                                <h2 className="title">20 години <br/> нов животен стил</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua,
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua,
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                        <img
                            src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-letter-b-logo-png-image_6059146.jpg"
                            alt="logo" style={{height: '80px'}} className="mb-0 mb-md-4"/>
                        <h2 className="mb-4">Инструктори</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua,
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua,
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-4 text-white text-center">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h3 className="mt-4">Бранкица Нешиќ</h3>
                        <p>naslov naslov naslov naslov</p>
                        <CustomLink to="/" text="Прочитајте повеќе"/>
                    </div>
                    <div className="col-lg-4 text-white text-center my-5 mt-md-5">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h3 className="mt-4">Бранимир Нешиќ</h3>
                        <p>naslov naslov naslov naslov</p>
                        <CustomLink to="/" text="Прочитајте повеќе"/>
                    </div>
                    <div className="col-lg-4 text-white text-center">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h3 className="mt-4">Слободан Трајковски</h3>
                        <p>naslov naslov naslov naslov</p>
                        <CustomLink to="/" text="Прочитајте повеќе"/>
                    </div>
                </div>

                <div className="row video">
                    <div className="col-lg-12">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="row awards text-white">
                    <div className="col-lg-4 mb-5">
                        <h2>Награди и сертификати </h2>
                    </div>
                    <div className="col-lg-6 offset-lg-2 mb-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua,
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor
                            incididunt ut labore et dolore magna.</p>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4>Име на награда</h4>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4>Име на награда</h4>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4>Име на награда</h4>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4>Име на награда</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4>Име на награда</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4>Име на награда</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4>Име на награда</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4>Име на награда</h4>
                    </div>
                </div>

            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Мислења на нашите членови'}/>
                <CarouselReviews/>
            </div>
        </>
    )
}