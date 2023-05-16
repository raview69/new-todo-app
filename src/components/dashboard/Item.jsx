import React from "react";
import { TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import format from "date-fns/format";

const Item = ({ title, id, date, deleteClick }) => {
  const formattedDate = format(new Date(date), "HH:mm dd MMMM yyyy");

  return (
    <div
      data-cy="header-title"
      className="w-[235px] h-[234px] px-[26px] py-[22px] bg-white rounded-[12px] flex flex-col justify-between shadow-lg"
      key={id}
    >
      <Link to={`quests/${id}/edit`} className="h-[150px]">
        <div>
          <div
            data-cy="activity-title"
            className="text-[18px] leading-[27px] text-black font-bold"
          >
            {title}
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between text-[#888888] text-[14px] leading-[21px]">
        {formattedDate}
        <div className="cursor-pointer" onClick={deleteClick}>
          <TbTrash className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Item;
