import { HeaderWrapper, NavMenu } from "./Header.style";
import Logo from "./Logo";
import Title from "./Title";

const Header = () => {
  return (
    <HeaderWrapper>
      <Title />
      <NavMenu />
      <Logo />
    </HeaderWrapper>
  );
};

export default Header;
