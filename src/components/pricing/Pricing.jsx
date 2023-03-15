import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import newbie from "../../assets/newbie5.json";
import medium from "../../assets/medium.json";
import complex from "../../assets/complex.json";
import check from "../../assets/check.svg";

const Pricing = () => {
  return (
    <>
      <div className="flex items-center justify-center text-white pt-[60px]">
        <div className="grid items-start justify-start bg-[#62D1FE] p-[40px] w-[300px] h-[700px] border-l-2 border-y-2 border-[#00B6FF]">
          <div className="flex items-center justify-center text-2xl font-semibold">
            Basic
          </div>
          <div className="w-full flex items-center justify-center my-6">
            <Lottie animationData={newbie} loop={true} />
          </div>
          <div className="h-[220px]">
            <div className="flex items-start justify-start mb-2">
              <img src={check} alt="" className="mt-1" />
              &nbsp;Mencatat barang masuk
            </div>
            <div className="flex items-start justify-start mb-2">
              <img src={check} alt="" className="mt-1" />
              &nbsp;Mencatat barang keluar
            </div>
            <div className="flex items-start justify-start mb-2">
              <img src={check} alt="" className="mt-1" />
              &nbsp;Mencatat hasil keuntungan
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-6">
            <div className="border-2 border-white rounded-md font-semibold px-[20px] py-2 text-lg">
              Try Basic
            </div>
          </div>
        </div>
        <div className="grid items-start justify-start bg-[#62D1FE] p-[40px] w-[300px] h-[700px] -mt-[40px] border-2 border-[#00B6FF]">
          <div className="flex items-center justify-center text-2xl font-semibold">
            Business
          </div>
          <div className="w-full flex items-start justify-center my-6">
            <Lottie animationData={medium} loop={true} />
          </div>
          <div className="h-[220px]">
            <div className="flex items-start justify-start mb-2">
              <img src={check} alt="" className="mt-1" />
              &nbsp;Mencatat barang masuk dan keluar
            </div>
            <div className="flex items-start justify-start mb-2">
              <img src={check} alt="" className="mt-1" />
              &nbsp;Mencatat Keuntungan
            </div>
            <div className="flex items-start justify-start mb-2">
              <img src={check} alt="" className="mt-1" />
              &nbsp;Dapat menganalisa hasil penjualan dengan CHART
            </div>
            <div className="flex items-start justify-start mb-2">
              <img src={check} alt="" className="mt-1" />
              &nbsp;Support 7x24 Jam
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-6">
            <div className="border-2 border-white rounded-md font-semibold px-[20px] py-2 text-lg">
              Try Business
            </div>
          </div>
        </div>
        <div className="grid items-start justify-start bg-[#62D1FE] p-[40px] w-[300px] h-[700px] border-r-2 border-y-2 border-[#00B6FF]">
          <div className="flex items-center justify-center text-2xl font-semibold">
            Entrepreneur
          </div>
          <div className="w-full flex items-center justify-center my-6">
            <Lottie animationData={complex} loop={true} />
          </div>
          <div className="h-[220px]">
            <div className="flex items-start justify-start mb-2">
              <img src={check} alt="" className="mt-1" />
              &nbsp;Mencatat barang masuk dan keluar
            </div>
            <div className="flex items-start justify-start mb-2">
              <img src={check} alt="" className="mt-1" />
              &nbsp;Mencatat Keuntungan
            </div>
            <div className="flex items-start justify-start mb-2">
              <img src={check} alt="" className="mt-1" />
              &nbsp;Mencatat Keuntungan
            </div>
            <div className="flex items-start  justify-start mb-2">
              <img src={check} alt="" className="mt-1" />
              &nbsp;Support 7x24 Jam
            </div>
            <div className="flex items-start justify-start mb-2">
              <img src={check} alt="" className="mt-1" />
              &nbsp;Export data ke Excel
            </div>
            <div className="flex items-start justify-start mb-2">
              <img src={check} alt="" className="mt-1" />
              &nbsp;AI Prediksi penghasilan
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-6">
            <div className="border-2 border-white rounded-md font-semibold px-[20px] py-2 text-lg">
              Try Entrepreneur
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
