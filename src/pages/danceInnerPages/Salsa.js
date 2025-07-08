import Schedule from "../../components/Schedule";
import PageHeader from "../../components/PageHeader";
import "./Salsa.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";

export default function Salsa() {
    return (
        <>
            <PageHeader title="Салса"/>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-8 offset-lg-2 text-center text-white">
                        <h1>Што е Салса?</h1>
                        <p className="my-5">Салсата денес е меѓу најпопуларните друштвени танци. Самиот танц е многу пикантен, весел,
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
            <div className="container noRulesDance">
                <div className="row content">
                    <div className="col-lg-5 text-white align-content-center text-center text-lg-start mb-4">
                        <img
                            src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-letter-b-logo-png-image_6059146.jpg"
                            alt="logo" style={{height: '80px'}}/>
                        <h2 className="my-4">Танц без правила</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.</p>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Танц со Правила / Танц со правила'}/>
            </div>

            <div className="container rulesDance">
                <div className="row content flex-column-reverse flex-lg-row">

                    <div className="col-lg-6">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-5 offset-lg-1 text-white align-content-center text-center text-lg-end mb-4">
                        <img
                            src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-letter-b-logo-png-image_6059146.jpg"
                            alt="logo" style={{height: '80px'}}/>
                        <h2 className="my-4">Танц со правила</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.</p>
                    </div>
                </div>
            </div>

            <Schedule/>
        </>
    )
}