import React from "react";
import ActivityIcon from "../../assets/activity-icon.svg";

const DashboardEmpty = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={ActivityIcon} alt="emptylogo" className="w-[767px]" />
    </div>
  );
};

export default DashboardEmpty;
