import './App.css';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import DanceWorkout from "./components/DanceWorkout";
import Counter from "./components/Counter";

function App() {
    return (
            <Router>
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <DanceWorkout />
                        <Counter />
                    </div>
                </div>
                {/*<Routes>*/}
                {/*    <Route path="/eden" element={<Eden/>}/>*/}
                {/*</Routes>*/}
            </Router>

    );
}

export default App;
