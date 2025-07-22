import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";
import CarouselCards from "../components/CarouselCards";

export default function Dance() {

    const danceCards = [
        {
            id: 1,
            title: "Латино Танци",
            image: "https://www.danceflavors.com/wp-content/uploads/2022/09/tango-pair-dancers-dance-in-ballroom-2022-09-07-16-01-27-utc-scaled.jpg",
            link: "/танц/латино-танци"
        },
        {
            id: 2,
            title: "Свадбен танц",
            image: "https://cdn.britannica.com/68/92668-050-1BED9B3B/Burundians-dance-Bujumbura.jpg",
            link: "/танц/свадбен-танц"
        },
        {
            id: 3,
            title: "Хип Хоп",
            image: "https://www.danceflavors.com/wp-content/uploads/2022/09/tango-pair-dancers-dance-in-ballroom-2022-09-07-16-01-27-utc-scaled.jpg",
            link: "/танц/хип-хоп"
        },
        {
            id: 4,
            title: "Друштвени танци",
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
            link: "/танц/друштвени-танци"
        }
    ];

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader title="Часови по Танц"/>
                    </div>
                </div>
            </div>
            <CarouselCards cards={danceCards}/>
            <div className="container my-5">
                <ContactForm title="Персонални часови"
                             description1="Заинтересирани сте за часови со персонален инструктор?"
                             description2="Сакате целосно индивидуално внимание или приватност?&nbsp; Јавете
                                 ни се или напишете ни порака и ќе ви одговориме во најбрз можен рок."/>
            </div>
        </>
    )
}