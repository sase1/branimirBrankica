import PageHeader from "../components/PageHeader";
import {Link} from "react-router-dom";
import "./Contact.css"
import "../components/CustomLink.css"
import emailjs from '@emailjs/browser';
import {useRef} from "react";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const name = form.current.name.value.trim();
        const phone = form.current.phone.value.trim();
        const email = form.current.email.value.trim();
        const message = form.current.message.value.trim();

        if (!name || !phone || !email || !message) {
            alert("Сите полиња се задолжителни.");
            return;
        }

        emailjs.sendForm(
            'service_bd0qj1k',
            'template_bm4ich4',
            form.current,
            '0ZU5yMG5XaAYPiiMC'
        ).then(
            (result) => {
                console.log('Success:', result.text);
                alert('Пораката е успешно испратена!');
                form.current.reset();
            },
            (error) => {
                console.error('Error:', error.text);
                alert('Настана грешка. Обидете се повторно.');
            }
        );
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader title="Контакт"/>
                    </div>
                </div>

                <div className="row form">
                    <div className="col-lg-6">
                        <div
                            className="d-flex justify-content-center align-items-center ps-1 ps-lg-5 text-white text-center text-lg-start">
                            <div className="textContent mb-md-5">
                                <img
                                    src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-letter-b-logo-png-image_6059146.jpg"
                                    alt="logo" style={{height: '80px'}} className="mb-0 mb-md-2"/>
                                <h2 className="title">Напишете ни порака </h2>
                                <p className="description m-0">
                                    Заинтересирани сте да започнете со танц или спорт?
                                </p>
                                <p className="description m-0">
                                   Напишете ни порака и ќе добиете одговор во најбрз можен рок.
                                </p>
                                <Link className="nav-link mt-4" to="tel:+38971968582">+389 71 968 582</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 pe-md-4">
                                    <input type="text" className="form-control ps-0" placeholder="Име и Презиме* "
                                           name="name" required />
                                </div>
                                <div className="col-lg-6 col-md-6 mt-md-0 mt-5">
                                    <input type="number" className="form-control ps-0" placeholder="Телефонски број*"
                                           name="phone" required />
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col">
                                    <input type="text" className="form-control ps-0" placeholder="E-mail адреса*"
                                           name="email" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="message" className="mb-2">Порака*</label>
                                    <textarea className="form-control" rows="5" id="message" name="message" required ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mt-4 d-flex justify-content-center">
                                    <button type="submit" className="customLink text-white">Испратете порака</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container-fluid map">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.1073047033053!2d21.4121346!3d41.9928328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415e33a78561d%3A0x3ce497e6cad8cc21!2sElementary%20School%20%22Kiro%20Gligorov%22!5e0!3m2!1sen!2smk!4v1654963745651!5m2!1sen!2smk"
                                width="100%"
                                height="650"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}