import {useState} from "react";
import "./MobileMenu.css";
import {Link} from "react-router-dom";

export default function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuTitle, setSubmenuTitle] = useState(null);

    const menuItems = [
        {
            title: "Танц", link: "/танц",
            children: [
                {title: "Латино Танци", link: "/танц/латино-танци"},
                {title: "Social Dances", link: "/танц/друштвени-танци"},
                {title: "Хип Хоп", link: "/танц/уличен-танц?scrollToTitleRound=true"},
                {title: "Ragga Jam", link: "/танц/уличен-танц?scrollToTitle=true"},
                {title: "Свадбен танц", link: "/танц/свадбен-танц"},
                {title: "Приватни Часови", link: "/"},
            ],
        },
        {
            title: "ФитВерзум", link: "/фит-универзум",
            children: [
                {title: "Пилатес", link: "/фит-универзум/пилатес"},
                {title: "Reformer", link: "/фит-универзум/реформер"},
                {title: "Pain Relief", link: "/фит-универзум/pain-relief"},
                {title: "Зумба", link: "/фит-универзум/зумба"},
                {title: "Step Aerobik", link: "/фит-универзум/аеробик?scrollToTitleRound=true"},
                {title: "Kick Box Aerobik", link: "/фит-универзум/аеробик?scrollToTitle=true"},
                {title: "B-Fit Teen", link: "/фит-универзум/bfit-teen"},
                {title: "Превентивно Корективна гимнастика", link: "/фит-универзум/превентивно-корективна-гимнастика"},
                {title: "Ultimate bag workout", link: "/фит-универзум/функционален-фитнес?scrollToTitle=true"},
                {title: "Функционален фитнес", link: "/фит-универзум/функционален-фитнес"},
                {title: "Yoga - BYoga", link: "/фит-универзум/б-јога"},
                {title: "Meuna", link: "/фит-универзум/б-јога?scrollToRound=true"},
                {title: "Персонални Тренинзи", link: "/фит-универзум/персонални-тренинзи"}
            ],
        },
        {title: "За Нас", link: "/за-нас"},
        // {title: "Онлајн", link: "https://online.branimirbrankica.mk/login", "target": "_blank"},
        {title: "Меуна", link: "/меуна"},
        {title: "Партнери", link: "/партнери"},
        {title: "Новости", link: "/"},
        {title: "Галерија", link: "/галерија"},
        // {title: "Продукти", link: "/продукти"},
        {title: "Контакт", link: "/контакт"}
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
            <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/images/navbar-logo.png`} alt="Site Logo"
                     className="d-block d-sm-none float-start p-3"/>
            </Link>
            <button className="hamburger float-end mt-4 pe-3" onClick={() => setMenuOpen(true)}>
                ☰
            </button>
            <span className="clearfix"></span>

            {menuOpen && (
                <div className="menu-overlay">
                    <div className={`menu-panel main-panel ${submenuTitle ? "slide-left" : ""}`}>
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            <img src={`${process.env.PUBLIC_URL}/images/navbar-logo.png`} alt="Site Logo"
                                 className="d-block d-sm-none float-start w-50"/>
                        </Link>
                        <button className="close-btn float-end mt-3 fw-bold" onClick={() => setMenuOpen(false)}>✕
                        </button>
                        <span className="clearfix"></span>
                        <ul className="mt-5 p-2">
                            {menuItems.map((item, index) => (
                                <li key={index} className="menu-item-with-arrow">
                                    {item.children ? (
                                        <>
                                            <Link
                                                to={item.link}
                                                className="menu-title"
                                                onClick={() => {
                                                    setMenuOpen(false);
                                                    setSubmenuTitle(null);
                                                }}
                                            >
                                                {item.title}
                                            </Link>

                                            <button
                                                className="submenu-arrow text-end"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openSubmenu(item.title);
                                                }}
                                            >
                                                ››
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
                        <div className="mobile mt-5">
                            <Link className="nav-link ms-2" to="tel:+38971968582">
                                <img className="icon-phone me-3" alt="logo"
                                     src={`${process.env.PUBLIC_URL}/images/phone-icon.svg`}/>
                                +389 71 968 582</Link>
                        </div>
                    </div>

                    {submenuTitle && (
                        <div className={`menu-panel sub-panel ${submenuAnimating ? "slide-in" : ""}`}
                             key={submenuTitle}>
                            <div className="mb-5">
                                <Link to="/" onClick={() => setMenuOpen(false)}>
                                    <img src={`${process.env.PUBLIC_URL}/images/navbar-logo.png`} alt="Site Logo"
                                         className="d-block d-sm-none float-start w-50"/>
                                </Link>
                                <button className="close-btn float-end mt-3 fw-bold"
                                        onClick={() => setMenuOpen(false)}>✕
                                </button>
                                <span className="clearfix"></span>
                            </div>

                            <ul className="py-2">
                                <button className="back-btn w-100 pb-3 mb-0"
                                        onClick={() => setSubmenuTitle(null)}>← &nbsp; Назад
                                </button>
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
