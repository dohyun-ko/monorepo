import React, { useState } from "react";
import MobileArea from "@/components/mobileArea/MobileArea";
import {
  Button,
  Content,
  Flex,
  Grid,
  Input,
  Spacer,
  Text,
} from "@common/components";
import localColorSet from "@/localColorSet";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { uuidAtom } from "../../../store";
import { useAtom } from "jotai";
import cartoon from "../../assets/images/cartoon.webp";
import { toast } from "react-toastify";

const DonePage = () => {
  const [uuid] = useAtom(uuidAtom);
  const firestore = getFirestore();
  const [phone, setPhone] = useState("");

  const handleSubmitClick = async () => {
    const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!regPhone.test(phone)) {
      toast.warn("전화번호 형식이 잘못된 것 같아요");
    }

    await addDoc(collection(firestore, "phones"), {
      uuid: uuid,
      phone: phone,
      time: new Date().toLocaleString(),
    });
  };

  const handleShareClick = () => {
    navigator.share({
      title: "IBTC 수요조사",
      text: "간단한 수요조사 참여하고 기프티콘 받아가세요",
      url: `https://${window.location.host}?utm_source=share&utm_medium=share&utm_campaign=share`,
      // files: [img],
    });
  };

  return (
    <MobileArea backgroundColor={"rgb(237, 237, 237)"}>
      <Content>
        <Flex flexDirection={"column"} alignItems={"center"} width={"100%"}>
          <Text size={"3rem"}>👋</Text>
          <Text>참여해주셔서 감사합니다!</Text>
          <Text>우린 이런 서비스를 기획하고 있어요!</Text>
        </Flex>

        <Spacer height={"20px"} />

        <Flex
          style={{
            position: "relative",
          }}
        >
          <img
            src={cartoon}
            alt={"cartoon"}
            width={"100%"}
            style={{
              borderRadius: "10px",
            }}
          />

          <Grid
            gridTemplateColumns={"repeat(2, 1fr)"}
            gridTemplateRows={"0.85fr 1fr"}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <Flex
              justifyContent={"center"}
              alignItems={"end"}
              style={{
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  height: "1.25rem",
                  background: "linear-gradient(transparent, white)",
                }}
              />
              <Text
                size={"0.875rem"}
                font={"goyang"}
                textAlign={"center"}
                style={{
                  zIndex: 1,
                }}
              >
                마음에 드는 고양이를 고릅니다
              </Text>
            </Flex>
            <Flex
              justifyContent={"center"}
              alignItems={"end"}
              style={{
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  height: "1.25rem",
                  background: "linear-gradient(transparent, white)",
                }}
              />
              <Text
                size={"0.875rem"}
                font={"goyang"}
                textAlign={"center"}
                style={{
                  zIndex: 1,
                }}
              >
                고양이의 자기소개를 보아요
              </Text>
            </Flex>
            <Flex
              justifyContent={"center"}
              alignItems={"end"}
              style={{
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  height: "2.5rem",
                  background: "linear-gradient(transparent, white)",
                }}
              />
              <Text
                size={"0.875rem"}
                font={"goyang"}
                textAlign={"center"}
                style={{
                  zIndex: 1,
                }}
              >
                마음에 들었다면 츄르 하나(1500원)를 건네요
              </Text>
            </Flex>
            <Flex
              justifyContent={"center"}
              alignItems={"end"}
              style={{
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  height: "2.5rem",
                  background: "linear-gradient(transparent, white)",
                }}
              />
              <Text
                size={"0.875rem"}
                font={"goyang"}
                textAlign={"center"}
                style={{
                  zIndex: 1,
                }}
              >
                매일 출근시간에 맞춰, 고양이가 톡에 나타납니다
              </Text>
            </Flex>
          </Grid>
        </Flex>

        <Spacer height={"20px"} />

        <Text size={"0.75rem"}>
          전화번호를 남겨주시면 서비스가 출시될 때 알림을 드릴게요!
        </Text>

        <Spacer height={"20px"} />

        <Grid gridTemplateColumns={"1fr 80px"} gap={"16px"}>
          <Input
            placeholder={"전화번호를 입력해주세요"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type={"tel"}
            style={{
              paddingLeft: "13px",
              border: "none",
              borderRadius: "25px",
              fontSize: "0.75rem",
            }}
          />
          <Button
            onClick={handleSubmitClick}
            style={{
              borderRadius: "25px",
              backgroundColor: localColorSet.primary,
            }}
          >
            <Text size={"0.75rem"}>알림받기</Text>
          </Button>
        </Grid>
      </Content>

      <Content>
        <Flex flexDirection={"column"} alignItems={"center"} gap={"3px"}>
          <Text size={"0.75rem"}>주변 친구에게도 알려주는 건 어때요?</Text>
          <Button
            borderRadius={"25px"}
            onClick={handleShareClick}
            backgroundColor={localColorSet.primary}
            height={"40px"}
            width={"100%"}
          >
            <Text color={localColorSet.text}>공유하기</Text>
          </Button>
        </Flex>

        <Spacer height={"20px"} />
      </Content>
    </MobileArea>
  );
};

export default DonePage;

interface StepCardProps {
  num: number;
  image: string;
  text: string;
}

const StepCard = ({ num, image, text }: StepCardProps) => {};
