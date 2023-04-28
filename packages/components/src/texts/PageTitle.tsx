import React from "react";
import Button from "../buttons/Button";
import Text from "./Text";
import Flex from "../containers/Flex";
import { colorSet } from "@common/theme";

interface PageTitleProps {
  title: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const PageTitle = ({ title, onClick, style }: PageTitleProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={onClick === undefined}
      style={{
        margin: "0 0 20px 0",
        display: "flex",
        alignItems: "center",
        ...style,
      }}
    >
      {onClick && (
        <Flex flexDirection={"column"} style={{ margin: "0 10px 0 0" }}>
          <div
            style={{
              position: "relative",
              width: "15px",
              height: "4px",
              borderTop: `2px solid ${colorSet.primaryText}`,
              transform: "rotate(-37deg)",
            }}
          />
          <div
            style={{
              position: "relative",
              width: "15px",
              height: "3px",
              borderBottom: `2px solid ${colorSet.primaryText}`,
              transform: "rotate(37deg)",
            }}
          />
        </Flex>
      )}

      <Text size={"1.5rem"} weight={500}>
        {title}
      </Text>
    </Button>
  );
};

export default PageTitle;
