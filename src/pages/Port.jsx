import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/video/VideoCard'
import { portfolioText } from '../data/port'

const Port = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const portPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "포트폴리오 사이트"
            description="포트폴리오 사이트 튜토리얼 강의입니다.">
            
            <section id='portPage' className={portPageClass}>
                <h2>포트폴리오 사이트 제작 강의 목록입니다.</h2>
                <div className="video__inner">
                    <VideoCard videos={portfolioText} />
                </div>
            </section>
        </Main>
    )
}

export default Port