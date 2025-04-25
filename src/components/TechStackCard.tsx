import React from 'react';

type Tech = {
    name: string;
    logo: string;
};

type FrontEndStackCardProps = {
    title: string;
    icon: string;
    stack: Tech[];
};

const FrontEndStackCard: React.FC<FrontEndStackCardProps> = ({ title, icon, stack }) => {
    return (
        <div className="bg-white w-full rounded-2xl border border-gray-300 overflow-hidden mx-auto">
            {/* Heading */}
            <div className="flex items-center gap-4 bg-[#DADAE654] p-2">
                <img src={icon} alt={title} className="w-12 h-12" />
                <h2 className="text-xl font-[500] text-[#1841D3]">{title}</h2>
            </div>

            {/* Tech Stack Grid */}
            <div className="flex flex-wrap gap-4 py-6 px-2 mx-auto">
                {stack.map((tech, index) => (
                    <div key={index} className="min-w-[140px] bg-[#FDFDFD] border  border-gray-300  rounded-xl p-[10px] flex items-center gap-2">
                        <img src={tech.logo} alt={tech.name} className="w-8 h-8" />
                        <span className="text-gray-900 text-[20px] m-1 font-medium">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FrontEndStackCard;
