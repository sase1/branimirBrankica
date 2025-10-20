import PageHeader from "../components/PageHeader";
import CarouselCards from "../components/CarouselCards";
import ContactForm from "../components/ContactForm";
import LogosRow from "../components/LogosRow";

export default function Workout() {

    const danceCards = [
        {
            id: 1,
            title: "Аеробик",
            image: "https://explosivewhey.com/cdn/shop/articles/best-workout-routine-for-gym-beginners-135325.png?v=1738755379&width=2048",
            link: "/фит-универзум/аеробик"
        },
        {
            id: 2,
            title: "Ultimate Bag Workout",
            image: "https://www.puregym.com/media/sqflb0zc/bodyweight.jpg?quality=80",
            link: "/фит-универзум/ultimate-bag-workout"
        },
        {
            id: 3,
            title: "Пилатес",
            image: "https://www.gymreapers.com/cdn/shop/articles/header-image-01_Cable-chest-workout---maximizing-your-muscle-growth.jpg?v=1721671171&width=1024",
            link: "/фит-универзум/пилатес"
        },
        {
            id: 4,
            title: "Зумба",
            image: "https://www.puregym.com/media/sqflb0zc/bodyweight.jpg?quality=80",
            link: "/фит-универзум/зумба"
        },
        {
            id: 5,
            title: "Б Јога",
            image: "https://www.health.com/thmb/BoBpPmfuSUv3g-R9vpYbzlxtX1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp21856698W5h300_Medium_4329119-6861a908fb5346bea17dd46915bfe3c4.jpg",
            link: "/фит-универзум/б-јога"
        },
        {
            id: 6,
            title: "Функционален Фитнес",
            image: "https://www.health.com/thmb/BoBpPmfuSUv3g-R9vpYbzlxtX1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp21856698W5h300_Medium_4329119-6861a908fb5346bea17dd46915bfe3c4.jpg",
            link: "/фит-универзум/функционален-фитнес"
        },
        {
            id: 7,
            title: "Pain Relief",
            image: "https://www.health.com/thmb/BoBpPmfuSUv3g-R9vpYbzlxtX1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp21856698W5h300_Medium_4329119-6861a908fb5346bea17dd46915bfe3c4.jpg",
            link: "/фит-универзум/pain-relief"
        },
        {
            id: 8,
            title: "Персонални Тренинзи",
            image: "https://www.health.com/thmb/BoBpPmfuSUv3g-R9vpYbzlxtX1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp21856698W5h300_Medium_4329119-6861a908fb5346bea17dd46915bfe3c4.jpg",
            link: "/фит-универзум/персонални-тренинзи"
        },
        {
            id: 9,
            title: "Reformer",
            image: "https://www.health.com/thmb/BoBpPmfuSUv3g-R9vpYbzlxtX1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp21856698W5h300_Medium_4329119-6861a908fb5346bea17dd46915bfe3c4.jpg",
            link: "/фит-универзум/реформер"
        },
        {
            id: 10,
            title: "Превентивно Корективна Гимнастика",
            image: "https://www.health.com/thmb/BoBpPmfuSUv3g-R9vpYbzlxtX1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp21856698W5h300_Medium_4329119-6861a908fb5346bea17dd46915bfe3c4.jpg",
            link: "/фит-универзум/превентивно-корективна-гимнастика"
        },
        {
            id: 11,
            title: "B-Feet Teen",
            image: "https://www.health.com/thmb/BoBpPmfuSUv3g-R9vpYbzlxtX1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp21856698W5h300_Medium_4329119-6861a908fb5346bea17dd46915bfe3c4.jpg",
            link: "/фит-универзум/bfit-teen"
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

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center text-white dance-content">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo" className="mb-0 mb-md-2"/>
                        <h2 className="title mt-3">Светски Докажани</h2>
                        <p className="description mt-4">Клубот е член на ТСФМ - Танцова Спортска Федерација на
                            Македонија, со тоа член и на WDSF -
                            World
                            Dance Sport Federation, дел од MOK - македонски олимписки комитет; под покровителство на
                            министерството за спорт и факултет за физичка култура.</p>
                    </div>
                </div>
            </div>

            <LogosRow/>

            <div className="container my-5">
                <ContactForm title="Персонални часови"
                             description1="Заинтересирани сте за часови со персонален инструктор?"
                             description2="Сакате целосно индивидуално внимание или приватност?&nbsp; Јавете
                                 ни се или напишете ни порака и ќе ви одговориме во најбрз можен рок."/>
            </div>
        </>
    );
}