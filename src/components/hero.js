import React from "react"
import "../styles/hero.css"

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to my blog!<br />
                Enjoy lots of posts.<br />
            </h1>
            <div className="hero-author">
                <img src="https://ebeotsu.jp/wp-content/uploads/2020/10/avator-b2.png" className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                    Written by XXXX.<br />
                    Front Engineer at Hoge.Inc. Love JavaScript.
                </p>
            </div>
        </div>
    )
}