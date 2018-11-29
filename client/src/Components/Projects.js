import React from 'react';
import Expandable from './Expandable';

export default (props) => {

    const projects = {
        "Jigsaw Puzzle Solver": "A facebook messenger bot that could tell the user what jigsaw puzzle pieces fit together given a picture of them. Made using OpenCV and scikit-image",
        "Derivative Calculator": "A symbolic derivative calculator with a GUI that used recursion to calculate complex integrals involving trigonometric functions and variable exponents. Made with Java."
    }

    const expandables = Object.keys(projects).map((project) => {
        return (
            <Expandable className = {project.toLowerCase().replace(/\s/g, '')}
                key = {project.toLowerCase().replace(/\s/g, '')}
                projectName = {project}
                openExpandable = {openExpandable}
            ></Expandable>
        );
    });

    function openExpandable(project) {
        return (
            <div className="expanded-show">
                <div className = {project.toLowerCase().replace(/\s/g, '') + "-image project-image"}></div>
                <p className={project.toLowerCase().replace(/\s/g, '') + "-text project-text"}>
                    {projects[project]}
                </p>
            </div>
        );
    }

    return (
        <div id="projects-page-container">
            <div id="projects-container">
                {expandables}
            </div>
        </div>
    )
}