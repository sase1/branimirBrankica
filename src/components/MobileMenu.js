import {useState} from "react";
import "./MobileMenu.css";
import {Link} from "react-router-dom";

export default function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuTitle, setSubmenuTitle] = useState(null);

    const menuItems = [
        {title: "Танц", link: "/"},
        {
            title: "ФитУниверзум",
            children: [
                {title: "Пилатес", link: "/фит-универзум/пилатес"},
                {title: "Reformer", link: "/фит-универзум/реформер"},
                {title: "Функционален фитнес", link: "/фит-универзум/функционален-фитнес"},
                {title: "Б Јога", link: "/фит-универзум/б-јога"},
                {title: "Зумба", link: "/фит-универзум/зумба"},
                {title: "Pain Relief", link: "/фит-универзум/pain-relief"},
                {title: "Аеробик", link: "/фит-универзум/аеробик"},
                {title: "B-Fit Teen", link: "/фит-универзум/bfit-teen"},
                {title: "Превентивно Корективна гимнастика", link: "/фит-универзум/превентивно-корективна-гимнастика"},
                {title: "Ген Фит", link: "/фит-универзум/ген-фит"},
                {title: "Функционален фитнес", link: "/фит-универзум/функционален-фитнес"}
            ],
        },
        {title: "За Нас", link: "/"},
        {title: "Онлајн", link: "https://online.branimirbrankica.mk/login", "target": "_blank"},
        {title: "Новости", link: "/"},
        {title: "Галерија", link: "/"},
        {title: "Продукти", link: "/"},
        {title: "Контакт", link: "/"}
    ];

    const [submenuAnimating, setSubmenuAnimating] = useState(false);
    const openSubmenu = (title) => {
        setSubmenuAnimating(false);
        setSubmenuTitle(title);
        requestAnimationFrame(() => {
            setSubmenuAnimating(true);
        });
    };

    return (
        <>
            <img src={`${process.env.PUBLIC_URL}/images/navbar-logo.png`} alt="Site Logo"
                 className="d-block d-sm-none float-start p-3"/>
            <button className="hamburger float-end mt-4 pe-3" onClick={() => setMenuOpen(true)}>
                ☰
            </button>
            <span className="clearfix"></span>

            {menuOpen && (
                <div className="menu-overlay">
                    {/* Main Menu */}
                    <div className={`menu-panel main-panel ${submenuTitle ? "slide-left" : ""}`}>
                        <img src={`${process.env.PUBLIC_URL}/images/navbar-logo.png`} alt="Site Logo"
                             className="d-block d-sm-none float-start w-50"/>
                        <button className="close-btn float-end mt-3 fw-bold" onClick={() => setMenuOpen(false)}>✕
                        </button>
                        <span className="clearfix"></span>
                        <ul className="mt-5 p-2">
                            {menuItems.map((item, index) => (
                                <li key={index} className="menu-item-with-arrow">
                                    {item.children ? (
                                        <>
                                            <Link
                                                to={item.link || "/фит-универзум"}
                                                className="menu-title"
                                                onClick={() => {
                                                    setMenuOpen(false);
                                                    setSubmenuTitle(null);
                                                }}
                                            >
                                                {item.title}
                                            </Link>

                                            <button
                                                className="submenu-arrow fw-bold"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openSubmenu(item.title);
                                                }}
                                            >
                                                ›
                                            </button>
                                        </>
                                    ) : (
                                        <Link
                                            to={item.link}
                                            onClick={() => {
                                                setMenuOpen(false);
                                                setSubmenuTitle(null);
                                            }}
                                        >
                                            {item.title}
                                        </Link>
                                    )}
                                </li>
                            ))}

                        </ul>
                        <div className="mobile">
                            <Link className="nav-link ms-2" to="tel:+38971968582">
                                <img className="icon me-3" alt="logo" src={`${process.env.PUBLIC_URL}/images/phone-icon.svg`}/>
                                +389 71 968 582</Link>
                        </div>
                    </div>

                    {submenuTitle && (
                        <div className={`menu-panel sub-panel ${submenuAnimating ? "slide-in" : ""}`} key={submenuTitle}>
                            <button className="back-btn" onClick={() => setSubmenuTitle(null)}>← &nbsp; ФитУниверзум</button>
                            <ul>
                                {menuItems
                                    .find((item) => item.title === submenuTitle)
                                    ?.children.map((child, i) => (
                                        <li key={i}>
                                            <Link to={child.link} onClick={() => {
                                                setMenuOpen(false);
                                                setSubmenuTitle(null);
                                            }}>
                                                {child.title}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
