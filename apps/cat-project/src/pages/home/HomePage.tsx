import React, { useEffect, useState } from "react";
import { Button, Content, Flex, Grid, Spacer, Text } from "@common/components";
import MobileArea from "@/components/mobileArea/MobileArea";
import localColorSet from "@/localColorSet";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/App";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useAtom } from "jotai";
import { uuidAtom } from "../../../store";

const HomePage = () => {
  const [step, setStep] = useState(0);
  const [uuid, setUuid] = useAtom(uuidAtom);

  const navigate = useNavigate();

  const firestore = getFirestore();

  useEffect(() => {
    if (uuid === "") {
      setUuid(
        Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15),
      );
    }
  }, []);

  const handleNextClick = () => {
    setStep(1);
  };

  const handleItemClick = async (item: string) => {
    await addDoc(collection(firestore, "results"), {
      uuid: uuid,
      result: item,
      time: new Date().toUTCString(),
    });

    navigate(RoutePath.DONE);
  };

  return (
    <MobileArea>
      <Spacer />

      <Content>
        <Flex flexDirection={"column"}>
          <Text size={"3rem"}>👋</Text>

          <Text color={localColorSet.text} size={"1.5rem"} weight={"black"}>
            환영합니다
          </Text>
          <Text color={"#999999"} size={"0.75rem"} letterSpacing={"0.5px"}>
            우리는 당신의 하루를 밝게 만들기 위해 작은 선물을 준비했어요. 다음의
            네가지 중 가장 마음에 드는 걸 골라주세요.
          </Text>
        </Flex>
      </Content>
      <Spacer />
      <Content>
        {step === 0 ? (
          <Flex flexDirection={"column"}>
            <Button
              borderRadius={"25px"}
              backgroundColor={localColorSet.primary}
              height={"50px"}
              onClick={handleNextClick}
            >
              <Text color={localColorSet.text}>다음으로</Text>
            </Button>
          </Flex>
        ) : (
          <Grid gridTemplateColumns={"1fr 1fr"} gap={"20px"}>
            <Button
              borderRadius={"15px"}
              style={{
                aspectRatio: "1/1",
              }}
              onClick={() => handleItemClick("바나나맛 우유")}
            >
              바나나맛 우유
            </Button>
            <Button
              borderRadius={"15px"}
              style={{
                aspectRatio: "1/1",
              }}
              onClick={() => handleItemClick("삼각김밥")}
            >
              삼각김밥
            </Button>
            <Button
              borderRadius={"15px"}
              style={{
                aspectRatio: "1/1",
              }}
              onClick={() => handleItemClick("삼색볼펜")}
            >
              삼색볼펜
            </Button>
            <Button
              borderRadius={"15px"}
              style={{
                aspectRatio: "1/1",
              }}
              onClick={() => handleItemClick("고양이사진 20장")}
            >
              고양이사진 20장
            </Button>
          </Grid>
        )}
        <Spacer height={"20px"} />
      </Content>
    </MobileArea>
  );
};

export default HomePage;
