import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "#assets/images/logo.svg";

const MoshLogo = styled(Link).attrs({
  to: "",
})`
  display: flex;
`;

const StyledHeader = styled.div`
  background: ${(props) => props.theme.palette.monoWhite};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 16px;
  width: 100%;

  @media (min-width: ${(props) => props.theme.size.md}) {
    padding: 18px 32px;
  }

  @media (min-width: ${(props) => props.theme.size.lg}) {
    padding: 18px 48px;
  }

  @media (min-width: ${(props) => props.theme.size.xl}) {
    padding: 18px 120px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <MoshLogo>
        <img alt="Mosh logo" src={Logo} />
      </MoshLogo>
    </StyledHeader>
  );
};

export default Header;
