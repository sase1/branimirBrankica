import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css"

export default function ContactForm({ title, description1, description2 }) {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);

        const name = form.current.name.value.trim();
        const phone = form.current.phone.value.trim();
        const email = form.current.email.value.trim();
        const dance = form.current.dance.value.trim();
        const message = form.current.message.value.trim();

        if (!name || !phone || !email || !dance || !message) {
            setStatusMessage({ type: "error", text: "Сите полиња се задолжителни." });
            setLoading(false);
            hideMessageAfterDelay();
            return;
        }

        emailjs.sendForm(
            'service_bd0qj1k',
            'template_bm4ich4',
            form.current,
            '0ZU5yMG5XaAYPiiMC'
        ).then(
            (result) => {
                setStatusMessage({ type: "success", text: "Пораката е успешно испратена!" });
                form.current.reset();
                setLoading(false);
                hideMessageAfterDelay();
            },
            (error) => {
                setStatusMessage({ type: "error", text: "Настана грешка. Обидете се повторно." });
                setLoading(false);
                hideMessageAfterDelay();
            }
        );
    };

    const hideMessageAfterDelay = () => {
        setTimeout(() => setStatusMessage(null), 5000);
    };

    return (
        <div className="row form">
            <div className="col-lg-6">
                <div
                    className="d-flex justify-content-center align-items-center ps-1 ps-lg-5 text-white text-center text-lg-start">
                    <div className="textContent mb-md-5">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                            alt="logo" className="mb-0 mb-md-2"/>
                        <h2 className="title">{title} </h2>
                        <p className="description m-0">
                            {description1}
                        </p>
                        <p className="description m-0">
                            {description2}
                        </p>
                        <Link className="nav-link mt-3 mb-5" to="tel:+38971968582">+389 71 968 582</Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 pe-md-4">
                            <input type="text" className="form-control ps-0" placeholder="Име и Презиме* "
                                   name="name" />
                        </div>
                        <div className="col-lg-6 col-md-6 mt-md-0 mt-5">
                            <input type="number" className="form-control ps-0" placeholder="Телефонски број*"
                                   name="phone" />
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <input type="text" className="form-control ps-0" placeholder="E-mail адреса*"
                                   name="email" />
                        </div>
                        <div className="col">
                            <select
                                className="form-select ps-0"
                                name="dance"
                                defaultValue=""

                            >
                                <option value="" disabled hidden>Тип на танц*</option>
                                <option value="Латино танци">Латино танци</option>
                                <option value="Стандардни танци">Стандардни танци</option>
                                <option value="Салса">Салса</option>
                                <option value="Бачата">Бачата</option>
                                <option value="Танго">Танго</option>
                                <option value="Хип-хоп">Хип-хоп</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="message" className="mb-2">Порака*</label>
                            <textarea className="form-control" rows="5" id="message" name="message" ></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-4 d-flex justify-content-center">
                            <button type="submit" className="customLink text-white d-flex align-items-center"
                                    disabled={loading}>{loading ? "Се испраќа..." : "Испратете порака"} <img
                                src={`${process.env.PUBLIC_URL}/images/btn-arrow.png`} alt="instagram-logo"
                                className="h-75 ms-3"/></button>
                        </div>
                    </div>
                    {statusMessage && (
                        <div className={`fade-message text-white text-center mt-3 p-2 rounded ${statusMessage.type}`} style={{background: "#2DA549"}}>
                            <h3>{statusMessage.text}</h3>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}