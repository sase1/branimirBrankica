import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";

export default function PersonalTraining() {
    return (
        <>
            <PageHeader title="Персонални тренинзи"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Персонални тренинзи</h1>
                        <p className="my-5">Секое тело има своја приказна, свои цели и свој ритам. Затоа личниот тренинг
                            не е луксуз – туку најефикасниот начин да дојдеш до резултатите што ги посакуваш, без
                            повреди, без губење време и со максимално внимание насочено кон тебе.
                        </p>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <HeaderMovingLines text={'Pain Relief / Pain Relief /'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Што нудиме?</h2>
                        <p>
                            Нашите лични тренинзи се целосно индивидуализирани. Почнуваме со проценка на твоето тело,
                            кондиција, држење и целите што ги имаш – без разлика дали станува збор за подобрување на
                            формата, рехабилитација, намалување болка, зголемување сила или едноставно враќање во
                            движење.
                        </p>
                        <p>
                            Потоа креираме програма која одговара само на тебе, со комбинација од функционални вежби,
                            пилатес, стабилизација, мобилност и, по потреба, корективни или терапевтски елементи.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Директно решение / Директно решение /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">За кого е наменет?</h2>
                        <p>За секого. Без разлика дали си почетник, се враќаш по повреда, или сакаш подлабоко и
                            поефикасно да работиш на себе – личниот тренинг е твоето најбезбедно, најбрзо и најсигурно
                            решение.
                            Секој термин е твој простор, твој ритам и твоја сила.
                        </p>
                        <p> Контактирај нè и закажи прв личен тренинг или проценка. Ќе направиме заеднички план кој
                            одговара само на тебе – затоа што твоето тело заслужува внимание по мерка.</p>
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