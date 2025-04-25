import React from 'react';

type FlexibleEngagementCardProps = {
    title: string;
    description: string;
    icon: string;
};

const FlexibleEngagementCard: React.FC<FlexibleEngagementCardProps> = ({ title, description, icon }) => {
    return (
        <div className="flex items-center justify-center flex-col text-center relative bg-white rounded-2xl p-6 shadow-lg group hover:bg-gradient-to-b hover:from-[#000120] hover:to-[#00229E] transition duration-300 w-full">
            <div>
                <img src={icon} alt={title} className="w-12 h-12" />
            </div>
            <h3 className="text-[24px] font-[500] text-gray-900 my-2 group-hover:text-white">
                {title}
            </h3>
            <p className="text-gray-600 text-[16px] leading-relaxed group-hover:text-white">
                {description}
            </p>
        </div>
    );
};

export default FlexibleEngagementCard;
