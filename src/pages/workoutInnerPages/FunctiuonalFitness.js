import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import {useEffect, useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import ContactForm from "../../components/ContactForm";
import {useTranslation} from "react-i18next";

export default function FunctiuonalFitness() {

    const location = useLocation();
    const navigate = useNavigate();
    const titleRef = useRef(null);
    const titleRoundRef = useRef(null);


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const shouldScroll = params.get("scrollToTitle");

        if (shouldScroll && titleRef.current) {
            titleRef.current.scrollIntoView({ behavior: "smooth" });

            const cleanURL = location.pathname;
            navigate(cleanURL, { replace: true });
        }
    }, [location.search, location.pathname, navigate]);

    const { t } = useTranslation();
    return (
        <>
            <PageHeader title={t("functionalFitnessHeading")}/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>{t("whatIsFunctionalFitness")}</h1>
                        <p className="my-5">{t("functionalFitnessInfo")}</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'CrossFit / CrossFit / CrossFit /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/func-fit/cross.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("crossFitHeading")}</h2>
                        <p>{t("crossFitSubtitle")}
                        </p>
                        <p>{t("crossFitSubSubtitle")}</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid" ref={titleRoundRef}>
                <HeaderMovingLines text={'BodySculpt / BodySculpt /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/func-fit/body.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("bodySculptHeading")}</h2>
                        <p>{t("bodySculptSubtitle")}
                        </p>
                        <p>{t("bodySculptSubSubtitle")}</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Circuit Training / Circuit Training /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/func-fit/circuit.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("circuitTrainingHeading")}</h2>
                        <p>{t("circuitTrainingSubtitle")}
                        </p>
                        <p>{t("circuitTrainingSubSubtitle")}</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid" ref={titleRoundRef}>
                <HeaderMovingLines text={'Total Body Workout / Total Body Workout /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/func-fit/total.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("totalBodyWorkoutHeading")}</h2>
                        <p>{t("totalBodyWorkoutSubtitle")}
                        </p>
                        <p> {t("totalBodyWorkoutSubSubtitle")}</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid" ref={titleRef}>
                <HeaderMovingLines text={'Ultimate Bag Workout / Ultimate Bag Workout /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/func-fit/ultimate.png`}
                             alt="logo"/>
                        <h2 className="my-4">Ultimate Bag Workout</h2>
                        <p>Ultimate Bag Workout е високоинтензивен тренинг каде што се користи боксерска вреќа за
                            изведба на удари и функционални вежби. Комбинира кардио, сила и издржливост во една сесија,
                            активирајќи ја целата мускулатура.
                        </p>
                        <p>Работи на експлозивност, стабилност, фокус и контрола. Се користи сопствена телесна тежина и
                            отпор од вреќата за да се добие ефективен и забавен тренинг. Овој формат е идеален за оние
                            што сакаат моќен тренинг со јасна цел и резултат.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Персонални тренинзи / Персонални тренинзи /'} strokeColor="#6F9D80" />
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