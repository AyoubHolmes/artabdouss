import { HeaderWrapper } from "./Header.style";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <NavMenu />
    </HeaderWrapper>
  );
};

export default Header;
