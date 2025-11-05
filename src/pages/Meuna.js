import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import HeaderMovingLines from "../components/HeaderMovingLines";
import CarouselCards from "../components/CarouselCards";
import "./Meuna.css"

export default function Meuna() {

    const danceCards = [
        {
            id: 1,
            title: "Екскалибур",
            image: "https://www.danceflavors.com/wp-content/uploads/2022/09/tango-pair-dancers-dance-in-ballroom-2022-09-07-16-01-27-utc-scaled.jpg",
            link: "/"
        },
        {
            id: 2,
            title: "Медитација",
            image: "https://cdn.britannica.com/68/92668-050-1BED9B3B/Burundians-dance-Bujumbura.jpg",
            link: "/"
        },
        {
            id: 3,
            title: "Јога Нидра",
            image: "https://www.danceflavors.com/wp-content/uploads/2022/09/tango-pair-dancers-dance-in-ballroom-2022-09-07-16-01-27-utc-scaled.jpg",
            link: "/"
        },
        {
            id: 4,
            title: "Суњата",
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
            link: "/"
        }
    ];

    return (
        <>
            <PageHeader title="Меуна"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Меуна ( Јас сум едно со сѐ )</h1>
                        <p className="my-5">МЕУНА ја отвора визијата на реалноста вон секојдневното ЈАС и го открива
                            безграничниот простор на вашето вистинско битие. На сеансите и медитациите на МЕУНА сте
                            водени низ спиритуални вежби, чекор по чекор, од секојдневната до високите нивоа на свест,
                            каде во еден момент влегувате во состојба на АПСОЛУТНА ПРАЗНИНА и со полна свесност директно
                            ја искусувате ВИСТИНАТА или вашата природна состојба.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Јас сум едно со сѐ / Јас сум едно со сѐ /'} strokeColor="#6F9D80"/>
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
                        <h2 className="my-4">Откријте ја безграничноста</h2>
                        <p>
                            МЕУНА ја отвора визијата на реалноста вон секојдневното ЈАС и го открива безграничниот
                            простор на вашето вистинско битие.
                        </p>
                        <p>
                            На сеансите и медитациите на МЕУНА сте водени низ спиритуални вежби, чекор по чекор, од
                            секојдневната до високите нивоа на свест, каде во еден момент влегувате во состојба на
                            АПСОЛУТНА ПРАЗНИНА и со полна свесност директно ја искусувате ВИСТИНАТА или вашата природна
                            состојба.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <HeaderMovingLines text={'Растеме силни / Растеме силни /'} strokeColor="#FB8B01"/>
            </div>
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Согледајте ја реалната природа</h2>
                        <p>Сите човечки искуства се претопуваат во ЕДНО, кое е наша реална природа. Низ ЕДНОТО полека ја
                            ослободуваме свеста од перцепција за дуалноста за себе и светот. Низ ЕДНОТО се подобрува
                            квалитетот на секојдневниот живот и се забрзува спиритуалната еволуција на практикантот.
                        </p>
                        <p><b> Методите на овие вежби се едноставни, брзи и достапни за секого. Функционираат на
                            контролиран и предвидлив начин.</b></p>

                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <HeaderMovingLines text={'Јас сум едно со сѐ / Јас сум едно со сѐ /'} strokeColor="#6F9D80"/>
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
                        <h2 className="my-4">Спознајте го вистниското јас</h2>
                        <p>
                            Целта е да се препознае ПРАЗНИНАТА, за да може директно и свесно
                            од неа да делуваме и преземаме сакани идентитети.
                        </p>
                        <p>
                            Празнината и исполнетоста не се две различни појави, туку две различни имиња измислени од
                            умот. Медитацијата ја отвора вратата на големиот внатрешен свет, светот на искуствата, а не
                            теоретскиот. Таму ќе бидете изненадени дека празнината и иполнетоста се ЕДНО, животот и
                            смртта се ЕДНО, машкото и женското се ЕДНО, ти си ЕДНО со сé.
                        </p>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <HeaderMovingLines text={'Растеме силни / Растеме силни /'} strokeColor="#FB8B01"/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="text-white mt-5 title">МЕУНА Програма</h2>
                    </div>
                </div>
            </div>
            <CarouselCards cards={danceCards}/>

            <div className="container-fluid">
                <HeaderMovingLines text={'Пријавете се за МЕУНА / Пријавете се за МЕУНА /'} strokeColor="#6F9D80"/>
            </div>

            <div className="container">
                <ContactForm title="Пријавете се за МЕУНА"
                             description1="Сакате лично да ја доживеете длабочината на своето вистинско битие?  Подготвени сте да истражите состојби на апсолутна празнина и целосна свесност? "
                             description2="Контактирајте нè или испратете порака — ќе ве упатиме кон првата МЕУНА сеанса што ќе го отвори патот кон ЕДНОТО."/>
            </div>
        </>
    )
}