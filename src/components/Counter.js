import "./Counter.css"
import CountUp from "react-countup";

export default function Counter() {
    return (
        <div className="col-lg-10 offset-lg-1 counter">
            <div className="row">
                <div className="col-lg-3 col-6 text-center">
                    <h2 className="first"> <CountUp end={50} duration={5} start={0} enableScrollSpy scrollSpyDelay={600} />+</h2>
                    <p className="text-white">Златни Медали</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <h2 className="second"> <CountUp end={20} duration={5} start={0} enableScrollSpy scrollSpyDelay={600} />+</h2>
                    <p className="text-white">Години Искуство</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <h2 className="third"> <CountUp end={75} duration={5} start={0} enableScrollSpy scrollSpyDelay={600} />+</h2>
                    <p className="text-white">Членови</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <h2 className="forth"> <CountUp end={15} duration={5} start={0} enableScrollSpy scrollSpyDelay={600} />+</h2>
                    <p className="text-white">Различни Вештини</p>
                </div>
            </div>
        </div>
    )
}