import styled from "styled-components";
import { CONTENT_AREA_DESKTOP, CONTENT_AREA_MOBILE } from "@common/theme";

export interface ContentAreaProps {
  width?: string;
}

const Content = styled.div<ContentAreaProps>`
  width: ${({ width }) => (width ? width : CONTENT_AREA_DESKTOP)};
  max-width: 1240px;

  @media screen and (max-width: 768px) {
    width: ${({ width }) => (width ? width : CONTENT_AREA_MOBILE)};
  }
`;

export default Content;
