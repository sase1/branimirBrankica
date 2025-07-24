import {useEffect, useState} from "react";
import "./Schedule.css";

export default function EditableTable({sheetName}) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const sheetId = "1u3warKBImWh8wiORXBtHfYGPCtjSDL7tJRUhBJDmmv4";
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

        const fetchData = () => {
            fetch(url)
                .then((res) => res.text())
                .then((text) => {
                    const json = JSON.parse(text.substr(47).slice(0, -2));
                    const rows = json.table.rows.map((r) => r.c.map((c) => c?.v || ""));
                    setData(rows);
                    setError(null);
                })
                .catch((err) => {
                    console.error("Error loading sheet data", err);
                    setError("Failed to load data");
                });
        };

        fetchData();
        const interval = setInterval(fetchData, 5 * 60 * 60 * 1000);
        return () => clearInterval(interval);
    }, [sheetName]);

    if (error) return <div>{error}</div>;
    if (data.length === 0) return <div>Loading...</div>;

    const headers = data[0];
    const rows = data.slice(1);

    return (
        <table className="table-bordered text-start w-100">
            <thead>
            <tr>
                {headers.map((header, idx) => (
                    <th key={idx} className="text-white">
                        {header}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {rows.map((row, rIdx) => (
                <tr key={rIdx} className="text-white">
                    {row.map((cell, cIdx) => {
                        const [title, subtitle] = cell.split(",");
                        return (
                            <td key={cIdx}>
                                {title?.trim()}
                                <br/>
                                <span>{subtitle?.trim()}</span>
                            </td>
                        );
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    );
}


//
// import {useEffect, useState} from "react";
// import "./Schedule.css"
//
// export default function EditableTable() {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         const sheetId = "1u3warKBImWh8wiORXBtHfYGPCtjSDL7tJRUhBJDmmv4";
//         const sheetName = "Brance";
//         const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
//
//         const fetchData = () => {
//             fetch(url)
//                 .then((res) => res.text())
//                 .then((text) => {
//                     const json = JSON.parse(text.substr(47).slice(0, -2));
//                     const rows = json.table.rows.map((r) => r.c.map((c) => c?.v || ""));
//                     setData(rows);
//                     setError(null);
//                 })
//                 .catch((err) => {
//                     console.error("Error loading sheet data", err);
//                     setError("Failed to load data");
//                 });
//         };
//
//         fetchData();
//         const interval = setInterval(fetchData, 10 * 60 * 1000);
//         return () => clearInterval(interval);
//     }, []);
//
//     if (error) return <div>{error}</div>;
//     if (data.length === 0) return <div>Loading...</div>;
//
//     const headers = data[0];
//     const rows = data.slice(1);
//
//     return (
//         <div className="schedule">
//
//             <div className="table-responsive">
//
//                 <table className="table-bordered text-start w-100">
//                     <thead>
//                     <tr>
//                         {headers.map((header, idx) => (
//                             <th key={idx} className="text-white">
//                                 {header}
//                             </th>
//                         ))}
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {rows.map((row, rIdx) => (
//                         <tr key={rIdx} className="text-white">
//                             {row.map((cell, cIdx) => {
//                                 const [title, subtitle] = cell.split(',');
//                                 return (
//                                     <td key={cIdx}>
//                                         {title?.trim()}
//                                         <span>{subtitle?.trim()}</span>
//                                     </td>
//                                 );
//                             })}
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//
//
//     );
// }
