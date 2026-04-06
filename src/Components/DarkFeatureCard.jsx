import { RiArrowRightSLine } from "react-icons/ri";
import waves from "../Images/features2-wave.svg"
export default function FeatureCard({ title, description, icon }) {
   
  return (
    <div className="group relative bg-[#181c2e] p-7 rounded-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between border border-[#40424f]">
        <div className="flex justify-between ">
            <h3 className="font-mullish font-bold text-white text-lg">{title}</h3>
            <img src={icon} className="w-10 h-10 bg-lightBlue500 rounded-full " />
        </div>
        <p className="font-mullish text-grayText mt-2">{description}</p>
        <div className="flex justify-between translate-y-2">
          <a className="group text-lightBlue500 flex items-center gap-1 font-bold font-mullish" href="#">Know More <RiArrowRightSLine className="w-5 h-5 group-hover:translate-x-1 transition-all duration-200"/></a>
          <img src={waves} className="opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-3.5" />
        </div>  
    </div>
  );
}