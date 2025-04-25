import React from 'react';
import Redbtn from '@/components/Redbtn';
import BlackArrowbtn from '@/components/BlackArrowbtn';
import SimpleBtn from '@/components/SimpleBtn';
import ServicesHeroImage from '@/assets/Images/servicesHeroImage.png';
import ServiceCard from '@/components/ServicesCard';
import FrontEndStackCard from '@/components/TechStackCard';
import FlexibleEngagementCard from '@/components/FlexibleEngagementCard';

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="relative bg-gradient-to-br from-blue-50 to-blue-200 min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="relative mt-12 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Left Text Section */}
          <div className="lg:w-1/2 space-y-6">
            <Redbtn value="Our Services" />
            <h1 className="text-[48px] md:text-5xl font-[500] leading-tight text-gray-900">
              Custom IT Solutions to Power Your Digital Vision
            </h1>
            <p className="text-gray-600 text-[18px] font-[400] leading-relaxed">
              At ReviseTech Innovations, we specialize in delivering smart, scalable, and tailor-made digital solutions for businesses across industries. Whether you're a startup building from scratch, an enterprise scaling systems, or a government agency seeking modernization — we’ve got the technical expertise and creative thinking to bring your ideas to life.
            </p>
            <BlackArrowbtn value="Get a Free Quote" />
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <div className="relative">
              <img
                src={ServicesHeroImage}
                alt="Hands on laptop with tech icons"
                className="w-96 h-96 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-blue-50 to-blue-200 py-16 flex items-center justify-center overflow-hidden">
        {/* Background shapes */}
        <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left Image Section */}
          <div className="lg:w-1/4 flex">
            <div className="relative">
              <img
                src={ServicesHeroImage}
                alt="Person interacting with tech icons"
                className="w-80 h-80 rounded-full object-cover"
              />
              {/* Tech icons around the image */}
            </div>
          </div>

          {/* Right Text Section */}
          <div className="lg:w-3/5 mt-10 lg:mt-0 space-y-4">
            <Redbtn value="List Services" />
            <h1 className="text-4xl md:text-5xl font-[500] leading-tight text-gray-900">
              Custom IT Solutions to Power Your Digital Vision
            </h1>
            <p className="text-gray-600 text-[18px] font-[400] leading-relaxed">
              We offer a comprehensive suite of services designed to transform your business through technology.
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-blue-50 to-blue-200 py-16 flex items-center justify-center overflow-hidden">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-blue-50 to-blue-200 py-16 flex items-center justify-center overflow-hidden">
        <div className="gap-2 w-full max-w-7xl mx-auto relative flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Heading Section */}
          <div className="py-16 flex justify-center">
            <div className="text-center max-w-3xl">
              <Redbtn value="Our Stack" />
              <h1 className="text-4xl md:text-5xl font-[500] text-gray-900 mb-4">
                Tech <span className="text-gray-900">Stack</span> WE USE
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                We build with modern, proven technologies to ensure your solutions are secure, scalable, and future-ready.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <FrontEndStackCard />
            <FrontEndStackCard />
            <FrontEndStackCard />
            <FrontEndStackCard />
            <FrontEndStackCard />
            <FrontEndStackCard />
            <FrontEndStackCard />
          </div>

        </div>
      </div>

      <div className="relative bg-gradient-to-br from-blue-50 to-blue-200 py-16 flex items-center justify-center overflow-hidden">
        <div className="gap-2 mx-auto relative flex flex-col items-center justify-between px-4 w-full">
          <div className="py-16 flex justify-center">
            <div className="text-center max-w-7xl mx-auto px-4">
              <Redbtn value="Our Stack" />
              <h1 className="text-4xl md:text-5xl font-[500] text-gray-900 mb-2 w-[100%]">
                Flexible Engagement Models
              </h1>
              <h2 className="text-[24px] font-[400] text-gray-900 mb-4">
                Custom-Tailored Collaboration to Match Your Business Vision
              </h2>
              <p className="text-gray-600 text-[18px] font-[400] md:w-[70%] mx-auto leading-relaxed">
                Custom-Tailored Collaboration to Match Your Business Vision. At REVISETech Innovations, we believe technology partnerships should adapt to you – not the other way around. Whether you’re launching your first MVP, enhancing a legacy system, or scaling your operations, our engagement models are crafted to align with your timeline, budget, and growth strategy.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2  mx-auto max-w-7xl  items-center justify-center'>
            <FlexibleEngagementCard />
            <FlexibleEngagementCard />
            <FlexibleEngagementCard />
          </div>


          <div className="bg-white rounded-lg pt-12 pb-2 flex justify-center">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* What's Included */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900">What's Included</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">End-to-end ownership: from planning and design to deployment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Detailed project roadmap, timelines, scope documents</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Milestone-based delivery with client approvals at each stage</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">UI/UX wireframes and design mockups for alignment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Transparent tracking through project management tools</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Robust QA testing, UAT support, and bug fixes before go-live</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Post-launch monitoring and support for performance tuning</span>
                    </li>
                  </ul>
                </div>

                {/* Strategic Benefits */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900">Strategic Benefits</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Budget certainty with fixed scope and deliverables</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Minimal disruption to your internal resources</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Ideal for grant-funded projects, tenders, or programs</span>
                    </li>
                  </ul>
                </div>

                {/* Use Cases */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900">Use Cases</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Public-facing websites and portals</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Mobile apps for consumers or internal users</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Business dashboards and reporting tools</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">UI/UX wireframes and design mockups for alignment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">CMS or eCommerce platforms</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Robust QA testing, UAT support, and bug fixes before go-live</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Post-launch monitoring and support for performance tuning</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Note and Button */}
              <div className="mt-8 text-center flex items-center gap-4 justify-center rounded-xl p-3 bg-[#F0F0F0]">
                <p className="text-gray-600 text-[16px]">
                  This model works best when every detail is known upfront — and we’ll help you define it with precision.
                </p>
                <button className="bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-blue-700 transition">
                  Request a Project Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div >


      <div className="py-12 bg-white flex justify-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">

          {/* Left Section */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-[48px] md:text-5xl font-[500] text-gray-900 leading-tight">
              Not Sure Which Model Fits You Best?
            </h1>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              We’re here to help. Let’s talk about your goals and challenges, and we’ll recommend the most effective path forward – whether it’s a one-time project, an ongoing partnership, or just a few expert hours.
            </p>
            <div className="flex space-x-4">
              <BlackArrowbtn value="Book a Free Discovery Call" />
              <SimpleBtn value="Let’s Get Started" />
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
              alt="Colorful eye makeup model"
              className="w-full h-80 md:h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>

        </div>
      </div>

    </>
  );
};

export default HeroSection;
