import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";

import VideoCard from "../components/video/VideoCard";
import { gsapText } from "../data/gsap";

const Gsap = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const gsapPageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main
      title="웹디자인개발기능사 실기"
      description="웹디자인개발기능사 실기 강의입니다."
    >
      <section id="gsapPage" className={gsapPageClass}>
        <h2>0원으로 웹디자인개발기능사 실기 합격하기!</h2>
        <div className="video__inner">
          <VideoCard videos={gsapText} />
        </div>
      </section>
    </Main>
  );
};

export default Gsap;
