import {Link} from "react-router-dom";
import {useRef} from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm({ title, description1, description2 }) {
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
        <div className="row form">
            <div className="col-lg-6">
                <div
                    className="d-flex justify-content-center align-items-center ps-1 ps-lg-5 text-white text-center text-lg-start">
                    <div className="textContent mb-md-5">
                        <img
                            src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-letter-b-logo-png-image_6059146.jpg"
                            alt="logo" style={{height: '80px'}} className="mb-0 mb-md-2"/>
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
                                   name="name" required/>
                        </div>
                        <div className="col-lg-6 col-md-6 mt-md-0 mt-5">
                            <input type="number" className="form-control ps-0" placeholder="Телефонски број*"
                                   name="phone" required/>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <input type="text" className="form-control ps-0" placeholder="E-mail адреса*"
                                   name="email" required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="message" className="mb-2">Порака*</label>
                            <textarea className="form-control" rows="5" id="message" name="message" required></textarea>
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
    )
}