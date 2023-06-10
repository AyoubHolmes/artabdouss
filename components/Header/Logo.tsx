import Image from "next/image";
import LogoImage from "public/assets/images/kati_logo.svg";
import { LogoWrapper } from "./Header.style";

const Logo = () => {
  return (
    <LogoWrapper>
      <Image priority src={LogoImage} alt={""} height={100} width={250} />
    </LogoWrapper>
  );
};

export default Logo;
