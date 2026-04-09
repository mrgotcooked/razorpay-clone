import logo from "../Images/logo.svg"
import India from "../Images/india-flag.svg"
import arrow from "../Images/arrow-right-line.svg"
import Right from "../Components/Right.jsx"
import { Menu } from "lucide-react";
export default function Nav() {
  return (
    <nav className="bg-deepBlue ">
      <div className="relative max-w-[1080px] mx-auto flex items-center justify-between">
        <a className="cursor-pointer py-7 pr-7" href="/">
            <img src={logo} alt="logo" width={125} height={30} />
        </a>
        <ul className="flex gap-6 hidden lg:flex">
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                <a href="#">Payments</a>
                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                <a href="#">Banking</a>
                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li>  
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                <a href="#">Corporate Card</a>
            </li>
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                <a href="#">Payroll</a>
            </li>  
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                <a href="#">Resources</a>
                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                <a href="#">Support</a>
                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li> 
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                <a href="#">Pricing</a>
                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li> 
        </ul>
        <div className="flex gap-3 ml-3 items-center">
            <div className="block lg:hidden text-white text-2xl cursor-pointer">
             <Menu />
            </div>
            <img src={India} alt="India" width={28} height={20} className="hidden lg:block"/>
            <button className="py-3 px-5 font-mullish text-white border border-lightBlue rounded text-sm font-bold">Log in</button>
            <button className="flex py-3 px-4 font-mullish bg-white text-lightBlue300 font-bold transition-all duration-200 rounded hover:text-lightBlue500 "> Sign Up &nbsp; <Right/> </button>
        </div>
      </div>
    </nav>
  );
}