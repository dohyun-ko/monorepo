import React from "react";
import { Area, Button, Content, Flex, Spacer, Text } from "@common/components";
import iconYoutube from "./assets/icon-youtube.webp";
import iconInstagram from "./assets/icon-instagram.webp";
import iconNaverBlog from "./assets/icon-naver-blog.webp";
import ZIndex from "@/utils/z-index";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <Area
      style={{
        position: "relative",
        zIndex: ZIndex.Header,
      }}
    >
      <Content>
        <Flex
          width={"100%"}
          justifyContent={"end"}
          height={"37px"}
          alignItems={"center"}
        >
          <Flex gap={"8px"} alignItems={"center"}>
            <Button height={"22px"}>
              <img src={iconYoutube} height={"22px"} alt={"youtube link"} />
            </Button>

            <Button height={"22px"}>
              <img src={iconInstagram} height={"22px"} alt={"instagram link"} />
            </Button>

            <Button height={"22px"}>
              <img
                src={iconNaverBlog}
                height={"22px"}
                alt={"naver blog link"}
              />
            </Button>
          </Flex>
        </Flex>
      </Content>
      <Content
        style={{
          position: "absolute",
          top: "100%",
        }}
      >
        <Spacer height={"24px"} />

        <Flex width={"100%"} justifyContent={"end"}>
          <Flex gap={"42px"}>
            <Button>
              <Text color={"white"}>소개</Text>
            </Button>
            <Button>
              <Text color={"white"}>말씀</Text>
            </Button>
            <Button>
              <Text color={"white"}>성령학교</Text>
            </Button>
            <Button>
              <Text color={"white"}>소식</Text>
            </Button>
            <Button>
              <Text color={"white"}>저서</Text>
            </Button>
            <Button>
              <Text color={"white"}>선교사역</Text>
            </Button>
          </Flex>
        </Flex>
      </Content>
    </Area>
  );
};

export default Header;
