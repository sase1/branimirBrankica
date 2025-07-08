import './DanceWorkout.css';
import {Link} from "react-router-dom";

export default function DanceWorkout() {
    return (
        <div className="col-lg-12 p-3 p-md-5  danceWorkout">
            <div className="row">
                <div className="col-lg-6">
                    <Link to="/танц">
                        <div className="dance">
                            <h1 className="text-white">Танц</h1>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="/вежбање">
                        <div className="workout">
                            <h1 className="text-white">Вежбање</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}