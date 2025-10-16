import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import CustomLink from "../../components/CustomLink";
import ContactForm from "../../components/ContactForm";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";

export default function Aerobic() {

    const location = useLocation();
    const navigate = useNavigate();
    const titleRef = useRef(null);
    const titleRoundRef = useRef(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollToTitle = params.get("scrollToTitle");
        const scrollToTitleRound = params.get("scrollToTitleRound");

        if (scrollToTitle && titleRef.current) {
            titleRef.current.scrollIntoView({behavior: "smooth"});
        }

        if (scrollToTitleRound && titleRoundRef.current) {
            titleRoundRef.current.scrollIntoView({behavior: "smooth"});
        }

        if (scrollToTitle || scrollToTitleRound) {
            const cleanURL = location.pathname;
            navigate(cleanURL, {replace: true});
        }
    }, [location.search, location.pathname, navigate]);


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
            <div className="container-fluid" ref={titleRoundRef}>
                <HeaderMovingLines text={'Step Aerobic / Step Aerobic /'} strokeColor="#FB8B01"/>
            </div>
            <div className="container" >
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4" >
                        <img src={`${process.env.PUBLIC_URL}/images/workout/aerobic/step-aerobic.png`}
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
                </div>
            </div>
            <div className="container-fluid" ref={titleRef}>
                <HeaderMovingLines text={'Kick Box Aerobic / Kick Box Aerobic /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/aerobic/kick-box.png`}
                             alt="logo"/>
                        <h2 className="my-4">Kick Box Aerobic</h2>
                        <p>Kick Box Aerobic е енергичен кардио тренинг кој ги комбинира техниките од кик-боксот со
                            ритмични аеробик движења. Преку удари со раце, клоци и скокови, телото работи интензивно,
                            при што се согоруваат калории и се подобруваат силата, брзината и координацијата.
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
                <HeaderMovingLines text={'Low Impact Aerobic / Low Impact Aerobic /'} strokeColor="#FB8B01" />
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
                        <h2 className="my-4">Low Impact Aerobic</h2>
                        <p>Low Impact Aerobic е лесна, но ефикасна форма на аеробен тренинг која не вклучува скокање или
                            нагли движења, што ја прави идеална за почетници, постари лица или оние што имаат потреба од
                            тренинг со помал стрес за зглобовите.
                        </p>
                        <p> Се изведуваат движења со умерено темпо, насочени кон подобрување на кардио капацитетот,
                            координацијата и благото тонирање на телото. Иако е „low impact“, тренингот е структуриран
                            така што и понатаму обезбедува видливи резултати.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Зумба / Зумба / Зумба /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">

                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Зумба</h2>
                        <p>Зумба е забавен танц-фитнес тренинг инспириран од латино и светски ритми. Комбинира кардио
                            движења, лесни кореографии и енергична музика за да создаде ефективен и заразен тренинг.
                            Погоден е за сите возрасти и нивоа, зумба го согорува стресот, калориите и носи насмевка.
                        </p>
                        <p> Без чувство дека вежбате, ќе ги почувствувате бенефитите – за срцето, телото и духот.</p>
                        <CustomLink to="/фит-универзум/зумба" text="Дознајте Повеќе"/>
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