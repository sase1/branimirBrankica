import './DanceWorkout.css';
import {Link} from "react-router-dom";

export default function DanceWorkout() {
    return (
        <div className="col-md-12 p-5 danceWorkout">
            <div className="row">
                <div className="col-md-6">
                    <Link to="/">
                        <div className="dance">
                            <h1 className="text-white">Танц</h1>
                        </div>
                    </Link>
                </div>
                <div className="col-md-6">
                    <Link to="/">
                        <div className="workout">
                            <h1 className="text-white">Вежбање</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}