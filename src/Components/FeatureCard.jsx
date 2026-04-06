import { RiArrowRightSLine } from "react-icons/ri";
import waves from "../Images/features-wave.svg"
export default function FeatureCard({ title, description, icon }) {
    console.log("feature Card rendered");
  return (
    <div className="relative bg-white p-5 border rounded-md hover:shadow-lg transition-all duration-200 group ">
      
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-mullish font-bold text-lg">{title}</h3>
        <img src={icon} alt="" className="w-10 h-10 bg-lightBlue rounded-full p-2" />
      </div>

      <p className="font-mullish text-grayText mb-4">
        {description}
      </p>
      <div className="flex justify-between">
         <a
        href="#"
        className="flex items-center gap-1 font-mullish font-bold text-lightBlue500 group"
      >
        Know More
        <RiArrowRightSLine className="w-5 h-5 group-hover:translate-x-1 transition-all duration-200" />
      </a>
      <img src={waves} className="opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2.5"/>
      </div>
     
    </div>
  );
}