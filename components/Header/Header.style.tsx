import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 5.7rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
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
    margin-top: 1rem;
    margin-right: 1.5rem;
`;

export const FilterWrapper = styled.div`
    margin-top: 2rem;
`