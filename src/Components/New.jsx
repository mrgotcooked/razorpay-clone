import dotted from "../Images/feature-section1-dottedrows.png";
import corporateIcon from "../Images/Xicon.svg";
import upiIcon from "../Images/autopay-icon.svg";
import magicIcon from "../Images/magic-checkout.svg";
import paymentButtonIcon from "../Images/payment-button.svg";
import instant from "../Images/instant-settlement-icon.svg";
import NewCard from "./NewCard";
import bg1 from "../Images/card-bg1.svg";
import bg2 from "../Images/card-bg2.svg";
import bg3 from "../Images/card-bg3.svg";
import bg4 from "../Images/card-bg4.svg";
import bg5 from "../Images/card-bg5.svg";
import bgHover1 from "../Images/instant-settlement-bghover.svg"
import bgHover2 from "../Images/upi-autopay-hoverbg.svg"
import bgHover3 from "../Images/magic-checkout-hoverbg.svg"
import bgHover4 from "../Images/payment-button-hoverbg.svg"
import bgHover5 from "../Images/instantsettlement-hoverbg.svg"
export default function New(){
    const products = [
  {
    title: "Corporate Cards",
    description:
      "Simplify your recurring, international and team expenses with savings on every spend. Save up to 10 lacs every month.",
    icon: corporateIcon,
    bgImage: bg1,
    bgHover:bgHover1,
  },
  {
    title: "UPI AutoPay",
    description:
      "Allow customers to set up recurring payments using UPI Apps.",
    icon: upiIcon,
    bgImage: bg2,
    bgHover:bgHover2,
  },
  {
    title: "Magic Checkout",
    description:
      "Improve your order conversion rates & reduce return-to-origins. Boost your business by 20%",
    icon: magicIcon,
    bgImage: bg3,
    bgHover:bgHover3,
  },
  {
    title: "Payment Button",
    description:
      "Accept payments on your website, in less than 5 minutes. No developer needed.",
    icon: paymentButtonIcon,
    bgImage: bg4,
    bgHover:bgHover4,
  },
  {
    title: "Payment Button",
    description:
      "Accept payments on your website, in less than 5 minutes. No developer needed.",
    icon: instant,
    bgImage: bg5,
    bgHover:bgHover5,
  },
];
    return (
        <section className="bg-white relative">
           <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
                <img src={dotted} alt=""  className="absolute w-[233px] left-[300px] -top-[6rem] z-[10]"/>
                <img src={dotted} alt="" className="absolute w-[233px] -top-[6rem] -right-[3.5rem] z-[10]"/>
            <div className="w-full grid grid-cols-3 gap-4 relative z-[100]">
                {/* item1 */}
                <div className="relative items-center ">
                    <h2 className="text-deepBlueHead font-mullish font-bold text-4xl leading-[3.375rem]"> New in the <br />
                        <span className="text-lightBlue500">Razorpay</span> <br />
                        Product suite
                    </h2>
                </div>
                {products.map((features,idx)=>{
                    return <NewCard title={features.title} description={features.description} icon={features.icon} key={idx} bgImage={features.bgImage} hoverBgImage={features.bgHover}  />
                })}
            </div>
            </div> 
        </section>
    );
}