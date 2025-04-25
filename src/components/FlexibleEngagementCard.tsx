import React from 'react';

const FlexibleEngagementCard: React.FC = () => {
    return (
        <>
            {/* Monthly Team Engagement Card */}
            <div className="relative bg-white rounded-2xl p-6 shadow-lg group hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 transition-all duration-300 w-full">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200">
                    <svg
                        className="w-6 h-6 text-blue-600 group-hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-white">
                    Monthly Team Engagement
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
                    Best for: Evolving projects, startups in growth phase, and tech-driven businesses
                </p>
            </div>
        </>
    );
};

export default FlexibleEngagementCard;
