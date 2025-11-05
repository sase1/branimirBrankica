import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import HeaderMovingLines from "../components/HeaderMovingLines";

export default function Partners() {
    return (
        <>
            <PageHeader title="Партнери"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1 className="title">Партнерства и Соработки</h1>
                        <p className="my-5 description">Нашите партнери се дел од нашето патување – луѓе и организации
                            кои ја
                            препознаваат нашата страст, посветеност и визија за танцот како уметност што поврзува.
                            Заедно создаваме сцени исполнети со енергија, доверба и заеднички успеси.</p>
                    </div>
                </div>

            </div>
            <div className="container-fluid">
                <div className="row my-5 pt-md-3 pt-0">
                    <div className="col-lg-10 offset-lg-1">
                        <img alt="partners-image" src={`${process.env.PUBLIC_URL}/images/partners.png`} className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Станете Партнер / Станете Партнер /'} strokeColor="#FB8B01"/>
            </div>
            <div className="container">
                <ContactForm title="Да станеме партнери"
                             description1="Доколку ја споделувате нашата страст кон танцот, уметноста и движењето,, испратете ни порака и дознајте како заедно можеме да создадеме нешто посебно."
                             description2=""/>
            </div>
        </>
    )
}