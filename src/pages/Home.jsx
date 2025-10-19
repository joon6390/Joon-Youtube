import React from 'react'

import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/video/VideoSlider'

import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/port'
import { youtubeText } from '../data/youtube'
import { developerText } from '../data/developer'
import { todayText } from '../data/today'

const Home = () => {
    return (
        <Main title="Joon 유튜브" 
        description="Joon 유튜브에 오신 것을 환영합니다."
        >
            <Today videos={todayText} id='today' />
            <Developer videos={developerText} title='추천 개발자를 소개합니다.' id='developer' />
            <VideoSlider videos={webdText} title='웹 디자인 개발 기능사 실기 연습' id='Webd' />
            <VideoSlider videos={websiteText} title='웹 표준 사이트 제작 연습' id='WebSite' />
            <VideoSlider videos={gsapText} title='GSAP 패럴랙스 효과 연습' id='gsap' />
            <VideoSlider videos={portfolioText} title='포트폴리오 사이트 제작 연습' id='portfolio' />
            <VideoSlider videos={youtubeText} title='나만의 유튜브 사이트 제작 연습' id='youtube' />
        </Main>
    )
}

export default Home