import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <div
        data-cy="header-title"
        className="px-[220px] h-[105px] bg-[#16ABF8] font-bold leading-[36px] text-[24px] text-white flex items-center justify-start"
      >
        TODO LIST APP
      </div>
    </Link>
  );
};

export default Header;
