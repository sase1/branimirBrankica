import PageHeader from "../../components/PageHeader";
import Schedule from "../../components/Schedule";
import "./Aerobic.css"
import HeaderMovingLines from "../../components/HeaderMovingLines";

export default function FunctiuonalFitness() {
    return (
        <>
            <PageHeader title="Функционален Фитнес"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Функционален Фитнес</h1>
                        <p className="my-5">Функционалниот фитнес е тренинг што го подготвува телото за реални,
                            секојдневни движења – седење, подигање, вртење, туркање. Се базира на вежби кои активираат
                            повеќе мускулни групи истовремено и ја подобруваат мобилноста, балансот, јачината и
                            координацијата. Наместо изолирани движења, тука секој тренинг има практична цел. Подеднакво
                            е корисен за спортисти и почетници – бидејќи го прави телото функционално, здраво и
                            подготвено за живот.</p>
                    </div>
                </div>
                <HeaderMovingLines text={'CrossFit /'} strokeColor="#FB8B01"/>
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">CrossFit</h2>
                        <p>CrossFit е високоинтензивен функционален тренинг кој комбинира елементи од тежинско кревање,
                            кардио, гимнастика и вежби со телесна тежина. Секој тренинг е различен и се изведува во
                            кратки, интензивни интервали (WOD – Workout of the Day).
                        </p>
                        <p> Целта е развој на сила, издржливост, експлозивност и ментална дисциплина. CrossFit е идеален
                            за оние што сакаат предизвик, енергија и напредок, без монотонија – секој ден носи ново
                            искуство.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
                <HeaderMovingLines text={'BodySculpt /'} strokeColor="#6F9D80"/>
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">BodySculpt</h2>
                        <p>BodySculpt е обликувачки тренинг што се фокусира на дефинирање и тонирање на мускулите преку
                            контролирани вежби со мали тегови, ластици, топки и сопствена тежина. Тренингот го активира
                            целото тело, особено стомачните мускули, задникот, бутовите и рацете.
                        </p>
                        <p>BodySculpt не е насочен кон маса, туку кон елегантен и цврст изглед. Идеален е за оние што
                            сакаат видливи резултати, но со контролирано темпо и акцент на прецизност.</p>
                    </div>
                </div>
                <HeaderMovingLines text={'Кружен тренинг /'} strokeColor="#FB8B01"/>
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Кружен тренинг</h2>
                        <p>Кружниот тренинг е ефикасна фитнес метода што комбинира неколку различни вежби во
                            последователни станици, изведени со кратки паузи. Се работи на кардио, сила, рамнотежа и
                            издржливост во само една сесија.
                        </p>
                        <p>Темпото е умерено до високо, а форматот лесно се адаптира според ниво на кондиција. Кружниот
                            тренинг е идеален за брзи резултати, согорување калории и подобрување на целокупната форма,
                            без рутина или досада.</p>
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