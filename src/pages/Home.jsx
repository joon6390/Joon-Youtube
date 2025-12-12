import React from "react";

import Main from "../components/section/Main";
import Today from "../components/contents/Today";
import Developer from "../components/contents/Developer";
import VideoSlider from "../components/video/VideoSlider";

import { webdText } from "../data/webd";
import { websiteText } from "../data/website";
import { gsapText } from "../data/gsap";
import { portfolioText } from "../data/port";
import { youtubeText } from "../data/youtube";
import { developerText } from "../data/developer";
import { todayText } from "../data/today";

const Home = () => {
  return (
    <Main title="Joon 유튜브" description="Joon 유튜브에 오신 것을 환영합니다.">
      <Today videos={todayText} id="today" />
      <Developer
        videos={developerText}
        title="추천 개발자를 소개합니다."
        id="developer"
      />
      <VideoSlider
        videos={youtubeText}
        title="0원으로 정보처리기사 필기 합격하기! (성공)"
        id="youtube"
      />
      <VideoSlider
        videos={webdText}
        title="0원으로 정보처리기사 실기 합격하기! (성공)"
        id="Webd"
      />
      <VideoSlider
        videos={websiteText}
        title="0원으로 웹디자인개발기능사 필기 합격하기! (성공)"
        id="WebSite"
      />
      <VideoSlider
        videos={gsapText}
        title="0원으로 웹디자인개발기능사 실기 합격하기! (성공)"
        id="gsap"
      />
      <VideoSlider
        videos={portfolioText}
        title="0원으로 SQLD 합격하기! (성공)"
        id="portfolio"
      />
    </Main>
  );
};

export default Home;
