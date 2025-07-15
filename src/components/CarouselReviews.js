import React, {useEffect, useRef, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarouselReviews.css";

const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit rhoncus enim rhoncus enim nec enim congue aliquam nec enim congue aliquam. Vestibulum rhoncus enim nec enim congue aliquam.",
        author: "John Doe"
    },
    {
        text: "Another great testimonial goes here. It explains more about how rhoncus enim nec enim congue aliquam rhoncus enim nec enim congue aliquam awesome everything is!",
        author: "Jane Smith"
    },
    {
        text: "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies rhoncus enim nec enim congue aliquam nisi.",
        author: "Michael Johnson"
    },
    {
        text: "Fusce ac felis sit amet ligula pharetra condimentum. Praesent rhoncus enim nec enim congue aliquam blandit laoreet nibh.",
        author: "Emily Davis"
    }
];


export default function CarouselReviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const carouselElement = carouselRef.current;
        if (!carouselElement) return;

        const handleSlide = (event) => {
            setCurrentIndex(event.to);
        };

        carouselElement.addEventListener('slid.bs.carousel', handleSlide);

        return () => {
            carouselElement.removeEventListener('slid.bs.carousel', handleSlide);
        };
    }, []);

    return (
        <div className="row">

            <div className="col-lg-8 offset-lg-2 py-5">
                <div className="text-center mb-4">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/rounded-logo.png`}
                        alt="logo" className="mb-4"/>
                </div>

                <div
                    id="testimonialCarousel"
                    ref={carouselRef}
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        {testimonials.map(({text, author}, index) => (
                            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                <div className="d-flex flex-column align-items-center text-white text-center">
                                    <h3 className="testimonial-text w-75">{text}</h3>
                                    <p className="testimonial-author">{author}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>

                    <div className="text-center mt-3 arrows">
                        {currentIndex + 1} / {testimonials.length}
                    </div>
                </div>
            </div>
        </div>

    );
}
