import styled from "@emotion/styled";
import React from "react";

const QuoteWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const QuoteContainer = styled.div`
  margin: 20px;
  padding: 10px;
  width: 40rem;
  text-align: center;
`;

const QuoteText = styled.blockquote`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.playfair};
  font-style: italic;
  font-weight: bold;
  margin-bottom: 10px;
`;

const AuthorWrapper = styled.div`
  line-height: 50%;
`;

const Author = styled.p`
  font-size: 1rem;
  color: #666;
`;
const AuthorTitle = styled.p`
  font-size: 0.9rem;
`;

type QuoteProps = {
  text: string;
  author: string;
};

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
  return (
    <QuoteWrapper>
      <QuoteContainer>
        <QuoteText>{`"${text}"`}</QuoteText>
        <AuthorWrapper>
          <Author>- {author}</Author>
          <AuthorTitle>{"Deputy Chairman, Sotheby's Europe"}</AuthorTitle>
        </AuthorWrapper>
      </QuoteContainer>
    </QuoteWrapper>
  );
};

export default Quote;
