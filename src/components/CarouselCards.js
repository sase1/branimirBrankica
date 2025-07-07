import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselCards.css"
import {Link} from "react-router-dom";

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet:  { breakpoint: { max: 1024, min: 576 },  items: 2 },
    mobile:  { breakpoint: { max: 576,  min: 0 },    items: 1 },
};

export default function ({ cards = [] }) {
    return (
        <Carousel responsive={responsive} infinite autoPlay>
            {cards.map(({ id, title, image, link ="/" }) => (
                <div key={id} className="mx-2 cardsContent">
                    <Link to={link} className={"text-decoration-none text-white"}>
                        <img
                            src={image}
                            className="card-img-top" alt={`Card ${id}`}/>
                        <h3 className="card-title">{title}</h3>
                    </Link>
                </div>
            ))}
        </Carousel>
    );
}
