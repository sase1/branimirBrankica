import React from "react";
import "./Schedule.css"
import ContactForm from "./ContactForm";

export default function Schedule() {
    return (
        <>
        <div className="container-fluid schedule">
            <div className="row">
                <div className="col-lg-12 text-center text-white my-5 p-0">
                    <img
                        src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-letter-b-logo-png-image_6059146.jpg"
                        alt="logo" style={{height: '80px'}} className="mb-4"/>
                    <h2 className="mb-5 mt-2">Распоред на часови</h2>
                    <div className="table-responsive">
                    <table className="table-bordered text-start w-100">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Пон.</th>
                            <th>Вто.</th>
                            <th>Сре.</th>
                            <th>Чет.</th>
                            <th>Пет.</th>
                            <th>Саб.</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>18.00 - 19.00</td>
                            <td>Regeton <span>Ime Prezime</span></td>
                            <td>Regeton <span>Ime Prezime</span></td>
                            <td>Regeton <span>Ime Prezime</span></td>
                            <td>Regeton <span>Ime Prezime</span></td>
                            <td>Regeton <span>Ime Prezime</span></td>
                            <td>Regeton <span>Ime Prezime</span></td>
                        </tr>
                        <tr>
                            <td>19.00 - 20.00</td>
                            <td>Regeton <span>Ime Prezime</span></td>
                            <td>Regeton <span>Ime Prezime</span></td>
                            <td>Regeton <span>Ime Prezime</span></td>
                            <td>Regeton <span>Ime Prezime</span></td>
                            <td>Regeton <span>Ime Prezime</span></td>
                            <td>Regeton <span>Ime Prezime</span></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    <div className="container">
        <ContactForm title="Персонални часови"
                     description1="Заинтересирани сте за часови со персонален инструктор?"
                     description2="Сакате целосно индивидуално внимание или приватност?&nbsp; Јавете
                                 ни се или напишете ни порака и ќе ви одговориме во најбрз можен рок."/>
    </div>
</>
)
}