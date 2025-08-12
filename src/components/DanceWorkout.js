import './DanceWorkout.css';
import {Link} from "react-router-dom";

import { useEffect, useState } from "react";

const danceImages = [
    "https://i.pinimg.com/736x/6b/52/6a/6b526abd77989e56df3623c01c6ada09.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamd6oG1VZvKlKfe3_oRsXmQwRueHVMmkeQQ&s",
    "https://npr.brightspotcdn.com/c8/b6/f87782b345af966e60e69c4f1fb4/rui-cruz-and-jordan-martinez-mcb.jpeg"
];

const workoutImages = [
    "https://media.istockphoto.com/id/2027278927/photo/young-athletic-woman-exercising-with-barbell-during-sports-training-in-a-gym.jpg?s=612x612&w=0&k=20&c=ifFL7Mqc8NwTj25PAx4ONy1OOQZvc1S_kVOofsbLgFw=",
    "https://img.freepik.com/free-photo/full-shot-man-training-outdoors_23-2148948519.jpg?semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/group-people-exercising-together-outdoors_23-2151061449.jpg?semt=ais_hybrid&w=740"
];

export default function DanceWorkout() {

    const [danceIndex, setDanceIndex] = useState(0);
    const [workoutIndex, setWorkoutIndex] = useState(0);

    const [danceFade, setDanceFade] = useState(true);
    const [workoutFade, setWorkoutFade] = useState(true);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setDanceFade(false);
    //         setWorkoutFade(false);
    //
    //         setTimeout(() => {
    //             setDanceIndex(prev => (prev + 1) % danceImages.length);
    //             setWorkoutIndex(prev => (prev + 1) % workoutImages.length);
    //             setDanceFade(true);
    //             setWorkoutFade(true);
    //         }, 300); // quick hide before image change
    //     }, 4000);
    //
    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setDanceFade(false);
            setWorkoutFade(false);

            setTimeout(() => {
                setDanceIndex(prev => (prev + 1) % danceImages.length);
                setDanceFade(true);
            }, 400);

            setTimeout(() => {
                setWorkoutIndex(prev => (prev + 1) % workoutImages.length);
                setWorkoutFade(true);
            }, 600);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="col-lg-12 p-3 p-md-5  danceWorkout">
            <div className="row">
                <div className="col-lg-6">
                    <Link to="/танц">
                        <div className="image-wrapper">
                            <div className={`dance ${danceFade ? 'fade-in' : 'fade-out'}`}
                                 style={{ backgroundImage: `url(${danceImages[danceIndex]})` }}>
                                <h1 className="text-white">Танц</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="/фит-универзум">
                        <div className="image-wrapper">
                            <div className={`workout ${workoutFade ? 'fade-in' : 'fade-out'}`}
                                 style={{ backgroundImage: `url(${workoutImages[workoutIndex]})` }}>
                                <h1 className="text-white">ФитВерзум</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}