import React from "react";
import {
  HeroSectionImage,
  HeroSectionTitle,
  HeroSectionWrapper,
} from "./Artist.style";
import Image from "next/image";
import ArtistHeroSection from "public/assets/images/artist_hero_section.webp";
import Quote from "./ArtistQuote";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <>
      <HeroSectionWrapper>
        <HeroSectionTitle>The artist</HeroSectionTitle>
        <HeroSectionImage src={ArtistHeroSection} alt={""} />
      </HeroSectionWrapper>
      <Quote
        text={
          "Katie carries on the illustrious tradition with a modern twist. Her paintings are wonderful quality, her technique exciting and her love of the subject matter shines through"
        }
        author={"Lord Poltimore"}
      />
    </>
  );
};

export default HeroSection;
