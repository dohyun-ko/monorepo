import React from "react";
import {Area, Content, Highlight, Text} from "@common/components";
import styled, {createGlobalStyle} from "styled-components";
import Timer from "@/pages/landing/Timer";
import hackathonIllustration from "@/assets/images/hackathonIllustration.png";

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    background-color: #000000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;

const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LandingPage = () => {
  return (
    <>
      <GlobalStyle/>
      <AppHeader>
        <Area>
          <Content width={"100%"}>
            <Text size={"60px"}
                  textShadow={"-4px -4px 1px #FFF, 4px -4px 1px #FFF, -4px 4px 1px #FFF, 4px 4px 1px #FFF"}
                  weight={900}
                  letterSpacing={"4px"}
            >
              <Highlight color={"#E75F3E"}>G</Highlight>
              <Highlight color={"#588AC5"}>D</Highlight>
              <Highlight color={"#428E56"}>S</Highlight>
              <Highlight color={"#F1C041"}>C</Highlight>
              {" "}
              <Highlight color={"#000000"}>X</Highlight>
              {" "}
              <Highlight color={"#C9503E"}>G</Highlight>
              <Highlight color={"#737372"}>I</Highlight>
              <Highlight color={"#737372"}>S</Highlight>
              <Highlight color={"#737372"}>T</Highlight>
            </Text>
            <Text size={"36px"}>
              Hackathon Timer
            </Text>
            <Timer/>
            <img src={hackathonIllustration} alt={"hackathon illustration"} width={"90%"} style={{
              marginTop: "-70px",
              zIndex: -1,
            }}/>
          </Content>
        </Area>
      </AppHeader>
    </>
  );
};

export default LandingPage;
