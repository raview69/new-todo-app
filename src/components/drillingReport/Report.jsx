import React from "react";
import GeneralRepot from "./GeneralRepot";
import PersonelReport from "./PersonelReport";
import DailyReport from "./DailyReport";

const Report = () => {
  return (
    <div className="bg-[#EE5625] p-[24px]">
      <div className="flex items-start justify-start">
        <div className="mr-4">
          <div>
            <GeneralRepot />
          </div>
          <div className="mt-3">
            <PersonelReport />
          </div>
        </div>
        <div>
          <div>
            <GeneralRepot />
          </div>
          <div className="mt-3">
            <PersonelReport />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <DailyReport />
      </div>
    </div>
  );
};

export default Report;
