import { RiArrowRightSLine } from "react-icons/ri";

export default function NewCard({ title, description, icon, bgImage, hoverBgImage }) {
  return (
    <div className="relative p-6 border rounded-md hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white">
      
      {/* 1. Default Background Image (Fades OUT on hover) */}
      <img 
        src={bgImage} 
        alt="" 
        className="absolute inset-0  transition-opacity duration-500 ease-in-out group-hover:opacity-0 " 
      />

      {/* 2. Hover Background Image (Fades IN on hover) */}
      {/* We use hoverBgImage || bgImage as a fallback just in case you forget to pass a hover image to one of the cards */}
      <img 
        src={hoverBgImage || bgImage} 
        alt="" 
        className="absolute inset-0  opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 " 
      />

      {/* Content Layer */}
      <div className="w-12 h-12 bg-lightBlue rounded-full flex items-center justify-center mb-4">
        <img src={icon} alt="" className="w-10 h-10 z-30" />
      </div>

      <h3 className="font-mullish font-bold text-lg mb-2">{title}</h3>

      <p className="text-grayText mb-4">{description}</p>

      <div className="flex items-center text-lightBlue font-bold cursor-pointer">
        Know More
        <RiArrowRightSLine className="ml-1 group-hover:translate-x-1 transition-all duration-200" />
      </div>
    </div>
  );
}