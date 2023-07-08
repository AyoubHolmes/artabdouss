import styled from "@emotion/styled";
import Image from "next/image";

export const HeroSectionWrapper = styled.div`
  margin-top: 10rem;
  font-family: ${({ theme }) => theme.fonts.playfair};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 3rem;
`;

export const HeroSectionTitle = styled.div`
  font-size: 7rem;
  text-transform: uppercase;
  text-align: center;
  line-height: 100%;
`;

export const HeroSectionImage = styled(Image)`
margin-top: 3rem;
  width: 100%;
`;
