import React, { useMemo } from "react";
import styled, { useTheme } from "styled-components";

import CircleCheck from "#assets/icons/circle-check.svg";
import Accordion from "#components/Accordion";
import Button, { ButtonProps } from "#components/Button";
import useWindowSize from "#hooks/useWindowSize";

interface HeroCardProps {
  ctaLink: string;
  ctaText: string;
  header: string;
  options: string[];
  image: string;
  imageAlt: string;
}

interface StyledButtonProps extends ButtonProps {
  fullWidth?: boolean;
}

const HeroCardAccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroCardContainer = styled.div`
  flex-grow: 1;
  margin-bottom: 32px;
`;

const HeroCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: ${(props) => props.theme.size.lg}) {
    justify-content: unset;
  }
`;

const HeroCardHeader = styled.div`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 150%;
  margin-bottom: 8px;

  @media (min-width: ${(props) => props.theme.size.xs}) {
    margin-bottom: 16px;
  }
`;

const HeroCardImage = styled.img`
  border-radius: 20px;
  max-height: 140px;
  margin-bottom: 8px;
  object-fit: cover;
  width: 100%;

  @media (min-width: ${(props) => props.theme.size.xs}) {
    max-height: 188px;
  }

  @media (min-width: ${(props) => props.theme.size.lg}) {
    margin-bottom: 0;
    margin-right: 20px;
    max-height: 200px;
    width: auto;
  }
`;

const HeroCardStaticContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Options = styled.ul`
  margin: 0 0 8px;
  padding-inline-start: 32px;

  > li {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 150%;
    list-style: none;
    margin-bottom: 8px;
    position: relative;

    @media (min-width: ${(props) => props.theme.size.xs}) {
      font-size: 16px;
    }

    ::before {
      background: url(${CircleCheck});
      content: "";
      height: 16px;
      left: -32px;
      position: absolute;
      top: 4px;
      width: 16px;
    }
  }
`;

const StyledAccordion = styled(Accordion)`
  margin-bottom: 8px;

  @media (min-width: ${(props) => props.theme.size.xs}) {
    margin-bottom: 0px;
  }
`;

const StyledButton = styled(Button)<StyledButtonProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "220px")};
`;

const HeroCard = ({ ctaLink, ctaText, header, options, image, imageAlt }: HeroCardProps) => {
  const theme = useTheme() as Record<string, Record<string, string>>;

  const { width: windowWidth } = useWindowSize();

  const shouldShowAccordion = windowWidth < parseInt(theme.size.lg, 10);

  const handleClick = () => {
    // If this were a proper SPA I would use react-router to navigate, or the Link component.
    // As the current CTA links are external, I am using the simple implementation.
    window.location.href = ctaLink;
  };

  const heroCardOptions = useMemo(
    () => (
      <Options>
        {options.map((option, index) => (
          <li key={`${option}-${index}`}>{option}</li>
        ))}
      </Options>
    ),
    [options]
  );

  return (
    <HeroCardContainer>
      {shouldShowAccordion ? (
        <HeroCardAccordionContainer>
          <StyledAccordion
            header={
              <HeroCardHeader>
                <HeroCardImage alt={imageAlt} src={image} />
                <div>{header}</div>
              </HeroCardHeader>
            }
          >
            {heroCardOptions}
          </StyledAccordion>
          <StyledButton fullWidth label={ctaText} onClick={handleClick} />
        </HeroCardAccordionContainer>
      ) : (
        <HeroCardStaticContainer>
          <HeroCardImage alt={imageAlt} src={image} />
          <HeroCardContent>
            <HeroCardHeader>{header}</HeroCardHeader>
            {heroCardOptions}
            <StyledButton label={ctaText} onClick={handleClick} />
          </HeroCardContent>
        </HeroCardStaticContainer>
      )}
    </HeroCardContainer>
  );
};

export default HeroCard;
