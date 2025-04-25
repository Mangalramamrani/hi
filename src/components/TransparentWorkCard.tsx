import React from 'react'

interface TransparentWorkCardProps {
  number: string | number;
  image: string;
  title: string;
  description: string;
}

const TransparentWorkCard = (props: TransparentWorkCardProps) => {
    const { number, image, title, description } = props
    return (
        <div className="relative group bg-white rounded-lg border p-6 w-full min-h-[230px] transition-all duration-300 hover:bg-gradient-to-b 
        hover:from-[#E7EAFE] hover:via-[#E7F0FE] hover:to-[#FFFFFF] hover:text-[#1841D3] overflow-hidden">

            <div className="absolute -bottom-3 -left-2 text-[#1841D3] font-[700] w-[60px] h-[50px] flex items-center justify-center text-5xl">
                {number}
            </div>

            <div className="w-[48px] h-[48px] rounded-lg p-2 flex items-center justify-center 
                bg-[#F6F6F6] transition-all duration-300 group-hover:bg-[#1841D3]">
                <img src={image} alt={title} className='w-full h-full' />
            </div>

            <h3 className="text-[20px] font-bold mt-3 mb-2">{title}</h3>
            <p className="leading-relaxed text-[#868686] text-[16px] mb-[20px] transition-all duration-300 group-hover:text-[#1841D3]">
                {description}
            </p>
        </div>
    );
};

export default TransparentWorkCard
