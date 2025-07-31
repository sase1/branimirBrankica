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
                        <p className="my-5">B-Fit Teen е специјализирана програма за физичка активност наменета за деца
                            и тинејџери од 9 до 15 години. Таа е креирана со цел да го поддржи здравиот раст и
                            правилниот физички развој на младите преку безбедни, контролирани и ефективни вежби.
                            Програмата е прилагодена на возраста и потребите на децата, со фокус на превенција и
                            корекција на постурални нарушувања, зајакнување на телото и развивање на здрави навики.
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
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Растеме заедно</h2>
                        <p>
                            B-Fit Teen не е само програма за физичко здравје – таа е и простор каде што децата градат
                            самодоверба, дисциплина и позитивен однос кон своето тело.
                        </p>
                        <p>
                            Преку редовна активност во поддржувачка и мотивирачка средина, децата се охрабруваат да се
                            движат правилно, да се грижат за себе и да ја развиваат својата физичка и ментална
                            издржливост. Тоа е инвестиција во нивната долгорочна добросостојба.
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
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Здрави деца, среќни родители.</h2>
                        <p>B-Fit Teen е дел од нашата програма наменета за деца од 9 до 15 години. Се состои од
                            внимателно избрани физички вежби дозирани по интензитет, вид и траење, кои се применуваат
                            превентивно – кај деца со предиспозиции за постурални деформитети, и тераписки – ако тие
                            веќе постојат.
                        </p>
                        <p>
                            Преку прецизно изведени движења, програмата овозможува правилен развој на локомоторниот
                            систем, зголемување на сила, флексибилност, подвижност и координација, подобрување на
                            кардиоваскуларната функција и контрола на телесната тежина. Вежбањето е и забавно –
                            социјализација, дружење и среќа на едно место.</p>
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