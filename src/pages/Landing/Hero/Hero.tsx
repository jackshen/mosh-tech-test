import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";

import fetchMoshHeroOptions, { MoshHeroOptions } from "#api/fetchMoshHeroOptions";
import useWindowSize from "#hooks/useWindowSize";

import { heroCardMapToContent } from "./constants";
import HeroCard from "./HeroCard";

const Headline = styled.h2`
  font-family: "Clearface ITC Pro";
  font-size: 32px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.size.xs}) {
    font-size: 48px;
    margin: 0 0 8px;
  }

  @media (min-width: ${(props) => props.theme.size.lg}) {
    text-align: left;
  }
`;

const HeroCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1.5;
  width: 100%;

  @media (min-width: ${(props) => props.theme.size.sm}) {
    flex-direction: row;
    gap: 12px;
  }

  @media (min-width: ${(props) => props.theme.size.md}) {
    gap: 24px;
  }

  @media (min-width: ${(props) => props.theme.size.lg}) {
    flex-direction: column;
    gap: 0;
    width: auto;
  }
`;

const HeroContainer = styled.div`
  align-items: center;
  background: ${(props) => props.theme.palette.lightSand};
  box-sizing: border-box;
  color: ${(props) => props.theme.palette.primaryGreen};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding: 40px 16px;
  width: 100%;

  @media (min-width: ${(props) => props.theme.size.md}) {
    padding: 48px 32px;
  }

  @media (min-width: ${(props) => props.theme.size.lg}) {
    flex-direction: row;
    gap: 10px;
    padding: 48px 48px;
  }

  @media (min-width: ${(props) => props.theme.size.xl}) {
    gap: 20px;
    padding: 64px 120px;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 24px;
  width: 100%;

  @media (min-width: ${(props) => props.theme.size.xs}) {
    margin-bottom: 48px;
  }

  @media (min-width: ${(props) => props.theme.size.lg}) {
    margin-bottom: 0;
    width: auto;
  }
`;

const Subheadline = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.01em;
  margin: 0;
  opacity: 0.75;
  text-align: center;

  @media (min-width: ${(props) => props.theme.size.xs}) {
    font-size: 18px;
  }

  @media (min-width: ${(props) => props.theme.size.lg}) {
    text-align: left;
  }
`;

const Hero = () => {
  const theme = useTheme() as Record<string, Record<string, string>>;

  const { width: windowWidth } = useWindowSize();

  const [heroOptions, setHeroOptions] = useState<MoshHeroOptions>({});

  useEffect(() => {
    fetchMoshHeroOptions().then((newMoshHeroOptions) => {
      const filteredNewMoshOptions = { ...newMoshHeroOptions };

      // Filter out hero cards options we don't currently support
      Object.keys(filteredNewMoshOptions).forEach((id) => {
        if (!heroCardMapToContent[id]) {
          delete filteredNewMoshOptions[id];
        }
      });

      setHeroOptions(filteredNewMoshOptions);
    });
  }, []);

  return (
    <HeroContainer>
      <HeroText>
        <Headline>Get back on track</Headline>
        <Subheadline>
          Treatment plan in 24 hours.
          {windowWidth > parseInt(theme.size.xs, 10) ? <br /> : " "}
          Treat anxiety, depression & more
        </Subheadline>
      </HeroText>
      <HeroCardContainer>
        {Object.entries(heroOptions).map(([id, options]) => (
          <HeroCard key={id} options={options} {...heroCardMapToContent[id]} />
        ))}
      </HeroCardContainer>
    </HeroContainer>
  );
};

export default Hero;
