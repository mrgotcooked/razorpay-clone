import { RiCheckLine, RiArrowRightSLine } from "react-icons/ri";
import payment from "../Images/payment-suite.png";
import dotted from "../Images/feature-section1-dottedrows.png";
import Right from "./Right";
import paymentLink from "../Images/payment-link-icon.svg";
import paymentButton from "../Images/payment-button.svg";
import paymentPages from "../Images/payment-pages-icon.svg";
import subscription from "../Images/subscriptions-icon.svg";
import route from "../Images/route-icon.svg";
import smart from "../Images/smart-collect-icon.svg"
import FeatureCard from "./FeatureCard";

export default function Feature() {
  const features = [
  {
    title: "Payment Links",
    description: "Share payment link via an email, SMS, messenger, chatbot etc and get paid immediately",
    icon: paymentLink,
  },
  {
    title: "Payment Pages",
    description: "Take your store online instantly with zero coding. Accept international and domestic payments",
    icon: paymentPages,
  },
  {
    title: "Payment Buttons",
    description: "Create, Copy & Collect with Payment Button. Collect one time or subscription payments & more.",
    icon: paymentButton,
  },
  {
    title: "Subscriptions",
    description: "Subscription plans with automated recurring transactions on various payment modes.",
    icon: subscription,
  },
  {
    title: "Route",
    description: "Split incoming payments automatically to vendor's accounts, manage marketplace money flow...",
    icon: route,
  },
  {
    title: "Smart Collect",
    description: "Automatically reconcile incoming NEFT, RTGS, IMPS, UPI payments using Virtual Accounts & UPI-IDs",
    icon: smart,
  },
];
  return (
    // Section container
    <section className="relative mt-[190px] overflow-hidden ">
      
      {/* Dotted background images */}
      <img
        src={dotted}
        alt=""
        loading="lazy"
        width={233}
        height={167}
        className="absolute -top-32 left-40 inline-block"
      />
      <img
        src={dotted}
        alt=""
        loading="lazy"
        width={233}
        height={167}
        className="absolute top-12 right-0 inline-block rotate-90 -z-10"
      />

      {/* Main container */}
      <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">

        {/* Heading */}
        <h2 className="font-mullish text-center text-2xl leading-[1.2] font-extrabold ">
          Accept Payments with Razorpay Payment Suite
        </h2>

        {/* Green underline */}
        <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>

        {/* Main Feature Box */}
        <div className="w-full bg-white flex rounded-md relative p-10 py-12 min-h-[520px] border-2 overflow-hidden hover:shadow-xl transition-all duration-300">
          
          {/* Left Content */}
          <div className="flex flex-col justify-between w-full">
            
            {/* Subheading */}
            <h3 className="font-mullish text-[28px] leading-10 font-bold max-w-[500px]">
              Supercharge your business with the all-powerful
              <span className="text-lightBlue"> Payment Gateway</span>
            </h3>

            {/* Features List */}
            <ul className="space-y-2">
              <li className="font-mullish flex items-center gap-2">
                <RiCheckLine className="text-greenLight text-2xl" />
                <span>100+ Payment Methods</span>
              </li>

              <li className="font-mullish flex items-center gap-2">
                <RiCheckLine className="text-greenLight text-2xl" />
                <span>Industry Leading Success Rate</span>
              </li>

              <li className="font-mullish flex items-center gap-2">
                <RiCheckLine className="text-greenLight text-2xl" />
                <span>Superior Checkout Experience</span>
              </li>

              <li className="font-mullish flex items-center gap-2">
                <RiCheckLine className="text-greenLight text-2xl" />
                <span>Easy to Integrate</span>
              </li>

              <li className="font-mullish flex items-center gap-2">
                <RiCheckLine className="text-greenLight text-2xl" />
                <span>Instant Settlements from day 1</span>
              </li>

              <li className="font-mullish flex items-center gap-2">
                <RiCheckLine className="text-greenLight text-2xl" />
                <span>In-depth Reporting and Insights</span>
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-row items-center gap-4 mt-4">
              
              {/* Sign Up Button */}
              <button className="flex items-center bg-lightBlue text-white rounded font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 px-6 py-3">
                <span>Sign Up Now</span>
                <Right />
              </button>

              {/* Know More Link */}
              <div className="flex items-center cursor-pointer group">
                <a
                  href="#"
                  className="flex items-center gap-1 font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200 px-2"
                >
                  Know More
                  <RiArrowRightSLine className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <img
            src={payment}
            alt="payment"
            className="absolute max-w-[600px] right-0 bottom-0"
          />
        </div>

        {/* Feature Cards Grid (Bottom Section) */}
        <div className="w-full grid grid-cols-3 gap-4 mt-10 ">
          
         {features.map((feature,idx)=>{
            return <FeatureCard title={feature.title} key={idx} description={feature.description} icon={feature.icon}/>
         })}
         
        </div>

      </div>
    </section>
  );
}