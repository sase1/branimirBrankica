import PageHeader from "../../../components/PageHeader";
import CustomLink from "../../../components/CustomLink";
import HeaderMovingLines from "../../../components/HeaderMovingLines";

export default function BeesProducts() {
    return (
        <>
            <PageHeader title="Пчелни производи"/>

            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Прополис</h2>
                        <p>Прополисот е природен антибиотик – силен антисептик што пчелите го користат за заштита на
                            кошницата. Исто така, и ние го користиме за поддршка на имунитетот, борба со инфекции,
                            воспаленија и болки во грло.
                        </p>
                        <p> Се препорачува во сезоните на настинки и како дел од секојдневна превенција. Неговиот богат
                            состав од флавоноиди и биоактивни компоненти го прави незаменлив во природната медицина.</p>
                        <CustomLink to="/" text="Дознајте Повеќе"/>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Матичен млеч / Матичен млеч /'} strokeColor="#FB8B01"/>
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
                        <h2 className="my-4">Матичен млеч</h2>
                        <p>Матичниот млеч е најскапоцениот производ од пчелата – храна резервирана за пчелата-мајка.
                            Богат е со витамини од Б-групата, аминокиселини и биолошки активни ензими.
                        </p>
                        <p>Се користи за зголемување на енергијата, подобрување на хормоналната рамнотежа, ментална
                            јасност и опоравување од стрес и замор. Препорачан е за сите кои бараат природен стимуланс
                            со длабоко регенеративно дејство.</p>
                        <CustomLink to="#" text="Дознајте Повеќе"/>

                    </div>
                </div>
            </div>

        </>
    )
}