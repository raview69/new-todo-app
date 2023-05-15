import React from "react";
import { TbTrash } from "react-icons/tb";
import { TbPencil } from "react-icons/tb";

const TodoItem = () => {
  return (
    <div className="w-[1000px] h-[80px] flex items-center justify-between">
      <div>
        <div></div>
        <div></div>
        <TbPencil />
      </div>
      <div>
        <TbTrash />
      </div>
    </div>
  );
};

export default TodoItem;
