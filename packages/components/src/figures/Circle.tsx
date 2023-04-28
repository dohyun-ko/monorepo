import React from "react";
import styled from "styled-components";
import { colorSet } from "@common/theme";

export interface CircleProps {
  diameter: React.CSSProperties["width"];
  backgroundColor?: React.CSSProperties["backgroundColor"];
}

const Circle = styled.div<CircleProps>`
  height: ${({ diameter }) => diameter};
  width: ${({ diameter }) => diameter};
  border-radius: 50%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? colorSet.primary};
`;

export default Circle;
