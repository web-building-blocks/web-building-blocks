import React from "react";
import Image from "next/image";
import usydLogo from "../assets/usyd_logo.png";

function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={usydLogo}
        alt="The University of Sydney"
        className="h-10 w-10 mr-3"
      />
      <span>Blocks - The University of Sydney Design System</span>
    </div>
  );
}

export default Logo;
