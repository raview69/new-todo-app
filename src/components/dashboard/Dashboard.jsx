import React, { useContext } from "react";
import DashboardEmpty from "./DashboardEmpty";
import { useForm } from "react-hook-form";
import { GoPlus } from "react-icons/go";
import {
  useGetActivityQuery,
  useCreateActivityMutation,
} from "../../services/activityApi";
import Item from "./Item";
import { ModalContext } from "../modal/ModalContext";
import DeleteItem from "./DeleteItem";

const Dashboard = () => {
  const { data } = useGetActivityQuery();
  const activityData = data?.data.slice(0, 20);
  const [createActivity] = useCreateActivityMutation();
  const { handleModal } = useContext(ModalContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "ini title",
      email: "iniwmail@gmail.com",
    },
  });

  const onSubmit = async (data) => {
    await createActivity(data);
  };

  return (
    <div data-cy="activity-add-button" className="px-[220px] mt-[49px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between">
          <div className="font-bold text-[36px] leading-[54px] text-black">
            Activity
          </div>
          <input {...register("title")} type="hidden" />
          <button
            data-cy="activity-add-button"
            className="flex items-center justify-center text-white bg-[#16ABF8] w-[159px] h-[53px] rounded-[45px] leading-[27px] text-[18px] font-semibold"
          >
            <GoPlus className="text-md font-bold mr-1" /> Tambah
          </button>
        </div>
      </form>
      <div className="py-[59px]">
        {data ? (
          <div className="grid grid-cols-4 gap-4">
            {activityData?.map((item, index) => (
              <div key={index}>
                <Item
                  title={item.title}
                  date={item.created_at}
                  id={item.id}
                  deleteClick={() =>
                    handleModal(<DeleteItem itemData={item} />)
                  }
                />
              </div>
            ))}
          </div>
        ) : (
          <DashboardEmpty />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
