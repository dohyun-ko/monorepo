import React, {useState} from "react";
import MobileArea from "@/components/mobileArea/MobileArea";
import { Button, Content, Flex, Input, Spacer, Text } from "@common/components";
import localColorSet from "@/localColorSet";
import { getFirestore, addDoc, collection} from "firebase/firestore";
import {uuidAtom} from "../../../store";
import {useAtom} from "jotai";

const DonePage = () => {
  const [uuid] = useAtom(uuidAtom);
  const firestore = getFirestore();
  const [phone, setPhone] = useState("");


  const handleSubmitClick = async () => {
    await addDoc(collection(firestore, "phones"), {
      uuid: uuid,
      phone: phone,
    });

  const handleShareClick = () => {
    window.navigator.share({
      title: "IBTC 수요조사",
      text: "간단한 수요조사 참여하고 기프티콘 받아가세요",
      url: `https://${window.location.host}/`,
      // files: [img],
    });
  };

  return (
    <MobileArea>
      <Content>
        <Flex flexDirection={"column"} alignItems={"center"} width={"100%"}>
          <Text size={"3rem"}>👋</Text>
          <Text>감사합니다</Text>
          <Input placeholder={"전화번호를 입력해주세요"} style={{}} />
        </Flex>
      </Content>

      <Content>
        <Flex flexDirection={"column"}>
          <Button
            borderRadius={"25px"}
            onClick={handleShareClick}
            backgroundColor={localColorSet.primary}
            height={"50px"}
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
