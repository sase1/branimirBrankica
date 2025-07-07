import PageHeader from "../components/PageHeader";
import "./Contact.css"
import "../components/CustomLink.css"
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader title="Контакт"/>
                    </div>
                </div>
                <ContactForm title="Испратете ни порака"
                             description1="Заинтересирани сте да започнете со танц или спорт?"
                             description2="Напишете ни порака и ќе добиете одговор во најбрз можен рок."/>
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