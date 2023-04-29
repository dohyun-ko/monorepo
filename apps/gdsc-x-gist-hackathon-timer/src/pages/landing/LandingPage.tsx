import React, {useEffect} from "react";
import {Area, Content, Text} from "@common/components";
import styled, {createGlobalStyle} from "styled-components";
import Timer from "@/pages/landing/Timer";
import hackathonIllustrationDark from "@/assets/images/hackathonIllustrationDark.png";
import hackathonTypographicDark from "@/assets/images/hackathonTypographicDark.png";
import hackathonIllustrationLight from "@/assets/images/hackathonIllustrationLight.png";
import hackathonTypographicLight from "@/assets/images/hackathonTypographicLight.png";

import {useAtom} from "jotai";
import {isDarkModeAtom} from "@/store";

interface GlobalStyleProps {
  isDarkMode: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    text-align: center;
    background-color: ${({isDarkMode}) => isDarkMode ? "#000000" : "#FFFFFF"};
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
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    if ((hours >= 18 || hours < 6)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode}/>
      <AppHeader>
        <Area>
          <Content width={"100%"}>
            <img src={isDarkMode ? hackathonTypographicDark : hackathonTypographicLight} alt={"hackathon typographic"}
                 width={"80%"}/>
            <Text size={"48px"} weight={800} style={{
              marginTop: "30px",
              marginBottom: "-80px"
            }}>
              Time Left:
            </Text>
            <Timer/>
            <img src={isDarkMode ? hackathonIllustrationDark : hackathonIllustrationLight}
                 alt={"hackathon illustration"} width={"90%"} style={{
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
