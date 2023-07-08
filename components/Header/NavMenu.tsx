import Image from "next/image";
import FilterIcon from "public/assets/icons/svgexport-2.svg";
import { NavMenuWrapper } from "./Header.style";
import { useState } from "react";
import NavMenuPage from "./NavMenuPage";
import { keyframes } from "@emotion/react";
import css from "styled-jsx/css";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.5);
  }
`;

const burgerIconStyles = css`
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: ${fadeIn} 0.3s ease;
`;

const crossIconStyles = css`
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: ${fadeIn} 0.3s ease;
`;


const NavMenu = () => {
  const [openNavMenu, setNavMenu] = useState<boolean>(false);

  const handleOpenNav = () => {
    setNavMenu((prev) => !prev);
  };

  return (
    <>
      <NavMenuWrapper>
        <Image
          priority
          src={FilterIcon}
          alt={""}
          height={20}
          width={20}
          onClick={handleOpenNav}
          style={{
            cursor: "pointer",
          }}
        />
      </NavMenuWrapper>
      {openNavMenu && <NavMenuPage handleOpenNav={handleOpenNav} />}
    </>
  );
};

export default NavMenu;
