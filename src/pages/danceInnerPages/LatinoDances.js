import Schedule from "../../components/Schedule";
import PageHeader from "../../components/PageHeader";
import "./LationDances.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";

export default function LatinoDances() {
    return (
        <>
            <PageHeader title="Латино Танци"/>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што се Латино Американски танци?</h1>
                        <p className="my-5">Латинско-американските танци се срцето на секој спортски и друштвен танцов
                            репертоар. Потекнуваат од Латинска Америка, Шпанија и САД, и се карактеризираат со страст,
                            динамика, ритам и комуникација меѓу партнерите. Танците како самба, ча-ча-ча, румба,
                            пасодобле и џајв нудат широка палета на музички стилови и емоционални изрази – од заводлива
                            сензуалност до експлозивна енергија. Овие танци не само што го обликуваат телото, туку и го
                            будат духот и самодовербата.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Танц со Правила /'} strokeColor="#FB8B01"/>
            </div>
            <div className="container rulesDance">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Самба</h2>
                        <p>Самба е енергичен и ритмичен танц со бразилско потекло, познат по својата карактеристична
                            пулсирачка основа и живописни движења. Се танцува во пар и вклучува пружени колена, брзи
                            чекори и флуидни ротации.
                        </p>
                        <p>
                            Самбата зрачи со радост, страст и карневалска енергија, правејќи ја една од највпечатливите
                            танцови дисциплини во латинскиот стил.
                        </p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Танц без Правила /'} strokeColor="#6F9D80"/>
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
                        <h2 className="my-4">Ча-ча-ча</h2>
                        <p>Ча-ча-ча е весел и игрив танц што потекнува од Куба. Карактеристичен е по ритамот „два – три
                            – ча-ча“, што создава разиграно и темпо движење.
                        </p>
                        <p>
                            Со остри чекори, хип-акценти и секвенци со изразен флерт, ча-ча-ча нуди одлична можност за
                            музикално изразување и забава на паркетот.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Танц со Правила /'} strokeColor="#FB8B01"/>
            </div>
            <div className="container rulesDance">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Румба</h2>
                        <p>Румбата е најромантичниот од латинските танци, препознатлива по своето бавно темпо, сензуални
                            движења и изразена емоционалност. Потекнува од Куба и се базира на раскажување љубовна
                            приказна преку танц.
                        </p>
                        <p>
                            Со нагласено движење на колковите и внимателна комуникација меѓу партнерите, румбата е
                            елегантна и длабоко изразувачка.
                        </p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Танц со Правила /'} strokeColor="#6F9D80"/>
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
                        <h2 className="my-4">Пасодобле</h2>
                        <p>Пасодобле е драматичен и театарски танц инспириран од шпанската корида, каде машкиот танчер
                            го претставува тореадорот, а партнерката неговата пелерина.
                        </p>
                        <p>
                            Со марширачки ритам, остри линии и силна презентација, овој танц носи гордост, контрола и
                            сценска моќ. Пасодобле бара држење со став и присуство, правејќи го вистински спектакл.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Танц со Правила /'} strokeColor="#FB8B01"/>
            </div>
            <div className="container rulesDance">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Џајв</h2>
                        <p>Џајв е најбрзиот и најзабавниот од латинските танци, со американско потекло. Се танцува во
                            брзо темпо со разиграни чекори, скокови и енергични движења.
                        </p>
                        <p>
                            Иако технички бара прецизност и кондиција, џајвот нуди заразна енергија и постојано чувство
                            на радост. Тој е совршен спој на спорт и забава на паркетот.
                        </p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <Schedule/>
        </>
    )
}