import img from "../Images/ctaimg.svg";
import { MoveRight } from "lucide-react";
import { RiCheckLine } from "react-icons/ri";

export default function Charge() {
    return (
        // FIX 1: Removed bg-cover. Added backgroundSize: "100% 100%" to force the slants to be visible. Added py-24 for vertical height.
        <section 
            style={{ 
                backgroundImage: "url('/CTABg.svg')",
                backgroundSize: "100% 100%" 
            }} 
            className="bg-no-repeat w-full relative mb-10 py-24" 
        >
            {/* main content */}
            <div className="w-11/12 max-w-[1080px] relative flex flex-row items-center justify-between space-x-20 mx-auto">
                
                {/* left content */}
                <div className="flex flex-col gap-6 max-w-[600px]">
                    <h2 className="font-mullish text-2xl font-bold text-white">
                        Supercharge your business with Razorpay
                    </h2>
                    <div className="w-6 h-1 bg-green-400"></div>
                    <p className="font-mullish text-white">
                        Sign up now to experience the future of payments and offer <br /> 
                        your customers the best checkout experience.
                    </p>
                    
                    {/* FIX 2: Added flex-wrap and adjusted gap so it wraps exactly like the target image */}
                    <ul className="flex flex-row flex-wrap gap-x-6 gap-y-3 text-white">
                        <li className="font-mullish text-white flex items-center gap-2">
                            <RiCheckLine className="text-green-400"/> <span>Quick OnBoarding</span>
                        </li>
                        <li className="font-mullish text-white flex items-center gap-2">
                            <RiCheckLine className="text-green-400"/> <span>Access to entire product suite</span>
                        </li>
                        <li className="font-mullish text-white flex items-center gap-2">
                            <RiCheckLine className="text-green-400"/> <span>API access</span>
                        </li>
                        <li className="font-mullish text-white flex items-center gap-2">
                            <RiCheckLine className="text-green-400"/> <span>24x7 support</span>
                        </li>
                    </ul>
                    
                    <button className="bg-white w-[130px] text-sm font-bold text-blue-500 rounded-sm hover:text-blue-600 hover:bg-gray-100 transition-all duration-200 py-3 px-4 flex items-center gap-3">
                        Sign Up <MoveRight size={18}/>
                    </button>
                </div>
                
                {/* right content */}
                <img src={img} alt="CTA Illustration" className=" hidden lg:block w-full max-w-[300px] " />
            </div>
        </section>
    );
}