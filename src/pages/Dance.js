import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";
import CarouselCards from "../components/CarouselCards";

export default function Dance() {

    const danceCards = [
        {
            id: 1,
            title: "Салса",
            image: "https://www.danceflavors.com/wp-content/uploads/2022/09/tango-pair-dancers-dance-in-ballroom-2022-09-07-16-01-27-utc-scaled.jpg"
        },
        {
            id: 2,
            title: "Танго",
            image: "https://cdn.britannica.com/68/92668-050-1BED9B3B/Burundians-dance-Bujumbura.jpg"
        },
        {
            id: 3,
            title: "Хип Хоп",
            image: "https://www.danceflavors.com/wp-content/uploads/2022/09/tango-pair-dancers-dance-in-ballroom-2022-09-07-16-01-27-utc-scaled.jpg"
        },
        {
            id: 4,
            title: "Балет",
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
        },
        {
            id: 5,
            title: "Џез",
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
        }
    ];

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader title="Танц"/>
                    </div>
                </div>
            </div>
            <CarouselCards cards={danceCards}/>
            <div className="container my-5">
                <div className="row">
                    <ContactForm title="Персонални часови"
                                 description1="Заинтересирани сте за часови со персонален инструктор?"
                                 description2="Сакате целосно индивидуално внимание или приватност?&nbsp; Јавете
                                 ни се или напишете ни порака и ќе ви одговориме во најбрз можен рок."/>
                </div>
            </div>
        </>
    )
}