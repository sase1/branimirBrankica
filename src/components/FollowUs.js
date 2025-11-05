import "./FollowUs.css"
import {Link} from "react-router-dom";

export default function FollowUs() {
    return (
        <div className="row instagram-images position-relative mb-3 mt-5">
            <div className="col-lg-12 text-white text-center mb-5">
                <h2 className="title">Заследете не</h2>
            </div>
            <div className="col-lg-2 col-md-4 col-6 item item1">
                <Link to="https://www.instagram.com/branimir_i_brankica/?hl=en" target="_blank" className="overlay text-decoration-none text-white">
                    <img className="white-insta-logo" src={`${process.env.PUBLIC_URL}/images/see-insta-icon.svg`} alt="instagram-logo"/> Види
                    на Инстаграм</Link>
            </div>
            <div className="col-lg-2 col-md-4 col-6 item item2">
                <Link to="https://www.instagram.com/branimir_i_brankica/?hl=en" target="_blank" className="overlay text-decoration-none text-white">
                    <img className="white-insta-logo" src={`${process.env.PUBLIC_URL}/images/see-insta-icon.svg`} alt="instagram-logo"/> Види
                    на Инстаграм</Link>
            </div>
            <div className="col-lg-2 col-md-4 col-6 item item3">
            <Link to="https://www.instagram.com/branimir_i_brankica/?hl=en" target="_blank" className="overlay text-decoration-none text-white">
                <img className="white-insta-logo" src={`${process.env.PUBLIC_URL}/images/see-insta-icon.svg`} alt="instagram-logo"/> Види
                на Инстаграм</Link>
            </div>
            <div className="col-lg-2 col-md-4 col-6 item item4">
            <Link to="https://www.instagram.com/branimir_i_brankica/?hl=en" target="_blank" className="overlay text-decoration-none text-white">
                <img className="white-insta-logo" src={`${process.env.PUBLIC_URL}/images/see-insta-icon.svg`} alt="instagram-logo"/> Види
                на Инстаграм</Link>
            </div>
            <div className="col-lg-2 col-md-4 col-6 item item5">
            <Link to="https://www.instagram.com/branimir_i_brankica/?hl=en" target="_blank" className="overlay text-decoration-none text-white">
                <img className="white-insta-logo" src={`${process.env.PUBLIC_URL}/images/see-insta-icon.svg`} alt="instagram-logo"/> Види
                на Инстаграм</Link>
            </div>
            <div className="col-lg-2 col-md-4 col-6 item item6">
            <Link to="https://www.instagram.com/branimir_i_brankica/?hl=en" target="_blank" className="overlay text-decoration-none text-white">
                <img className="white-insta-logo" src={`${process.env.PUBLIC_URL}/images/see-insta-icon.svg`} alt="instagram-logo"/> Види
                на Инстаграм</Link>
            </div>
            <div className="insta d-flex align-items-center justify-content-center">
                <Link to="https://www.instagram.com/branimir_i_brankica/?hl=en" target="_blank" className="text-decoration-none text-white">
                    <img src={`${process.env.PUBLIC_URL}/images/insta-orange-logo.png`} alt="instagram-logo"/>
                </Link>
            </div>
        </div>
    )
}