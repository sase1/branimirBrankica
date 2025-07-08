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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d439.58626658999566!2d21.363446809093972!3d42.007271277309464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135413003f4d8f97%3A0x27ad3c50b2843359!2sDSC%20Branimir%20%26%20Brankica!5e1!3m2!1sen!2smk!4v1751958911162!5m2!1sen!2smk"
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