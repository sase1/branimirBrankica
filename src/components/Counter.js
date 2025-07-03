import "./Counter.css"
export default function Counter() {
    return (
        <div className="col-md-10 offset-md-1 counter">
            <div className="row">
                <div className="col-md-3 text-center">
                    <h2 className="text-warning">50+</h2>
                    <p className="text-white">Златни Медали</p>
                </div>
                <div className="col-md-3 text-center">
                    <h2 className="text-warning">20+</h2>
                    <p className="text-white">Години Искуство</p>
                </div>
                <div className="col-md-3 text-center">
                    <h2 className="text-warning">75+</h2>
                    <p className="text-white">Членови</p>
                </div>
                <div className="col-md-3 text-center">
                    <h2 className="text-warning">15+</h2>
                    <p className="text-white">Различни Вештини</p>
                </div>
            </div>
        </div>
    )
}