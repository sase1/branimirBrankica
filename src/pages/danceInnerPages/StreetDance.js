import PageHeader from "../../components/PageHeader";
import "./LationDances.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";
import {useTranslation} from "react-i18next";

export default function StreetDance() {

    const location = useLocation();
    const navigate = useNavigate();
    const titleRef = useRef(null);
    const titleRoundRef = useRef(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollToTitle = params.get("scrollToTitle");
        const scrollToTitleRound = params.get("scrollToTitleRound");

        if (scrollToTitle && titleRef.current) {
            titleRef.current.scrollIntoView({behavior: "smooth"});
        }

        if (scrollToTitleRound && titleRoundRef.current) {
            titleRoundRef.current.scrollIntoView({behavior: "smooth"});
        }

        if (scrollToTitle || scrollToTitleRound) {
            const cleanURL = location.pathname;
            navigate(cleanURL, {replace: true});
        }
    }, [location.search, location.pathname, navigate]);

    const { t } = useTranslation();


    return (
        <>
            <PageHeader title="Street Dance"/>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>{t("streetDanceHeading")}</h1>
                        <p className="my-5">{t("streetDanceInfo")}</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid" ref={titleRoundRef}>
                <HeaderMovingLines text={'Танц со Правила / Танц со Правила /'} strokeColor="#FB8B01" />
            </div>

            <div className="container rulesDance">
                <div className="row content flex-column-reverse flex-lg-row">

                    <div className="col-lg-5 align-content-center text-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white  text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("hipHopHeading")}</h2>
                        <p>{t("hipHopSubtitle")}
                        </p>
                        <p>
                            {t("hipHopSubSubtitle")}
                        </p>

                    </div>
                </div>
            </div>

            <div className="container-fluid" ref={titleRef}>
                <HeaderMovingLines text={'Танц без Правила / Танц без Правила /'} strokeColor="#6F9D80" />
            </div>
            <div className="container rulesDance">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Ragga Jam</h2>
                        <p>{t("raggaJamSubtitle")}
                        </p>
                        <p> {t("raggaJamSubSubtitle")}</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Танц со Правила / Танц со Правила /'} strokeColor="#FB8B01" />
            </div>

            <div className="container rulesDance">
                <div className="row content flex-column-reverse flex-lg-row">

                    <div className="col-lg-5 align-content-center text-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white  text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Break Dance</h2>
                        <p>{t("breakDanceSubtitle")}
                        </p>
                        <p>
                            {t("breakDanceSubSubtitle")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Персонални тренинзи / Персонални тренинзи /'} strokeColor="#FB8B01" />
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