import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import {useEffect, useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import ContactForm from "../../components/ContactForm";

export default function FunctiuonalFitness() {

    const location = useLocation();
    const navigate = useNavigate();
    const titleRef = useRef(null);
    const titleRoundRef = useRef(null);


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const shouldScroll = params.get("scrollToTitle");

        if (shouldScroll && titleRef.current) {
            titleRef.current.scrollIntoView({ behavior: "smooth" });

            const cleanURL = location.pathname;
            navigate(cleanURL, { replace: true });
        }
    }, [location.search, location.pathname, navigate]);



    return (
        <>
            <PageHeader title="Функционален Фитнес"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што е Функционален Фитнес?</h1>
                        <p className="my-5">Функционалниот фитнес е тренинг што го подготвува телото за реални,
                            секојдневни движења – седење, подигање, вртење, туркање. Се базира на вежби кои активираат
                            повеќе мускулни групи истовремено и ја подобруваат мобилноста, балансот, јачината и
                            координацијата. Наместо изолирани движења, тука секој тренинг има практична цел. Подеднакво
                            е корисен за спортисти и почетници – бидејќи го прави телото функционално, здраво и
                            подготвено за живот.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'CrossFit / CrossFit / CrossFit /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/func-fit/cross.png`}
                             alt="logo"/>
                        <h2 className="my-4">CrossFit</h2>
                        <p>CrossFit е високоинтензивен функционален тренинг кој комбинира елементи од тежинско кревање,
                            кардио, гимнастика и вежби со телесна тежина. Секој тренинг е различен и се изведува во
                            кратки, интензивни интервали (WOD – Workout of the Day).
                        </p>
                        <p>Целта е развој на сила, издржливост, експлозивност и ментална дисциплина. CrossFit е идеален
                            за оние што сакаат предизвик, енергија и напредок, без монотонија – секој ден носи ново
                            искуство.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid" ref={titleRoundRef}>
                <HeaderMovingLines text={'BodySculpt / BodySculpt /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/func-fit/body.png`}
                             alt="logo"/>
                        <h2 className="my-4">BodySculpt</h2>
                        <p>BodySculpt е обликувачки тренинг што се фокусира на дефинирање и тонирање на мускулите преку
                            контролирани вежби со мали тегови, ластици, топки и сопствена тежина. Тренингот го активира
                            целото тело, особено стомачните мускули, задникот, бутовите и рацете.
                        </p>
                        <p> BodySculpt не е насочен кон маса, туку кон елегантен и цврст изглед. Идеален е за оние што
                            сакаат видливи резултати, но со контролирано темпо и акцент на прецизност.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Circuit Training / Circuit Training /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/func-fit/circuit.png`}
                             alt="logo"/>
                        <h2 className="my-4">Circuit Training</h2>
                        <p>Кружниот тренинг е ефикасна фитнес метода што комбинира неколку различни вежби во
                            последователни станици, изведени со кратки паузи. Се работи на кардио, сила, рамнотежа и
                            издржливост во само една сесија.
                        </p>
                        <p>Темпото е умерено до високо, а форматот лесно се адаптира според ниво на кондиција. Кружниот
                            тренинг е идеален за брзи резултати, согорување калории и подобрување на целокупната форма,
                            без рутина или досада.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid" ref={titleRoundRef}>
                <HeaderMovingLines text={'Total Body Workout / Total Body Workout /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/func-fit/total.png`}
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
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid" ref={titleRef}>
                <HeaderMovingLines text={'Ultimate Bag Workout / Ultimate Bag Workout /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/func-fit/ultimate.png`}
                             alt="logo"/>
                        <h2 className="my-4">Ultimate Bag Workout</h2>
                        <p>Ultimate Bag Workout е високоинтензивен тренинг каде што се користи боксерска вреќа за
                            изведба на удари и функционални вежби. Комбинира кардио, сила и издржливост во една сесија,
                            активирајќи ја целата мускулатура.
                        </p>
                        <p>Работи на експлозивност, стабилност, фокус и контрола. Се користи сопствена телесна тежина и
                            отпор од вреќата за да се добие ефективен и забавен тренинг. Овој формат е идеален за оние
                            што сакаат моќен тренинг со јасна цел и резултат.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Персонални тренинзи / Персонални тренинзи /'} strokeColor="#6F9D80" />
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