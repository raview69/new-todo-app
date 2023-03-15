import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/keda_logo.svg";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {isTabletOrMobile ? (
        <>
          <div className="flex items-center justify-between px-[30px] h-[80px]">
            <div>
              <img
                src={Logo}
                alt="poinswapLogo"
                className="h-[50px] w-[50px]"
              />
            </div>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <GiHamburgerMenu className="text-3xl text-[#62D1FE]" />
            </div>
          </div>
          {isMenuOpen && (
            <div className="bg-[#62D1FE] h-screen w-full -mt-[80px]">
              <div className="flex items-center justify-end h-[80px] mx-[30px]">
                <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <AiOutlineClose className="text-3xl text-white" />
                </div>
              </div>
              <div className="text-white text-2xl font-semibold mx-[30px]">
                <div className="my-[40px]">
                  <Link to="/about">About</Link>
                </div>
                <div className="mb-[40px]">
                  <Link to="/pricing">Pricing</Link>
                </div>
                <div className="mb-[40px]">
                  <Link to="/contact">Contact</Link>
                </div>
                <div>
                  <Link
                    to="/auth"
                    className="border-[2px] rounded-md px-[35px] py-[5px] border-white"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-between h-[80px] px-[100px] text-xl font-semibold">
          <div className="flex items-center">
            <img src={Logo} alt="poinswapLogo" className="h-[50px] w-[50px]" />
            <Link to="/" className="ml-[40px] text-white">
              Home
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/about" className="">
              About
            </Link>
            <Link to="/pricing" className="ml-[40px]">
              Pricing
            </Link>
            <Link to="/contact" className="ml-[40px]">
              Contact
            </Link>
            <Link
              to="/auth"
              className="ml-[40px] border-[2px] rounded-md px-[35px] py-[5px] border-[#62D1FE] text-[#62D1FE]"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
