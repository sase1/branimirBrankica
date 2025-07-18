import PageHeader from "../components/PageHeader";
import CarouselCards from "../components/CarouselCards";
import ContactForm from "../components/ContactForm";

export default function Workout() {

    const danceCards = [
        {
            id: 1,
            title: "Аеробик",
            image: "https://explosivewhey.com/cdn/shop/articles/best-workout-routine-for-gym-beginners-135325.png?v=1738755379&width=2048",
            link: "/вежбање/аеробик"
        },
        {
            id: 2,
            title: "Корективна Гимнастика",
            image: "https://www.puregym.com/media/sqflb0zc/bodyweight.jpg?quality=80",
            link: "/вежбање/корективна-гимнастика"
        },
        {
            id: 3,
            title: "Персонален Тренинг",
            image: "https://www.gymreapers.com/cdn/shop/articles/header-image-01_Cable-chest-workout---maximizing-your-muscle-growth.jpg?v=1721671171&width=1024",
            link: "/вежбање/персонален-тренинг"
        },
        {
            id: 4,
            title: "Зумба",
            image: "https://www.puregym.com/media/sqflb0zc/bodyweight.jpg?quality=80",
            link: "/вежбање/зумба"
        },
        {
            id: 5,
            title: "Јога",
            image: "https://www.health.com/thmb/BoBpPmfuSUv3g-R9vpYbzlxtX1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp21856698W5h300_Medium_4329119-6861a908fb5346bea17dd46915bfe3c4.jpg",
            link: "/вежбање/јога"
        }
    ];

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader title="Фитнес Програми"/>
                    </div>
                </div>
            </div>
            <CarouselCards cards={danceCards}/>
            <div className="container my-5">
                    <ContactForm title="Персонални часови"
                                 description1="Заинтересирани сте за часови со персонален инструктор?"
                                 description2="Сакате целосно индивидуално внимание или приватност?&nbsp; Јавете
                                 ни се или напишете ни порака и ќе ви одговориме во најбрз можен рок."/>
                </div>
        </>
    );
}