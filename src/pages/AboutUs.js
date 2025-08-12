import CarouselReviews from "../components/CarouselReviews";
import "./AboutUs.css"
import CustomLink from "../components/CustomLink";
import HeaderMovingLines from "../components/HeaderMovingLines";
import PageHeader from "../components/PageHeader";
import {useState} from "react";

export default function AboutUs() {

    const [openModal, setOpenModal] = useState(null);

    const closeModal = () => setOpenModal(null);

    const modalContent = {
        brankica: {
            title: "Бранкица Нешиќ",
            description: "Аеробик, пилатес,BYOGA, програма MEUNA",
        },
        branimir: {
            title: "Бранимир Нешиќ",
            description: "Аеробик, Power Yoga, кружен тренинг, персонален тренер",
        },
        slobodan: {
            title: "Слободан Трајковски",
            description: "MEUNA: медитација, јога-нидра, Суњата, ПЕАТ, унификационен процес, BYOGA",
        },
    };


    return (
        <>
            <div className="container aboutUs">
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader title="За Нас"/>
                    </div>
                </div>
                <div className="row lifeStyle">
                    <div className="col-lg-6 align-content-center">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 pt-5 pt-lg-0">
                        <div
                            className="d-flex justify-content-center align-items-center ps-1 ps-lg-5 text-white text-center text-lg-start">
                            <div className="textContent">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                                    alt="logo" className="mb-0 mb-md-2"/>
                                <h2 className="title">20 години <br/> нов животен стил</h2>
                                <p className="description">Го пренасочивме менталниот склоп за практикување физичка активност, ги срушивме
                                возрасните бариери и заблуди, ја освестивме можноста за менување и поставивме тло за правилен пристап до здрав живот.</p>

                                <p className="description">Заклучивме дека физичката и духовната активност се задолжителна одговорност. Докажавме
                                дека способноста за себереализација постои кај секого, а достапност на вистинскиот избор постои тука.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-white text-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                            alt="logo" className="mb-0 mb-md-4"/>
                        <h2 className="mb-4">Инструктори</h2>
                        <p>Банимир Нешиќ и Бранкица Нешиќ, основачи на овос спортски клуб, се први и се уште единствени лиценцирани (сертифицирани)
                        инструктори од FISAF (Federation of International Sports Aerobic and Fitness). FISAF интернационалните лиценци (сертификати) се
                        наоѓаат на листата на најценетите лиценци во fitness-welness индустријата и се валидни насекаде низ светот.</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-4 text-white text-center">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h3 className="mt-4">Бранкица Нешиќ</h3>
                        <p>аеробик, пилатес,BYOGA, програма MEUNA</p>
                        <CustomLink to="#" text="Прочитајте повеќе"  onClick={(e) => {
                            e.preventDefault();
                            setOpenModal("brankica");
                        }}/>
                    </div>
                    <div className="col-lg-4 text-white text-center my-5 mt-md-5">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h3 className="mt-4">Бранимир Нешиќ</h3>
                        <p>аеробик, Power Yoga, кружен тренинг, персонален тренер</p>
                        <CustomLink to="#" text="Прочитајте повеќе"  onClick={(e) => {
                            e.preventDefault();
                            setOpenModal("branimir");
                        }}/>
                    </div>
                    <div className="col-lg-4 text-white text-center">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h3 className="mt-4">Слободан Трајковски</h3>
                        <p>MEUNA: медитација, јога-нидра, Суњата, ПЕАТ, унификационен процес, BYOGA</p>
                        <CustomLink to="#" text="Прочитајте повеќе"  onClick={(e) => {
                            e.preventDefault();
                            setOpenModal("slobodan");
                        }}/>
                    </div>
                </div>

                {openModal && (
                    <div className="modalBackdrop" onClick={closeModal}>
                        <div
                            className="modalContent"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modalCloseBtn" onClick={closeModal}>
                                &times;
                            </button>
                            <h2>{modalContent[openModal].title}</h2>
                            <p>{modalContent[openModal].description}</p>
                        </div>
                    </div>
                )}

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

                    <div className="col-lg-3 col-md-6 text-center mt-4">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4 className="mt-3">Име на награда</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mt-4">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4 className="mt-3">Име на награда</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mt-4">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4 className="mt-3">Име на награда</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mt-4">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4 className="mt-3">Име на награда</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mt-4">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4 className="mt-3">Име на награда</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mt-4">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4 className="mt-3">Име на награда</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mt-4">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4 className="mt-3">Име на награда</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mt-4">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                        <h4 className="mt-3">Име на награда</h4>
                    </div>
                </div>

            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Мислења на нашите членови'} strokeColor="#6F9D80" color="#6F9D80"/>
                <CarouselReviews/>
            </div>
        </>
    )
}