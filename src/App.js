import './App.css';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import DanceWorkout from "./components/DanceWorkout";
import Counter from "./components/Counter";
import HeaderMovingLines from "./components/HeaderMovingLines";
import CarouselCards from "./components/CarouselCards";
import CarouselReviews from "./components/CarouselReviews";
import LogosRow from "./components/LogosRow";
import FolowUs from "./components/FollowUs";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Navbar/>
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
                        <div className="d-flex justify-content-center align-items-center ps-1 ps-lg-5 text-white text-center text-lg-start">
                            <div className="textContent">
                                <img
                                    src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-letter-b-logo-png-image_6059146.jpg"
                                    alt="logo" style={{height: '80px'}}/>
                                <h2>20 години <br/> танцуваме заедно</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua,
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                <Link to="/" className="text-decoration-none text-white about d-inline-block">Повеќе За
                                    Нас </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <HeaderMovingLines text={'Совладајте ја уметноста на танцувањето'}/>

                <div className="row danceStyles">
                    <div className="col-lg-12 col-xl-10 offset-xl-1 text-white">
                        <div className="d-flex flex-column flex-lg-row text-center  align-items-center justify-content-between">
                            <h2>Стилови на танц</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <Link to="/" className="text-decoration-none text-white about d-inline-block">Дознајте
                                Повеќе </Link>
                        </div>
                    </div>
                </div>
                <CarouselCards/>
                <HeaderMovingLines text={'Откриј го личниот максимум'}/>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center text-white">
                        <img
                            src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-letter-b-logo-png-image_6059146.jpg"
                            alt="logo" style={{height: '80px'}} className="mb-4"/>
                        <h2>Фитнес Програми</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p>
                        <Link to="/" className="text-decoration-none text-white about d-inline-block">Дознајте
                            Повеќе </Link>
                    </div>

                    <div className="col-lg-12">
                        <div className="image-grid">
                            <div className="item item1"><img
                                src="https://blog.afaa.com/hs-fs/hubfs/how-to-design-group-fitness-program.jpg?width=600&name=how-to-design-group-fitness-program.jpg"
                                alt=""/>
                                <div className="overlay">Text inside</div>
                            </div>
                            <div className="item item2"><img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6X2SLL-qBuWbjKjixzIQITqfBtHjhqpkxmw&s"
                                alt=""/>
                                <div className="overlay">Text inside</div>
                            </div>
                            <div className="item item3"><img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFnW53mzRMAQO8rOKsr5d-RsLVGExI7sJug&s"
                                alt=""/>
                                <div className="overlay">Text inside</div>
                            </div>
                            <div className="item item4"><img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdHIinb4Q0mjm_817HCEeEB1INOqzgX4lfQ&s"
                                alt=""/>
                                <div className="overlay">Text inside</div>
                            </div>
                            <div className="item item5"><img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQoB8wzGzkVUT6MNuUDVWNgcW0M-voxat0Q&s"
                                alt=""/>
                                <div className="overlay">Text inside</div>
                            </div>
                            <div className="item item6"><img
                                src="https://ymcafw.org/wp-content/uploads/2023/12/HealthFitness2_overview.jpg" alt=""/>
                                <div className="overlay">Text inside</div>
                            </div>
                            <div className="item item7"><img
                                src="https://www.toronto.ca/wp-content/uploads/2024/10/9631-fitness-programs-banner.jpg"
                                alt=""/>
                                <div className="overlay">Text inside</div>
                            </div>
                            <div className="item item8"><img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nKyX2g7nTDxN0tk4J_i2xN5ZEFyt00vUlQ&s"
                                alt=""/>
                                <div className="overlay">Text inside</div>
                            </div>
                        </div>
                    </div>

                </div>
                <HeaderMovingLines text={'Мислења на нашите членови'}/>
                <CarouselReviews/>
                <LogosRow/>
                <FolowUs/>
                <Footer />
            </div>
            {/*<Routes>*/}
            {/*    <Route path="/eden" element={<Eden/>}/>*/}
            {/*</Routes>*/}
        </Router>

    );
}

export default App;
