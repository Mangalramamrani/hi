import React from "react";
import { Link } from "react-router-dom";
import RightArrowSvg from "../assets/Svgs/Vector.svg";

const BlackArrowbtn = (props: { value: string }) => {
  const { value } = props;
  return (
    <div className="hidden md:flex">
      <Link
        to="/booking"
        className='bg-[#242E49] pl-[16px] text-white font-normal py-[8px] pr-[8px] rounded-full text-sm hover:bg-blue-800 transition-colors flex items-center'
      >
        {value}
        <span className="ml-2 w-6 h-6 bg-white p-1 rounded-full flex items-center justify-center text-[16px] font-[800] ">
          <img src={RightArrowSvg} alt="Arrow" />
        </span>
      </Link>
    </div>
  );
};

export default BlackArrowbtn;
