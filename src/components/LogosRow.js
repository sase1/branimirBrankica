import "./LogosRow.css"

export default function LogosRow() {
    const logos = [
        "/images/clients-row/item.png",
        "/images/clients-row/item-1.png",
        "/images/clients-row/item-2.png",
        "/images/clients-row/item-3.png",
        "/images/clients-row/item-4.png",
        "/images/clients-row/item.png",
        "/images/clients-row/item-1.png",
        "/images/clients-row/item-2.png",
        "/images/clients-row/item-3.png",
        "/images/clients-row/item-4.png"
    ];

    return (
        <div className="logos-row-wrapper">
            <div className="logos-row">
                {logos.concat(logos).map((src, idx) => (
                    <div className="logo-item" key={idx}>
                        <img src={`${process.env.PUBLIC_URL}${src}`} alt="client logo" className="img-fluid" />
                    </div>
                ))}
            </div>
        </div>
    );
}
