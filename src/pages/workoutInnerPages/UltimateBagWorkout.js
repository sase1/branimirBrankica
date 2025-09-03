import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";

export default function UltimateBagWorkout() {
    return (
        <>
            <PageHeader title="Ultimate Bag Workout"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што е Ultimate Bag Workout?</h1>
                        <p className="my-5">UltimateBagWorkout е специјализирана програма за деца и тинејџери која комбинира фитнес,
                            игра и корективна гимнастика. Наменета е за здрав телесен развој, подобрување на држењето и
                            градење самодоверба преку активност, движење и забава.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Растеме заедно / Растеме заедно /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Растеме заедно</h2>
                        <p>Во мала, внимателно водена група, секое дете учествува во забавни и функционални тренинзи –
                            со вежби за јадро, држење, координација и сила.
                        </p>
                        <p>Сè е прилагодено според возраста и потребите, со многу енергија и насмевки.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Растеме силни / Растеме силни'} strokeColor="#FB8B01" />
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
                        <h2 className="my-4">Растеме силни</h2>
                        <p>UltimateBagWorkout нуди безбедна, мотивирачка средина каде децата и младите се движат, учат и растат
                            здраво. Програмата не само што го подобрува телото, туку и го зајакнува духот – преку
                            позитивна енергија, поддршка и развој на самодоверба.
                        </p>
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