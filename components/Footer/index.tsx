import React from "react";
import {
  FooterContainer,
  FooterSocialLinks,
  FooterWrapper,
} from "./Footer.style";
import Image from "next/image";
import InstaIcon from "public/assets/icons/instagram.svg";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSocialLinks>
          <a
            href="https://www.instagram.com/katieosullivanart/"
            target="_blank"
          >
            <Image src={InstaIcon} alt={""} height={30} />
          </a>
        </FooterSocialLinks>
        
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
