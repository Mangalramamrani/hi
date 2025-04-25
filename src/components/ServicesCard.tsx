import React from 'react';

const ServiceCard: React.FC = () => {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg mx-auto">
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                </svg>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
                Build stunning, fast, and SEO-optimized websites that represent your brand and convert visitors into customers. We deliver:
            </p>

            {/* Checklist */}
            <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-900">Corporate websites, portals, landing pages</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-900">Responsive design for all devices</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-900">E-commerce platforms</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-900">Booking & service platforms</span>
                </li>
            </ul>
        </div>
    );
};

export default ServiceCard;