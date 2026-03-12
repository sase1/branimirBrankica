import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; ova e za bez #
import ScrollToTop from "./hooks/ScrollToTop";

import MainLayout from "./components/MainLayout,js";
import NotFound from "./pages/NotFound";
import './i18n';

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Meuna from "./pages/Meuna";
import Dance from "./pages/Dance";
import Gallery from "./pages/Gallery";
import Workout from "./pages/Workout";
import Store from "./pages/Store";
import Partners from "./pages/Partners";

// Dance inner pages
import LatinoDances from "./pages/danceInnerPages/LatinoDances";
import StandardDances from "./pages/danceInnerPages/StandardDances";
import SoloAndGroups from "./pages/danceInnerPages/SoloAndGroups";
import SportDoubleDance from "./pages/danceInnerPages/SportDoubleDance";
import StreetDance from "./pages/danceInnerPages/StreetDance";
import WeddingDance from "./pages/danceInnerPages/WeddingDance";
import SocialDances from "./pages/danceInnerPages/SocialDances";

// Workout inner pages
import Aerobic from "./pages/workoutInnerPages/Aerobic";
import UltimateBagWorkout from "./pages/workoutInnerPages/UltimateBagWorkout";
import Pilates from "./pages/workoutInnerPages/Pilates";
import Zumba from "./pages/workoutInnerPages/Zumba";
import Byoga from "./pages/workoutInnerPages/Byoga";
import FunctiuonalFitness from "./pages/workoutInnerPages/FunctiuonalFitness";
import Reformer from "./pages/workoutInnerPages/Reformer";
import CorrectionalGymnastic from "./pages/workoutInnerPages/CorrectionalGymnastic";
import PainRelief from "./pages/workoutInnerPages/PainRelief";
import PersonalTraining from "./pages/workoutInnerPages/PersonalTraining";
import BFitTeen from "./pages/workoutInnerPages/BFitTeen";

// Store inner pages
import Lifestyle from "./pages/storeInnerPages/Lifestyle";
import OrganicHoney from "./pages/storeInnerPages/lifestyleInnerPages/OrganicHoney";
import BeesProducts from "./pages/storeInnerPages/lifestyleInnerPages/BeesProducts";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>

                {/* Redirect од root на default lang */}
                <Route path="/" element={<Navigate to="/mk" replace />} />

                {/* MainLayout со Language param */}
                <Route path="/:lang" element={<MainLayout />}>

                    {/* Главни страници */}
                    <Route index element={<Home />} />
                    <Route path="танц" element={<Dance />} />
                    <Route path="за-нас" element={<AboutUs />} />
                    <Route path="меуна" element={<Meuna />} />
                    <Route path="контакт" element={<Contact />} />
                    <Route path="галерија" element={<Gallery />} />
                    <Route path="партнери" element={<Partners />} />
                    <Route path="продавница" element={<Store />} />
                    <Route path="продавница/lifestyle" element={<Lifestyle />} />
                    <Route path="продавница/lifestyle/органски-мед" element={<OrganicHoney />} />
                    <Route path="продавница/lifestyle/пчелни-производи" element={<BeesProducts />} />

                    {/* Dance inner pages */}
                    <Route path="танц/латино-танци" element={<LatinoDances />} />
                    <Route path="танц/стандардни-танци" element={<StandardDances />} />
                    <Route path="танц/соло-и-групи" element={<SoloAndGroups />} />
                    <Route path="танц/спортски-танцови-двојки" element={<SportDoubleDance />} />
                    <Route path="танц/уличен-танц" element={<StreetDance />} />
                    <Route path="танц/свадбен-танц" element={<WeddingDance />} />
                    <Route path="танц/друштвени-танци" element={<SocialDances />} />

                    {/* Workout inner pages */}
                    <Route path="фит-универзум" element={<Workout />} />
                    <Route path="фит-универзум/аеробик" element={<Aerobic />} />
                    <Route path="фит-универзум/ultimate-bag-workout" element={<UltimateBagWorkout />} />
                    <Route path="фит-универзум/пилатес" element={<Pilates />} />
                    <Route path="фит-универзум/зумба" element={<Zumba />} />
                    <Route path="фит-универзум/б-јога" element={<Byoga />} />
                    <Route path="фит-универзум/функционален-фитнес" element={<FunctiuonalFitness />} />
                    <Route path="фит-универзум/реформер" element={<Reformer />} />
                    <Route path="фит-универзум/превентивно-корективна-гимнастика" element={<CorrectionalGymnastic />} />
                    <Route path="фит-универзум/pain-relief" element={<PainRelief />} />
                    <Route path="фит-универзум/персонални-тренинзи" element={<PersonalTraining />} />
                    <Route path="фит-универзум/bfit-teen" element={<BFitTeen />} />

                </Route>

                {/* Not found */}
                <Route path="*" element={<NotFound />} />

            </Routes>
        </Router>
    );
}

export default App;