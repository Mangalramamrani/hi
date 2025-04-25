// TransparentWorkCard.jsx
import React from 'react';

interface ItServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ItServiceCard = ({ image, title, description }: ItServiceCardProps) => {
  return (
    <div className="bg-white bg-opacity-90 rounded-2xl  p-6 min-h-40 border border-gray-200">
      {/* Icon */}
      <div className="w-10 h-10 bg-[#1841D3] rounded-lg flex items-center justify-center mb-4">
        {/* Simulating the icon with two white bars */}
        <div className="rounded-lg p-2 flex items-center justify-center">
          <img src={image} alt="" className='' />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};

export default ItServiceCard;