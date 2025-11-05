import PageHeader from "../../components/PageHeader";
import "./LationDances.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";

export default function StandardDances() {
    return (
        <>
            <PageHeader title="Стандардни танци"/>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што се Стандардни танци?</h1>
                        <p className="my-5">Стандардните танци се елегантна и технички барана дисциплина во спортското
                            танцување, дел од официјалниот натпреварувачки систем на WDSF – Светската танцова спортска
                            федерација, која уште од 1957 година поставува врвни стандарди во светот на танцот. Англиски
                            валцер, виенски валцер, слоуфокс, квикстеп и танго се изучуваат со прецизна методологија и
                            оценуваат според строги WDSF критериуми. Во ТСК „Бранимир и Бранкица“, овие танци се
                            предаваат од професионален тим со меѓународно искуство, со цел секој танчар да го достигне
                            својот полн потенцијал – било рекреативно, било натпреварувачки.</p>
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
                        <h2 className="my-4">Aнглиски валцер</h2>
                        <p>Англискиот валцер е познат по своите мазни, кружни движења и „паѓање и кревање“ (rise and
                            fall) техника. Танцот се изведува во споро темпо и создава чувство на лебдење по подиумот.
                        </p>
                        <p>
                            Тој е основа на сите стандардни танци и идеален за развивање на стабилна танцова рамка,
                            музикалност и грациозност.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Танц без правила / Танц без правила /'} strokeColor="#6F9D80"/>
            </div>
            <div className="container rulesDance">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Aргентинско танго</h2>
                        <p>Аргентинското танго е страстен и драматичен танц со остри, контролирани движења и силна
                            визуелна експресија. За разлика од останатите стандардни танци, танго не вклучува „rise and
                            fall“, туку се танцува ниско, со прецизна нога техника и постојана тензија меѓу партнерите.
                            Танц што бара прецизност, емоција и сценска присутност.
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
                <HeaderMovingLines text={'Танц со правила / Танц со правила /'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Виенски валцер</h2>
                        <p>Виенскиот валцер е најбрзиот валцер и се изведува со константни вртења и кружни движења во
                            ритам од 3/4. Танцот создава спектакуларен визуелен ефект и бара одлична контрола,
                            ориентација и физичка издржливост.
                        </p>
                        <p>
                            Неговата традиционална форма и динамика го прават омилен и на сцената и на балот.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Танц со Правила / Танц со Правила /'} strokeColor="#6F9D80"/>
            </div>
            <div className="container rulesDance">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Слоуфокс</h2>
                        <p>Слоуфокс е еден од најтехнички прецизните и најтешките танци во стандардната категорија. Се
                            карактеризира со мазни, лизгачки движења и големи чекори со постојан flow.
                        </p>
                        <p>
                            Темпото е бавно, но контролата и синхронизираноста меѓу партнерите мора да бидат совршени.
                            Танцот бара зрелост, стабилност и беспрекорна техника.
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
                <HeaderMovingLines text={'Танц со правила / Танц со правила /'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Квикстеп</h2>
                        <p>Квикстепот е брз, весел и скоклив танц со комплексна игра на ритам, брзи чекори и енергични
                            движења. Иако е дел од стандардните танци, има динамика што често потсетува на шоу танц, со
                            живост и елеганција во исто време.
                        </p>
                        <p>
                            Идеален за демонстрирање на леснотија, брзина и играчки карактер на парот.</p>
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