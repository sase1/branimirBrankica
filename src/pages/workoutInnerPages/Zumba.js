import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";

export default function Zumba() {
    return (
        <>
            <PageHeader title="Зумба"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што е Зумба?</h1>
                        <p className="my-5">Зумба е забавен танц-фитнес тренинг инспириран од латино и светски ритми.
                            Комбинира кардио движења, лесни кореографии и енергична музика за да создаде ефективен и
                            заразен тренинг. Погоден е за сите возрасти и нивоа, зумба го согорува стресот, калориите и
                            носи насмевка. Без чувство дека вежбате, ќе ги почувствувате бенефитите – за срцето, телото
                            и духот.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Зумба Fitness / Зумба Fitness /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/zumba/zumba.png`}
                             alt="logo"/>
                        <h2 className="my-4">Зумба Fitness</h2>
                        <p>Зумба Fitness е оригиналниот и најпознат формат на зумба – кардио танц тренинг инспириран од
                            латино и светски ритми. Комбинира едноставни кореографии со движења од салса, меренге,
                            регетон и самба, при што телото е во постојано движење.
                        </p>
                        <p>Овој тренинг согорува калории, ја подобрува кондицијата и ви дава чувство на енергија и
                            радост. Zumba Fitness е повеќе од вежбање – тоа е фитнес забава која го подобрува и телото и
                            расположението.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Зумба Toning / Зумба Toning /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/zumba/zumba-toning.png`}
                             alt="logo"/>
                        <h2 className="my-4">Зумба Toning</h2>
                        <p>Зумба Toning е комбинација од забавните зумба движења и тренинг со лесни тегови (toning
                            sticks), со цел оформување и зајакнување на мускулите. Додека го следите ритамот на латино
                            музиката, истовремено работите на мускулен тонус, стабилност и координација.
                        </p>
                        <p> Тренингот е насочен кон јадрото, рацете и долниот дел од телото.
                            Погоден е за оние што сакаат да танцуваат, а во исто време да изградат посилно и пооформено
                            тело.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Зумба Step / Зумба Step /'} strokeColor="#FB8B01" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/zumba/zumba.png`}
                             alt="logo"/>
                        <h2 className="my-4">Зумба Step</h2>
                        <p>Зумба Step го комбинира енергичниот стил на зумба со предизвикот на степ-платформа. Се
                            фокусира на обликување на нозете и задникот, додека пулсот е во константна зона на
                            согорување калории.
                        </p>
                        <p>Чекорите се ритмички и музички усогласени, што создава динамичен, но контролирано интензивен
                            тренинг.
                            Идеален е за оние што сакаат дополнителен фокус на долниот дел од телото без да се изгуби
                            забавниот дух на класичната зумба.</p>
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