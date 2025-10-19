import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { webdText } from '../data/webd'
import VideoCard from '../components/video/VideoCard'

const Webd = () => {
    const [loading, setLoading] = useState(true);
        
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const webdPageClass = loading ? 'isLoading' : 'isLoaded';
            
    return (
        <Main 
            title = "웹 디자인 개발 기능사"
            description="웹 디자인 개발 기능사 튜토리얼 강의입니다.">
            
            <section id='webdPage' className={webdPageClass}>
                <h2>웹 디자인 개발 기능사 실기 강의 목록입니다.</h2>
                <div className="video__inner">
                    <VideoCard videos={webdText} />
                </div>
            </section>
        </Main>
    )
}

export default Webd