import React, { useState, useContext, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { GiPlainCircle } from "react-icons/gi";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { ModalContext } from "../modal/ModalContext";
import { useForm } from "react-hook-form";
import { useCreateTodoMutation } from "../../services/activityApi";

const TodoForm = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("very-high");
  const { handleModal } = useContext(ModalContext);
  const [createTodo] = useCreateTodoMutation();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: "",
      activity_group_id: Number(id),
      priority: "very-high",
    },
  });

  const priority = ["very-high", "high", "medium", "low", "very-low"];

  const priorityDetails = {
    "very-high": ["Very High", "#ED4C5C"],
    high: ["High", "#F8A541"],
    medium: ["Medium", "#00A790"],
    low: ["Low", "#428BC1"],
    "very-low": ["Very Low", "#8942C1"],
  };

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
  };

  const onSubmit = async (data) => {
    await createTodo(data);
    handleModal();
  };

  useEffect(() => {
    if (selectedOption) {
      setValue("priority", selectedOption);
    }
  }, [selectedOption]);

  return (
    <div className="bg-white w-[830px] rounded-[12px] shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between border-b-[1px] border-[#E5E5E5] px-[30px] py-[24px]">
          <div className="text-[18px] leading-[27px] font-medium">
            Tambah List Item
          </div>
          <div onClick={handleModal}>
            <CgClose className="text-[#A4A4A4] text-lg cursor-pointer" />
          </div>
        </div>
        <div className="px-[30px] border-b-[1px] border-[#E5E5E5] py-[24px]">
          <div className="mt-[38px]">
            <div className="text-[12px] leading-[18px] font-medium">
              NAMA LIST ITEM
            </div>
            <div>
              <input
                {...register("title")}
                type="input"
                className="border-[1px] border-[#E5E5E5] rounded-[6px] w-[759px] h-[52px] text-[16px] outline-none leading-[24px] text-[#A4A4A4] px-[18px] mt-2"
                placeholder="Tambahkan nama list item"
              />
            </div>
          </div>
          <div className="mt-[26px]">
            <div className="text-[12px] leading-[18px] font-medium">
              PRIORITY
            </div>
            <div onClick={toggling}>
              <div className="w-[205px] cursor-pointer flex items-center justify-between text-black text-[16px] leading-[24px] border-[1px] border-[#E5E5E5] rounded-[6px] py-[14px] px-3 mt-2">
                <div className="flex items-center">
                  <GiPlainCircle
                    className="mr-2"
                    style={{
                      color: `${priorityDetails[selectedOption][1]}`,
                    }}
                  />
                  <div> {priorityDetails[selectedOption][0]}</div>
                </div>
                <div>
                  {isOpen ? (
                    <SlArrowUp className="text-black" />
                  ) : (
                    <SlArrowDown className="text-black" />
                  )}
                </div>
              </div>
              {isOpen && (
                <div className="w-[205px] bg-white text-[#4A4A4A] absolute cursor-pointer text-[16px] leading-[24px] border-x-[1px] border-t-[1px] border-[#E5E5E5] rounded-[6px]">
                  {priority?.map((item, index) => (
                    <div
                      key={index}
                      onClick={onOptionClicked(item)}
                      className={
                        index === 4
                          ? "flex items-center py-[14px] border-[#E5E5E5] pl-3"
                          : "flex items-center py-[14px] border-b-[1px] border-[#E5E5E5] pl-3"
                      }
                    >
                      <GiPlainCircle
                        className="mr-2"
                        style={{
                          color: `${priorityDetails[item][1]}`,
                        }}
                      />
                      <div>{priorityDetails[item][0]}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end px-[30px] mt-[15px] mb-[20px]">
          <button className="flex items-center justify-center text-white bg-[#16ABF8] w-[150px] h-[54px] rounded-[45px] leading-[27px] text-[18px] font-semibold">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
