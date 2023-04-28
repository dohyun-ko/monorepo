import React from "react";
import Circle from "../figures/Circle";
import styled from "styled-components";
import { colorSet } from "@common/theme";

const KebabWrapper = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 3px;

  border-radius: 3px;
`;

export interface KebabProps {
  style?: React.CSSProperties;
}

const Kebab = ({ style }: KebabProps) => {
  return (
    <KebabWrapper style={style}>
      <Circle diameter={"3px"} backgroundColor={colorSet.primaryText} />
      <Circle diameter={"3px"} backgroundColor={colorSet.primaryText} />
      <Circle diameter={"3px"} backgroundColor={colorSet.primaryText} />
    </KebabWrapper>
  );
};

export default Kebab;
