import PageHeader from "../../components/PageHeader";
import Schedule from "../../components/Schedule";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";

export default function CorrectionalGymnastic() {
    return (
        <>
            <PageHeader title="Корективна Гимнастика"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Што е Корективна гимнастика?</h1>
                        <p className="my-5">Корективната гимнастика претставува специјализиран вид вежбање наменет за
                            подобрување на држењето на телото, корекција на деформитети на ‘рбетот и зглобовите, и
                            намалување на мускулни нерамнотежи. Најчесто се препорачува за деца, тинејџери и возрасни со
                            неправилно држење, сколиоза, кифоза, лордоза или други постурални нарушувања. Преку
                            внимателно селектирани вежби, се влијае врз мускулниот тонус, флексибилноста и стабилноста
                            на телото.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <HeaderMovingLines text={'Корективна гимнастика / Корективна гимнастика /'} strokeColor="#FB8B01"/>
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Корективна гимнастика?</h2>
                        <p>Тренинзите по корективна гимнастика се изведуваат под стручна надзор и се приспособени според
                            индивидуалните потреби и состојби. Се користат специфични вежби за зајакнување на слабите
                            мускули, истегнување на скратените структури и подобрување на телесната симетрија.
                        </p>
                        <p>Покрај физичките подобрувања, вежбите помагаат и во намалување на болки во грбот, подобрување
                            на дишењето и зголемување на самодовербата кај децата и младите. Овој вид гимнастика е
                            безбеден, ефективен и превентивен.</p>
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