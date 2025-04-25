import React from 'react';
import tickmark from '@/assets/Svgs/tickmark.svg';

interface ServiceCardProps {
    icon: React.ReactNode;
    heading: string;
    description: string;
    checklist: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, heading, description, checklist }) => {
    return (
        <div className="bg-white rounded-2xl p-4 shadow-lg mx-auto">
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
              <img src={icon} alt="" />
            </div>

            {/* Heading */}
            <h2 className="text-[24px] font-[500] mb-4">{heading}</h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

            {/* Checklist */}
            <ul className="space-y-3">
                {checklist.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                        <img src={tickmark} alt="" />
                        <span className="text-black font-[500]">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceCard;
