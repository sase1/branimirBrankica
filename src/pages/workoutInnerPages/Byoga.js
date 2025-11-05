import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";
import CustomLink from "../../components/CustomLink";
import {useEffect, useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export default function Byoga() {

    const location = useLocation();
    const navigate = useNavigate();

    const titleRoundRef = useRef(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollToRound = params.get("scrollToRound");

        if (scrollToRound && titleRoundRef.current) {
            titleRoundRef.current.scrollIntoView({ behavior: "smooth" });
        }

        if (scrollToRound) {
            const cleanURL = location.pathname;
            navigate(cleanURL, { replace: true });
        }
    }, [location.search, location.pathname, navigate]);

    return (
        <>
            <PageHeader title="BYoga"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што е Yoga?</h1>
                        <p className="my-5">Јога е древна практика што ги поврзува телото, умот и духот преку движења
                            (асани), дишење и медитација. Освен физичките бенефити како флексибилност, сила и баланс,
                            таа нуди и ментална јасност, намалување на стресот и внатрешен мир. Јогата може да биде
                            мирна или интензивна, прилагодлива за сите возрасти и нивоа, и претставува пат кон подобро
                            здравје, свесност и лична рамнотежа.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Hatha Yoga / Hatha Yoga /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/byoga/byoga.png`}
                             alt="logo"/>
                        <h2 className="my-4">Hatha Yoga</h2>
                        <p>Hatha Yoga е традиционална форма на јога која се фокусира на балансот помеѓу телото и умот
                            преку асани (пози), пранајама (техники на дишење) и релаксација.
                            Тренингот се одвива со помирен ритам, со задржување на пози подолго време, што овозможува
                            продлабочена телесна свесност и истегнување.
                        </p>
                        <p> Идеална е за почетници, но и за сите што сакаат подлабока
                            врска со себе преку мирен, стабилен и холистички пристап.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Ashtanga Yoga / Ashtanga Yoga /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/byoga/byoga.png`}
                             alt="logo"/>
                        <h2 className="my-4">Ashtanga Yoga</h2>
                        <p>Ashtanga Yoga е динамична и структурирана форма на јога која следи фиксен редослед на пози
                            (асани), поврзани со дишење (уџаји) и внатрешен фокус (дришти). Секоја сесија има интензивен
                            физички и ментален предизвик, со акцент на сила, издржливост и дисциплина.
                        </p>
                        <p> Оваа практика е идеална за оние што сакаат постојаност, саморефлексија и личен напредок
                            преку редовна, активна јога рутина.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Vinyasa Flow Yoga / Vinyasa Flow Yoga /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/byoga/byoga.png`}
                             alt="logo"/>
                        <h2 className="my-4">Vinyasa Flow Yoga</h2>
                        <p>Vinyasa Flow Yoga е флуидна, креативна форма на јога каде движењата се поврзуваат со дишењето
                            во тековен „flow“. Нема фиксен редослед на пози, што дава простор за различни секвенции и
                            слобода во изразот.
                        </p>
                        <p> Ритамот може да биде спокоен или интензивен, зависно од фокусот. Идеална е за оние што
                            сакаат разновидност, енергија и медитативно движење во една пракса.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Power Yoga / Power Yoga /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/byoga/byoga.png`}
                             alt="logo"/>
                        <h2 className="my-4">Power Yoga</h2>
                        <p>Power Yoga е современа, силна и фитнес-ориентирана варијанта на јога инспирирана од Ashtanga.
                            Се изведува со побрз ритам, со фокус на градење сила, издржливост и мускулен тонус.
                        </p>
                        <p> Оваа практика е интензивна и активира целиот телесен систем, при што се задржува јогискиот
                            дух на присутност и дишење. Совршена е за оние што сакаат физички предизвик и видливи фитнес
                            резултати преку јога.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Restorative Yoga / Restorative Yoga /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/byoga/byoga.png`}
                             alt="logo"/>
                        <h2 className="my-4">Restorative Yoga</h2>
                        <p>Restorative Yoga е тивка, терапевтска пракса насочена кон целосно опуштање и регенерација. Се
                            изведува со поддршка од перничиња, ќебиња и реквизити, со долги задржувања во удобни пози,
                            без напор или напрегање. Фокусот е на дишењето, свесноста и ослободување од стресот, при што
                            телото се смирува, а нервниот систем се балансира.
                        </p>
                        <p> Овој вид јога е идеален за оние што имаат потреба од одмор, обновување и враќање во
                            внатрешен баланс.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid" ref={titleRoundRef}>
                <HeaderMovingLines text={'Meuna / Meuna / Meuna /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/byoga/meuna.png`}
                             alt="logo"/>
                        <h2 className="my-4">Meuna</h2>
                        <p>Power Yoga е современа, силна и фитнес-ориентирана варијанта на јога инспирирана од Ashtanga.
                            Се изведува со побрз ритам, со фокус на градење сила, издржливост и мускулен тонус.
                        </p>
                        <p> Оваа практика е интензивна и активира целиот телесен систем, при што се задржува јогискиот
                            дух на присутност и дишење. Совршена е за оние што сакаат физички предизвик и видливи фитнес
                            резултати преку јога.</p>
                        <CustomLink to="/меуна" text="Дознајте Повеќе"/>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Персонални тренинзи / Персонални тренинзи /'} strokeColor="#F89520" />
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