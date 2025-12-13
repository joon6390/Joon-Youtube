import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";

import VideoCard from "../components/video/VideoCard";
import { youtubeText } from "../data/youtube";

const Youtube = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const youtubePageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="정보처리기사 필기" description="정보처리기사 필기 강의입니다.">
      <section id="youtubePage" className={youtubePageClass}>
        <h2>0원으로 정보처리기사 필기 합격하기!</h2>
        <div className="video__inner">
          <VideoCard videos={youtubeText} />
        </div>
      </section>
    </Main>
  );
};

export default Youtube;
