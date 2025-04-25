import React from "react";

interface PartnerCardProps {
  number: string;
  image: string;
  title: string;
  description: string;
  className?: string;
}

const PartnerCard = ({ number, image, title, description, className }: PartnerCardProps) => {
  return (
    <div>
      {/* Card 1: Web Development */}
      <div className={`bg-white text-gray-900 rounded-xl overflow-hidden shadow-lg ${className}`}>
        <div className="relative">
          <img
            src={image}
            alt="Web Development"
            className="w-full md:h-[270px] object-cover"/>
        </div>
        <div className="">
          <p className="bg-[#1841D3] text-white py-2 px-4">{number}</p>
          <h3 className="text-lg font-semibold px-4 mt-3">{title}</h3>
        </div>
        <div className="p-4">
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default PartnerCard;
