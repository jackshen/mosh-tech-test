import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const StyledButton = styled.button.attrs({
  tabIndex: 0,
})<Omit<ButtonProps, "label">>`
  align-items: center;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  height: fit-content;
  letter-spacing: 0.2em;
  line-height: 150%;
  padding: 16px 24px;
  text-transform: uppercase;
  transition: box-shadow 0.2s;

  :hover {
    cursor: pointer;
  }

  ${(props) => {
    switch (props.variant) {
      case "secondary":
      /* this button component can be extended as needed */

      case "primary":
      default:
        return `
            background-color: ${props.theme.palette.defaultOrange};
            color: ${props.theme.palette.lightSand};

            :disabled {
                background-color: ${props.theme.utils.lighten(props.theme.palette.defaultOrange)};
            }

            :not(:disabled):hover {
                box-shadow: 10px 10px 0px 0px ${props.theme.palette.primaryGreen};
            }
        `;
    }
  }}
`;

const Button = ({ className, disabled = false, label, onClick: handleClick, variant = "primary" }: ButtonProps) => {
  return (
    <StyledButton className={className} disabled={disabled} onClick={handleClick} variant={variant}>
      {label}
    </StyledButton>
  );
};

export default Button;
