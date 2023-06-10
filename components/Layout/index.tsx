import styled from "@emotion/styled";
import Header from "components/Header";
import { IntlProvider } from "react-intl";
import { LANGUAGES, intlMessagesDispatcher } from "utils/constants";
import { useLanguageContext } from "utils/context";

const AppContentWrapper = styled.div`
  display: flex;
`;

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { language } = useLanguageContext();
  return (
    <IntlProvider
      locale={language}
      messages={intlMessagesDispatcher[language]}
      defaultLocale={LANGUAGES.EN}
    >
      <Header />
      <AppContentWrapper>{children}</AppContentWrapper>
    </IntlProvider>
  );
};

export default Layout;
