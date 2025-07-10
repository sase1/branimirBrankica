import Schedule from "../../components/Schedule";
import PageHeader from "../../components/PageHeader";
import "./Salsa.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";

export default function Salsa() {
    return (
        <>
            <PageHeader title="Салса"/>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-8 offset-lg-2 text-center text-white">
                        <h1>Што е Салса?</h1>
                        <p className="my-5">Салсата денес е меѓу најпопуларните друштвени танци. Самиот танц е многу пикантен, весел,
                            жежок и полетен. Неговиот ритам може да биде бавен или многу брз.
                            Во текот на своето настанување се развил во два стила кубански и порторикански стил.</p>

                    </div>

                    <div className="col-lg-12 videoDance">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Танц без Правила / Танц без правила'} strokeColor="#6F9D80"/>
            </div>
            <div className="container noRulesDance">
                <div className="row content">
                    <div className="col-lg-5 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo" style={{height: '80px'}}/>
                        <h2 className="my-4">Танц без правила</h2>
                        <p>Оригиналното име на кубанската салса е „Casino“ и ден-денес така ја нарекуваат во Куба. Кубанската салса уште се нарекува и „танц без правила“
                            бидејќи секое движење е дозволено.
                            Порториканската салса се појавува по сласлата „Casino“ со цел да го поедностави „несредениот танц“ со вметнување основни чекори позајмени од мамбото и
                            од румбата за да може да танцуваат и пошироките маси.</p>
                    </div>
                    <div className="col-lg-6 offset-lg-1 align-content-center">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Танц со Правила / Танц со правила'} strokeColor="#FB8B01"/>
            </div>

            <div className="container rulesDance">
                <div className="row content flex-column-reverse flex-lg-row">

                    <div className="col-lg-6 align-content-center">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-5 offset-lg-1 text-white  text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                            alt="logo" style={{height: '80px'}}/>
                        <h2 className="my-4">Танц со правила</h2>
                        <p>Подоцна од овој „танц со правила“ доаѓа влијание во родното место Куба и се создава групниот кубански танц RUEDA DE CASINO.
                            Покрај овие танци, во нашиот клуб се изучуваат и другите карипски танци, како бачата и меренге (со доминиканско потекло).</p>
                        <p>
                            А во поново време се актуализира и се популаризира и кизомбата, која, пак, има анголско потекло и е дериват на анголската Semba и Zouk, како и compass музиката од француските карипски острови.
                            Сите овие танци имате можност да ги изучувате во нашиот клуб во групи поделени во нивоа според стекнатото знаење.</p>
                    </div>
                </div>
            </div>

            <Schedule/>
        </>
    )
}