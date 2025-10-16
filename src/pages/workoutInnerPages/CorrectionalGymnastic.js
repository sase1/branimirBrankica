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
                        <p className="my-5">Превентивно-корективната гимнастика е специјализиран тип физичка активност
                            наменета за деца со неправилно држење или ризик од развој на постурални деформитети. Се
                            изведува низ внимателно избрани и дозирани вежби по интензитет, вид и траење, со цел да се
                            обезбеди здрав развој на мускулно-скелетниот систем. Во нашиот клуб, оваа програма е дел од
                            широкоспектарната понуда и се спроведува од професионален тим со искуство во работа со
                            најмладите.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Растеме заедно / Растеме заедно /'} strokeColor="#6F9D80"/>
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/pkg.png`}
                             alt="logo"/>
                        <h2 className="my-4">Превентивна функција</h2>
                        <p>Овој пристап е насочен кон деца од предучилишна и училишна возраст кои покажуваат
                            предиспозиции за искривувања на рбетот, нозете или стапалата. Преку прецизно контролирани
                            вежби, децата ја подобруваат својата телесна поставеност, се стекнуваат со правилни движења
                            и развиваат здраво тело уште од најрана возраст.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Растеме силни / Растеме силни'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Корективна функција и бенефити</h2>
                        <p>
                            Доколку постои веќе настанат деформитет, корективната гимнастика делува тераписки – ги
                            намалува болките, ја подобрува мускулната рамнотежа, го зголемува обемот на подвижност во
                            зглобовите и го стабилизира држењето.
                        </p>

                        <p>
                            Дополнително, се развива кардиоваскуларната функција, се зголемува еластичноста и
                            издржливоста, а децата преку игра и социјализација стекнуваат чувство на радост и сигурност
                            во движењето.
                        </p>
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