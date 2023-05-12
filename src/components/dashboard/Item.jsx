import React from "react";
import { TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import format from "date-fns/format";

const Item = ({ title, id, date }) => {
  const formattedDate = format(new Date(date), "HH:mm dd MMMM yyyy");

  return (
    <>
      <Link to={`quests/${id}/edit`}>
        <div
          className="w-[235px] h-[234px] px-[26px] py-[22px] bg-white rounded-[12px] flex flex-col justify-between shadow-lg"
          key={id}
        >
          <div className="text-[18px] leading-[27px] text-black font-bold">
            {title}
          </div>
          <div className="flex items-center justify-between text-[#888888] text-[14px] leading-[21px]">
            {formattedDate}
            <TbTrash className="text-xl" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
