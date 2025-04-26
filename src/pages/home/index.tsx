import HeroImage from "@/assets/Images/heroImage.png";
import BlackArrowbtn from "@/components/BlackArrowbtn";
import SimpleBtn from "@/components/SimpleBtn";
import RedBtn from "@/components/Redbtn";
import CardWomenImg from "@/assets/Images/women.png";
import CardMan1Img from "@/assets/Images/man1.png";
import CardMan2Img from "@/assets/Images/man2.png";
import PartnerCard from "@/components/PartnerCard";
import TransparentWorkCard from "@/components/TransparentWorkCard";
import CardVectorSvg1 from '@/assets/Svgs/Vectorfirst.svg'
import CardVectorSvg2 from '@/assets/Svgs/Vector2.svg'
import CardVectorSvg3 from '@/assets/Svgs/Vector3.svg'
import CardVectorSvg4 from '@/assets/Svgs/Vector4.svg'
import CardVectorSvg5 from '@/assets/Svgs/Vector5.svg'
import CardVectorSvg6 from '@/assets/Svgs/Vector6.svg'
import ItServiceCard from "@/components/ItServiceCard";
import ServiceCardSvg1 from '@/assets/Svgs/serviceCardSvg1.svg'
import ServiceCardSvg2 from '@/assets/Svgs/serviceCardSvg2.svg'
import ServiceCardSvg3 from '@/assets/Svgs/serviceCardSvg3.svg'
import ServiceCardSvg4 from '@/assets/Svgs/serviceCardSvg4.svg'
import ServiceCardSvg5 from '@/assets/Svgs/serviceCardSvg5.svg'
import ServiceCardSvg6 from '@/assets/Svgs/serviceCardSvg6.svg'
import ServiceCardSvg7 from '@/assets/Svgs/serviceCardSvg7.svg'
import ServiceCardSvg8 from '@/assets/Svgs/serviceCardSvg8.svg'
import Slider from "@/components/Slider";
import PricingCard from "@/components/PricingCard";
import PricingCardSvg1 from '@/assets/Svgs/PricingCardSvg1.svg'
import PricingCardSvg2 from '@/assets/Svgs/pricingcardmiddlesvg.svg'
import IndustryExpertiseCard from "@/components/IndustryExpertiseCard";
import StethoscopeSvgIcon from '@/assets/Svgs/Stethoscope.svg'
import industryCard1 from '@/assets/Images/industryCard1.jpg'
import industryCard2 from '@/assets/Images/industryCard2.jpg'
import industryCard3 from '@/assets/Images/industryCard3.jpg'
import industryCard4 from '@/assets/Images/industryCard4.jpg'
import industryCard5 from '@/assets/Images/industryCard5.jpg'
import SuccessMissionCard from "@/components/SuccessMissionCard"
import SuccessCardSvg from "@/assets/Svgs/SuccessCardSvg1.svg"
import TestimonialSlider from "@/components/TestimonialSwipperSlider";


const Home = () => {
  return (
    <>
      <section className='bg-gradient-to-b from-blue-50 to-transparent'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between">
            {/* Text Section */}
            <div className="w-full text-center mb-10 lg:mb-0 mt-[150px]">
              <h1 className="text-4xl sm:text-5xl font-[500] text-gray-900 leading-tight">
                Bringing Ideas to Life Through
                <br />
                <span>Custom IT Solution</span>
              </h1>
              <p className="mt-4 text-gray-600 text-[16px] sm:text-base leading-relaxed md:w-[70%] mx-auto">
                At ReviseTech Innovations, we specialize in building smart,
                scalable, and user-friendly digital solutions – from websites
                and mobile apps to cloud systems and data dashboards. Whether
                you're in healthcare, mining, telecom, or food delivery, our
                technology brings your vision to life.
              </p>
              <div className="mt-8 flex space-x-4 flex items-center justify-center">
                <BlackArrowbtn value="Get a Free Quote" />
                <SimpleBtn value='Book a discovery call' />
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-[50px]">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                {/* Placeholder for your image */}
                <img
                  src={HeroImage}
                  alt="Team working together"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#242E49] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between">

            {/* Text Section */}
            <div className="flex flex-col lg:flex-row mb-10 gap-8 w-full">
              {/* Left Side */}
              <div className="w-full lg:w-1/2">
                <RedBtn value="About us" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mt-4">
                  Innovators. Engineers. Your Tech Partner.
                </h2>
              </div>

              {/* Right Side */}
              <div className="w-full lg:w-1/2">
                <p className="mt-4 text-white text-base leading-relaxed">
                  We’ve already helped clients streamline workflows, enhance
                  customer engagement, and simplify complex processes – and we’re
                  just getting started.
                  <br />
                  ReviseTech Innovations is a Canada-based startup driven by a
                  team of passionate developers, designers, and analysts. Though
                  newly formed, our team brings years of individual experience in
                  delivering high-impact digital solutions to real-world problems.
                  <br />
                  As a young and agile company, we embrace innovation and bring
                  clarity to technology. Whether it’s building a modern web
                  platform, crafting a mobile app, or visualizing your business
                  data – we turn your vision into a scalable solution.
                </p>
              </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start w-full">
              <PartnerCard
                number="01"
                image={CardWomenImg}
                title="Web Development"
                description="We understand your needs, goals, and challenges in a free consultation call."
              />
              <PartnerCard
                number="02"
                image={CardMan1Img}
                title="Mobile App Development"
                description="Intuitive and high-performing mobile apps for Android and iOS, built native or cross-platform."
                className="lg:mt-[50px]"
              />
              <PartnerCard
                number="03"
                image={CardMan2Img}
                title="Custom Software Solutions"
                description="Tailor-made platforms that automate processes and solve complex business problems."
              />
            </div>

          </div>
        </div>
      </section>


      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between">

            {/* Heading Section */}
            <div className="w-full text-center mb-10">
              <RedBtn value="How We Work" />
              <h1 className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] text-[#121212] font-[500] leading-tight mt-4">
                How We Work – Simple. <br className="hidden sm:block" /> Transparent. Effective.
              </h1>
              <p className="mt-4 text-[#868686] text-[18px] sm:text-lg max-w-2xl mx-auto">
                Step-by-step structure
              </p>
            </div>

            {/* Cards Section */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <TransparentWorkCard
                number="01"
                image={CardVectorSvg1}
                title="Discovery & Consultation"
                description="We understand your needs, goals, and challenges in a free consultation call."
              />
              <TransparentWorkCard
                number="02"
                image={CardVectorSvg2}
                title="Planning & Proposal"
                description="We define the scope, budget, and timeline with clarity and transparency."
              />
              <TransparentWorkCard
                number="03"
                image={CardVectorSvg3}
                title="Design & Prototyping"
                description="Our UI/UX team creates wireframes and visual designs that match your brand and user goals."
              />
              <TransparentWorkCard
                number="04"
                image={CardVectorSvg4}
                title="Development & Testing"
                description="Agile development with regular updates, demos, and testing to ensure quality."
              />
              <TransparentWorkCard
                number="05"
                image={CardVectorSvg5}
                title="Deployment & Support"
                description="We launch your solution and provide post-launch support to keep everything running smoothly."
              />
              <TransparentWorkCard
                number="06"
                image={CardVectorSvg6}
                title="Continuous Growth"
                description="Choose to retain us monthly or hourly for ongoing improvements, maintenance, and scaling."
              />
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-left mb-10">
            <RedBtn value="Our Services" />
            <h2 className="text-[32px] sm:text-[30px] md:text-[40px] lg:text-[48px] text-[#121212] font-[500] leading-tight mt-4 md:w-[50%]">
              Custom IT Services to Power Your Business
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ItServiceCard
              image={ServiceCardSvg1}
              title="Web Development"
              description="We understand your needs, goals, and challenges in a free consultation call."
            />
            <ItServiceCard
              image={ServiceCardSvg2}
              title="Mobile App Development"
              description="Intuitive and high-performing mobile apps for Android and iOS, built native or cross-platform."
            />
            <ItServiceCard
              image={ServiceCardSvg3}
              title="Custom Software Solutions"
              description="Tailor-made platforms that automate processes and solve complex business problems."
            />
            <ItServiceCard
              image={ServiceCardSvg4}
              title="Data Analytics"
              description="Insights-driven analytics to help you make informed decisions."
            />
            <ItServiceCard
              image={ServiceCardSvg5}
              title="Cloud Solutions"
              description="Scalable cloud services for your business needs."
            />
            <ItServiceCard
              image={ServiceCardSvg6}
              title="Cybersecurity"
              description="Protecting your data and systems from threats."
            />
            <ItServiceCard
              image={ServiceCardSvg7}
              title="Mobile App Development"
              description="Intuitive and high-performing mobile apps for Android and iOS, built native or cross-platform."
            />
            <ItServiceCard
              image={ServiceCardSvg8}
              title="Mobile App Development"
              description="Intuitive and high-performing mobile apps for Android and iOS, built native or cross-platform."
            />
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-col">
          <RedBtn value='Tech Stack We Use' />
          <h2 className="text-[32px] sm:text-[30px] md:text-[40px] lg:text-[48px] text-[#121212] font-[500] leading-tight mt-4 text-center max-w-3xl">
            We Build With Proven, Scalable Technologies
          </h2>
        </div>
      </section>

      <section className="bg-gradient-to-t from-[#1841D31A] to-[#BCCAFD0D] pt-8 pb-16">
        <Slider directionofscroll='animate-right-scroll ' />
        <Slider directionofscroll='animate-left-scroll ' />
      </section>


      <section className="py-16 bg-[#F8F8F8]">
        <div className="flex items-center justify-center flex-col mb-6 max-w-7xl mx-auto">
          <RedBtn value="Flexible Pricing Models" />
          <h1 className="mb-3 text-[32px] sm:text-[30px] md:text-[40px] lg:text-[48px] text-[#121212] font-[500] leading-tight mt-4 md:w-[60%] text-center mx-auto">
            Pricing That Fits Every Project Type
          </h1>
          <p className="text-center md:w-[60%] mx-auto text-[16px] md:text-[18px] font-[400] text-[#868686]">
            At ReviseTech Innovations, we believe flexibility is key. That’s why we offer multiple engagement models to meet your project’s size, pace, and complexity — whether you’re building from scratch, scaling, or just need expert help on-demand.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card 1: Fixed Project-Based Engagement */}
          <PricingCard
            image={PricingCardSvg1}
            iconBg="bg-indigo-600"
            title="Fixed Project-Based Engagement"
            subtitle="Businesses with clearly defined goals, features, and timelines."
            includedItems={[
              "One-time delivery or milestone-based execution",
              "Clear project scope, deadlines, and deliverables",
              "Regular progress updates and demos",
              "Quality assurance, testing, and post-launch support",
              "Dedicated team assigned from start to finish",
              "Ideal for websites, mobile apps, dashboards, or full system builds",
            ]}
            ctaDescription="Want to bring your idea to life with clarity and confidence?"
            ctaText="Request a Project Consultation"
            onClick={() => alert("CTA button clicked!")}
          />

          {/* Card 2: Monthly Team Engagement */}
          <PricingCard
            image={PricingCardSvg2}
            iconBg="bg-white"
            title="Monthly Team Engagement"
            subtitle="Ongoing projects, iterative development, or scaling your tech capabilities."
            includedItems={[
              "Full-time or part-time team members based on your needs",
              "Dedicated developers, designers, and testers",
              "Agile approach with sprint-based delivery",
              "Priority support and progress reporting",
              "Seamless integration with your in-house team",
              "Flexible team size depending on project evolution",
            ]}
            ctaDescription="Build faster and smarter with a dedicated remote team."
            ctaText="Schedule a Team Planning Call"
            onClick={() => alert("CTA button clicked!")}
            popular={true}
          />

          {/* Card 3: Hourly Engagement */}
          <PricingCard
            image={PricingCardSvg1}
            iconBg="bg-indigo-600"
            title="Hourly Engagement"
            subtitle="Quick tasks, maintenance, consulting, or small enhancements."
            includedItems={[
              "Minor UI/UX improvements or bug fixes",
              "Code audits and performance optimization",
              "API integrations or feature enhancements",
              "Technical consulting or troubleshooting",
              "Short-term collaboration with long-term value",
            ]}
            ctaDescription="Need quick help from a reliable tech team?"
            ctaText="Connect for Hourly Support"
            onClick={() => alert("CTA button clicked!")}
          />
        </div>

        {/* CTA Section */}
        <section className="py-12 mt-6 bg-gradient-to-b from-[#E6F0FA] to-[#fff] border border-[#D1E5FF] rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Not sure which model is <span className="block sm:inline">right for you?</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              Let's talk about your goals — we'll recommend the most cost-effective and efficient approach.
            </p>
            <div className="flex items-center justify-center mt-4 flex-wrap gap-4">
              <BlackArrowbtn value="Get In Touch" />
              <SimpleBtn value="Book a Free Consultation" />
            </div>
          </div>
        </section>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <RedBtn value="Industries We Serve" />
          <h2 className="text-[32px] sm:text-[30px] md:text-[40px] lg:text-[48px] text-[#121212] font-[500] leading-tight mt-4">
            Industry Expertise That Sets Us Apart
          </h2>
          <p className="text-[18px] mb-5 text-[#868686] font-[400] mt-4 md:w-[70%] ">
            We understand the unique challenges across different domains. Our solutions are built with business-specific insights to make a real impact.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 max-w-7xl mx-auto">
          {/* Card 1: Healthcare */}
          <IndustryExpertiseCard
            image={StethoscopeSvgIcon}
            backgroundImage={industryCard1}
            heading="Healthcare"
            paragraph="Patient portals, appointment systems, data visualizations"
          />
          {/* Card 2: Government & Public Services */}
          <IndustryExpertiseCard
            image={StethoscopeSvgIcon}
            backgroundImage={industryCard2}
            heading="Government & Public Services"
            paragraph="Automation tools, portals, secure dashboards"
          />
          {/* Card 3: Mining */}
          <IndustryExpertiseCard
            image={StethoscopeSvgIcon}
            backgroundImage={industryCard3}
            heading="Mining"
            paragraph="Shift tracking systems, HR platforms, reporting dashboards"
          />
          {/* Card 4: Telecom */}
          <IndustryExpertiseCard
            image={StethoscopeSvgIcon}
            backgroundImage={industryCard4}
            heading="Telecom"
            paragraph="Customer portals, service management, internal tools"
          />
          {/* Card 5: Food & Grocery */}
          <IndustryExpertiseCard
            image={StethoscopeSvgIcon}
            backgroundImage={industryCard5}
            heading="Food & Grocery"
            paragraph="Inventory systems, delivery apps, order management solutions"
          />
        </div>
      </section>

      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-col">
          <RedBtn value="Why Work With Us" />
          <h2 className="text-[32px] sm:text-[30px] md:text-[40px] lg:text-[48px] text-[#121212] font-[500] leading-tight mt-4 md:w-[70%] text-center mx-auto">
            Your Success Is Our Mission
          </h2>
          <p className="text-[18px] mb-5 text-[#868686] font-[400] mt-4 md:w-[70%] text-center mx-auto">
            At ReviseTech Innovations, we believe flexibility is key. That’s why we offer multiple engagement models to meet your project’s size, pace, and complexity — whether you’re building from scratch, scaling, or just need expert help on-demand.
          </p>
        </div>

        {/* Cards Section */}
        <div className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Card 1: Startup Spirit, Big Vision */}
            <SuccessMissionCard
              image={SuccessCardSvg}
              heading="Startup Spirit, Big Vision"
              paragraph="We're young, passionate, and committed to going the extra mile."
            />

            {/* Card 2: Custom-Built Software */}
            <SuccessMissionCard
              image={SuccessCardSvg}
              heading="Custom-Built Software"
              paragraph="No templates. No shortcuts. Every line of code is tailored for you."
            />

            {/* Card 3: Collaborative Process */}
            <SuccessMissionCard
              image={SuccessCardSvg}
              heading="Collaborative Process"
              paragraph="Your ideas + our expertise = solutions that work."
            />

            {/* Card 4: Transparent Communication */}
            <SuccessMissionCard
              image={SuccessCardSvg}
              heading="Transparent Communication"
              paragraph="Regular updates, clear timelines, and honest pricing."
            />

            {/* Card 5: Proven Quality */}
            <SuccessMissionCard
              image={SuccessCardSvg}
              heading="Proven Quality"
              paragraph="Always delivered a successful real-world project with client satisfaction."
            />
          </div>
        </div>

        {/* Testimonial Slider */}
        <div>
          <TestimonialSlider />
        </div>
      </section>


      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#091D3F]">
        <div className="max-w-7xl mx-auto flex items-center justify-center flex-col text-white">
          <h2 className="text-[32px] sm:text-[30px] md:text-[40px] lg:text-[48px] font-[500] leading-tight mt-4 md:w-[50%] text-center mx-auto">
            Ready to Turn Your Idea Into a Powerful Digital Product?
          </h2>
          <p className="text-[18px] mb-5 text-[#868686] font-[400] mt-4 md:w-[60%] text-center mx-auto">
            Let’s talk about how we can help your business grow through technology.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-4">
            <BlackArrowbtn value="Get In Touch" />
            <SimpleBtn value="Book a Free Consultation" />
          </div>
        </div>
      </section>


    </>
  );
};

export default Home;
