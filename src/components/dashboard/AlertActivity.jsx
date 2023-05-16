import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const AlertActivity = () => {
  return (
    <div className="w-[490px] h-[58px] px-[30px] flex items-center justify-start text-[14px] leading-[150px] text-black bg-white rounded-[12px] shadow-lg">
      <RiErrorWarningLine className="text-[#00A790] text-xl mr-2" />
      Activity berhasil dihapus
    </div>
  );
};

export default AlertActivity;
