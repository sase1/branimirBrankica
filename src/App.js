import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/MainLayout,js";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/за-нас" element={<AboutUs />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>

    );
}

export default App;
