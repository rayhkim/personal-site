import React, { Component } from 'react';

const categories = ["Backpacking", "Badminton", "Urban Dance"];

export default class AboutCarousel extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            currentCategory: 0
        };
    }

    switchSection(direction) {
        let newCategory = this.state.currentCategory + direction;

        if (0 <= newCategory && newCategory < categories.length) {
            this.setState({currentCategory: newCategory});
        }
    }

    render() {
        const category = categories[this.state.currentCategory];

        return (
            <div id = "about-carousel">
                <h1 className = {category.toLowerCase().replace(/\s/g, '') + "-title about-image-title"}>
                    {category}
                </h1>
                <div id = "carousel-content">
                    <div class = "left-arrow arrow" 
                        onClick={() => this.switchSection(-1)}
                    > &lt; </div>

                    <div className = {category.toLowerCase().replace(/\s/g, '') + "-image about-image"}></div>

                    <div class = "right-arrow arrow" 
                        onClick={() => this.switchSection(1)}
                    > &gt; </div>
                </div>
            </div>
        );
    }
}