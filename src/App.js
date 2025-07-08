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
import Salsa from "./pages/danceInnerPages/Salsa";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
    return (
        <Router>
            <ScrollToTop /> {/* This must be inside Router */}
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/танц" element={<Dance />} />
                    <Route path="/за-нас" element={<AboutUs />} />
                    <Route path="/контакт" element={<Contact />} />
                    <Route path="/галерија" element={<Gallery />} />
                    <Route path="/танц/салса" element={<Salsa />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>

    );
}

export default App;
