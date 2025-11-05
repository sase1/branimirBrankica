import PageHeader from "../../components/PageHeader";
import "./LationDances.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";

export default function WeddingDance() {
    return (
        <>
            <PageHeader title="Свадбен танц"/>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Вашиот совршен прв танц</h1>
                        <p className="my-5">Свадбениот танц е еден од најемотивните и фотографирани моменти на вашата
                            венчавка. Преку часови по свадбен танц, ќе ви помогнеме да креирате кореографија што
                            совршено одговара на вашата музика, стил и приказна како пар. Без разлика дали сакате
                            класичен валцер, модерен романтичен танц или нешто забавно и изненадувачко – тука сме да ве
                            водиме чекор по чекор.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Свадбен танц / Свадбен танц /'} strokeColor="#FB8B01"/>
            </div>


            <div className="container">
                {/*<div className="row video">*/}
                {/*    <div className="col-lg-12">*/}
                {/*        <div className="ratio ratio-16x9">*/}
                {/*            <video*/}
                {/*                src={`${process.env.PUBLIC_URL}/images/dance.mp4`}*/}
                {/*                controls*/}
                {/*                autoPlay*/}
                {/*                loop*/}
                {/*                muted*/}
                {/*                playsInline*/}
                {/*                className="w-100 h-100 object-fit-cover"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Создадено за вас</h2>
                        <p>Нашите часови се прилагодени според вашето темпо, искуство и желби. Работиме во пријатна и
                            опуштена атмосфера, со фокус на комуникацијата помеѓу партнерите и градење самодоверба на
                            подиумот.
                        </p>
                        <p>Доколку сакате да вклучите и гости, кумови или изненадувачка групна кореографија – нудиме и
                            дополнителни пакети.
                            Вашиот прв танц нека биде магичен момент што ќе го паметите засекогаш.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Свадбен танц / Свадбен танц /'} strokeColor="#FB8B01"/>
            </div>

            <div className="container rulesDance">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Незаборавен прв танц</h2>
                        <p>Сакате вашиот прв танц да биде волшебен и незаборавен? Ние создаваме уникатни свадбени
                            кореографии, внимателно избирајќи ја тематиката на танцот според вашата приказна, стил и
                            желби. Дополнително, нудиме професионални танчери и танцови двојки кои ќе го збогатат вашиот
                            настап и ќе му дадат посебна магија.
                        </p>
                        <p>
                            Со повеќе од 200 свадбени парови кои низ годините ни ја доверија својата свадбена бајка, со
                            љубов и прецизност ќе ви помогнеме да блеснете на подиумот и да создадете спомен што ќе трае
                            вечно.
                        </p>
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