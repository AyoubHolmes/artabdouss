import Image from "next/image";
import LogoImage from 'public/assets/images/logo.svg'
import { LogoWrapper } from "./Header.style";
const Logo = () => {
  return (
    <LogoWrapper>
      <Image
        priority
        src={LogoImage}
        alt={""}
      />
    </LogoWrapper>
  );
};

export default Logo;
