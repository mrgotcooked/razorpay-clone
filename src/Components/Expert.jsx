import dotted from "../Images/feature-section1-dottedrows.png";

export default function Expert() {
    return (
        <section>
            <div>
                <img src={dotted} alt="" />
                <h2>An Experience people love to talk about</h2>
                <div className="w-6 h-1 mx-auto bg-greenLight"></div>
                {/* //leftButton */}

                <button>
                    <div>
                        <i></i>
                    </div>
                </button>
                <button>
                    <div>
                        <i></i>
                    </div>
                </button>
                {/* Main Content  */}
                <div>
                    <img src="" alt="" />
                    <div>
                        <img src="" alt="" />
                        <p>Readymade Closed Wallet Solution For Quick Refunds</p>
                        <a href="">Learn More</a>
                        <h3>Lorem Ipsum</h3>
                        <p>CEO,XYZ Engineering Company</p>
                        <img src="" alt="" />
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    );
}