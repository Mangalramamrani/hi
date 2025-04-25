import React from 'react';
import TwitterSvg from '../assets/Svgs/Twitter.svg';
import LinkedInSvg from '../assets/Svgs/LinkedIn.svg';
import InstagramSvg from '../assets/Svgs/Instagram.svg';
import FooterBackgroundImage from '../assets/Svgs/footerBackgroundSvg.svg';

const Footer = () => {
  return (
    <footer className="text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background with proper blending */}
      <div className="absolute inset-0 bg-[#091D3F] z-0" />
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${FooterBackgroundImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'lighten'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">ReviseTech Innovations</h3>
            <p className="text-[#FFFFFF80] text-sm sm:text-base">
              Address <br />
              Sutbury Ontario, Canada
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-[#FFFFFF80] text-sm sm:text-base">
              {['Web Development', 'UI / UX Design', 'Data Analysis and Visualization',
                'API Development', 'Mobile App Development', 'Cloud Services'].map((service) => (
                  <li key={service} className="hover:text-white transition-colors duration-300 cursor-pointer">
                    {service}
                  </li>
                ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Useful Link</h4>
            <ul className="space-y-2 text-[#FFFFFF80] text-sm sm:text-base">
              {['Home', 'About Us', 'Our Workflow', 'Service', 'Contact Us'].map((link) => (
                <li key={link} className="hover:text-white transition-colors duration-300 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-2 text-[#FFFFFF80] text-sm sm:text-base">
              <div className="hover:text-white transition-colors duration-300">
                <p className="font-medium">Email Us</p>
                <p>contact.us@gmail.com</p>
              </div>
              <div className="hover:text-white transition-colors duration-300 mt-4">
                <p className="font-medium">Call Us</p>
                <p>+1 905-963-0824</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 my-10">
          <a href="#" className="hover:opacity-80 transition-opacity duration-300">
            <img src={TwitterSvg} alt="Twitter" className="w-16 h-16" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity duration-300">
            <img src={LinkedInSvg} alt="LinkedIn" className="w-16 h-16" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity duration-300">
            <img src={InstagramSvg} alt="Instagram" className="w-16 h-16" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#FFFFFF20] mt-12 pt-8 text-center text-sm sm:text-base">
          <p>Copyright © 2025 Revisetech Innovations. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;