import "./Counter.css"
import CountUp from "react-countup";

export default function Counter() {
    return (
        <div className="col-md-10 offset-md-1 counter">
            <div className="row">
                <div className="col-md-3 text-center">
                    <h2 className="text-warning"> <CountUp end={50} duration={5} start={0} enableScrollSpy scrollSpyDelay={800} />+</h2>
                    <p className="text-white">Златни Медали</p>
                </div>
                <div className="col-md-3 text-center">
                    <h2 className="text-warning"> <CountUp end={20} duration={5} start={0} enableScrollSpy scrollSpyDelay={800} />+</h2>
                    <p className="text-white">Години Искуство</p>
                </div>
                <div className="col-md-3 text-center">
                    <h2 className="text-warning"> <CountUp end={75} duration={5} start={0} enableScrollSpy scrollSpyDelay={800} />+</h2>
                    <p className="text-white">Членови</p>
                </div>
                <div className="col-md-3 text-center">
                    <h2 className="text-warning"> <CountUp end={15} duration={5} start={0} enableScrollSpy scrollSpyDelay={800} />+</h2>
                    <p className="text-white">Различни Вештини</p>
                </div>
            </div>
        </div>
    )
}