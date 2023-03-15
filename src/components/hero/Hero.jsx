import React from "react";
import Lottie from "lottie-react";
import complex from "../../assets/complex.json";

const Hero = () => {
  return (
    <div className="grid md:flex items-center justify-start px-[100px] ">
      <div className="md:6/12 mt-[200px]">
        <div className="md:w-[500px]">
          I like to look at one or two random quotes each morning. It can be a
          good exercise for journaling prompts.
        </div>
        <div className="mt-[50px]">
          <div className="md:w-[500px]">
            <Lottie animationData={complex} loop={true} />
          </div>
        </div>
      </div>
      <div className="md:6/12 md:ml-[200px] h-[600px] text-xl">
        <div className="md:w-[600px]">
          I like to look at one or two random quotes each morning. It can be a
          good exercise for journaling prompts.
        </div>
      </div>
    </div>
  );
};

export default Hero;
