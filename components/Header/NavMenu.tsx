import Image from "next/image";
import FilterIcon from "public/assets/icons/svgexport-2.svg";
import { NavMenuWrapper } from "./Header.style";
import { useState } from "react";
import NavMenuPage from "./NavMenuPage";

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
          height={40}
          width={40}
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
