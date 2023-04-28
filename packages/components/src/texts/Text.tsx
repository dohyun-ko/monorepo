import styled from "styled-components";
import React from "react";
import { fontFamily, FontFamily } from "@common/theme";

export interface TextProps {
  font?: FontFamily;
  size?: React.CSSProperties["fontSize"];
  weight?: React.CSSProperties["fontWeight"];
  textAlign?: React.CSSProperties["textAlign"];
  color?: React.CSSProperties["color"];
  display?: React.CSSProperties["display"];
  textDecoration?: React.CSSProperties["textDecoration"];
  letterSpacing?: React.CSSProperties["letterSpacing"];
  lineHeight?: React.CSSProperties["lineHeight"];
}

const Text = styled.p<TextProps>`
  display: ${({ display }) => display || "block"};
  word-break: keep-all;
  margin: 0;
  text-align: ${({ textAlign }) => textAlign || "inherit"};
  color: ${({ color }) => color || "inherit"};
  font-family: ${({ font }) => (font ? fontFamily[font] : "inherit")};
  font-size: ${({ size }) => size ?? "1rem"};
  font-weight: ${({ weight }) => weight ?? "inherit"};
  line-height: ${({ lineHeight, size }) =>
    lineHeight ?? `calc(1.5 * ${size ?? "1rem"})`};
  text-decoration: ${({ textDecoration }) => textDecoration || undefined};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "-0.5px"};
`;

export default Text;
