import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import LogosRow from "./LogosRow";
import FollowUs from "./FollowUs";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <MobileMenu />
            <Outlet />
            <div className="container-fluid">
                {/*<LogosRow />*/}
                <FollowUs />
                <Footer />
            </div>
        </>
    );
}
