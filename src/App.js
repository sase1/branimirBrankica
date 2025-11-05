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
import UltimateBagWorkout from "./pages/workoutInnerPages/UltimateBagWorkout";
import Pilates from "./pages/workoutInnerPages/Pilates";
import Zumba from "./pages/workoutInnerPages/Zumba";
import Byoga from "./pages/workoutInnerPages/Byoga";
import FunctiuonalFitness from "./pages/workoutInnerPages/FunctiuonalFitness";
import SoloAndGroups from "./pages/danceInnerPages/SoloAndGroups";
import WeddingDance from "./pages/danceInnerPages/WeddingDance";
import SocialDances from "./pages/danceInnerPages/SocialDances";
import Reformer from "./pages/workoutInnerPages/Reformer";
import CorrectionalGymnastic from "./pages/workoutInnerPages/CorrectionalGymnastic";
import PainRelief from "./pages/workoutInnerPages/PainRelief";
import PersonalTraining from "./pages/workoutInnerPages/PersonalTraining";
import BFitTeen from "./pages/workoutInnerPages/BFitTeen";
import SportDoubleDance from "./pages/danceInnerPages/SportDoubleDance";
import StreetDance from "./pages/danceInnerPages/StreetDance";
import Products from "./pages/Products";
import StandardDances from "./pages/danceInnerPages/StandardDances";
import Partners from "./pages/Partners";
import Meuna from "./pages/Meuna";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/танц" element={<Dance />} />
                    <Route path="/за-нас" element={<AboutUs />} />
                    <Route path="/меуна" element={<Meuna />} />
                    <Route path="/контакт" element={<Contact />} />
                    <Route path="/продукти" element={<Products />} />
                    <Route path="/партнери" element={<Partners />} />
                    <Route path="/галерија" element={<Gallery />} />
                    <Route path="/танц/латино-танци" element={<LatinoDances />} />
                    <Route path="/танц/стандардни-танци" element={<StandardDances />} />
                    <Route path="/танц/соло-и-групи" element={<SoloAndGroups />} />
                    <Route path="/танц/спортски-танцови-двојки" element={<SportDoubleDance />} />
                    <Route path="/танц/уличен-танц" element={<StreetDance />} />
                    <Route path="/танц/свадбен-танц" element={<WeddingDance />} />
                    <Route path="/танц/друштвени-танци" element={<SocialDances />} />
                    <Route path="/фит-универзум" element={<Workout />} />
                    <Route path="/фит-универзум/аеробик" element={<Aerobic />} />
                    <Route path="/фит-универзум/ultimate-bag-workout" element={<UltimateBagWorkout />} />
                    <Route path="/фит-универзум/превентивно-корективна-гимнастика" element={<CorrectionalGymnastic />} />
                    <Route path="/фит-универзум/pain-relief" element={<PainRelief />} />
                    <Route path="/фит-универзум/персонални-тренинзи" element={<PersonalTraining />} />
                    <Route path="/фит-универзум/bfit-teen" element={<BFitTeen />} />
                    <Route path="/фит-универзум/пилатес" element={<Pilates />} />
                    <Route path="/фит-универзум/зумба" element={<Zumba />} />
                    <Route path="/фит-универзум/б-јога" element={<Byoga />} />
                    <Route path="/фит-универзум/функционален-фитнес" element={<FunctiuonalFitness />} />
                    <Route path="/фит-универзум/реформер" element={<Reformer />} />

                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>

    );
}

export default App;
