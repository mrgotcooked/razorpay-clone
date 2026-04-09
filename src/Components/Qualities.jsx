import instantIcon from "../Images/instant-activation-icon.svg";
import integrationIcon from "../Images/easy-integration.svg";
import apiIcon from "../Images/api-driven-icon.svg";
import paymentModesIcon from "../Images/payment-modes.svg";
import pricingIcon from "../Images/simple-pricing.svg";
import supportIcon from "../Images/industry-support-icon.svg";
import reportingIcon from "../Images/dashboard-reporting-icon.svg";
import secureIcon from "../Images/secure-icon.svg";
import BlueFeatureCard from "./BlueFeatureCard";

export const featuresData = [
    {
        title: "Instant Activation",
        description:
            "Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.",
        icon: instantIcon,
    },
    {
        title: "Easy Integration",
        description:
            "With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour.",
        icon: integrationIcon,
    },
    {
        title: "API Driven",
        description:
            "Build your business for scale with our complete API-driven automation that requires zero manual intervention.",
        icon: apiIcon,
    },
    {
        title: "100+ payment modes",
        description:
            "Offer your customers the luxury of all payment modes including Credit/Debit cards, Netbanking, UPI, Wallets etc.",
        icon: paymentModesIcon,
    },
    {
        title: "Simple Pricing",
        description:
            "Our innovative payment solutions with competitive pricing make payments simpler.",
        icon: pricingIcon,
    },
    {
        title: "Best in Industry Support",
        description:
            "Always available email, phone and chat based support to help you in your every step.",
        icon: supportIcon,
    },
    {
        title: "Dashboard Reporting",
        description:
            "Real-time data and insights on your Razorpay Dashboard to make informed business decisions.",
        icon: reportingIcon,
    },
    {
        title: "Secure",
        description:
            "PCI DSS Level 1 compliant solution which removes your burden of regulatory compliance.",
        icon: secureIcon,
    },
];

export default function Qualities() {
    return (
        <section style={{ backgroundImage: "url('/core-features-sectionBg.svg')" }} className="bg-no-repeat bg-cover pt-[26rem] md:pt-[20rem] pb-[180px] mt-14" >
            <div className="w-10/12 max-w-[1080px]  mx-auto relative">
                <h2 className="font-mullish text-center text-2xl leading-[1.2] font-extrabold text-white">Features</h2>
                <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-3 z-30"></div>
                <p className="font-mullish text-center text-xl leading-[1.6] text-white w-[550px] mx-auto">Empower your business with all the right tools to accept online payments and provide the best customer experience</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-[1080px] mx-auto mt-10">
                    {featuresData.map((features, idx) => {
                        return <BlueFeatureCard title={features.title} description={features.description} icon={features.icon} key={idx} />
                    })}
                </div>
            </div>
        </section>
    );
}