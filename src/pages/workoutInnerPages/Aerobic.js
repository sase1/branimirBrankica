import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import CustomLink from "../../components/CustomLink";
import ContactForm from "../../components/ContactForm";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";

import { useTranslation } from "react-i18next";

export default function Aerobic() {

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
            <PageHeader title={t("aerobicHeading")} />
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>{t("whatIsAerobic")}</h1>
                        <p className="my-5">{t("aerobicInfo")}</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid" ref={titleRoundRef}>
                <HeaderMovingLines text={'Step Aerobic / Step Aerobic /'} strokeColor="#FB8B01"/>
            </div>
            <div className="container" >
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4" >
                        <img src={`${process.env.PUBLIC_URL}/images/workout/aerobic/step-aerobic.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("stepAerobicTitle")}</h2>
                        <p>{t("stepAerobicSubtitle")}
                        </p>
                        <p> {t("stepAerobicSubSubtitle")}</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid" ref={titleRef}>
                <HeaderMovingLines text={'Kick Box Aerobic / Kick Box Aerobic /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/aerobic/kick-box.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("kickboxAerobicTitle")}</h2>
                        <p>{t("kickboxAerobicSubtitle")}
                        </p>
                        <p> {t("kickboxAerobicSubSubtitle")}</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Low Impact Aerobic / Low Impact Aerobic /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("lowImpactAerobicTitle")}</h2>
                        <p>{t("lowImpactAerobicSubtitle")}
                        </p>
                        <p> {t("lowImpactAerobicSubSubtitle")}</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Зумба / Зумба / Зумба /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">

                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("zumbaTitle")}</h2>
                        <p>{t("zumbaSubtitle")}
                        </p>
                        <p>{t("zumbaSubSubtitle")} </p>
                        <CustomLink to="/фит-универзум/зумба" text="Дознајте Повеќе"/>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
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