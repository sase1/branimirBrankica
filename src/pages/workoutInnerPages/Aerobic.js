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
                        <p className="my-5">Зборот аеробик во суштина значи „со кислород“ или „во присуство на кислород“, со тоа што телото користи кислород да ги мобилизира складираните масти во енергија.
                            Аеробик е секоја активност што ги користи големите мускулни групи, се одвива одреден временски период и е ритмички по природа.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 videoDance">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>


                <div className="row content">
                    <div className="col-lg-5 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Аеробик</h2>
                        <p>Аеробичните вежби се карактеризираат со тоа што при нивното вежбање се активираат големите групи мускули, ритмички во период од неколку минути и подолго и за тој период дишењето е интензивно.
                            Во овој момент на телото му е потребно да ја метаболизира складираната енергија и да ја насочи кон крвотокот за да се овозможи продолжување со физичката активност.</p>
                    </div>
                    <div className="col-lg-6 offset-lg-1 align-content-center">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/02/93/60/93/1000_F_293609385_Tjs464LNP74T2KCniddDFuu2tj3I2lvL.jpg"
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            {/*<div className="container-fluid my-5">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-lg-3 imageContent imageContent1"></div>*/}
            {/*        <div className="col-lg-3 imageContent imageContent2"></div>*/}
            {/*        <div className="col-lg-3 imageContent imageContent3"></div>*/}
            {/*        <div className="col-lg-3 imageContent imageContent4"></div>*/}
            {/*        <div className="col-lg-3 imageContent imageContent5"></div>*/}
            {/*        <div className="col-lg-3 imageContent imageContent6"></div>*/}
            {/*        <div className="col-lg-3 imageContent imageContent7"></div>*/}
            {/*        <div className="col-lg-3 imageContent imageContent8"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <Schedule/>
        </>
    )
}