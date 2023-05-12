import React from "react";
import { useParams } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import TodoEmpty from "./TodoEmpty";

const TodoDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="px-[220px] mt-[49px]">
      <div className="flex items-center justify-between">
        <div className="font-bold text-[36px] leading-[54px] text-black">
          Activity
        </div>
        <div className="flex items-center justify-center text-white bg-[#16ABF8] w-[159px] h-[53px] rounded-[45px] leading-[27px] text-[18px] font-semibold">
          <GoPlus className="text-md font-bold mr-1" /> Tambah
        </div>
      </div>
      <div className="mt-[59px]">
        <TodoEmpty />
      </div>
    </div>
  );
};

export default TodoDetails;
