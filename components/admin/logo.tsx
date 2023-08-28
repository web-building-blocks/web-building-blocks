import React from "react";
import Image from "next/image";
import usydLogo from "../../public/static/usyd_logo.svg";

function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={usydLogo}
        alt="The University of Sydney"
        className="w-28 mr-3 border-r pr-3"
      />
      <span>Blocks Design System</span>
    </div>
  );
}

export default Logo;
