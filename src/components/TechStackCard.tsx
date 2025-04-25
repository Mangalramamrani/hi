import React from 'react';

const FrontEndStackCard: React.FC = () => {
    return (
        <div className="bg-white w-[100%] rounded-2xl shadow-lg mx-auto ">
            {/* Heading */}
            <div className='flex items-center gap-10 bg-[#DADAE654] p-2'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-8 h-8" />
                <h2 className="text-xl font-semibold text-[#1841D3] ">Front End Stack</h2>
            </div>
            {/* Tech Stack Grid */}
            <div className="flex flex-wrap gap-4 py-6 px-2 mx-auto">
                {/* React JS */}
                <div className="min-w-[140px] border rounded-xl p-2 flex items-center gap-2">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" // React logo
                        alt="React JS"
                        className="w-8 h-8"
                    />
                    <span className="text-gray-900 text-[24px] m-1 font-medium">React JS</span>
                </div>

                {/* Vue JS */}
                <div className="flex flex-col items-center">
                    <div className="min-w-[140px] border rounded-xl p-2 flex items-center gap-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" // Vue logo
                            alt="Vue JS"
                            className="w-8 h-8"
                        />
                    <span className="text-gray-900 text-[24px] m-1 font-medium">Vue JS</span>
                    </div>
                </div>

                {/* Angular */}
                <div className="flex flex-col items-center">
                    <div className="min-w-[140px] border rounded-xl p-2 flex items-center gap-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" // Angular logo
                            alt="Angular"
                            className="w-8 h-8"
                        />
                    <span className="text-gray-900 text-[24px] m-1 font-medium">Angular</span>
                    </div>
                </div>

                {/* HTML */}
                <div className="flex flex-col items-center">
                    <div className="min-w-[140px] border rounded-xl p-2 flex items-center gap-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" // HTML logo
                            alt="HTML"
                            className="w-8 h-8"
                        />
                    <span className="text-gray-900 text-[24px] m-1 font-medium">HTML</span>
                    </div>
                </div>

                {/* CSS */}
                <div className="flex flex-col items-center">
                    <div className="min-w-[140px] border rounded-xl p-2 flex items-center gap-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" // CSS logo
                            alt="CSS"
                            className="w-8 h-8"
                        />
                    <span className="text-gray-900 text-[24px] m-1 font-medium">CSS</span>
                    </div>
                </div>

                {/* TypeScript */}
                <div className="flex flex-col items-center">
                    <div className="min-w-[140px] border rounded-xl p-2 flex items-center gap-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" // TypeScript logo
                            alt="TypeScript"
                            className="w-8 h-8"
                        />
                    <span className="text-gray-900 text-[24px] m-1 font-medium">TypeScript</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontEndStackCard;