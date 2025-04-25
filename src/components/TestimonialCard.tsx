import React from 'react';

interface TestimonialCardProps {
  quote: string;
  source: string;
}

const TestimonialCard = ({ quote, source }: TestimonialCardProps) => {
  return (
    <div className="bg-[#FFFFFF] p-6 border border-gray-200 rounded-xl hover:border-transparent box-border hover:bg-[#EBF1FF] min-h-[200px] flex flex-col justify-between transition-all duration-200">
      <p className="mb-4 text-[18px] font-[400]">"{quote}"</p>
      <p className="text-left text-gray-500">{source}</p>
    </div>
  );
};

export default TestimonialCard;
