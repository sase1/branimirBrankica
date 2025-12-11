import PageHeader from "../../components/PageHeader";
import CustomLink from "../../components/CustomLink";
import HeaderMovingLines from "../../components/HeaderMovingLines";

export default function Lifestyle() {
    return (
        <>
            <PageHeader title="Lifestyle производи"/>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Органски мед</h2>
                        <p>Во нашиот асортиман ќе најдете внимателно одбран мед со висок квалитет, собран од различни
                            природни поднебја и растителни извори.
                        </p>
                        <p> Располагаме со шумски мед, ливaдски мед, багремов мед, кестенов мед, како и специјален мед
                            со саќе – сите со автентичен вкус и нутритивна вредност, идеални за секојдневна употреба и
                            поддршка на имунитетот.</p>
                        <CustomLink to="/продавница/lifestyle/органски-мед" text="Дознајте Повеќе"/>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Пчелни производи / Пчелни производи /'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Пчелни производи</h2>
                        <p>Нашата понуда не завршува со мед – тука се и останатите природни богатства од пчелниот свет:
                            матичен млеч, прополис, пчелин восок, како и комбинации од мед со супер-храна и билки.
                        </p>
                        <p>Сето тоа доаѓа со цел да ви понуди природна поддршка за енергија, фокус, заштита и
                            регенерација.</p>
                        <CustomLink to="/продавница/lifestyle/пчелни-производи" text="Дознајте Повеќе" />

                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Природна нега и козметика / Природна нега и козметика /'}
                                   strokeColor="#6F9D80"/>
            </div>

            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Природна нега и козметика</h2>
                        <p>Покрај консумација, медот и неговите деривати се основа за природна нега. </p>
                        <p> Производи направени со најчисти пчелни состојки – креми, мелеми и маски, создадени за оние
                            кои сакаат да негуваат кожа и коса со природни, нежни и ефикасни формули без хемикалии. </p>

                        <CustomLink to="#" text="Дознајте Повеќе" />
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Фитнес опрема / Фитнес опрема /'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Фитнес опрема</h2>
                        <p>Без разлика дали тренирате дома или во сала, добрата опрема прави разлика. Нудиме внимателно
                            одбран асортиман на фитнес реквизити – од јоги душеци и ластици, до тегови, баланс топки и
                            функционални додатоци.
                        </p>
                        <p>Секој производ е избран да ви помогне да напредувате безбедно и ефикасно – прилагоден и за
                            почетници и за напредни спортисти.</p>
                        <CustomLink to="#" text="Пријавете се" />

                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Фитнес облека / Фитнес облека /'}
                                   strokeColor="#6F9D80"/>
            </div>

            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Фитнес облека</h2>
                        <p>Нашата селекција на фитнес облека е внимателно избрана за да го следи секој ваш чекор – од
                            интензивен тренинг до релаксирана јога. Со фокус на удобност, квалитетни материјали и
                            модерен изглед, облеката не само што изгледа одлично, туку и поддржува слобода на движење и
                            правилна терморегулација.

                        </p>
                        <p> Достапна е за сите возрасти и стилови, без компромис помеѓу естетика и функционалност. </p>

                        <CustomLink to="#" text="Кон производите" />
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