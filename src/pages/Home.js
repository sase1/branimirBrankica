import {Link} from "react-router-dom";
import HeaderMovingLines from "../components/HeaderMovingLines";
import CarouselCards from "../components/CarouselCards";
import CarouselReviews from "../components/CarouselReviews";
import DanceWorkout from "../components/DanceWorkout";
import Counter from "../components/Counter";
import "./Home.css"
import CustomLink from "../components/CustomLink";
import HomeCarouselItems from "../components/HomeCarouselItems";

export default function Home() {

    const danceCards = [
        {
            id: 1,
            title: "Латино-американски Танци",
            image: "https://www.danceflavors.com/wp-content/uploads/2022/09/tango-pair-dancers-dance-in-ballroom-2022-09-07-16-01-27-utc-scaled.jpg",
            link: "/танц/латино-танци"
        },
        {
            id: 2,
            title: "Свадбен танц",
            image: "https://cdn.britannica.com/68/92668-050-1BED9B3B/Burundians-dance-Bujumbura.jpg",
            link: "/танц/свадбен-танц"
        },
        {
            id: 3,
            title: "Solo & Групи",
            image: "https://www.danceflavors.com/wp-content/uploads/2022/09/tango-pair-dancers-dance-in-ballroom-2022-09-07-16-01-27-utc-scaled.jpg",
            link: "/танц/соло-и-групи"
        },
        {
            id: 4,
            title: "Social Dances",
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
            link: "/танц/друштвени-танци"
        },
        {
            id: 5,
            title: "Спортски Танцови Двојки",
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
            link: "/танц/спортски-танцови-двојки"
        },
        {
            id: 6,
            title: "Street Dance",
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
            link: "/танц/уличен-танц"
        },
        {
            id: 7,
            title: "Стандардни Танци",
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
            link: "/танц/стандардни-танци"
        }
    ];

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <DanceWorkout/>
                    <Counter/>
                </div>
            </div>
            <div className="container-fluid yearsDancing">
                <div className="row">
                    <div className="col-lg-6 offset-lg-1">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                    </div>
                    <div className="col-lg-4 align-content-center pt-5 pt-lg-0">
                        <div
                            className="d-flex justify-content-center align-items-center ps-1 ps-lg-5 text-white text-center text-lg-start">
                            <div className="textContent">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                                    alt="logo" className="mb-0 mb-md-2"/>
                                <h2 className="title">20 години <br/> танцуваме заедно</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua,
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                <CustomLink to="/за-нас" text="Повеќе За Нас"/>
                            </div>
                        </div>
                    </div>
                </div>
                <HeaderMovingLines text={'Совладајте ја уметноста на танцувањето /'} strokeColor="#6F9D80" color="#6F9D80"/>

                <div className="row danceStyles">
                    <div className="col-lg-12 col-xl-10 offset-xl-1 text-white">
                        <div
                            className="d-flex flex-column flex-lg-row text-center align-items-lg-start  align-items-center justify-content-between">
                            <h2 className="title">Стилови на танц</h2>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <CustomLink to="/танц" text="Дознајте Повеќе" className="mt-md-0"/>
                        </div>
                    </div>
                </div>
                <CarouselCards cards={danceCards}/>
                <HeaderMovingLines text={'Откриј го потенцијалот на твоето тело /'} strokeColor="#FB8B01" color="#FB8B01"/>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center text-white">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                            alt="logo" className="mb-4"/>
                        <h2 className="title">ФитВерзум</h2>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p>
                        <CustomLink to="/фит-универзум" text="Дознајте Повеќе"/>
                    </div>

                    <div className="col-lg-12 d-none d-lg-block">
                        <div className="image-grid">
                            <div className="item item1">
                                <Link to="/фит-универзум/пилатес">
                                    <img
                                        src="https://blog.afaa.com/hs-fs/hubfs/how-to-design-group-fitness-program.jpg?width=600&name=how-to-design-group-fitness-program.jpg"
                                        alt="workouit-image"/>
                                    <div className="overlay">Пилатес <img
                                        src={`${process.env.PUBLIC_URL}/images/orange-arrow.png`} alt="logo"
                                        className="logo-image"/></div>
                                </Link>
                            </div>
                            <div className="item item2">
                                <Link to="/фит-универзум/реформер">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6X2SLL-qBuWbjKjixzIQITqfBtHjhqpkxmw&s"
                                        alt="workouit-image"/>
                                    <div className="overlay">Reformer<img
                                        src={`${process.env.PUBLIC_URL}/images/orange-arrow.png`} alt="logo"
                                        className="logo-image"/></div>
                                </Link>
                            </div>
                            <div className="item item3">
                                <Link to="/фит-универзум/функционален-фитнес">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFnW53mzRMAQO8rOKsr5d-RsLVGExI7sJug&s"
                                        alt="workouit-image"/>
                                    <div className="overlay">Функционален фитнес<img
                                        src={`${process.env.PUBLIC_URL}/images/orange-arrow.png`} alt="logo"
                                        className="logo-image"/></div>
                                </Link>
                            </div>
                            <div className="item item4">
                                <Link to="/фит-универзум/б-јога">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdHIinb4Q0mjm_817HCEeEB1INOqzgX4lfQ&s"
                                        alt="workouit-image"/>
                                    <div className="overlay">Б Јога<img
                                        src={`${process.env.PUBLIC_URL}/images/orange-arrow.png`} alt="logo"
                                        className="logo-image"/></div>
                                </Link>
                            </div>
                            <div className="item item5">
                                <Link to="/фит-универзум/зумба">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQoB8wzGzkVUT6MNuUDVWNgcW0M-voxat0Q&s"
                                        alt="workouit-image"/>
                                    <div className="overlay">Зумба<img
                                        src={`${process.env.PUBLIC_URL}/images/orange-arrow.png`} alt="logo"
                                        className="logo-image"/></div>
                                </Link>
                            </div>
                            <div className="item item6">
                                <Link to="/фит-универзум/pain-relief">
                                    <img
                                        src="https://ymcafw.org/wp-content/uploads/2023/12/HealthFitness2_overview.jpg"
                                        alt=""/>
                                    <div className="overlay">Pain Relief<img
                                        src={`${process.env.PUBLIC_URL}/images/orange-arrow.png`} alt="logo"
                                        className="logo-image"/></div>
                                </Link>
                            </div>
                            <div className="item item7">
                                <Link to="/фит-универзум/аеробик">
                                    {/*<Link to="/фит-универзум/функционален-фитнес?scrollToTitle=true">*/}
                                    <img
                                        src="https://www.toronto.ca/wp-content/uploads/2024/10/9631-fitness-programs-banner.jpg"
                                        alt="workouit-image"/>
                                    <div className="overlay">Аеробик<img
                                        src={`${process.env.PUBLIC_URL}/images/orange-arrow.png`} alt="logo"
                                        className="logo-image"/></div>
                                </Link>
                            </div>
                            <div className="item item8">
                                <Link to="/фит-универзум/bfit-teen">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nKyX2g7nTDxN0tk4J_i2xN5ZEFyt00vUlQ&s"
                                        alt="workouit-image"/>
                                    <div className="overlay">B-Fit Teen<img
                                        src={`${process.env.PUBLIC_URL}/images/orange-arrow.png`} alt="logo"
                                        className="logo-image"/></div>
                                </Link>
                            </div>
                            <div className="item item9">
                                <Link to="/фит-универзум/превентивно-корективна-гимнастика">
                                    <img
                                        src="https://blog.afaa.com/hs-fs/hubfs/how-to-design-group-fitness-program.jpg?width=600&name=how-to-design-group-fitness-program.jpg"
                                        alt="workouit-image"/>
                                    <div className="overlay">Превентивно Корективна гимнастика <img
                                        src={`${process.env.PUBLIC_URL}/images/orange-arrow.png`} alt="logo"
                                        className="logo-image"/></div>
                                </Link>
                            </div>
                            <div className="item item10">
                                <Link to="/фит-универзум/ген-фит">
                                    <img
                                        src="https://www.toronto.ca/wp-content/uploads/2024/10/9631-fitness-programs-banner.jpg"
                                        alt="workouit-image"/>
                                    <div className="overlay">Ген Фит <img
                                        src={`${process.env.PUBLIC_URL}/images/orange-arrow.png`} alt="logo"
                                        className="logo-image"/></div>
                                </Link>
                            </div>
                            <div className="item item11">
                                <Link to="/фит-универзум/функционален-фитнес">
                                    <img
                                        src="https://ymcafw.org/wp-content/uploads/2023/12/HealthFitness2_overview.jpg"
                                        alt="workouit-image"/>
                                    <div className="overlay">Функционален фитнес <img
                                        src={`${process.env.PUBLIC_URL}/images/orange-arrow.png`} alt="logo"
                                        className="logo-image"/></div>
                                </Link>
                            </div>
                            {/*<div className="item item12">*/}
                            {/*    <Link to="/вежбање/аеробик">*/}
                            {/*        <img*/}
                            {/*            src="https://ymcafw.org/wp-content/uploads/2023/12/HealthFitness2_overview.jpg"*/}
                            {/*            alt="workouit-image"/>*/}
                            {/*        <div className="overlay">Аеробик <img*/}
                            {/*            src={`${process.env.PUBLIC_URL}/images/orange-arrow.png`} alt="logo"*/}
                            {/*            className="logo-image"/></div>*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="col-12 d-block d-lg-none mb-5">
                        <HomeCarouselItems/>
                    </div>


                </div>
                <HeaderMovingLines text={'Мислења на нашите членови /'} strokeColor="#6F9D80" color="#6F9D80"/>
                <CarouselReviews/>
            </div>
        </>
    )
}