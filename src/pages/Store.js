import PageHeader from "../components/PageHeader";
import CustomLink from "../components/CustomLink";
import HeaderMovingLines from "../components/HeaderMovingLines";

export default function Store() {
    return (
        <>
            <PageHeader title="Продавница"/>

            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Online Програма</h2>
                        <p>Доколку имате динамичен распоред или различно темпо, нашата претходно снимана онлајн програма
                            нуди слобода и континуитет.
                        </p>
                        <p> Претходно снимените видеа се внимателно структурирани според ниво, тип на тренинг и траење –
                            за да можете да вежбате каде и да сте, кога и вам да ви одговара.</p>
                        <CustomLink to="https://online.branimirbrankica.mk/login" text="Дознајте Повеќе" blank/>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Zoom часови во живо / Zoom часови во живо /'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Zoom часови во живо</h2>
                        <p>Доколку сакате да вежбате во живо, но од удобноста на вашиот дом,
                            нашите онлајн Zoom часови се вистинскиот избор.
                        </p>
                        <p>Секој час се одвива во реално време со инструктори кои ве мотивираат, насочуваат и се грижат
                            за вашата правилна форма – каде и да сте.</p>
                        <CustomLink to="#" text="Пријавете се"/>

                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Lifestyle производи / Lifestyle производи /'} strokeColor="#6F9D80"/>
            </div>

            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Lifestyle производи</h2>
                        <p>Добрата форма не доаѓа само од вежбањето. </p>
                        <p> Во нашиот lifestyle дел ќе најдете избрани производи од мед и здрава храна од наше
                            производство и наша гаранција за квалитет, функционална фитнес облека и опрема. </p>
                        <p> Со други зборови, пронајдете сѐ што ќе ве поддржи во активниот и балансиран животен
                            стил.</p>
                        <CustomLink to="/продавница/lifestyle" text="Кон Производите" />
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            {/*<div className="container">*/}
            {/*    <ContactForm title="Персонални тренинзи"*/}
            {/*                 description1="Заинтересирани сте за часови со персонален инструктор?"*/}
            {/*                 description2="Сакате целосно индивидуално внимание или приватност?&nbsp; Јавете*/}
            {/*                     ни се или напишете ни порака и ќе ви одговориме во најбрз можен рок."/>*/}
            {/*</div>*/}
        </>
    )
}