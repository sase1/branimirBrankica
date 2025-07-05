import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselCards.css"
import {Link} from "react-router-dom";

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet:  { breakpoint: { max: 1024, min: 576 },  items: 2 },
    mobile:  { breakpoint: { max: 576,  min: 0 },    items: 1 },
};

export default function CarouselCards() {
    return (
        <Carousel responsive={responsive} infinite autoPlay>
            {[1, 2, 3, 4, 5].map((id) => (
                <div key={id} className="mx-2 cardsContent">
                    <Link to={"/"} className={"text-decoration-none text-white"}>
                        <img
                            src={`https://www.danceflavors.com/wp-content/uploads/2022/09/tango-pair-dancers-dance-in-ballroom-2022-09-07-16-01-27-utc-scaled.jpg`}
                            className="card-img-top" alt={`Card ${id}`}/>
                        <h3 className="card-title">Име на танцот {id}</h3>
                    </Link>
                </div>
            ))}
        </Carousel>
    );
}
