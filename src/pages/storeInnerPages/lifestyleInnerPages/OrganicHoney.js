import PageHeader from "../../../components/PageHeader";
import CustomLink from "../../../components/CustomLink";
import HeaderMovingLines from "../../../components/HeaderMovingLines";

export default function OrganicHoney() {
    return (
        <>
            <PageHeader title="Органски мед "/>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Ливадски мед</h2>
                        <p>Ливадскиот мед, создаден од нектарот на безброј полски и ливадски цветови, секој со своја
                            боја, мирис и лековитост.
                        </p>
                        <p>Овој мед е благ, ароматичен и лесно се вклопува и во исхраната и во секојдневните ритуали на
                            нега и енергија. Богат со антиоксиданси, витамини и ензими, ливадскиот мед е идеален избор
                            за сите возрасти – од деца до спортисти.</p>
                        <CustomLink to="#" text="Дознајте Повеќе"/>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Шумски мед / Шумски мед /'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Шумски мед</h2>
                        <p>Шумскиот мед е вистински подарок од природата – создаден не од цветен нектар, туку од
                            растителни сокови и смоли што пчелите ги собираат од дрвјата во густите шуми.
                        </p>
                        <p>Поради ова потекло, тој има длабок, комплексен вкус со благ карамелен тон и потемна, амбер
                            боја што сведочи за неговата богата минерална структура.</p>
                        <CustomLink to="#" text="Дознајте Повеќе"/>

                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Костенов мед / Костенов мед /'}
                                   strokeColor="#6F9D80"/>
            </div>

            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Костенов мед</h2>
                        <p>Со својата темна боја и богат, интензивен вкус, костеновиот мед е познат по своето силно
                            антибактериско дејство и висока содржина на минерали.
                        </p>
                        <p> Совршен е за поддршка на имунитетот, циркулацијата и општата виталност – природен избор за
                            оние што сакаат нешто поразлично и силно. </p>

                        <CustomLink to="#" text="Дознајте Повеќе"/>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Багремов мед / Багремов мед /'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Багремов мед</h2>
                        <p>Багремовиот мед има смирувачко дејство врз дигестивниот систем, помага при несоница, нервоза
                            и лесни воспаленија. Тој е особено препорачан за луѓе со чувствителен желудник, за деца и за
                            сите кои сакаат нешто природно, лесно и енергетски богато.
                        </p>
                        <p>Произведен е во чисти багремови шуми далеку од урбана загаденост, директно од македонски
                            пчелари кои го чуваат неговиот природен квалитет – без пастеризација, без адитиви, без
                            компромис.</p>
                        <CustomLink to="#" text="Дознајте Повеќе"/>

                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Мед со саќе / Мед со саќе / Мед со саќе /'}
                                   strokeColor="#6F9D80"/>
            </div>

            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Мед со саќе</h2>
                        <p>Ако барате најнепосреден контакт со пчелната кошница, тогаш медот со саќе е вашиот избор. Во
                            него, медот е природно зачуван во восочни ќелии, токму како што го складирале пчелите.
                        </p>
                        <p> Саќето содржи не само чист, нефилтриран мед, туку и природен восок, полен и прополис –
                            комбинација која носи силен имуностимулативен ефект, како и подобрување на дигестивниот
                            систем. </p>

                        <CustomLink to="#" text="Дознајте Повеќе"/>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

        </>
    )
}