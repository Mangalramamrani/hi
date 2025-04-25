import React from "react";

const Redbtn = (props: { value: string }) => {
  const { value } = props;
  return (
    <button className="bg-[#E60000] py-1 px-4 rounded-full mb-3 text-[15px] text-white">
      {value}
    </button>
  );
};

export default Redbtn;
