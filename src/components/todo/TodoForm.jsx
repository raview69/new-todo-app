import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

const TodoForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  // const optionPriority = {
  //   "very-high": "Sangat Tinggi",
  //   high: "Tinggi",
  //   medium: "Sedang",
  //   low: "Rendah",
  //   "very-low": "Sangat Rendah",
  // };

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
  };

  return (
    <div className="bg-white w-[830px] h-[403px] rounded-[12px] shadow-lg">
      <div className="flex items-center justify-between border-b-[1px] border-[#E5E5E5] px-[30px] py-[24px]">
        <div className="text-[18px] leading-[27px] font-medium">
          Tambah List Item
        </div>
        <div>
          <CgClose className="text-[#A4A4A4] text-lg" />
        </div>
      </div>
      <div className="px-[30px]">
        <div className="mt-[38px]">
          <div className="text-[12px] leading-[18px] font-medium">
            NAMA LIST ITEM
          </div>
          <div>
            <input
              type="input"
              className="border-[1px] border-[#E5E5E5] rounded-[6px] w-[759px] h-[52px] text-[16px] leading-[24px] text-[#A4A4A4] px-[18px] mt-2"
              defaultValue="Tambahkan nama list item"
            />
          </div>
        </div>
        <div className="mt-[26px]">
          <div className="text-[12px] leading-[18px] font-medium">PRIORITY</div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TodoForm;
