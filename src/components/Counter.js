import "./Counter.css"
import CountUp from "react-countup";

export default function Counter() {
    return (
        <div className="col-lg-10 offset-lg-1 counter">
            <div className="row">
                <div className="text-center mb-5">
                    <h3 className="text-white display-5">
                        Заедница со <br/> 20 години континуиран раст.
                    </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-6 text-center">
                    <h2 className="first"><CountUp end={1} duration={5} start={0} enableScrollSpy
                                                   scrollSpyDelay={600}/></h2>
                    <p className="text-white">Членарина</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <h2 className="second"><CountUp end={15} duration={5} start={0} enableScrollSpy
                                                    scrollSpyDelay={600}/></h2>
                    <p className="text-white">Различни дисциплини</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <h2 className="third"><CountUp end={3} duration={5} start={0} enableScrollSpy
                                                   scrollSpyDelay={600}/></h2>
                    <p className="text-white">Сали за тренинг</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <h2 className="forth"><CountUp end={100} duration={5} start={0} enableScrollSpy
                                                   scrollSpyDelay={600}/>+</h2>
                    <p className="text-white">Активни Членови</p>
                </div>
            </div>

            <div className="row">
                <div className="text-center mt-5">
                    <img src={`${process.env.PUBLIC_URL}/images/colab.png`} alt="image-content" />
                </div>
            </div>

        </div>
    )
}