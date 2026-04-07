import company from "../Images/comanies.png";

export default function Join() {
  return (
    <>
      <style>
        {`
        .companiesList{
            animation: 10s infinite linear moveCompanies;
        }
         @keyframes moveCompanies{
            0%{
                top:0;
            }
            100%{
                top:-50%;
            }
         }
        `}
      </style>

      <section className="bg-[#f4f8ff] relative pt-40 pb-12 -mt-[200px] -z-10">
        <div className="w-10/12 max-w-[1080px] mx-auto relative flex">
          
          {/* left part */}
          <div className="flex flex-col justify-center max-w-[calc(100%-500px)]">
            <h2 className="font-mullish font-bold text-2xl text-deepBlueHead">
              Join the 50,00,000+ businesses using Razorpay
            </h2>

            <div className="w-6 h-1 bg-greenLight mt-4 mb-6"></div>

            <p className="font-mullish mb-4 opacity-80">
              We make it easier for you to focus on building great products while we work on simplifying your payments.
            </p>

            <p className="font-mullish opacity-80">
              Focus on your business while we handle the complexities of payments for you.
            </p>
          </div>

          {/* right part */}
          <div className="w-[500px] h-[500px] relative overflow-hidden">
            <div style={{background:"linear-gradient(180deg,#f4f8ff,#fff0)"}} className="absolute w-full h-[150px] top-0 z-50"></div>
            <img
              src={company}
              className="absolute object-cover h-auto  companiesList"
              width={500}
            />
            <img
              src={company}
              className="absolute object-cover h-auto  companiesList"
              width={500}
            />
            <div style={{background:"linear-gradient(0deg,#f4f8ff,#fff0)"}}  className="absolute w-full h-[150px] bottom-0"></div>
          </div>
        </div>
      </section>
    </>
  );
}