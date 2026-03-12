import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";
import {useTranslation} from "react-i18next";

export default function BFitTeen() {
    const { t } = useTranslation();

    return (
        <>
            <PageHeader title="B-FitTeen"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>B-FitTeen</h1>
                        <p className="my-5">{t("bfitTeenInfo")}
                        </p>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <HeaderMovingLines text={'Растеме заедно / Растеме заедно /'} strokeColor="#6F9D80"/>
            </div>

            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/b-teen/bfit.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("bfitTeenCoreFunctionTitle")}</h2>
                        <p>
                            {t("bfitTeenCoreFunctionSubtitle")}
                        </p>
                        <p>
                            {t("bfitTeenCoreFunctionSubSubtitle")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Растеме силни / Растеме силни /'} strokeColor="#FB8B01"/>
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/b-teen/bfit.png`}
                             alt="logo"/>
                        <h2 className="my-4">{t("benefitsOfBfitTitle")}</h2>
                        <p>• {t("benefitsOfBfitSubtitleOne")} </p>
                        <p>• {t("benefitsOfBfitSubtitleTwo")}  </p>
                        <p>• {t("benefitsOfBfitSubtitleThree")}  </p>
                        <p>• {t("benefitsOfBfitSubtitleFour")}  </p>
                        <p>• {t("benefitsOfBfitSubtitleFive")}  </p>
                        <p>• {t("benefitsOfBfitSubtitleSix")}  </p>
                        <p>• {t("benefitsOfBfitSubtitleSeven")}  </p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Персонални тренинзи / Персонални тренинзи /'} strokeColor="#6F9D80"/>
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