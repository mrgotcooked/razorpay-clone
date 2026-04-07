
export default function BlueFeatureCard({ title, description, icon }) {
  return (
    <div className="relative p-6 rounded-md hover:shadow-xl transition-all duration-300 group overflow-hidden ">
      
      <div className="w-12 h-12 bg-lightBlue rounded-full flex items-center justify-center mb-4">
        <img src={icon} alt="" className="w-10 h-10 z-30" />
      </div>

      <h3 className="font-mullish font-bold text-lg mb-2 text-white">{title}</h3>

      <p className="text-grayText mb-4 text-white">{description}</p>

    </div>
  );
}