import React from "react";
import {Area, Content, Text} from "@common/components";
import styled, {createGlobalStyle} from "styled-components";
import Timer from "@/pages/landing/Timer";
import hackathonIllustration from "@/assets/images/hackathonIllustration.png";
import hackathonTypographic from "@/assets/images/hackathonTypographic.png";

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

  ::-webkit-scrollbar {
    display: none;
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
            <img src={hackathonTypographic} alt={"hackathon typographic"} width={"80%"}/>
            <Text size={"48px"} weight={800} style={{
              marginTop: "30px",
              marginBottom: "-80px"
            }}>
              Time Left:
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
