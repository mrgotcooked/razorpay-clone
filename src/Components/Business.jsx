import flame1 from "../Images/x-flame-1.png"
import flame2 from "../Images/x-flame-2.png"
import { RiCheckLine, RiArrowRightSLine } from "react-icons/ri";

import RazorPayX from "../Images/razorpayX.svg";
import banking from "../Images/buisness-banking.png"
import Right from "./Right";
import currentAccountIcon from "../Images/current-icon.svg";
import capitalCreditIcon from "../Images/capital-credit-icon.svg";
import payoutsIcon from "../Images/payouts-icon.svg";
import DarkFeatureCard from "./DarkFeatureCard";
export default function Business() {
    const businessFeatures = [
        {
            title: "Current Account",
            description:
                "Current accounts for fast-growing businesses, supported by the best-in-class technology",
            icon: currentAccountIcon,
        },
        {
            title: "Capital & Credit",
            description:
                "Instant additional cash and corporate cards designed for growing businesses",
            icon: capitalCreditIcon,
        },
        {
            title: "Payouts",
            description:
                "Make simple, reliable & secure payouts to bank accounts, UPI IDs or wallets",
            icon: payoutsIcon,
        },
    ];
    return (
        // Section container
        <section style={{ backgroundImage: "url('/feature-section-2BG.svg')" }} className="bg-no-repeat bg-cover pt-[16rem] pb-[500px] mt-14" >
            <div className="w-10/12 max-w-[1080px]  mx-auto relative">
                <h2 className="font-mullish text-center text-2xl leading-[1.2] font-extrabold text-white">Explore RazorPay Business Banking</h2>
                <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-16"></div>

                {/* Main Feature Box */}
                <div className="w-full min-h-[440px] flex relative">
                    <img src={flame1} alt="" width={200}
                        loading="lazy" className="absolute -top-[142px] -left-[140px]" />
                    <img src={flame2} alt="" width={270}
                        loading="lazy" className="absolute top-[150px] -right-[180px]" />

                    {/* Content Box */}

                    <div className="w-full flex rounded-md relative p-10 py-12 min-h-[520px] border-2 border-[#252941] overflow-hidden hover:shadow-2xl transition-all duration-300 bg-[#181c2e]">

                        {/* Left Content */}
                        <div className="flex flex-col justify-between w-full">

                            {/* Subheading */}
                            <h3 className="font-mullish text-[28px] leading-10 font-bold max-w-[500px] text-white">
                                Manage your company's finances with &nbsp;
                                <img src={RazorPayX} loading="lazy" width={168} height={32} className="inline" />
                                <span className="text-greenLight"> Business Banking</span>
                            </h3>

                            {/* Features List */}
                            <ul className="space-y-2">
                                <li className="font-mullish flex items-center gap-2 text-white">
                                    <RiCheckLine className="text-greenLight text-2xl" />
                                    <span>Open a fully digital current account</span>
                                </li>

                                <li className="font-mullish flex items-center gap-2 text-white">
                                    <RiCheckLine className="text-greenLight text-2xl" />
                                    <span>Automate payables & compliment payments</span>
                                </li>

                                <li className="font-mullish flex items-center gap-2 text-white">
                                    <RiCheckLine className="text-greenLight text-2xl" />
                                    <span>Simplify and track spends with Corporate cards</span>
                                </li>

                                <li className="font-mullish flex items-center gap-2 text-white">
                                    <RiCheckLine className="text-greenLight text-2xl" />
                                    <span>View financial insights at a glance</span>
                                </li>

                            </ul>

                            {/* Buttons */}
                            <div className="flex flex-row items-center gap-4 mt-4">

                                {/* Sign Up Button */}
                                <button className="flex items-center bg-lightBlue text-white rounded font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 px-6 py-3 relative">
                                    <span className="mr-[50px]">Sign Up &nbsp;</span>
                                    <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex items-center justify-center rounded"><svg
                                        className="w-6 h-6 -skew-x-[20deg]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                                    </svg></div>
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
                            src={banking}
                            alt="payment"
                            className="absolute max-w-[600px] right-0 bottom-0"
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-[1080px] mx-auto mt-16">
                {businessFeatures.map((features, idx) => {
                    return <DarkFeatureCard title={features.title} description={features.description} icon={features.icon} key={idx}/>
                })}
            </div>

            <div className="max-w-[1080px] border border-[#40424f] p-7 bg-[#181c2e] flex mx-auto items-center justify-center gap-7 mt-16 rounded">
                <p className="font-mullish text-white text-lg">Check out the live demo to lear how RazorpayX works. <span className="font-bold">No sign-up required!</span></p>
                <button className="flex items-center bg-lightBlue text-white rounded font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 px-6 py-3 relative">
                    <span className="mr-[50px]">Check out the Demo &nbsp;</span>
                    <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex items-center justify-center rounded"><svg
                        className="w-6 h-6 -skew-x-[20deg]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg></div>
                </button>
            </div>

        </section>
    );
}