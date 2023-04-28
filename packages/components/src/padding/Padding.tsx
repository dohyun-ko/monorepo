import React from "react";
import styled from "styled-components";

export interface PaddingProps {
  height: React.CSSProperties["height"];
}

const Padding = styled.div<PaddingProps>`
  height: ${({ height }) => height};
`;

export default Padding;
