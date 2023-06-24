import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  justify-content: center;
  padding-top: 7vh;
  font-weight: 300;
`;

export const FooterContainer = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2em;
  padding-right: 2em;
`;

export const FooterSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 30px;
  margin-bottom: 64px;
`;
