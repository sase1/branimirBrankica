import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";

export default function CorrectionalGymnastic() {
    return (
        <>
            <PageHeader title="Превентивно корективна гимнастика"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што е Превентивно корективна гимнастика?</h1>
                        <p className="my-5">Превентивно-Корективна Гимнастика е дел од широкоспектарната програма
                            достапна во нашиот клуб. Претставува збир на физички вежби дозирани по интензитет, вид и
                            траење кои може да се применуваат превентивно кај децата кои имаат предиспозици за настанок
                            на некој од постуралните деформитети или да се делува тераписки ако веќе тие постојат.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Растеме заедно / Растеме заедно /'} strokeColor="#6F9D80" color="#6F9D80"/>
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/pkg.png`}
                             alt="logo"/>
                        <h2 className="my-4">Растеме заедно</h2>
                        <p>Превентивно – Корективната гимнастика е наменета за деца од предучилишна и училишна возраст и
                            има за цел преку прецизни и контролирани вежби да го поттикне правилниот развој на
                            локомоторниот систем. Таа делува превентивно и корективно кај пореметувања на ’рбетот,
                            нозете и стапалата.
                        </p>
                        <p>Програмата овозможува зголемена мускулна сила, еластичност и подвижност, подобрување на
                            координацијата, кардиоваскуларната функција и контрола на телесната тежина – сето тоа низ
                            забавно и социјално искуство.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Растеме силни / Растеме силни'} strokeColor="#FB8B01" color="#FB8B01"/>
            </div>

            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/pkg.png`}
                             alt="logo"/>
                        <h2 className="my-4">Здрави деца, среќни родители.</h2>
                        <p>
                            Основната цел на B-Fit Teen е преку точно изведени движења и контролиран ритам на вежбање да
                            обезбеди правилен развој на локомоторниот систем и подобрување на целокупната физичка
                            состојба. Програмата овозможува зголемување на мускулната сила и издржливост, еластичност на
                            мускулите, подвижност на зглобовите, унапредување на кардиоваскуларната функција, развој на
                            координација и контрола на телесната тежина.
                        </p>

                        <p>
                            Дополнително, вежбањето е забавно и поттикнува социјализација, дружење и градење на
                            самодоверба кај децата.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Персонални тренинзи / Персонални тренинзи /'} strokeColor="#6F9D80" color="#6F9D80"/>
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