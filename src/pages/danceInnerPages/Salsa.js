import Schedule from "../../components/Schedule";
import PageHeader from "../../components/PageHeader";
import "./Salsa.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";

export default function Salsa() {
    return (
        <>
            <PageHeader title="Салса"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center text-white">
                        <h1>Што е Салса?</h1>
                        <p>Салсата денес е меѓу најпопуларните друштвени танци. Самиот танц е многу пикантен, весел,
                            жежок и полетен. Неговиот ритам може да биде бавен или многу брз.
                            Во текот на своето настанување се развил во два стила кубански и порторикански стил.</p>

                    </div>

                    <div className="col-lg-12 videoDance">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>




                </div>

            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Танц без Правила / Танц без правила'}/>
            </div>

            <Schedule/>
        </>
    )
}