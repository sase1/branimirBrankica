import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";
import CustomLink from "../../components/CustomLink";
import {useEffect, useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function Byoga() {
    const { t } = useTranslation();


    const location = useLocation();
    const navigate = useNavigate();

    const titleRoundRef = useRef(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollToRound = params.get("scrollToRound");

        if (scrollToRound && titleRoundRef.current) {
            titleRoundRef.current.scrollIntoView({ behavior: "smooth" });
        }

        if (scrollToRound) {
            const cleanURL = location.pathname;
            navigate(cleanURL, { replace: true });
        }
    }, [location.search, location.pathname, navigate]);

    return (
        <>
            <PageHeader title="BYoga"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>{t("yogaHeading")}</h1>
                        <p className="my-5">{t("yogaInfo")}</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Hatha Yoga / Hatha Yoga /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/byoga/byoga.png`}
                             alt="logo"/>
                        <h2 className="my-4">Hatha Yoga</h2>
                        <p>{t("hathaYogaSubtitle")}
                        </p>
                        <p> {t("hathaYogaSubSubtitle")}</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Ashtanga Yoga / Ashtanga Yoga /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/byoga/byoga.png`}
                             alt="logo"/>
                        <h2 className="my-4">Ashtanga Yoga</h2>
                        <p>{t("ashtangaYogaSubtitle")}
                        </p>
                        <p> {t("ashtangaYogaSubSubtitle")}</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Vinyasa Flow Yoga / Vinyasa Flow Yoga /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/byoga/byoga.png`}
                             alt="logo"/>
                        <h2 className="my-4">Vinyasa Flow Yoga</h2>
                        <p>{t("vinyasaYogaSubtitle")}
                        </p>
                        <p> {t("vinyasaYogaSubSubtitle")}</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Power Yoga / Power Yoga /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/byoga/byoga.png`}
                             alt="logo"/>
                        <h2 className="my-4">Power Yoga</h2>
                        <p>{t("powerYogaSubtitle")}
                        </p>
                        <p> {t("powerYogaSubSubtitle")}</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Restorative Yoga / Restorative Yoga /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/byoga/byoga.png`}
                             alt="logo"/>
                        <h2 className="my-4">Restorative Yoga</h2>
                        <p>{t("restorativeYogaSubtitle")}
                        </p>
                        <p> {t("restorativeYogaSubSubtitle")}</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid" ref={titleRoundRef}>
                <HeaderMovingLines text={'Meuna / Meuna / Meuna /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/byoga/meuna.png`}
                             alt="logo"/>
                        <h2 className="my-4">Meuna</h2>
                        <p>Power Yoga е современа, силна и фитнес-ориентирана варијанта на јога инспирирана од Ashtanga.
                            Се изведува со побрз ритам, со фокус на градење сила, издржливост и мускулен тонус.
                        </p>
                        <p> Оваа практика е интензивна и активира целиот телесен систем, при што се задржува јогискиот
                            дух на присутност и дишење. Совршена е за оние што сакаат физички предизвик и видливи фитнес
                            резултати преку јога.</p>
                        <CustomLink to="/меуна" text="Дознајте Повеќе"/>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Персонални тренинзи / Персонални тренинзи /'} strokeColor="#F89520" />
            </div>

            <div className="container">
                <ContactForm title="Персонални тренинзи"
                             description1="Заинтересирани сте за часови со персонален инструктор?"
                             description2="Сакате целосно индивидуално внимание или приватност?&nbsp; Јавете
                                 ни се или напишете ни порака и ќе ви одговориме во најбрз можен рок."/>
            </div>

        </>
    )
}