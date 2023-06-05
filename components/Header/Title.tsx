import { FormattedMessage } from "react-intl";
import { CustomH1, CustomPTag, TitleWrapper } from "./Header.style";

const Title = () => {
  return (
    <TitleWrapper>
      <CustomH1>
        <FormattedMessage id={"layout.title"} />
      </CustomH1>
      <CustomPTag>
        <FormattedMessage id={"layout.sub-title"} />
      </CustomPTag>
    </TitleWrapper>
  );
};

export default Title;
