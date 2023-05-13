import React, { useState, useEffect } from "react";
import DashboardEmpty from "./DashboardEmpty";
import { useForm } from "react-hook-form";
import { GoPlus } from "react-icons/go";
import {
  useGetActivityQuery,
  useCreateActivitMutation,
} from "../../services/activityApi";
import Item from "./Item";

const Dashboard = () => {
  const { data } = useGetActivityQuery();
  const activityData = data?.data.slice(0, 20);
  const [createActivity] = useCreateActivitMutation();

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
    <div className="px-[220px] mt-[49px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between">
          <div className="font-bold text-[36px] leading-[54px] text-black">
            Activity
          </div>
          <input {...register("title")} type="hidden" />
          <button className="flex items-center justify-center text-white bg-[#16ABF8] w-[159px] h-[53px] rounded-[45px] leading-[27px] text-[18px] font-semibold">
            <GoPlus className="text-md font-bold mr-1" /> Tambah
          </button>
        </div>
      </form>

      <div className="mt-[59px]">
        <div className="grid grid-cols-4 gap-4">
          {activityData?.map((item, index) => (
            <div key={index}>
              <Item title={item.title} date={item.created_at} id={item.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;