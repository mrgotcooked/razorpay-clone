import dotted from "../Images/feature-section1-dottedrows.png";
import test from "../Images/testimonial.jpg";
import quotes from "../Images/quotes.svg";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {  RiArrowRightSLine } from "react-icons/ri";

import fake from "../Images/fake-company-logo.png"
export default function Expert() {
    return (
        <section className="relative">
            <div className="w-11/12 max-w-[1300px] mx-auto relative py-20">
                <img src={dotted} width={200} className="absolute top-[8rem] left-[2rem] -z-10" />
                <h2 className="font-mullish font-bold text-2xl text-deepBlueHead  text-center">An Experience <br /> people love to talk about</h2>
                <div className="w-6 h-1 mx-auto bg-greenLight my-4"></div>
                {/* //leftButton */}
                <button className="w-[100px] h-[100px] rounded-full bg-[#f4f8ff] absolute left-0 top-1/2 flex justify-center items-center">
                    <div className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply">
                        <ChevronLeft className="w-6 h-6 text-gray-400" />
                    </div>
                </button>

                <button className="w-[100px] h-[100px] rounded-full bg-[#f4f8ff] absolute right-0 top-1/2 flex justify-center items-center">
                    <div className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply">
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                    </div>
                </button>
                {/* Main Content  */}
                <div className="flex flex-col lg:flex-row max-w-[960px] items-center mx-auto my-20 space-x-[10rem]">
                    <img src={test} width={320} height={320} className="rounded-xl" alt="" />
                    <div className="max-w-[400px] flex flex-col ">
                        <img src={quotes} width={35} height={40} className="mb-2 xl:order-1"  loading="lazy"/>
                        <p className="font-mullish text-3xl font-extralight xl:order-1">Readymade Closed Wallet Solution For Quick Refunds</p>
                        <a href="#" className="text-grayText italic underline xl:order-1">Learn More</a>
                        <h3 className="font-mullish font-extrabold text-2xl -order-1 xl:order-1">Lorem Ipsum</h3>
                        <p className="font-mullish font-medium xl:order-1">CEO,XYZ Engineering Company</p>
                        <img src={fake} width={80} height={40 } alt="" />
                    </div>
                </div>
                <div className="flex flex-row mx-auto space-x-2 justify-center">
                    <div className="h-[10px] w-[10px] rounded-full bg-gray-300"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-lightBlue300"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-gray-300"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-gray-300"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-gray-300"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-gray-300"></div>
                    
                </div>
            </div>
        </section>
    );
}