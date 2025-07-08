import PageHeader from "../../components/PageHeader";
import Schedule from "../../components/Schedule";
import "./Aerobic.css"

export default function Aerobic() {
    return (
        <>
            <PageHeader title="Аеробик"/>

            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center text-white">
                        <h1>Што е Аеробик?</h1>
                        <p className="my-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-3 imageContent imageContent1"></div>
                    <div className="col-lg-3 imageContent imageContent2"></div>
                    <div className="col-lg-3 imageContent imageContent3"></div>
                    <div className="col-lg-3 imageContent imageContent4"></div>
                    <div className="col-lg-3 imageContent imageContent5"></div>
                    <div className="col-lg-3 imageContent imageContent6"></div>
                    <div className="col-lg-3 imageContent imageContent7"></div>
                    <div className="col-lg-3 imageContent imageContent8"></div>
                </div>
            </div>

            <Schedule/>
        </>
    )
}