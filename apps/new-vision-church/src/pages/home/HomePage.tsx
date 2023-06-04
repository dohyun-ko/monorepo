import React from "react";
import { Area, Spacer } from "@common/components";
import HomeBanner from "@/pages/home/HomeBanner/HomeBanner";
import QuickButtons from "@/pages/home/quickButtons/QuickButtons";

const HomePage = () => {
  return (
    <Area>
      <HomeBanner />

      <Spacer height={"62px"} />

      <QuickButtons />
    </Area>
  );
};

export default HomePage;
