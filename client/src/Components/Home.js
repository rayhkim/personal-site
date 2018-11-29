import React from 'react';

export default (props) => {

    const urls = {
        "facebook": "https://www.facebook.com/rayhk63",
        "spotify": "https://open.spotify.com/user/rayhk63",
        "github": "https://github.com/rayhkim"
    };

    const links = Object.keys(urls).map((platform) => {
        return (
            <div className = {platform}
                key = {platform}
                onClick = {() => openLink(platform)}
            ></div>
        );
    });

    function openLink(platform) {
        window.open(urls[platform], '_blank');
    }

    return (
        <div id="home-container">
            <div id="top">
                <h1 id="name">Ray Kim</h1>
            </div>
            <div id="bottom">
                <h1 id="class-year">UC Berkeley '22</h1>
            </div>
            {links} 
        </div>
    )
}