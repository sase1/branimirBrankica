import "./HeaderMovingLines.css"

export default function HeaderMovingLines({ text }) {
    return (
        <div className="row text-center movingHeader">
            <div className="col-lg-12">
                <div className="marquee">
                    <h2>{text}!</h2>
                </div>
            </div>
        </div>
    )
}