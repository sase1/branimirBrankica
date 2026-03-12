import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";
import {useTranslation} from "react-i18next";

export default function Zumba() {
    const { t } = useTranslation();

    return (
        <>
            <PageHeader title={t("zumbaTitle")}/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>{t("zumbaHeading")}</h1>
                        <p className="my-5">{t("zumbaInfo")}</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Зумба Fitness / Зумба Fitness /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/zumba/zumba.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("zumbaFitnessHeading")}</h2>
                        <p>{t("zumbaFitnessSubtitle")}
                        </p>
                        <p>{t("zumbaFitnessSubSubtitle")}</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Зумба Toning / Зумба Toning /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/zumba/zumba-toning.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("zumbaToningHeading")}</h2>
                        <p>{t("zumbaToningSubtitle")}
                        </p>
                        <p> {t("zumbaToningSubSubtitle")}</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Зумба Step / Зумба Step /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/zumba/zumba.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("zumbaStepHeading")}</h2>
                        <p>{t("zumbaStepSubtitle")}
                        </p>
                        <p>{t("zumbaStepSubSubtitle")}</p>
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