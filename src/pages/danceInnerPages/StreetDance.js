import PageHeader from "../../components/PageHeader";
import "./LationDances.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";

export default function StreetDance() {

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
            <PageHeader title="Street Dance"/>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што е Street Dance?</h1>
                        <p className="my-5">Street dance е урбана форма на танц која се развила од уличната култура и се
                            танцува со слобода, став и силна поврзаност со музиката. Комбинира различни стилови како hip
                            hop – со ритмички чекори и индивидуален израз, ragga jam – инспириран од јамајканските
                            денсхол движења со женствена енергија и attitude, и break dance – акробатски и атлетски танц
                            со power moves и footwork. Овие стилови се повеќе од танц – тие се движење, заедница и
                            слободна уметност во движење.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid" ref={titleRoundRef}>
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
                        <h2 className="my-4">Хип Хоп</h2>
                        <p>Hip Hop танцот е енергичен, модерен и постојано еволуирачки стил што ги следи најновите
                            музички и
                            улични трендови. Се карактеризира со ритмички движења, силен groove, контраст меѓу брзи и
                            бавни
                            сегменти и акцент на личен стил и израз.
                        </p>
                        <p className="mb-0">
                            Се танцува соло, во група или во форма на battle.
                        </p>
                        <p>
                            Овој стил е идеален за младите и сите што сакаат да се движат слободно и да го изразат
                            својот став.
                        </p>

                    </div>
                </div>
            </div>

            <div className="container-fluid" ref={titleRef}>
                <HeaderMovingLines text={'Танц без Правила / Танц без Правила /'} strokeColor="#6F9D80" />
            </div>
            <div className="container rulesDance">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Ragga Jam</h2>
                        <p>Ragga Jam е експлозивна фузија на реге-дансхол танц со хип-хоп елементи. Потекнува од
                            уличната култура на Јамајка и Франција и се карактеризира со енергични и ритмички движења на
                            колковите, градите и целото тело.
                        </p>
                        <p> Се танцува на реге и денсхол музика, со висока доза на attitude и сцена. Ragga Jam е моќна и
                            забавна форма на танц која ја слави енергијата,телесната слобода и позитивниот дух.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
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
                        <h2 className="my-4">Break Dance</h2>
                        <p>Break Dance е акробатски и атлетски уличен танц што вклучува елементи како toprock, footwork,
                            power moves и freezes. Потекнува од 1970-тите во Бронкс, Њујорк, и претставува еден од
                            четирите главни елементи на хип-хоп културата.
                        </p>
                        <p>
                            Овој стил бара сила, координација, ритам и креативност, а најчесто се изведува на battle или
                            перформанси. Break Dance нуди уникатен начин на самоизразување преку движења кои ја
                            надминуваат гравитацијата.
                        </p>
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