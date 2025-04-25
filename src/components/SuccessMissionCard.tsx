import React from 'react'

interface SuccessMissionCardProps {
  image: string;
  heading: string;
  paragraph: string;
}

const SuccessMissionCard = ({ image, heading, paragraph }: SuccessMissionCardProps) => {
  return (
    <div className="group flex items-center justify-center flex-col text-center border bg-white hover:bg-gradient-to-b hover:from-[#E6F0FA] hover:to-white rounded-2xl p-6 transition-all duration-300">
      
      {/* Icon */}
      <div className="w-10 h-10 bg-[#1841D3] group-hover:bg-[#0F2C91] flex items-center justify-center rounded-md transition-all duration-300">
        <img src={image} alt={heading} />
      </div>

      {/* Heading */}
      <h2 className="text-xl font-bold text-gray-900 mt-4">{heading}</h2>

      {/* Paragraph */}
      <p className="text-sm text-gray-600 mt-2">{paragraph}</p>
    </div>
  )
}

export default SuccessMissionCard
