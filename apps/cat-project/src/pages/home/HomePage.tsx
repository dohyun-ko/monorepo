import React, { useEffect, useState } from "react";
import { Button, Content, Flex, Grid, Spacer, Text } from "@common/components";
import MobileArea from "@/components/mobileArea/MobileArea";
import localColorSet from "@/localColorSet";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RoutePath } from "@/App";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useAtom } from "jotai";
import { uuidAtom } from "../../../store";
import banana from "../../assets/images/banana.webp";
import Cat from "../../assets/images/cat.webp";
import gimbab from "../../assets/images/gimbab.webp";
import pen from "../../assets/images/pen.webp";

const HomePage = () => {
  const [step, setStep] = useState(0);
  const [uuid, setUuid] = useAtom(uuidAtom);
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const firestore = getFirestore();

  useEffect(() => {
    const handleUuid = async () => {
      let localUuid = localStorage.getItem("uuid");

      if (localUuid === "") {
        localUuid =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);

        localStorage.setItem("uuid", localUuid);
      }
      setUuid(localUuid || "");

      await addDoc(collection(firestore, "visit"), {
        uuid: localUuid,
        time: new Date().toLocaleString(),
        utm_source: searchParams.get("utm_source") || "direct",
        utm_medium: searchParams.get("utm_medium") || "direct",
        utm_campaign: searchParams.get("utm_campaign") || "direct",
      });
    };
    handleUuid();
  }, []);

  const handleNextClick = () => {
    setStep(1);
  };

  const handleItemClick = async (item: string) => {
    await addDoc(collection(firestore, "results"), {
      uuid: uuid,
      result: item,
      time: new Date().toLocaleString(),
    });

    navigate(RoutePath.DONE);
  };

  return (
    <MobileArea backgroundColor={"rgb(237, 237, 237)"}>
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
          <Grid
            gridTemplateColumns={"1fr 1fr"}
            gridTemplateRows={"1fr 1fr"}
            gap={"20px"}
          >
            <ItemButton
              itemName={"바나나맛 우유"}
              itemImage={banana}
              onClick={() => handleItemClick("바나나맛 우유")}
            />
            <ItemButton
              itemName={"삼각김밥"}
              itemImage={gimbab}
              onClick={() => handleItemClick("삼각김밤")}
            />
            <ItemButton
              itemName={"삼색볼펜"}
              itemImage={pen}
              onClick={() => handleItemClick("삼색볼펜")}
            />
            <ItemButton
              itemName={"고양이 사진 20장"}
              itemImage={Cat}
              onClick={() => handleItemClick("고양이 사진 20장")}
            />
          </Grid>
        )}
        <Spacer height={"20px"} />
      </Content>
    </MobileArea>
  );
};

export default HomePage;

interface ItemButtonProps {
  itemName: string;
  itemImage: string;
  onClick: () => void;
}

const ItemButton = ({ itemName, itemImage, onClick }: ItemButtonProps) => {
  return (
    <Button borderRadius={"15px"} onClick={onClick}>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        gap={"20px"}
        style={{
          backgroundColor: "#F5F5F5",
          borderRadius: "10%",
          padding: "10px 0",
          height: "calc(100% - 20px)",
        }}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          style={{
            flex: "1 1 0",
          }}
        >
          <img src={itemImage} alt={itemName} width={"50%"} />
        </Flex>
        <Text>{itemName}</Text>
      </Flex>
    </Button>
  );
};
