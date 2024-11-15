import React from "react";

const DailyReport = () => {
  return (
    <div className="w-full p-[24px] rounded-[58px] border-[1px] border-black bg-white">
      <div className="font-semibold text-[20px]">PERSONNEL IN CHARGE</div>
      <div className="mt-2">
        <div className="flex items-center justify-start text-[16px] mb-1">
          <div className="font-semibold flex items-center justify-between w-[300px]">
            <div>DAY/ NIGHT DRILLING SUPV.</div>
            <div>:</div>
          </div>
          <div className="ml-4 flex items-center justify-start w-3/4">
            Continued RIH BHA #24 (Milling)from 558 to 850.5 mMD (tagged 10
            klbs), milling from 850.5 mMD to 856.74 mMD, CHC, POOH 12-1/4”
            Silver Black Window Mill + BHA #24 (Milling) from 856.74 mMD to
            surface, RIH BHA #25 (Milling) from surface to 73 mMD
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center justify-start text-[16px] mb-1">
          <div className="font-semibold flex items-center justify-between w-[300px]">
            <div>24 HOURS FORECAST</div>
            <div>:</div>
          </div>
          <div className="ml-4 flex items-center justify-start w-3/4">
            RIH BHA #25 (Milling) to 856.74 mMD, milling to 858 mMD and DOF till
            865 mMD (conditional)
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center justify-start text-[16px] mb-1">
          <div className="font-semibold flex items-center justify-between w-[300px]">
            <div>STATUS 05:00 Hrs</div>
            <div>5-Jun-23 :</div>
          </div>
          <div className="ml-4 flex items-center justify-start w-3/4">
            Milling (open window 13-3/8” casing) at 857.06 mMD
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyReport;
