import Image from "next/image";
import React from "react";
const Logo = () => {
  return (
    <div>
      <Image
        src="https://www.trustradius.com/images/tr-logo-wordmark.svg"
        alt="img"
        height={32}
        width={192}
      />
    </div>
  );
};

export default Logo;
