import React, { useState, useContext } from "react";
import { TbTrash } from "react-icons/tb";
import { TbPencil } from "react-icons/tb";
import { GiPlainCircle } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { useUpdateTodoMutation } from "../../services/activityApi";
import { ModalContext } from "../modal/ModalContext";
import TodoForm from "./TodoForm";
import DeleteListItem from "./DeleteListItem";

const TodoList = ({ dataTodo }) => {
  const [idTodo, setIdTodo] = useState();
  const [updateTodo] = useUpdateTodoMutation();
  const { handleModal } = useContext(ModalContext);
  const { handleSubmit, setValue } = useForm({
    defaultValues: {
      is_active: "",
    },
  });
  const priorityDetails = {
    "very-high": ["Very High", "#ED4C5C"],
    high: ["High", "#F8A541"],
    medium: ["Medium", "#00A790"],
    low: ["Low", "#428BC1"],
    "very-low": ["Very Low", "#8942C1"],
  };

  const onSubmit = async (data) => {
    await updateTodo({ id: idTodo, data });
  };

  console.log(dataTodo);

  return (
    <div data-cy="TodoList">
      {dataTodo?.todo_items.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="bg-[#FFFFFF] w-[1000px] h-[80px] flex items-center justify-between px-[28px] rounded-[12px] shadow-lg">
            <div className="flex items-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div
                  data-cy="todo-item-checkbox"
                  onClick={() => setIdTodo(item.id)}
                >
                  {item.is_active === 0 ? (
                    <button onClick={() => setValue("is_active", true)}>
                      <ImCheckboxChecked className="text-[#16ABF8]" />
                    </button>
                  ) : (
                    <button onClick={() => setValue("is_active", false)}>
                      <ImCheckboxUnchecked className="text-[#C7C7C7]" />
                    </button>
                  )}
                </div>
              </form>

              <div className="flex items-center mx-[20px]">
                <GiPlainCircle
                  className="mr-2"
                  style={{
                    color: priorityDetails[item.priority][1],
                  }}
                />
                {item.title}
              </div>
              <TbPencil
                className="text-[#C4C4C4] text-lg cursor-pointer"
                onClick={() =>
                  handleModal(<TodoForm id={item.id} isEdit={false} />)
                }
              />
            </div>
            <div>
              <TbTrash
                data-cy="todo-item-delete-button"
                className="text-[#C4C4C4] text-lg cursor-pointer"
                onClick={() => handleModal(<DeleteListItem itemData={item} />)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
