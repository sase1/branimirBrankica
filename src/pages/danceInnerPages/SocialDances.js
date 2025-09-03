import PageHeader from "../../components/PageHeader";
import "./LationDances.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";

export default function SocialDances() {
    return (
        <>
            <PageHeader title="Social Dances"/>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што се Social Dances?</h1>
                        <p className="my-5">Social Dances се танци што се танцуваат во пар, со фокус на забава,
                            поврзување и уживање во музиката, а не на натпревар. Тие се дел од секојдневниот живот во
                            многу култури – се танцуваат на забави, фестивали и вечерни излегувања.
                            Од салсата со својата експлозивна енергија, до сензуалната кизомба, друштвените танци нудат
                            можност да се движите слободно, да се изразите и да се поврзете со други преку ритам и
                            движење.</p>
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
                        <h2 className="my-4">Салса</h2>
                        <p>Салса е најпознатиот латино танц, позната по својата енергија, брз ритам и заразни движења.
                            Потекнува од Куба, но денес постојат различни стилови како LA, New York и Cuban salsa.
                        </p>
                        <p>
                            Танцувањето салса значи комуникација со партнерот преку флуидни чекори, обрати и музикална
                            експресија. Таа е совршена за оние што сакаат динамика, забава и жива енергија на
                            паркетот.</p>
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
                        <h2 className="my-4">Бачата</h2>
                        <p>Бачата е романтичен и интимен танц од Доминиканската Република, препознатлив по меките чекори
                            и изразено движење на колковите. Современиот стил на бачата (modern или sensual) вклучува
                            поврзување со партнерот и музикално толкување на емоцијата.
                        </p>
                        <p>
                            Бачата е идеален танц за оние што сакаат побавно темпо, блискост и изразување преку нежни,
                            но изразени движења.
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
                        <h2 className="my-4">Меренге</h2>
                        <p>Меренге е националниот танц на Доминиканската Република и е еден од најлесните и најзабавните
                            танци за учење. Се карактеризира со чекори наизменично од нога на нога и ритмично движење на
                            колковите.
                        </p>
                        <p>
                            Се танцува на весел, брз ритам и создава ведра, пријателска атмосфера. Совршен е за
                            почетници и секој што сака да се движи без комплицирана кореографија.</p>
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
                        <h2 className="my-4">Кизомба</h2>
                        <p>Кизомба е сензуален, афро-лузофонски танц што потекнува од Ангола. Се танцува во блиска
                            позиција, со мазни, контролиран движења во темпо што дозволува емоционално изразување и
                            музичка интерпретација.
                        </p>
                        <p>
                            Кизомба не бара брзина, туку чувствителност и поврзаност со партнерот. Популарна е меѓу оние
                            што бараат длабочина, нежност и интензитет на танцување.
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
                <HeaderMovingLines text={'Танц со Правила / Танц со Правила /'} strokeColor="#FB8B01" />
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
                        <h2 className="my-4">Регетон</h2>
                        <p>Регетон не е класичен друштвен танц во пар, туку урбан соло танц инспириран од истоимената
                            музика од Латинска Америка. Се танцува со енергични, секси и изразени движења на колковите и
                            телото, најчесто во група или соло.
                        </p>
                        <p>
                            Регетон танцот е експлозивен, модерен и полн со attitude – идеален за изразување,
                            ослободување на енергија и танцување без правила.</p>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <HeaderMovingLines text={'Танц со Правила / Танц со Правила /'} strokeColor="#6F9D80" />
            </div>
            <div className="container rulesDance">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Rueda de Casino</h2>
                        <p>Rueda de Casino е групна форма на салса танц, потекната од Куба, каде повеќе танчарски парови
                            танцуваат во круг под водство на водач кој ги најавува фигурите. Партнерите постојано се
                            менуваат, а движењата се синхронизирани, забавни и полни со изненадувања.
                        </p>
                        <p>
                            Оваа форма на танц создава чувство на заедништво, ритам и постојана интеракција – идеална за
                            сите што сакаат да танцуваат, да се насмеат и да бидат дел од вистинска кубанска атмосфера.
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