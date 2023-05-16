import React from "react";
import ListIcon from "../../assets/list-icon.svg";

const TodoEmpty = () => {
  return (
    <div
      data-cy="todo-empty-state"
      className="flex items-center justify-center"
    >
      <img src={ListIcon} alt="emptylogo" className="w-[541px]" />
    </div>
  );
};

export default TodoEmpty;
