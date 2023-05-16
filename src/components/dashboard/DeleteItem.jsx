import React, { useState, useContext } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { useDeleteActivityMutation } from "../../services/activityApi";
import { useForm } from "react-hook-form";
import { ModalContext } from "../modal/ModalContext";
import AlertActivity from "./AlertActivity";

const DeleteItem = ({ itemData }) => {
  const [deleteActivity] = useDeleteActivityMutation();
  const [isDelete, setIsDelete] = useState(false);
  const { handleModal } = useContext(ModalContext);
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    await deleteActivity(itemData?.id);
    setIsDelete(true);
    setTimeout(() => {
      handleModal();
    }, 1000);
  };

  return (
    <>
      {isDelete ? (
        <AlertActivity />
      ) : (
        <div className="w-[490px] h-[355px] bg-white rounded-[12px] py-[43px] px-[62px]">
          <div className="flex items-center justify-center">
            <FiAlertTriangle className="text-7xl text-[#ED4C5C]" />
          </div>
          <div className="mb-[46px] mt-[46px] text-center">
            Apakah anda yakin menghapus activity {""}
            <span className="font-bold">“{itemData?.title}”?</span>
          </div>
          <div className="flex items-center justify-center ">
            <button
              data-cy="modal-delete-cancel-button"
              onClick={() => handleModal()}
              className="flex items-center justify-center text-black bg-[#F4F4F4] w-[150px] h-[54px] rounded-[45px] leading-[27px] text-[18px] font-semibold mr-4"
            >
              Batal
            </button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <button
                data-cy="activity-item-delete-button"
                className="flex items-center justify-center text-white bg-[#ED4C5C] w-[150px] h-[54px] rounded-[45px] leading-[27px] text-[18px] font-semibold"
              >
                Hapus
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteItem;
