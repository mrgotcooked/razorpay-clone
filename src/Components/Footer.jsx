import React from 'react';
import github from "../Images/github-icon.svg";
import facebook from "../Images/facebook-icon.svg";
import instagram from "../Images/instagram-icon.svg";
import twitter from "../Images/twitter-icon.svg";
import linkedIn from "../Images/linkedIn-icon.svg";
import Pci from "../Images/footer-certificate-1.png";
import Cert from "../Images/footer-certificate-2.jpg";
const Footer = () => {
  return (
    <footer className="bg-[#f0f4f8] text-[#1a202c] py-12 px-4 md:px-8 lg:px-16 font-sans ">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left Column - Company Info & Newsletter */}
        <div className="w-full lg:w-1/3">
          <div className="mb-6 flex items-center">
            {/* Placeholder for Razorpay Logo */}
            <span className="text-2xl font-bold tracking-tighter text-blue-900">
              <span className="text-blue-600">▲</span> Razorpay
            </span>
          </div>
          
          <div className="text-sm text-slate-600 space-y-4 mb-6 pr-4">
            <p>
              Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
            </p>
            <p>
              RazorpayX supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes. With RazorpayX, businesses can get access to fully-functional current accounts, supercharge their payouts and automate payroll compliance.
            </p>
            <p>
              Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital loans - all from a single platform. Fast forward your business with Razorpay.
            </p>
          </div>

          <p className="text-[10px] text-slate-500 leading-tight mb-8 pr-4">
            Disclaimer: The RazorpayX powered Current Account and VISA corporate credit card are provided by RBI licensed banks. Your RazorpayX powered account is provided by our partner bank, in accordance with RBI regulations. RazorpayX itself is not a bank and doesn't hold or claim to hold a banking license.
          </p>

          <div className="mb-8">
            <h4 className="font-bold text-slate-800 mb-4 tracking-wide text-sm">SUBSCRIBE TO OUR NEWSLETTER</h4>
            <div className="flex border border-slate-300 rounded bg-white overflow-hidden max-w-sm shadow-sm">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 text-sm outline-none"
              />
              <button className="text-blue-600 font-semibold px-4 py-2 text-sm whitespace-nowrap hover:bg-slate-50">
                Subscribe →
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
             {/* Placeholders for certification badges */}
            <div className=" flex items-center gap-2 w-[100px]">
               <img src={Pci} alt="" />
            </div>
            <div className="w-[100px]">
               <img src={Cert} alt="" />
            </div>
          </div>
        </div>

        {/* Right Columns Container */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Middle-Left Column */}
          <div>
            <FooterSection title="BANKING PLUS">
              <FooterLink text="RazorpayX" />
              <FooterLink text="Current Accounts" />
              <FooterLink text="Payouts" />
              <FooterLink text="Payout Links" />
              <FooterLink text="Corporate Credit Card" />
              <FooterLink text="View Live Demo" badge="NEW" />
            </FooterSection>

            <FooterSection title="LENDING">
              <FooterLink text="Razorpay Capital" />
              <FooterLink text="Instant Settlements" />
              <FooterLink text="Working Capital Loans" />
              <FooterLink text="Marketplace Instant Settlements" />
            </FooterSection>

            <FooterSection title="RISK & FRAUD">
              <FooterLink text="Thirdwatch" />
              <FooterLink text="PrePay CoD" badge="NEW" />
            </FooterSection>

            <FooterSection title="BECOME A PARTNER">
              <FooterLink text="Refer and Earn" />
              <FooterLink text="Onboarding APIs" />
            </FooterSection>

            <FooterSection title="MORE">
              <FooterLink text="Route" />
              <FooterLink text="Invoices" />
              <FooterLink text="Freelancer Payments" />
              <FooterLink text="International" />
              <FooterLink text="Flash Checkout" />
              <FooterLink text="UPI" />
              <FooterLink text="ePOS" />
              <FooterLink text="Checkout Demo" />
              <FooterLink text="RazorpayX Payroll" />
            </FooterSection>
          </div>

          {/* Middle-Right Column */}
          <div>
            <FooterSection title="ACCEPT PAYMENTS">
              <FooterLink text="Payment Gateway" />
              <FooterLink text="Payment Pages" />
              <FooterLink text="Payment Links" />
              <FooterLink text="QR Codes" />
              <FooterLink text="Subscriptions" />
              <FooterLink text="Smart Collect" />
            </FooterSection>

            <FooterSection title="DEVELOPERS">
              <FooterLink text="Docs" />
              <FooterLink text="Integrations" />
              <FooterLink text="API Reference" />
            </FooterSection>

            <FooterSection title="RESOURCES">
              <FooterLink text="Blog" />
              <FooterLink text="Customer Stories" />
              <FooterLink text="Events" />
              <FooterLink text="Chargeback Guide" />
              <FooterLink text="Settlement Guide" />
            </FooterSection>

            <FooterSection title="SOLUTIONS">
              <FooterLink text="Education" />
              <FooterLink text="E-commerce" />
              <FooterLink text="SaaS" />
              <FooterLink text="BFSI" />
            </FooterSection>

            <FooterSection title="FREE TOOLS">
              <FooterLink text="GST Calculator" />
              <FooterLink text="Online TDS Payment" />
              <FooterLink text="GST Number Search" badge="NEW" />
            </FooterSection>
          </div>

          {/* Far Right Column */}
          <div>
            <FooterSection title="COMPANY">
              <FooterLink text="About Us" />
              <FooterLink text="Careers" badge="We're hiring!" />
              <FooterLink text="Terms of Use" />
              <FooterLink text="Privacy Policy" />
              <FooterLink text="Grievance Redressal" />
              <FooterLink text="Responsible Disclosure" />
              <FooterLink text="Partners" />
              <FooterLink text="White Papers" />
              <FooterLink text="Corporate Information" />
            </FooterSection>

            <FooterSection title="HELP & SUPPORT">
              <FooterLink text="Support" />
              <FooterLink text="Knowledge base" />
            </FooterSection>

            <div className="mb-8">
              <h4 className="font-bold text-slate-800 mb-4 tracking-wide text-sm">FIND US ONLINE</h4>
              <div className="flex gap-3">
                {/* Social Icon Placeholders */}
                <img src={twitter} className='w-6 h-6'/>
                <img src={instagram} className='w-6 h-6'/>
                <img src={github} className='w-6 h-6' />
                <img src={linkedIn} className='w-6 h-6' />
                <img src={facebook} className='w-6 h-6' />
              </div>
            </div>

            <div className="mb-8 text-sm text-slate-800">
              <h4 className="font-bold mb-4 tracking-wide">REGD. OFFICE ADDRESS</h4>
              <p className="leading-relaxed">
                Razorpay Software Private Limited,<br/>
                1st Floor, SJR Cyber,<br/>
                22 Laskar Hosur Road, Adugodi,<br/>
                Bengaluru, 560030,<br/>
                Karnataka, India<br/>
                CIN: U72200KA2013PTC097389
              </p>
            </div>

            <div className="text-sm text-slate-800 mt-12">
              <p>© Razorpay 2022</p>
              <p>All Rights Reserved</p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components for Reusability
const FooterSection = ({ title, children }) => (
  <div className="mb-8">
    <h4 className="font-bold text-slate-800 mb-4 tracking-wide text-sm">{title}</h4>
    <ul className="space-y-3">
      {children}
    </ul>
  </div>
);

const FooterLink = ({ text, badge }) => (
  <li>
    <a href="#" className="text-[#0e5aa7] hover:text-blue-800 text-[15px] flex items-center group">
      {text}
      {badge && (
        <span className="ml-2 bg-[#1aa555] text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm group-hover:bg-green-600 transition-colors">
          {badge}
        </span>
      )}
    </a>
  </li>
);

export default Footer;