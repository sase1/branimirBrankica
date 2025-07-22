import Schedule from "../../components/Schedule";
import PageHeader from "../../components/PageHeader";
import "./LationDances.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";

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

            <div className="container rulesDance">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Персонализиран пристап</h2>
                        <p>Нашите часови се прилагодени според вашето темпо, искуство и желби. Работиме во пријатна и
                            опуштена атмосфера, со фокус на комуникацијата помеѓу партнерите и градење самодоверба на
                            подиумот.
                        </p>
                        <p>
                            Доколку сакате да вклучите и гости, кумови или изненадувачка групна кореографија – нудиме и
                            дополнителни пакети. Вашиот прв танц нека биде магичен момент што ќе го паметите засекогаш.
                        </p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <Schedule/>
        </>
    )
}