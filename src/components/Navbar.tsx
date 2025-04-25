import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoImg from "../assets/Svgs/ReviseTech.svg";
import BlackArrowbtn from "./BlackArrowbtn";
import RightArrowSvg from "../assets/Svgs/Vector.svg";
import "../Styles/style.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pt-[10px] ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        } p-2`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between overflow-hidden px-4">
        {/* Logo */}
        <div className="w-[120px]">
          <img src={LogoImg} alt="Logo" className="w-full" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-4 p-2 rounded-full bg-white max-w-full">
          <Link
            to="/"
            className={`px-4 py-2 ml-0 rounded-full text-sm transition ${isActive("/")
                ? "bg-[#242E49] text-white hover:bg-[#1b2236]"
                : "hover:bg-[#242E49] hover:text-white text-gray-800"
              }`}
          >
            Home
          </Link>

          <Link
            to="/about-us"
            className={`px-4 ml-0 py-2 rounded-full text-sm transition ${isActive("/about-us")
                ? "bg-[#242E49] text-white hover:bg-[#1b2236]"
                : "hover:bg-[#242E49] hover:text-white text-gray-800"
              }`}
          >
            About Us
          </Link>

          <Link
            to="/our-workflow"
            className={`px-4 py-2 rounded-full text-sm transition ${isActive("/our-workflow")
                ? "bg-[#242E49] text-white hover:bg-[#1b2236]"
                : "hover:bg-[#242E49] hover:text-white text-gray-800"
              }`}
          >
            Our Workflow
          </Link>

          <Link
            to="/services"
            className={`px-4 py-2 rounded-full text-sm transition ${isActive("/services")
                ? "bg-[#242E49] text-white hover:bg-[#1b2236]"
                : "hover:bg-[#242E49] hover:text-white text-gray-800"
              }`}
          >
            Services
          </Link>

          <Link
            to="/technology"
            className={`px-4 py-2 rounded-full text-sm transition ${isActive("/technology")
                ? "bg-[#242E49] text-white hover:bg-[#1b2236]"
                : "hover:bg-[#242E49] hover:text-white text-gray-800"
              }`}
          >
            Technology
          </Link>

          <Link
            to="/contact-us"
            className={`px-4 py-2 rounded-full text-sm transition ${isActive("/contact-us")
                ? "bg-[#242E49] text-white hover:bg-[#1b2236]"
                : "hover:bg-[#242E49] hover:text-white text-gray-800"
              }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Booking Button */}
        <div className="hidden md:block">
          <BlackArrowbtn value="Booking Now" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            <svg
              className="w-6 h-6 mr-[10px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white rounded-lg p-4 shadow space-y-3">
          <Link
            to="/"
            onClick={toggleMenu}
            className={`block px-4 py-2 rounded-full text-sm transition ${isActive("/")
                ? "bg-[#242E49] text-white hover:bg-[#1b2236]"
                : "hover:bg-[#242E49] hover:text-white text-gray-800"
              }`}
          >
            Home
          </Link>

          <Link
            to="/about-us"
            onClick={toggleMenu}
            className={`block px-4 py-2 rounded-full text-sm transition ${isActive("/about-us")
                ? "bg-[#242E49] text-white hover:bg-[#1b2236]"
                : "hover:bg-[#242E49] hover:text-white text-gray-800"
              }`}
          >
            About Us
          </Link>

          <Link
            to="/our-workflow"
            onClick={toggleMenu}
            className={`block px-4 py-2 rounded-full text-sm transition ${isActive("/our-workflow")
                ? "bg-[#242E49] text-white hover:bg-[#1b2236]"
                : "hover:bg-[#242E49] hover:text-white text-gray-800"
              }`}
          >
            Our Workflow
          </Link>

          <Link
            to="/services"
            onClick={toggleMenu}
            className={`block px-4 py-2 rounded-full text-sm transition ${isActive("/services")
                ? "bg-[#242E49] text-white hover:bg-[#1b2236]"
                : "hover:bg-[#242E49] hover:text-white text-gray-800"
              }`}
          >
            Services
          </Link>

          <Link
            to="/technology"
            onClick={toggleMenu}
            className={`block px-4 py-2 rounded-full text-sm transition ${isActive("/technology")
                ? "bg-[#242E49] text-white hover:bg-[#1b2236]"
                : "hover:bg-[#242E49] hover:text-white text-gray-800"
              }`}
          >
            Technology
          </Link>

          <Link
            to="/contact-us"
            onClick={toggleMenu}
            className={`block px-4 py-2 rounded-full text-sm transition ${isActive("/contact-us")
                ? "bg-[#242E49] text-white hover:bg-[#1b2236]"
                : "hover:bg-[#242E49] hover:text-white text-gray-800"
              }`}
          >
            Contact Us
          </Link>

          <Link
            to="/booking"
            onClick={toggleMenu}
            className="flex items-center justify-center bg-[#242E49] text-white px-4 py-2 rounded-full hover:bg-blue-800 transition"
          >
            Booking Now
            <span className="ml-2 w-4 h-4 bg-white flex items-center justify-center rounded-full">
              <img src={RightArrowSvg} alt="Arrow" className="w-3 h-3" />
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
