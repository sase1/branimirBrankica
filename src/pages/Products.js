import PageHeader from "../components/PageHeader";

export default function Products() {
    return (
        <>
            <PageHeader title="Продукти"/>
            <div className="container aerobicContent">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center text-white">
                        <h1>Продукти</h1>
                        <p className="my-5">Proin iaculis eros at dapibus vehicula. Etiam quis semper augue, nec dictum
                            dui. Duis vitae vulputate tortor. Vestibulum at elit sed nisi convallis aliquam a non nulla.
                            Aenean at eros vitae velit volutpat hendrerit. Pellentesque bibendum ornare magna ac
                            pulvinar. Nulla vel ipsum consequat dolor cursus fringilla non vel massa.</p>
                    </div>
                </div>
            </div>
            {/*<div className="container-fluid">*/}
            {/*    <HeaderMovingLines text={'Растеме заедно / Растеме заедно /'} strokeColor="#6F9D80"/>*/}
            {/*</div>*/}
            <div className="container">
                <div className="row content">
                    <div className="col-lg-6 text-white text-center text-lg-start mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Proin iaculis</h2>
                        <p>Proin iaculis eros at dapibus vehicula. Etiam quis semper augue, nec dictum dui. Duis vitae
                            vulputate tortor. Vestibulum at elit sed nisi convallis aliquam a non nulla. Aenean at eros
                            vitae velit volutpat hendrerit.
                        </p>
                        <p> Pellentesque bibendum ornare magna ac pulvinar. Nulla vel
                            ipsum consequat dolor cursus fringilla non vel massa.</p>
                    </div>
                    <div className="col-lg-5 offset-md-1 offset-0 align-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>
                </div>
            </div>

            {/*<div className="container-fluid">*/}
            {/*    <HeaderMovingLines text={'Растеме силни / Растеме силни'} strokeColor="#FB8B01"/>*/}
            {/*</div>*/}

            <div className="container">
                <div className="row content">
                    <div className="col-lg-5 align-content-center text-md-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/workout/brankica.png`}
                            alt="dance" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 offset-lg-1 text-white text-center text-lg-end mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/content-logo.png`}
                             alt="logo"/>
                        <h2 className="my-4">Proin iaculis</h2>
                        <p>Proin iaculis eros at dapibus vehicula. Etiam quis semper augue, nec dictum
                            dui. Duis vitae vulputate tortor. Vestibulum at elit sed nisi convallis aliquam a non nulla.
                            Aenean at eros vitae velit volutpat hendrerit. Pellentesque bibendum ornare magna ac
                            pulvinar. Nulla vel ipsum consequat dolor cursus fringilla non vel massa.
                        </p>
                    </div>
                </div>
            </div>

            {/*<div className="container-fluid">*/}
            {/*    <HeaderMovingLines text={'Персонални тренинзи / Персонални тренинзи /'} strokeColor="#6F9D80"/>*/}
            {/*</div>*/}

            {/*<div className="container">*/}
            {/*    <ContactForm title="Персонални тренинзи"*/}
            {/*                 description1="Заинтересирани сте за часови со персонален инструктор?"*/}
            {/*                 description2="Сакате целосно индивидуално внимание или приватност?&nbsp; Јавете*/}
            {/*                     ни се или напишете ни порака и ќе ви одговориме во најбрз можен рок."/>*/}
            {/*</div>*/}
        </>
    )
}