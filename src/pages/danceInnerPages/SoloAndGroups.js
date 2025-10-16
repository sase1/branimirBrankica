import PageHeader from "../../components/PageHeader";
import "./LationDances.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";

export default function SoloAndGroups() {
    return (
        <>
            <PageHeader title="Solo & Групи"/>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Сцена за личен израз</h1>
                        <p className="my-5">Соло, дуо и формациското танцување се посебна гранка на спортскиот и сценски
                            танц, каде индивидуалноста, синхронизацијата и сценската уметност се подеднакво важни.
                            Настапите можат да бидат поединечни (момчиња или девојчиња), во пар без допир (дуо), групни
                            или во сложени формации со повеќе танцови парови. Се изведуваат кореографии во различни
                            стилови – од стандард и латински, до карипски и шоу танци. Нашите танчари се натпреваруваат
                            во домашната А и Б лига како членови на <span
                                style={{fontWeight: 700, textDecoration: "underline"}}>ТСФМ</span> - танцова спортска
                            федерација и на меѓународни,
                            европски и светски првенства како членови на <span
                                style={{fontWeight: 700, textDecoration: "underline"}}>WDSF</span>, World Dance Sport
                            Federation,
                            според чии правила се изведуваат нашите кореографии.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Танц со Правила / Танц со Правила /'} strokeColor="#FB8B01"/>
            </div>

            <div className="container rulesDance">
                <div className="row content flex-column-reverse flex-lg-row">

                    <div className="col-lg-5 align-content-center text-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white  text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Соло и дуо настапи</h2>
                        <p>Соло и дуо танцувањето овозможува на секој танчар индивидуално да ја изрази својата техника,
                            енергија и емоција. Преку внимателно осмислени хореографии, натпреварувачите танцуваат без
                            партнерски контакт, на стилови како салса, бачата, ча-ча-ча, румба и други. Овие настапи се
                            одлична можност за градење сценска сигурност, контрола и личен сценски идентитет.
                        </p>
                        <p>
                            Во нашиот клуб активно ги подготвуваме младите танчари за соло и дуо натпревари – на домашни
                            и меѓународни подиуми.</p>
                        <p>
                            Нашите танчари се натпреваруваат во домашната А и Б лига како членови на <span
                            style={{fontWeight: 700, textDecoration: "underline"}}>  ТСФМ </span> - танцова
                            спортска федерација и на меѓународни, европски и светски првенства како членови на <span
                            style={{fontWeight: 700, textDecoration: "underline"}}> WDSF </span>,
                            World Dance Sport Federation, според чии правила се изведуваат нашите кореографии.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Танц без Правила / Танц без Правила /'} strokeColor="#6F9D80"/>
            </div>
            <div className="container rulesDance">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Формации и LA шоу</h2>
                        <p>Формациското танцување е динамична и визуелно атрактивна дисциплина каде групи танчари – во
                            парови или само девојки – изведуваат синхронизирани кореографии од пет танци.
                            Се танцува како LA (латинска) или ST (стандардна) формација, со усогласени костими и сценски
                            изглед според WDSF правила.</p>

                        <p>
                            Нашите танчари се натпреваруваат во домашната А и Б лига како членови на <span
                            style={{fontWeight: 700, textDecoration: "underline"}}>  ТСФМ </span> - танцова
                            спортска федерација и на меѓународни, европски и светски првенства како членови на <span
                            style={{fontWeight: 700, textDecoration: "underline"}}> WDSF </span>,
                            World Dance Sport Federation, според чии правила се изведуваат нашите кореографии.</p>

                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Персонални тренинзи / Персонални тренинзи /'} strokeColor="#FB8B01"/>
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