import PageHeader from "../../components/PageHeader";
import Schedule from "../../components/Schedule";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";

export default function Pilates() {
    return (
        <>
            <PageHeader title="Пилатес"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што е Пилатес?</h1>
                        <p className="my-5">Пилатес е метод на вежбање што ја зајакнува мускулатурата, особено јадрото
                            (core), и го подобрува држењето, флексибилноста и телесната свесност. Се изведува со
                            контролирани, прецизни движења и правилно дишење. Погоден е за сите нивоа, вклучувајќи
                            рехабилитација и спортска поддршка. Со редовна пракса, пилатес создава силно, стабилно и
                            урамнотежено тело со подобрена координација и издржливост.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Cardiobarre Пилатес / Cardiobarre Пилатес /'} strokeColor="#FB8B01"/>
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Cardiobarre Pilates</h2>
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
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Мат Пилатес / Мат Пилатес /'} strokeColor="#6F9D80"/>
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
                        <h2 className="my-4">Мат Пилатес</h2>
                        <p>Mat Pilates се изведува на подлога (мат) и е суштината на оригиналниот пилатес метод развиен
                            од Џозеф Пилатес. Се фокусира на зајакнување на јадрото (core), подобрување на
                            флексибилноста и координацијата, како и на стабилизација на 'рбетот.
                        </p>
                        <p> Вежбите се изведуваат со контрола на движењата, свесност за телото и правилно дишење. Без
                            потреба од реквизити, Mat Pilates е совршен за почетници, но истовремено нуди и напредни
                            варијации за поискусните вежбачи. Овој стил е одличен за намалување на болки во грбот,
                            подобрување на држењето и враќање на балансот во телото.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Fitball Пилатес / Fitball Пилатес /'} strokeColor="#FB8B01"/>
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Fitball Пилатес</h2>
                        <p>Fitball Pilates користи голема топка за стабилност (fitball) за да се предизвика балансот и
                            да се активираат длабоките стабилизатори на телото. Преку специфични вежби кои се изведуваат
                            на или со поддршка од топката, се зајакнуваат мускулите на јадрото, подобрува држењето и се
                            подобрува подвижноста на зглобовите.
                        </p>
                        <p>Fitball вежбите нудат ефикасна рехабилитација, но и предизвик за поискусните, благодарение на
                            нестабилната површина што бара фокус, концентрација и контрола. Овој тип пилатес е идеален
                            за оние што сакаат да ја подобрат координацијата, да ја активираат мускулатурата на целото
                            тело и да се забавуваат во процесот.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Bosu Пилатес / Bosu Пилатес /'} strokeColor="#6F9D80"/>
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
                        <h2 className="my-4">Bosu Пилатес</h2>
                        <p>Bosu Pilates е современ пристап кон пилатес вежбите, во кој се користи BOSU – полусфера која
                            создава нестабилна подлога за изведба на вежбите. Овој елемент ја зголемува сложеноста на
                            класичните пилатес движења, го предизвикува балансот и ги активира длабоките мускули.
                        </p>
                        <p> BOSU платформата овозможува мултидимензионални вежби за стабилност, сила и координација, што
                            резултира со поефикасен и функционален тренинг. Bosu Pilates е погоден за лица кои сакаат
                            динамика, предизвик и подобрување на телесната свесност и сила преку контрола и
                            стабилизација.</p>
                    </div>
                </div>
            </div>
            <Schedule/>
        </>
    )
}