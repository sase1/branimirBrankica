import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";

export default function BFitTeen() {
    return (
        <>
            <PageHeader title="B-FitTeen"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>B-FitTeen</h1>
                        <p className="my-5">B-Fit Teen е специјално осмислена програма како дел од нашата
                            широкоспектарна понуда, наменета за деца од 9 до 15 години. Преку прецизно дозирани физички
                            вежби – по интензитет, вид и траење – програмата се користи и превентивно, кај деца со
                            предиспозиции за постурални нарушувања, и тераписки, кога тие веќе се присутни. Фокусот е на
                            правилен моторен развој и одржување на здраво и функционално тело во критичниот развоен
                            период.
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
                        <h2 className="my-4">Основна функција на програмата</h2>
                        <p>
                            Целта на B-Fit Teen е да овозможи нормално функционирање на локомоторниот систем кај децата
                            преку физичка активност што вклучува точно извршување на просторни и временски елементи на
                            движење.
                        </p>
                        <p>
                            Оваа дисциплина е особено важна во фазата на раст и развој, кога телото е најподложно на
                            промени и може ефикасно да се води кон правилен мускулно-скелетен развој.
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
                        <h2 className="my-4">Бенефити од програмата B-Fit Teen</h2>
                        <p>• Зголемување на мускулната сила и издржливост </p>
                        <p>• Подобрување на еластичноста на мускулите </p>
                        <p>• Зголемување на подвижноста во зглобовите </p>
                        <p>• Јакнење на кардиоваскуларниот систем </p>
                        <p>• Развивање и унапредување на координацијата </p>
                        <p>• Одржување на здрава телесна тежина </p>
                        <p>• Преку игра и дружба – среќа, самодоверба и социјализација </p>
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