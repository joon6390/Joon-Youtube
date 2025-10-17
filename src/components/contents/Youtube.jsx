import React from 'react'

import { youtubeText } from '../../data/yotube'
import { Link } from 'react-router-dom'

const Youtube = () => {
    return (
        <section id='yotube'>
            <h2>나만의 유튜브 사이트 제작 연습</h2>
            <div className="video__inner">
                {youtubeText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Youtube