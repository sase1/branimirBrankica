import "./HeaderMovingLines.css"

export default function HeaderMovingLines({text, strokeColor }) {
    return (
        <div className="row text-center movingHeader">
            <div className="col-lg-12">
                <div className="marquee">
                    <div className="marquee-content">
                        <h2
                            style={{
                                WebkitTextStroke: `1px ${strokeColor}`,
                                color: "transparent",
                            }}
                        >
                            {text}
                        </h2>
                        <h2
                            style={{
                                WebkitTextStroke: `1px ${strokeColor}`,
                                color: "transparent",
                            }}
                        >
                            {text}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}