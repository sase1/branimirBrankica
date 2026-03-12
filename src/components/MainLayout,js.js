import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import LogosRow from "./LogosRow";
import FollowUs from "./FollowUs";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function LanguageHandler() {
    const { lang } = useParams();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang]);

    return null;
}

export default function MainLayout() {
    return (
        <>
            <LanguageHandler />
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
