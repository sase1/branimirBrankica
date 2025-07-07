import './App.css';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {HashRouter  as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/MainLayout,js";
import Dance from "./pages/Dance";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/танц" element={<Dance />} />
                    <Route path="/за-нас" element={<AboutUs />} />
                    <Route path="/контакт" element={<Contact />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>

    );
}

export default App;
