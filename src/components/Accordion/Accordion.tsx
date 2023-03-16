import React, { PropsWithChildren, ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import AngleDownChevron from "#assets/icons/angle-down-chevron.svg";

interface AccordionHeaderProps {
  isOpen: boolean;
}

interface AccordionContentProps {
  isOpen: boolean;
}

type AccordionProps = PropsWithChildren<{
  className?: string;
  header: ReactNode;
}>;

const AccordionContent = styled.div<AccordionContentProps>`
  height: ${(props) => (props.isOpen ? "unset" : "0")};
  overflow: hidden;
`;

const AccordionHeader = styled.div.attrs({
  role: "button",
  tabIndex: 0,
})<AccordionHeaderProps>`
  cursor: pointer;
  position: relative;

  ::after {
    bottom: 9px;
    content: url(${AngleDownChevron});
    line-height: 0;
    position: absolute;
    right: 0;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "none")};
  }
`;

const StyledAccordion = styled.div``;

const Accordion = ({ children, className, header }: AccordionProps) => {
  const accordionHeaderRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (accordionHeaderRef.current) {
      const handleKeydown = (evt: KeyboardEvent) => {
        if (evt.key !== "Tab") {
          evt.preventDefault();
        }

        if (evt.key === " " || evt.key === "Enter") {
          handleClick();
        }
      };

      accordionHeaderRef.current.addEventListener("keydown", handleKeydown);

      return () => {
        accordionHeaderRef.current?.removeEventListener("keydown", handleKeydown);
      };
    }
  });

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <StyledAccordion className={className}>
      <AccordionHeader isOpen={isOpen} onClick={handleClick} ref={accordionHeaderRef}>
        {header}
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </StyledAccordion>
  );
};

export default Accordion;
