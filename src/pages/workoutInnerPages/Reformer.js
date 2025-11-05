import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";
import CustomLink from "../../components/CustomLink";

export default function Reformer() {
    return (
        <>
            <PageHeader title="Reformer"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што е Reformer?</h1>
                        <p className="my-5"><span style={{fontWeight: 700}}>Reformer</span> е еден од најпознатите и највпечатливи пилатес апарати, дизајниран
                            од Џозеф Пилатес - заедно со <span style={{fontWeight: 700}}>Cadillac</span> за поддржана и разновидна работа со пружини, <span style={{fontWeight: 700}}>Pilates
                                Chair </span> за предизвик на core и баланс, <span style={{fontWeight: 700}}>Spine Corrector</span> за истегнување и корекција на ‘рбетот,
                            и Ladder Barrel за подобрување на флексибилноста и држењето. Комбинацијата на овие уреди
                            овозможува целосен, прецизен и персонализиран пилатес тренинг за секое тело.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Реформер / Реформер /'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Реформер</h2>
                        <p>Reformer е еден од најпознатите и највпечатливи пилатес апарати, дизајниран од Џозеф Пилатес.
                            Се состои од подвижна платформа со пружини, лизгачки кревет и ремени, кои овозможуваат отпор
                            и поддршка при секое движење. Reformer овозможува прецизна работа на целото тело – од
                            зајакнување и тонирање на мускулите, до подобрување на флексибилноста, држењето и телесната
                            свесност. Тој е идеален за сите нивоа – од рехабилитација до напреден функционален тренинг.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Pilates Chair / Pilates Chair /'} strokeColor="#6F9D80"/>
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Pilates Chair(Wunda)</h2>
                        <p>Пилатес столот е компактен, но предизвикувачки апарат, дизајниран за јакнење на core
                            мускулите, баланс и целосна телесна контрола.
                            Се користи и за стоечки и за седечки вежби, со пружини што овозможуваат отпор.
                        </p>
                        <p>Идеален е за подобрување на стабилноста, издржливоста и градење сила со минимално
                            оптоварување на зглобовите.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Spine Corrector / Spine Corrector /'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Spine Corrector</h2>
                        <p>Spine Corrector е закривена структура која се користи за истегнување, мобилизација и
                            зајакнување на мускулите околу 'рбетот. Одличен е за подобрување на држењето, флексибилноста
                            и корекција на телесната поставеност.
                        </p>
                        <p>Особено корисен за оние што имаат болки во грбот или ограничена подвижност во градниот
                            дел.</p>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <HeaderMovingLines text={'Ladder Barrel / Ladder Barrel /'} strokeColor="#6F9D80"/>
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Ladder Barrel</h2>
                        <p>Ladder Barrel комбинира заоблена површина и скалила, овозможувајќи низа вежби за истегнување,
                            стабилизација и работа на ротација на торзото.
                        </p>
                        <p>Често се користи за подобрување на држењето, зајакнување на задниот ланец на телото и
                            подобрување на подвижноста на 'рбетот. Нуди уникатен пристап за напредна пилатес пракса.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <HeaderMovingLines text={'Cadillac / Cadillac /'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Cadillac</h2>
                        <p> Cadillac Reformer или едноставно „Cadillac“, е дизајнирана да понуди широк спектар на вежби
                            за целото тело – од длабоко јадројно зајакнување до истегнување, мобилност и рехабилитација.
                        </p>
                        <p>
                            Со својата стабилна платформа, подвижна шина и разноврсни додатоци како пружини, ленти,
                            трапез, ролки и ремени, Кадилак машината овозможува вежби во различни позиции – легнати,
                            седнати, стоечки или дури и висечки. Совршена е и за почетници и за напредни вежбачи,
                            нудејќи поддршка, контрола и прецизност во движењата.
                        </p>
                        <CustomLink to="" text="Дознајте Повеќе"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Персонални тренинзи / Персонални тренинзи /'} strokeColor="#6F9D80"/>
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