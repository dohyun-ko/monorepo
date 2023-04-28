import styled from "styled-components";
import { colorSet } from "@common/theme";
import React from "react";

interface UnderlineProps {
  color?: React.CSSProperties["color"];
  size?: React.CSSProperties["backgroundSize"];
}

const Underline = styled.span<UnderlineProps>`
  background-image: ${({ color }) =>
    color
      ? `linear-gradient(${color}, ${color})`
      : `linear-gradient(${colorSet.primary}, ${colorSet.primary})`};
  background-position: bottom;
  background-size: ${({ size }) => size ?? "100% 57%"};
  background-repeat: no-repeat;
`;

export default Underline;
