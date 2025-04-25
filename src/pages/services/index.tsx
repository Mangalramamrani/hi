import React from 'react';
import Redbtn from '@/components/Redbtn';
import BlackArrowbtn from '@/components/BlackArrowbtn';
import SimpleBtn from '@/components/SimpleBtn';
import ServicesHeroImage from '@/assets/Images/servicesHeroImage.png';
import ServiceCard from '@/components/ServicesCard';
import FrontEndStackCard from '@/components/TechStackCard';
import FlexibleEngagementCard from '@/components/FlexibleEngagementCard';
import ServiceAboutImage from '@/assets/Images/servicesAboutImage.png';
import ServicesCardSvg1 from '@/assets/Svgs/ServicesCardSvg1.svg';
import ServicesCardSvg2 from '@/assets/Svgs/ServicesCardSvg2.svg';
import ServicesCardSvg3 from '@/assets/Svgs/ServicesCardSvg3.svg';
import ServicesCardSvg4 from '@/assets/Svgs/ServicesCardSvg4.svg';
import ServicesCardSvg5 from '@/assets/Svgs/ServicesCardSvg5.svg';
import ServicesCardSvg6 from '@/assets/Svgs/ServicesCardSvg6.svg';
import ServicesCardSvg7 from '@/assets/Svgs/ServicesCardSvg7.svg';
import ServicesCardSvg8 from '@/assets/Svgs/ServicesCardSvg8.svg';
import ServicesDottedBackgroundImage from '@/assets/Images/dottedBackground.png'

import TechStackCardsSvgs1 from '@/assets/Svgs/TechStackCardsSvgs4.svg';
import TechStackCardsSvgs2 from '@/assets/Svgs/TechStackCardsSvgs5.svg';
import TechStackCardsSvgs3 from '@/assets/Svgs/TechStackCardsSvgs6.svg';
import TechStackCardsSvgs4 from '@/assets/Svgs/TechStackCardsSvgs2.svg';
import TechStackCardsSvgs5 from '@/assets/Svgs/TechStackCardsSvgs3.svg';
import TechStackCardsSvgs6 from '@/assets/Svgs/TechStackCardsSvgs7.svg';
import TechStackCardsSvgs7 from '@/assets/Svgs/TechStackCardsSvgs1.svg';


import flexibleEngagementIcon1 from '@/assets/Svgs/flexibleEngagementIcon3.svg';
import flexibleEngagementIcon2 from '@/assets/Svgs/flexibleEngagementIcon2.svg';
import flexibleEngagementIcon3 from '@/assets/Svgs/flexibleEngagementIcon1.svg';

import BgGradientImage from '@/assets/Images/bg-gradient-image.png'
import ServicesIncludedCard from '@/components/ServicesIncludedCard';



import ServicesIncludedCardsvg1 from '@/assets/Images/ServicesIncludedCardsvg1.png'
import ServicesIncludedCardsvg2 from '@/assets/Images/ServicesIncludedCardsvg2.png'
import ServicesIncludedCardsvg3 from '@/assets/Images/ServicesIncludedCardsvg3.png'

import ServicesIncludedCardsvg4 from '@/assets/Images/servicesbottomfloatingimage.png'



import servicesbluishicons1 from '@/assets/Svgs/servicesbluishicons1.svg'
import servicesbluishicons2 from '@/assets/Svgs/servicesbluishicons2.svg'
import servicesbluishicons3 from '@/assets/Svgs/servicesbluishicons3.svg'



const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-200 min-h-[700px] flex items-center justify-center overflow-hidden">
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
      </section>

      <section className="relative bg-gradient-to-br from-blue-50 to-blue-200 py-16 flex items-center justify-center overflow-hidden">
        {/* Background shapes */}
        <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left Image Section */}
          <div className="lg:w-[30%] flex">
            <div className="relative">
              <img
                src={ServiceAboutImage}
                alt="Person interacting with tech icons"
                className="w-80 h-80 rounded-full object-cover"
              />
              {/* Tech icons around the image */}
            </div>
          </div>

          {/* Right Text Section */}
          <div className="lg:w-[70%] mt-10 lg:mt-0 space-y-4">
            <Redbtn value="List Services" />
            <h1 className="text-4xl md:text-5xl font-[500] leading-tight text-gray-900">
              Custom IT Solutions to Power Your Digital Vision
            </h1>
            <p className="text-gray-600 text-[18px] font-[400] leading-relaxed">
              We offer a comprehensive suite of services designed to transform your business through technology.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-blue-50 to-blue-200 py-16 flex items-center justify-center overflow-hidden">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-7xl mx-auto px-2">
          <ServiceCard
            icon={ServicesCardSvg1}
            heading="Web Development"
            description="Build stunning, fast, and SEO-optimized websites that represent your brand and convert visitors into customers. We deliver:"
            checklist={[
              'Corporate websites, portals, landing pages',
              'Responsive design for all devices',
              'E-commerce platforms',
              'Booking & service platforms',
            ]}
          />

          <ServiceCard
            icon={ServicesCardSvg2}
            heading="Mobile App Development"
            description="Native and cross-platform mobile applications that are intuitive, functional, and built for performance. We build apps for:"
            checklist={[
              'Android and iOS (Flutter, React Native, Swift, Kotlin)',
              'E-commerce and delivery',
              'Healthcare and appointment systems',
              'Booking and event apps',
              'Internal workflow or HR apps',
            ]}
          />

          <ServiceCard
            icon={ServicesCardSvg3}
            heading="Custom Software Solutions"
            description="From backend engines to full business platforms, we develop systems that automate and simplify your operations. Use cases include:"
            checklist={[
              'Internal portals',
              'HR and payroll systems',
              'Shift & time tracking tools',
              'Reporting and dashboard platforms',
              'Inventory and order management systems',
            ]}
          />

          <ServiceCard
            icon={ServicesCardSvg4}
            heading="CMS Development"
            description="Flexible and secure content management systems tailored for your content strategy. We provide:"
            checklist={[
              'Admin panel customization',
              'Multi-user and multi-role access control',
              'WordPress, Strapi, or custom CMS builds',
              'Training and documentation for your team',
            ]}
          />

          <ServiceCard
            icon={ServicesCardSvg5}
            heading="UI/UX Design"
            description="User-centric design that's not only visually appealing but built for conversion, accessibility, and engagement. Deliverables:"
            checklist={[
              'Interactive wireframes and high-fidelity mockups',
              'User journey mapping and Persona Analysis',
              'Branding and interface design (Figma, Adobe XD)',
              'Usability testing and refinement',
            ]}
          />

          <ServiceCard
            icon={ServicesCardSvg6}
            heading="API Development & Integration"
            description="We connect the dots between platforms, devices, and third-party tools to create seamless workflows. Expertise includes:"
            checklist={[
              'Custom REST and GraphQL API development',
              'Third-party API integrations (e.g., Stripe, Twilio, Google, AWS)',
              'Webhook and system automation integrations',
              'Payment gateway setup',
            ]}
          />

          <ServiceCard
            icon={ServicesCardSvg7}
            heading="Data Analysis & Visualization"
            description="Flexible and secure content management systems tailored for your content strategy. We provide:"
            checklist={[
              'Operational and financial reporting',
              'Customer insights and analytics',
              'Embedded analytics in your platform',
            ]}
          />

          <ServiceCard
            icon={ServicesCardSvg8}
            heading="Cloud Services"
            description="We help you transition, host, and scale your application infrastructure on the cloud. Cloud services include:"
            checklist={[
              'Cloud Infrastructure setup (AWS, Azure, Firebase)',
              'CI/CD pipelines and deployment automation',
              'Docker microservices',
              'Backups, security, and scalability audits',
            ]}
          />
        </div>
      </section >

      <section className="relative bg-gradient-to-br from-blue-50 to-blue-200 pt-8 flex items-center justify-center overflow-hidden" style={{ backgroundImage: `url(${ServicesDottedBackgroundImage})`, backgroundRepeat: 'no-repeat' }}>
        <div className="gap-2 w-full max-w-7xl mx-auto relative flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Heading Section */}
          <div className="py-16 flex justify-center w-full">
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
          <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-4 w-full">
            <FrontEndStackCard
              title="Front End Stack"
              icon={TechStackCardsSvgs1}
              stack={[
                { name: 'React JS', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
                { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
                { name: 'NET Core', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg' },
                { name: 'Python (Flask, Django)', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
                { name: 'Express.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
              ]}
            />

            <FrontEndStackCard
              title="Backend Stack"
              icon={TechStackCardsSvgs2}
              stack={[
                { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
                { name: 'NET Core', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg' },
                { name: 'Python (Flask, Django)', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
                { name: 'Express.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
              ]}
            />

            <FrontEndStackCard
              title="Mobile"
              icon={TechStackCardsSvgs3}
              stack={[
                { name: 'Flutter', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png' },
                { name: 'React Native', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
                { name: 'Kotlin', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png' },
                { name: 'Swift', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg' },
              ]}
            />

            <FrontEndStackCard
              title="Databases"
              icon={TechStackCardsSvgs4}
              stack={[
                { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
                { name: 'MySQL', logo: 'https://upload.wikimedia.org/wikipedia/en/1/14/MySQL.svg' },
                { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg' },
                { name: 'Microsoft SQL Server', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_server_compact_logo.svg' },
              ]}
            />

            <FrontEndStackCard
              title="UI/UX Design"
              icon={TechStackCardsSvgs5}
              stack={[
                { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
                { name: 'Adobe XD', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' },
                { name: 'Sketch', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg' },
              ]}
            />

            <FrontEndStackCard
              title="Cloud & DevOps"
              icon={TechStackCardsSvgs6}
              stack={[
                { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
                { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
                { name: 'Firebase', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg' },
                { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
              ]}
            />
            <FrontEndStackCard
              title="Cloud & DevOps"
              icon={TechStackCardsSvgs7}
              stack={[
                { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
                { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
                { name: 'Firebase', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg' },
                { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
                { name: 'GitHub Actions', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/GitHub_Actions_logo.svg' },
              ]}
            />

          </div>

        </div>
      </section>

      <section className="relative bg-gradient-to-br from-blue-50 to-blue-200 py-16 flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `url(${BgGradientImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
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
            <FlexibleEngagementCard
              title="Monthly Team Engagement"
              description="Best for: Evolving projects, startups in growth phase, and tech-driven businesses"
              icon={flexibleEngagementIcon1}
            />
            <FlexibleEngagementCard
              title="Monthly Team Engagement"
              description="Best for: Evolving projects, startups in growth phase, and tech-driven businesses"
              icon={flexibleEngagementIcon2}
            />
            <FlexibleEngagementCard
              title="Monthly Team Engagement"
              description="Best for: Evolving projects, startups in growth phase, and tech-driven businesses"
              icon={flexibleEngagementIcon3}
            />
          </div>


          <div className="bg-white rounded-lg p-2 flex justify-center">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ServicesIncludedCard
                  items={[
                    "End-to-end ownership: from planning and design to deployment",
                    "Detailed project roadmap, timelines, and scope documents",
                    "Milestone-based delivery with client approvals at each stage",
                    "UI/UX wireframes and design mockups for alignment",
                    "Transparent tracking through project management tools",
                    "Robust QA testing, UAT support, and bug fixes before go-live",
                    "Post-launch monitoring and support for performance tuning",
                  ]
                  }
                  svgIcon={ServicesIncludedCardsvg1}
                />

                <ServicesIncludedCard
                  items={[
                    "Budget certainty with fixed scope and deliverables",
                    "Minimal disruption to your internal resources",
                    "Ideal for grant-funded projects, tenders, or pilot programs",
                  ]}
                  svgIcon={ServicesIncludedCardsvg2}
                />

                <ServicesIncludedCard
                  items={[
                    "Public-facing websites and portals",
                    "Mobile apps for consumers or internal users",
                    "Business dashboards and reporting tools",
                    "UI/UX wireframes and design mockups alignment",
                    "CMS or eCommerce platforms",
                    "Robust QA testing, UAT support, and bug fixes before go-live",
                    "Post-launch monitoring and support for performance tuning",
                  ]}
                  svgIcon={ServicesIncludedCardsvg3}
                />
              </div>

              {/* Note and Button */}
              <div className="mt-8 text-center flex items-center gap-[8px] justify-center rounded-xl p-3 bg-[#F0F0F0]">
                <p className="text-[16px]">
                  This model works best when every detail is known upfront — and we’ll help you define it with precision.
                </p>
                <button className="bg-[#0C41FF] text-white font-semibold py-[12px] px-[24px] rounded-[16px] hover:bg-blue-700 transition">
                  Request a Project Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section >


      <section className="py-12 bg-white flex justify-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">

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
          <div className="md:w-1/2 relative">
            <div className="flex items-start justify-end gap-2 flex-col absolute w-full h-full top-0 left-0 p-4 rounded-lg bg-gradient-to-b from-transparent to-black">
              <div className="text-[#1841D3] text-[20px] px-[16px] py-[8px] bg-[#FFFFFF] rounded-full flex items-center justify-between gap-2"><img src={servicesbluishicons1} alt="" className="w-6 h-6 " />Transparent process, no hidden surprises</div>
              <div className="text-[#1841D3] text-[20px] px-[16px] py-[8px] bg-[#FFFFFF] rounded-full flex items-center justify-between gap-2"><img src={servicesbluishicons2} alt="" className="w-6 h-6" />Detailed proposal tailored to your business</div>
              <div className="text-[#1841D3] text-[20px] px-[16px] py-[8px] bg-[#FFFFFF] rounded-full flex items-center justify-between gap-2"><img src={servicesbluishicons3} alt="" className="w-6 h-6" />Free consultation with our solutions architect</div>
            </div>
            <img
              src={ServicesIncludedCardsvg4}
              alt="Colorful eye makeup model"
              className="w-full h-80 md:h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>

        </div>
      </section>

    </>
  );
};

export default HeroSection;
