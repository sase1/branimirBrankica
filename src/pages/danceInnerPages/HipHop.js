import Schedule from "../../components/Schedule";
import PageHeader from "../../components/PageHeader";
import "./LationDances.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";

export default function HipHop() {
    return (
        <>
            <PageHeader title="Хип Хоп"/>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што е Хип Хоп?</h1>
                        <p className="my-5">Hip Hop е урбан танц што потекнува од улиците на Њујорк и претставува дел од
                            пошироката хип-хоп култура. Карактеристичен е по својата слобода, експресивност и
                            импровизација. Се танцува на хип-хоп, рап, R&B и trap музика, со нагласени ритми и стилски
                            движења. Танцот комбинира елементи од изолирани движења, footwork и attitude, а овозможува
                            самостоен израз, креативност и целосна телесна слобода.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Танц со Правила /'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Хип Хоп</h2>
                        <p>Hip Hop танцот е енергичен, модерен и постојано еволуирачки стил што ги следи најновите
                            музички и улични трендови. Се карактеризира со ритмички движења, силен groove, контраст меѓу
                            брзи и бавни сегменти и акцент на личен стил и израз.
                        </p>
                        <p>
                            Се танцува соло, во група или во форма на battle. Овој стил е идеален за младите и сите што
                            сакаат да се движат слободно, да го изразат својот став и да се поврзат со културата на
                            улицата.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Танц без Правила /'} strokeColor="#6F9D80"/>
            </div>
            <div className="container rulesDance">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Ragga Jam</h2>
                        <p>Ragga Jam е експлозивна фузија на реге-дансхол танц со хип-хоп елементи. Потекнува од
                            уличната култура на Јамајка и Франција и се карактеризира со женствени, енергични и ритмички
                            движења на колковите, градите и целото тело.
                        </p>
                        <p>
                            Се танцува на реге и денсхол музика, со висока доза на attitude и сцена. Ragga Jam е моќна и
                            забавна форма на танц која ја слави енергијата, женственоста, телесната слобода и
                            позитивниот дух.
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
                <HeaderMovingLines text={'Танц со Правила /'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Break Dance</h2>
                        <p>Break Dance е акробатски и атлетски уличен танц што вклучува елементи како toprock, footwork,
                            power moves и freezes. Потекнува од 1970-тите во Бронкс, Њујорк, и претставува еден од
                            четирите главни елементи на хип-хоп културата.
                        </p>
                        <p>
                            Овој стил бара сила, координација, ритам и креативност, а најчесто се изведува на battle или
                            перформанси. Break Dance нуди уникатен начин на самоизразување преку движења кои ја
                            надминуваат гравитацијата.</p>
                    </div>
                </div>
            </div>

            <Schedule/>
        </>
    )
}