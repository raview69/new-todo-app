import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GoPlus } from "react-icons/go";
import { MdArrowBackIosNew } from "react-icons/md";
import { TbPencil } from "react-icons/tb";
import TodoEmpty from "./TodoEmpty";
import {
  useUpdateTitleMutation,
  useGetActivityByIdQuery,
  useGetTitleByIdQuery,
} from "../../services/activityApi";
import { ModalContext } from "../modal/ModalContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoDetails = () => {
  const { id } = useParams();
  const [updateTitle] = useUpdateTitleMutation();
  const { data: title } = useGetTitleByIdQuery(id);
  const { data: todoData } = useGetActivityByIdQuery(id);
  const { handleModal } = useContext(ModalContext);
  const { register, reset } = useForm({
    defaultValues: {
      title: "",
    },
  });

  useEffect(() => {
    reset({ title: title?.title });
  }, [title]);

  const onSubmit = async (data) => {
    await updateTitle({ id, data });
  };

  return (
    <div className="px-[220px] mt-[49px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between ">
          <MdArrowBackIosNew className="text-2xl" />
          <div className="font-bold text-[36px] leading-[54px] text-black mx-[28px]">
            <input
              {...register("title")}
              type="input"
              className="bg-[#F4F4F4] outline-none w-[250px]"
              onChange={(e) => {
                onSubmit({ title: e.target.value });
              }}
            />
          </div>
          <TbPencil className="text-2xl text-[#A4A4A4]" />
        </div>
        <div
          onClick={() => handleModal(<TodoForm id={id} />)}
          className="flex items-center justify-center cursor-pointer text-white bg-[#16ABF8] w-[159px] h-[53px] rounded-[45px] leading-[27px] text-[18px] font-semibold"
        >
          <GoPlus className="text-md font-bold mr-1" /> Tambah
        </div>
      </div>
      <div className="mt-[59px]">
        {todoData?.todo_items.length === 0 ? (
          <div
            onClick={() => handleModal(<TodoForm id={id} />)}
            className="cursor-pointer"
          >
            <TodoEmpty />
          </div>
        ) : (
          <TodoList dataTodo={todoData} />
        )}
      </div>
    </div>
  );
};

export default TodoDetails;
