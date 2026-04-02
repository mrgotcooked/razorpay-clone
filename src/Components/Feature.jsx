import payment from "../Images/payment-suite.png"
import dotted from "../Images/feature-section1-dottedrows.png"

export default function Feature() {
  return (
    <section>
        <img src={dotted} alt="" loading="lazy" width={233} height={167}/>
        <img src={dotted} alt="" loading="lazy" width={233} height={167}/>
        <div>
            {/* heading */}
            <h2>Accept Payments with Razorpay payment Suite</h2>
            <div></div>
            {/* content-box */}
            <div>
                {/* left-section */}
                <div>
                    <h3>Supercharge your business with the all-powerful
                        <span class="text-lightBlue">Payment Gateway</span>
                    </h3>

                    <ul>
                        <li>
                            <span>100+ Payment Methods</span>
                        </li>
                        <li>
                            <span> Industry Leading Success Rate </span>
                        </li>
                        <li>
                            <span> Superior Checkout Experience </span>
                        </li>
                        <li>
                            <span> Easy to Integrate </span>
                        </li>
                        <li>
                            <span> Instant Settlements from day 1 </span>
                        </li>
                        <li>
                            <span> In-depth Reporting and Insights </span>
                        </li>
                    </ul>
                    {/* for button and hyperlink */}
                    <div>
                        <button>Sign Up Now</button>
                        {/* hyperlink */}
                        <div>
                            <a href="">Know More</a>
                            <i></i>
                        </div>
                    </div>
                </div>
                <img src={payment} alt="" />
            </div>
        </div>
    </section>
  );
}