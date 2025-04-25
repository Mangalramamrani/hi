import React from 'react';
import CheckCircleIconSvg from '../assets/Svgs/Check.svg';

interface PricingCardProps {
  image: string;
  iconBg?: string;
  title: string;
  subtitle: string;
  includedItems: string[];
  ctaText: string;
  ctaDescription: string;
  onClick: () => void;
  popular?: boolean;
}

const PricingCard = ({
  image,
  iconBg = "bg-blue-600",
  title,
  subtitle,
  includedItems = [],
  ctaText,
  ctaDescription,
  onClick,
  popular = false, // New prop to indicate if the card is popular
}: PricingCardProps) => {
  return (
<div className="group w-full mx-auto bg-white rounded-[24px] border border-[4px] p-[12px] relative hover:border-[#1841D3] hover:bg-gradient-to-b hover:from-[#E7EAFE] hover:via-[#E7F0FE] hover:to-[#FFFFFF] transition-all duration-500 overflow-hidden">
{/* Popular Badge */}
      {popular && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-lg font-semibold px-3 py-2 px-6 rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}

      {/* Icon */}
      <div className={`w-10 h-10 ${iconBg} flex items-center justify-center rounded-md`}>
        <img src={image} className='' alt="" />
      </div>

      {/* Title */}
      <h1 className="text-xl font-bold mt-4">{title}</h1>
      <p className="text-sm text-gray-600 mt-2">Best for:</p>

      {/* Subtitle */}
      <p className="text-sm mt-2">{subtitle}</p>

      {/* What's Included */}
      <h2 className="text-lg font-semibold mt-6">What You Get</h2>

      <hr className="my-6" />
      <ul className="mt-4 space-y-3 h-[230px] overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {includedItems.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2"><img src={CheckCircleIconSvg} alt="" /></span>
            <span className="text-gray-700 text-sm">{item}</span>
          </li>
        ))}
      </ul>
      <hr className="my-6" />

      {/* Call to Action */}
      <p className="text-center text-[16px] mt-8">{ctaDescription}</p>
      <button
        onClick={onClick}
        className="w-full bg-[#DFE6FF] text-blue-600 py-[12px] px-[24px] rounded-[16px] mt-4 transition duration-300 group-hover:bg-blue-600 group-hover:text-white"
      >
        {ctaText}
      </button>


    </div>
  );
};

export default PricingCard;