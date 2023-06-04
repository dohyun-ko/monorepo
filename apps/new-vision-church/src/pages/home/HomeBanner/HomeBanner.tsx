import React, { useEffect, useRef, useState } from "react";
import { Button, Content } from "@common/components";
import SwipeableViews from "react-swipeable-views";
import banner1 from "./assets/banner-1.webp";
import arrowLeft from "./assets/arrow-left.webp";
import arrowRight from "./assets/arrow-right.webp";

interface HomeBannerProps {}

const HomeBanner = ({}: HomeBannerProps) => {
  const [bannerIndex, setBannerIndex] = useState(0);

  const banners = useRef([
    {
      img: banner1,
      to: "/",
    },
  ]);

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.current.length);
    }, 5000);

    return () => {
      clearInterval(bannerTimer);
    };
  }, [bannerIndex]);

  const handleBannerClick = (banner: { img: string; to: string }) => {};

  const handleLeftClick = () => {
    setBannerIndex(
      (prev) =>
        (((prev - 1) % banners.current.length) + banners.current.length) %
        banners.current.length,
    );
  };

  const handleRightClick = () => {
    setBannerIndex((prev) => (prev + 1) % banners.current.length);
  };

  const handleSwipe = (index: number) => {
    setBannerIndex(index);
  };

  return (
    <Content
      width={"100%"}
      style={{
        maxWidth: "100%",
        position: "relative",
      }}
    >
      <SwipeableViews index={bannerIndex} onChangeIndex={handleSwipe}>
        {banners.current.map((banner) => (
          <div onClick={() => handleBannerClick(banner)} key={banner.img}>
            {/*Button 사용 시 높이가 안 맞는 이슈로 div 사용*/}
            <img src={banner.img} width="100%" />
          </div>
        ))}
      </SwipeableViews>

      <Button
        style={{
          position: "absolute",
          top: "calc(50% - 42.5px)",
          left: "5%",
        }}
      >
        <img src={arrowLeft} width={"35px"} height={"85px"} />
      </Button>

      <Button
        style={{
          position: "absolute",
          top: "calc(50% - 42.5px)",
          right: "5%",
        }}
      >
        <img src={arrowRight} width={"35px"} height={"85px"} />
      </Button>
    </Content>
  );
};

export default HomeBanner;
