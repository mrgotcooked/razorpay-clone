import hero from "../Images/hero-illustration.jpg"
import heroShape from "../Images/hero-shape.svg"
export default function Hero() {
  return (
    <section className="relative bg-deepBlue ">
        <div className="flex lg:flex-row flex-col w-10/12 justify-between items-center mx-auto max-w-270">
            <div className="space-y-8">
                <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-white">Power your finance, grow your busines</h1>
                <div className="w-6 h-1 bg-greenLight"></div>
                <p className="font-mullish text-[18px] leading-7 text-white opacity-70">
                    Accept payments from customers. Automate payouts to vendors &
                    employees. Never run out of working capital.
                </p>
                <button className="bg-lightBlue text-white rounded font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 px-3 py-3">Sign Up Now</button>
            </div>
            <img src={hero} width={680}/>
        </div>
        <div className="w-[101%] absolute left-0 right-0 flex">
            <img src={heroShape} className="w-full object-fill" />
        </div>
    </section>
  );
}