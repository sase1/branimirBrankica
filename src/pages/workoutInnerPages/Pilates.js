import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";
import CustomLink from "../../components/CustomLink";
import {useTranslation} from "react-i18next";

export default function Pilates() {
    const { t } = useTranslation();

    return (
        <>
            <PageHeader title={t("pilatesTitle")}/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>{t("pilatesHeading")}</h1>
                        <p className="my-5">{t("pilatesInfo")}</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Мат Пилатес / Мат Пилатес /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/pilates/mat-pilates.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("matPilatesHeading")}</h2>
                        <p>{t("matPilatesSubtitle")}
                        </p>
                        <p> {t("matPilatesSubSubtitle")}</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Fitball Пилатес / Fitball Пилатес /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/pilates/fitball-pilates.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("fitballPilatesHeading")}</h2>
                        <p>{t("fitBallPilatesSubtitle")}
                        </p>
                        <p>{t("fitBallPilatesSubSubtitle")}</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Cardiobarre Пилатес / Cardiobarre Пилатес /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/pilates/cardiobar.png`}
                             alt="logo"/>
                        <h2 className="my-4">Cardiobarre Пилатес</h2>
                        <p>Cardio Barre Pilates е динамичен тренинг што ја комбинира прецизноста на пилатесот со
                            елеганцијата на балетот и кардио елементите кои го поттикнуваат согорувањето калории. Се
                            користи балетско шипче (barre) како поддршка за изведба на контролирани движења кои ги
                            зацврстуваат нозете, задникот, рацете и стомачните мускули.
                        </p>
                        <p> Тренингот е ритмичен, полн со енергија и се базира на мали, но интензивни изометриски
                            контракции кои го активираат целото тело. Одличен е за зголемување на издржливоста,
                            подобрување на држењето на телото и грациозноста, а истовремено нуди и кардиоваскуларна
                            корист.</p>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <HeaderMovingLines text={'Bosu Пилатес / Bosu Пилатес /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/pilates/bosu.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("ringBosuPilatesHeading")}</h2>
                        <p>{t("ringBosuPilatesSubtitle")}
                        </p>
                        <p>{t("ringBosuPilatesSubSubtitle")}</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <HeaderMovingLines text={'Реформер / Реформер /'} strokeColor="#FB8B01" />
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
                        <h2 className="my-4">{t("reformerHeading")}</h2>
                        <p> {t("reformerSubtitle")}
                        </p>
                        <p> {t("reformerSubSubtitle")}
                        </p>
                        <CustomLink to="/фит-универзум/реформер" text="Дознајте Повеќе"/>
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