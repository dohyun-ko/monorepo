import React from 'react';
import styled from "styled-components";
import {colorSet} from "@common/theme/src";

interface HighlightProps {
  color?: React.CSSProperties["color"];
  size?: React.CSSProperties["fontSize"];
  weight?: React.CSSProperties["fontWeight"];
}

const Highlight = styled.span<HighlightProps>`
  color: ${({color}) => color ?? colorSet.primary};
  font-size: ${({size}) => size ?? "inherit"};
  font-weight: ${({weight}) => weight ?? "inherit"};
`;

export default Highlight