import "./HomeCaroselItems.css"
import {Link} from "react-router-dom";



const carouselItems = [
    {
        img: "https://blog.afaa.com/hs-fs/hubfs/how-to-design-group-fitness-program.jpg?width=600&name=how-to-design-group-fitness-program.jpg",
        // link: "/фит-универзум/функционален-фитнес?scrollToTitleRound=true",
        link: "/фит-универзум/аеробик",
        alt: "аеробик",
        text: "Ааеробик"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6X2SLL-qBuWbjKjixzIQITqfBtHjhqpkxmw&s",
        link: "/фит-универзум/ultimate-bag-workout",
        alt: "ultimate-bag-workout",
        text: "Ultimate bag workout"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFnW53mzRMAQO8rOKsr5d-RsLVGExI7sJug&s",
        link: "/фит-универзум/пилатес",
        alt: "Пилатес",
        text: "Пилатес"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdHIinb4Q0mjm_817HCEeEB1INOqzgX4lfQ&s",
        link: "/фит-универзум/зумба",
        alt: "зумба",
        text: "Зумба"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQoB8wzGzkVUT6MNuUDVWNgcW0M-voxat0Q&s",
        link: "/фит-универзум/б-јога",
        alt: "б-јога",
        text: "Б Јога"
    },
    {
        img: "https://ymcafw.org/wp-content/uploads/2023/12/HealthFitness2_overview.jpg",
        link: "/фит-универзум/функционален-фитнес",
        alt: "функционален-фитнес",
        text: "Функционален Фитнес"
    },
    {
        img: "https://ymcafw.org/wp-content/uploads/2023/12/HealthFitness2_overview.jpg",
        link: "/фит-универзум/pain-relief",
        alt: "pain-relief",
        text: "Pain Relief"
    },
    {
        img: "https://ymcafw.org/wp-content/uploads/2023/12/HealthFitness2_overview.jpg",
        link: "/фит-универзум/персонални-тренинзи",
        alt: "персонални-тренинзи",
        text: "Персонални Тренинзи"
    },
    {
        img: "https://ymcafw.org/wp-content/uploads/2023/12/HealthFitness2_overview.jpg",
        link: "/фит-универзум/реформер",
        alt: "Reformer",
        text: "Reformer"
    },
    {
        img: "https://ymcafw.org/wp-content/uploads/2023/12/HealthFitness2_overview.jpg",
        link: "/фит-универзум/превентивно-корективна-гимнастика",
        alt: "превентивно-корективна-гимнастика",
        text: "Превентивно Корективна Гимнастика"
    },
    {
        img: "https://ymcafw.org/wp-content/uploads/2023/12/HealthFitness2_overview.jpg",
        link: "/фит-универзум/bfit-teen",
        alt: "bfit-teen",
        text: "B-Feet Teen"
    }
];

export default function HomeCarouselItems() {
    return (
        <div
            id="myCarousel"
            className="carousel slide mt-5"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                {carouselItems.map((_, idx) => (
                    <button
                        key={idx}
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to={idx}
                        className={idx === 0 ? "active" : ""}
                        aria-current={idx === 0 ? "true" : undefined}
                        aria-label={`Slide ${idx + 1}`}
                    />
                ))}
            </div>

            <div className="carousel-inner mobile-slides">
                {carouselItems.map(({ img, link, alt, text }, idx) => (
                    <div
                        key={idx}
                        className={`carousel-item ${idx === 0 ? "active" : ""}`}
                    >
                        <Link to={link} rel="noopener noreferrer">
                            <img
                                src={img}
                                className="d-block w-100"
                                alt={alt}
                                style={{ cursor: "pointer" }}
                            />
                            <h3>{text}</h3>
                        </Link>
                    </div>
                ))}
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
            >
        <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
        ></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
            >
        <span
            className="carousel-control-next-icon"
            aria-hidden="true"
        ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
