import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import LogosRow from "./LogosRow";
import FollowUs from "./FollowUs";
import Footer from "./Footer";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <div className="container-fluid">
                <LogosRow />
                <FollowUs />
                <Footer />
            </div>
        </>
    );
}
