import React, { useContext } from "react";
// import DashboardEmpty from "./DashboardEmpty";
import { useForm } from "react-hook-form";
import { GoPlus } from "react-icons/go";
import {
  useGetActivityQuery,
  useCreateActivityMutation,
} from "../../services/activityApi";
import Item from "./Item";
import { ModalContext } from "../modal/ModalContext";
import DeleteItem from "./DeleteItem";
import Report from "../drillingReport/Report";

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
    <div className="mt-[49px] bg-[#EE5625]">
      <div className="mx-[24px]">
        <Report />
      </div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
       
      </form> */}
    </div>
  );
};

export default Dashboard;
