import React from "react";
import { Button, Content, Flex } from "@common/components";
import holySpiritSchoolInfo from "./assets/holy-spirit-school-info.webp";
import worshipInfo from "./assets/worship-info.webp";
import directionsInfo from "./assets/directions-info.webp";
import onlineOfferingInfo from "./assets/online-offering-info.webp";

interface QuickButtonsProps {}

const QuickButtons = ({}: QuickButtonsProps) => {
  return (
    <Content>
      <Flex justifyContent={"space-between"}>
        <Button width={"23.5%"}>
          <img src={worshipInfo} width={"100%"} alt={"예배 안내"} />
        </Button>

        <Button width={"23.5%"}>
          <img
            src={onlineOfferingInfo}
            width={"100%"}
            alt={"온라인 동역 헌금"}
          />
        </Button>

        <Button width={"23.5%"}>
          <img
            src={holySpiritSchoolInfo}
            width={"100%"}
            alt={"성령학교 안내"}
          />
        </Button>

        <Button width={"23.5%"}>
          <img src={directionsInfo} width={"100%"} alt={"오시는 길"} />
        </Button>
      </Flex>
    </Content>
  );
};

export default QuickButtons;
