import React from 'react';

interface IndustryExpertiseCardProps {
  image: string;
  backgroundImage: string;
  heading: string;
  paragraph: string;
}

const IndustryExpertiseCard = ({
  image,
  backgroundImage,
  heading,
  paragraph,
}: IndustryExpertiseCardProps) => {
  return (
    <div className="relative w-full mx-auto rounded-2xl overflow-hidden border  border-2 min-h-[500px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />

      {/* Floating Icon */}
      <div className="absolute top-4 left-4 w-10 h-10 bg-indigo-600 flex items-center justify-center rounded-md">
        {image ? (
          <img src={image} alt="icon" className="w-6 h-6" />
        ) : (
          <span className="text-white text-2xl">✦</span>
        )}
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full w-full flex flex-col justify-end">
        {/* Bottom Section */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900">{heading}</h2>
          <p className="mt-2 text-sm text-gray-600">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertiseCard
  ;