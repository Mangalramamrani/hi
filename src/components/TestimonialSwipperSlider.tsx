import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import TestimonialCard from './TestimonialCard';

type ButtonType = 'prev' | 'next' | null;

interface TestimonialItem {
    quote: string;
    source: string;
}

export default function TestimonialSlider() {
    const [activeButton, setActiveButton] = useState<ButtonType>(null);
    const testimonials: TestimonialItem[] = [
        {
            quote: "Working with ReviseTech Innovations was smooth, professional, and highly collaborative. The final product exceeded our expectations.",
            source: "Sarah Johnson, TechSolutions Inc., 2024"
        },
        {
            quote: "The team delivered exceptional results on time and within budget. Their attention to detail was impressive throughout the project.",
            source: "Michael Chen, DigitalEdge LLC, 2023"
        },
        {
            quote: "ReviseTech transformed our outdated systems into modern, efficient solutions. Their expertise saved us months of development time.",
            source: "Emma Rodriguez, Global Ventures, 2024"
        },
        {
            quote: "We were not able to work well with the new team assigned to our project. Communication breakdowns caused several delays.",
            source: "David Wilson, NexGen Systems, 2023"
        },
        {
            quote: "From concept to deployment, ReviseTech guided us perfectly. Our user engagement has increased by 40% since launch.",
            source: "Lisa Park, InnovateCo, 2024"
        },
        {
            quote: "Their innovative approach solved problems we didn't even know we had. Worth every penny of investment.",
            source: "James Peterson, FutureTech, 2023"
        },
        {
            quote: "The support team responds faster than any vendor we've worked with. Issues get resolved before they become problems.",
            source: "Olivia Mbanefo, AfriTech, 2024"
        },
        {
            quote: "While the final product was good, we experienced some miscommunications during the development phase.",
            source: "Robert Kim, Eastern Digital, 2023"
        }
    ];
    const handleButtonClick = (buttonType: ButtonType) => {
        setActiveButton(buttonType);
    };

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading and Navigation */}
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold">Testimonial</h2>

                    <div className="flex items-center gap-4">
                        {/* Prev Button */}
                        <button
                            className={`testimonial-prev p-2 rounded-xl shadow transition-colors ${activeButton === 'prev'
                                ? 'bg-[#121212] text-white'
                                : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => handleButtonClick('prev')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Next Button */}
                        <button
                            className={`testimonial-next p-2 rounded-xl shadow transition-colors ${activeButton === 'next'
                                ? 'bg-[#121212] text-white'
                                : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => handleButtonClick('next')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.testimonial-next',
                        prevEl: '.testimonial-prev',
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    onSlideChange={() => setActiveButton(null)}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard quote={testimonial.quote} source={testimonial.source} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}