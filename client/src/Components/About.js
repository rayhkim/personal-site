import React from 'react';
import AboutCarousel from './AboutCarousel';

export default (props) => {

    return (
        <div id="about-page-container">
            <div id="about-container">
                <div id="about-contents">
                    <h1 id="about-title">About Me</h1>
                </div>
                <AboutCarousel />
            </div>
        </div>
    )
}