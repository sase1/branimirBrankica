import PageHeader from "../../components/PageHeader";
import "./LationDances.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";

export default function SportDoubleDance() {
    return (
        <>
            <PageHeader title="Спортски Танцови Двојки"/>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Сцена за личен израз</h1>
                        <p className="my-5">Спортското танцување е дисциплина која го обединува најдоброто од светот на
                            спортот и уметноста. Се изведува во пар – момче и девојка – со високо ниво на техничка
                            подготвеност, кондиција и уметнички израз. Танчерите се меѓу најатлетски подготвените
                            изведувачи, со силно, тонирано тело и совршена контрола на движењата – резултат на
                            континуирани изометриски и изотонични вежби. Оваа дисциплина бара прецизност, издржливост и
                            силна ментална посветеност.</p>
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
                        <h2 className="my-4">Како изгледа тренингот / натпреварот?</h2>
                        <p>Тренинзите на спортските танцови двојки се поделени во три категории: технички тренинг
                            (совладување на чекори, ритам и водство), кондициски тренинг (јакнење на телото и
                            издржливост) и практични тренинзи со поставени кореографии.
                        </p>
                        <p>
                            Танчерите се натпреваруваат во две дисциплини – 5 латиноамерикански танци (самба, ча-ча-ча,
                            румба, пасодобле, џајв) и 5 стандардни танци (валцер, танго, виенски валцер, фокстрот,
                            квикстеп), според правилата на WDSF. Категориите се распоредени според возраста: пионери,
                            млади младинци, младинци, постари младинци, возрасни и сениори.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Танц без Правила / Танц без Правила /'} strokeColor="#6F9D80" />
            </div>
            <div className="container rulesDance">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Како се започнува?</h2>
                        <p>Секој врвен танчар некогаш почнал од почетна група. Во клубот „Бранимир и Бранкица“ со
                            особено внимание ги подготвуваме новите генерации, со фокус на правилна основа, мотивација и
                            љубов кон танцот. Нашата цел е секој танчар да го доживее танцот како спорт, рекреација и
                            здрав начин на живот.
                        </p>
                        <p> За некои, тоа е почеток на пат кон професионално танцување, за други – безбедна и креативна
                            активност што го збогатува секојдневието.</p>
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