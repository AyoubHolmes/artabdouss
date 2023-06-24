import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 5.7rem;
  display: flex;
  justify-content: center;
  margin-top: 0.7rem;
  padding: 0 2rem;
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 2.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  width: 60%;
  border-radius: 5px;
`;

export const TitleWrapper = styled.div`
  padding: 1.5rem 2rem;
`;

export const CustomH1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 1rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 5px 0;
`;

export const CustomPTag = styled.p`
  margin: 5px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 120%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const FilterWrapper = styled.div`
  margin-top: 2rem;
`;

export const NavMenuWrapper = styled.div`
  /* padding-right: 3rem; */
  padding-top: 1rem;
`;

export const NavMenuPageWrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  width: 100%;
  background-color: rgba(64, 31, 12, 0.96);
  color: ${({ theme }) => theme.colors.primary};
`;

export const NavMenuPageHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 0.7rem;
  padding: 0 2rem;
`;

export const NavMenuPageContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
`;

export const NavMenuPageTab = styled.div`
  padding: 1rem 0;
  min-height: 48px;
  text-transform: uppercase;
  text-align: center;
  font-size: 4.5rem;
  font-family: ${({ theme }) => theme.fonts.playfair};
  line-height: 1;
  transition: all 0.8s;
  overflow: hidden;
  transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
`;
