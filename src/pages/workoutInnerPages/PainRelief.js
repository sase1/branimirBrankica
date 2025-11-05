import PageHeader from "../../components/PageHeader";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";
import ContactForm from "../../components/ContactForm";

export default function PainRelief() {
    return (
        <>
            <PageHeader title="Pain Relief"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што е Pain Relief?</h1>
                        <p className="my-5">Pain Relief е специјализиран вид часови за вежбање осмислени да им помогнат
                            на лица кои секојдневно се соочуваат со болки во телото, предизвикани од неправилно држење,
                            седење, физичка неактивност, прекумерна тежина, несоодветна исхрана или повреди. Овие часови
                            се внимателно структурирани според потребите на групи вежбачи со постоечки телесни проблеми
                            како што се болки во грбот, вратот, колената, стапалата и рамениците, како и состојби како
                            сколиоза, кифоза, спондилоза, дискус хернија и ишијалгија.
                        </p>
                        <p><b>
                            Овој час е доста посетуван и од професионални спортисти и тренери,кои вежбаат за да го
                            смират урамнотежат
                            и рехабилитираат напнатото тело.
                        </b></p>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <HeaderMovingLines text={'Pain Relief / Pain Relief /'} strokeColor="#FB8B01" />
            </div>

            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/pain-relief.png`}
                             alt="logo"/>
                        <h2 className="my-4">Како делува Pain Relief?</h2>
                        <p>
                        Вежбите во Pain Relief часовите се прилагодени со соодветно темпо и интензитет за да не
                            предизвикуваат дополнителен стрес врз телото. Програмата е дизајнирана така што ги активира,
                            истегнува и зајакнува клучните мускули, помагајќи им на телото и мускулниот систем да се
                            вратат во баланс.
                        </p>
                        <p>
                            Сесиите ги водат стручни инструктори кои се фокусираат на правилна техника, респираторна
                            поддршка и телесна свесност, што овозможува безбедна и ефикасна рехабилитација.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Директно решение / Директно решение /'} strokeColor="#6F9D80" />
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/workout/pain-relief.png`}
                             alt="logo"/>
                        <h2 className="my-4">Директно решение</h2>
                        <p>Овој пристап работи затоа што го третира коренот на проблемот – наместо само симптомите –
                            преку насочени, терапевтски вежби кои ја враќаат телесната функција и подвижност. Вежбите се
                            базираат на принципи на превенција, стабилизација и обновување, што ги прави идеални и за
                            луѓе со хронични болки и за професионални спортисти кои сакаат да го смирaт и урамнотежат
                            телото.
                        </p>
                        <p> Pain Relief е универзална алтернатива без несакани ефекти, достапна за сите возрасти и
                            пол.</p>
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