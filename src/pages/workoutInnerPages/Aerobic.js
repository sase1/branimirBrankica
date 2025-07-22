import PageHeader from "../../components/PageHeader";
import Schedule from "../../components/Schedule";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";

export default function Aerobic() {
    return (
        <>
            <PageHeader title="Аеробик"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што е Аеробик?</h1>
                        <p className="my-5">Аеробик е форма на физичка активност која вклучува ритмички и континуирани
                            движења што го зголемуваат пулсот и го подобруваат кардиоваскуларното здравје. Се изведува
                            со или без реквизити, најчесто на музика, и го активира целото тело.
                            Аеробикот ја подобрува издржливоста, согорува калории и ја зголемува енергијата. Погоден е
                            за сите возрасти и нивоа, а редовната пракса носи видливи здравствени и фитнес
                            придобивки.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Kick Box Aerobic / Kick Box Aerobic /'} strokeColor="#FB8B01"/>
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Kick Box Aerobic</h2>
                        <p>Kick Box Aerobic е енергичен кардио тренинг кој ги комбинира техниките од кик-боксот со
                            ритмични аеробик движења.
                            Преку удари со раце, клоци и скокови, телото работи интензивно, при што се согоруваат
                            калории и се подобруваат силата, брзината и координацијата.
                        </p>
                        <p> Овој тренинг го зајакнува целиот телесен систем, го намалува стресот и овозможува
                            ослободување на вишок енергија. Погоден е за сите што сакаат динамика, акција и кардио
                            предизвик со фитнес резултати.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Ultimate Bag Workout / Ultimate Bag Workout /'} strokeColor="#6F9D80"/>
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
                        <h2 className="my-4">Ultimate Bag Workout</h2>
                        <p>Ultimate Bag Workout е високоинтензивен тренинг каде што се користи боксерска вреќа за
                            изведба на удари и функционални вежби.
                            Комбинира кардио, сила и издржливост во една сесија, активирајќи ја целата мускулатура.
                        </p>
                        <p> Работи на експлозивност, стабилност, фокус и контрола. Се користи сопствена телесна тежина и
                            отпор од вреќата за да се добие ефективен и забавен тренинг.
                            Овој формат е идеален за оние што сакаат моќен тренинг со јасна цел и резултат.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Step Aerobic / Step Aerobic /'} strokeColor="#FB8B01"/>
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Step Aerobic</h2>
                        <p>Step Aerobic е класичен аеробик тренинг со употреба на степ-платформа, каде преку ритмични
                            чекори и кореографија се зголемува срцевата фреквенција и се
                            подобрува кардио капацитетот. Движењата се координирани со музика, што го прави тренингот
                            динамичен и забавен.
                        </p>
                        <p> Се работи на долниот дел од телото, како и на рамнотежата и издржливоста. Одличен е за
                            согорување калории, подобрување на моториката
                            и градење кондиција без да биде прегруб за зглобовите.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Total Body Workout / Total Body Workout /'} strokeColor="#6F9D80"/>
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
                        <h2 className="my-4">Total Body Workout</h2>
                        <p>Total Body Workout е функционален тренинг што го активира целото тело преку вежби за сила,
                            кардио и мобилност. Се користат различни реквизити (тегови, ластици, топки) и сопствена
                            телесна тежина, со цел да се работи на мускулна издржливост, тонирање и телесна
                            трансформација.
                        </p>
                        <p> Вежбите се внимателно комбинирани за да се опфати секоја мускулна група и да се постигне
                            целосен фитнес ефект. Погоден е и за почетници и за поискусни вежбачи.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Low Impact Aerobic / Low Impact Aerobic /'} strokeColor="#6F9D80"/>
            </div>
            <div className="container">

                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Low Impact Aerobic</h2>
                        <p>Low Impact Aerobic е лесна, но ефикасна форма на аеробен тренинг која не вклучува скокање или
                            нагли движења, што ја прави идеална за почетници, постари лица или оние што имаат потреба од
                            тренинг со помал стрес за зглобовите.
                        </p>
                        <p> Се изведуваат движења со умерено темпо, насочени кон подобрување на кардио капацитетот,
                            координацијата и благото тонирање на телото. Иако е „low impact“, тренингот е структуриран
                            така што и понатаму обезбедува видливи резултати.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>
            {/*<div className="container-fluid my-5">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-lg-3 imageContent imageContent1"></div>*/}
            {/*        <div className="col-lg-3 imageContent imageContent2"></div>*/}
            {/*        <div className="col-lg-3 imageContent imageContent3"></div>*/}
            {/*        <div className="col-lg-3 imageContent imageContent4"></div>*/}
            {/*        <div className="col-lg-3 imageContent imageContent5"></div>*/}
            {/*        <div className="col-lg-3 imageContent imageContent6"></div>*/}
            {/*        <div className="col-lg-3 imageContent imageContent7"></div>*/}
            {/*        <div className="col-lg-3 imageContent imageContent8"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Schedule/>
        </>
    )
}