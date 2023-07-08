import Image from "next/image";
import {
  LogoWrapper,
  NavMenuPageContent,
  NavMenuPageHeader,
  NavMenuPageTab,
  NavMenuPageWrapper,
  NavMenuWrapper,
} from "./Header.style";
import LogoImage from "public/assets/images/kati_logo.svg";
import CrossIcon from "public/assets/icons/cross.svg";
import { FormattedMessage } from "react-intl";
import styled from "@emotion/styled";
import Link from "next/link";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;

type Props = {
  handleOpenNav: () => void;
};

const NavMenuPage: React.FC<Props> = ({ handleOpenNav }) => {
  return (
    <NavMenuPageWrapper>
      <NavMenuPageHeader>
        <LogoWrapper>
          <Image priority src={LogoImage} alt={""} height={100} width={170} />
        </LogoWrapper>

        <NavMenuWrapper>
          <Image
            priority
            src={CrossIcon}
            alt={""}
            height={20}
            width={20}
            onClick={handleOpenNav}
            style={{
              cursor: "pointer",
            }}
          />
        </NavMenuWrapper>
      </NavMenuPageHeader>
      <NavMenuPageContent>
        <NavMenuPageTab>
          <StyledLink href={"/"}>
            <FormattedMessage id={"layout.home"} />
          </StyledLink>
        </NavMenuPageTab>
        <NavMenuPageTab>
          <StyledLink href={"/works"}>
            <FormattedMessage id={"layout.works"} />
          </StyledLink>
        </NavMenuPageTab>
        <NavMenuPageTab>
          <StyledLink href={"/gallery"}>
            <FormattedMessage id={"layout.gallery"} />
          </StyledLink>
        </NavMenuPageTab>
        <NavMenuPageTab>
          <StyledLink href={"/artist"}>
            <FormattedMessage id={"layout.artist"} />
          </StyledLink>
        </NavMenuPageTab>
        <NavMenuPageTab>
          <StyledLink href={"/press"}>
            <FormattedMessage id={"layout.press"} />
          </StyledLink>
        </NavMenuPageTab>
        <NavMenuPageTab>
          <StyledLink href={"/contacts"}>
            <FormattedMessage id={"layout.contacts"} />
          </StyledLink>
        </NavMenuPageTab>
      </NavMenuPageContent>
    </NavMenuPageWrapper>
  );
};

export default NavMenuPage;
