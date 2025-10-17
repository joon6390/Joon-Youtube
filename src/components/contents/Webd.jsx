import React from 'react'

import { webdText } from '../../data/webd'
import { Link } from 'react-router-dom'

const Webd = () => {
    return (
        <section id='webd'>
            <h2>웹 디자인 개발 기능사 실기 연습</h2>
            <div className="video__inner">
                {webdText.map((video, key) => (
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

export default Webd