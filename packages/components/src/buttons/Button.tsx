import React, { CSSProperties } from "react";
import styled from "styled-components";

export interface ButtonProps {
  width?: React.CSSProperties["width"];
  height?: string;
  border?: CSSProperties["border"];
  borderRadius?: CSSProperties["borderRadius"];
  disabled?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : null)};
  height: ${({ height }) => (height ? height : null)};
  margin: 0;
  padding: 0;
  border: ${({ border }) => (border ? border : "none")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : null)};
  background: none;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  :hover {
    cursor: pointer;
  }
`;

export default Button;
