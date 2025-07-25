import './App.css';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {HashRouter  as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/MainLayout,js";
import Dance from "./pages/Dance";
import Gallery from "./pages/Gallery";
import LatinoDances from "./pages/danceInnerPages/LatinoDances";
import ScrollToTop from "./hooks/ScrollToTop";
import Workout from "./pages/Workout";
import Aerobic from "./pages/workoutInnerPages/Aerobic";
import CorrectionalGymnastic from "./pages/workoutInnerPages/CorrectionalGymnastic";
import Pilates from "./pages/workoutInnerPages/Pilates";
import Zumba from "./pages/workoutInnerPages/Zumba";
import Byoga from "./pages/workoutInnerPages/Byoga";
import FunctiuonalFitness from "./pages/workoutInnerPages/FunctiuonalFitness";
import HipHop from "./pages/danceInnerPages/HipHop";
import WeddingDance from "./pages/danceInnerPages/WeddingDance";
import SocialDances from "./pages/danceInnerPages/SocialDances";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/танц" element={<Dance />} />
                    <Route path="/за-нас" element={<AboutUs />} />
                    <Route path="/контакт" element={<Contact />} />
                    <Route path="/галерија" element={<Gallery />} />
                    <Route path="/танц/латино-танци" element={<LatinoDances />} />
                    <Route path="/танц/хип-хоп" element={<HipHop />} />
                    <Route path="/танц/свадбен-танц" element={<WeddingDance />} />
                    <Route path="/танц/друштвени-танци" element={<SocialDances />} />
                    <Route path="/фит-универзум" element={<Workout />} />
                    <Route path="/фит-универзум/аеробик" element={<Aerobic />} />
                    <Route path="/фит-универзум/корективна-гимнастика" element={<CorrectionalGymnastic />} />
                    <Route path="/фит-универзум/пилатес" element={<Pilates />} />
                    <Route path="/фит-универзум/зумба" element={<Zumba />} />
                    <Route path="/фит-универзум/б-јога" element={<Byoga />} />
                    <Route path="/фит-универзум/функционален-фитнес" element={<FunctiuonalFitness />} />

                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>

    );
}

export default App;
