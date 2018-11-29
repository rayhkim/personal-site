import React, { Component } from 'react';

export default class Expandable extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };
    }

    renderExpansion() {
        this.setState({expanded:!this.state.expanded});
    }

    render() {
        let projectName = this.props.projectName;
        let projectClass = this.state.expanded ? "expanded-project" : "unexpanded-project";

        return (
            <div className = {projectClass + " project-expandable"} onClick={() => this.setState({expanded:!this.state.expanded})}>
                <h1 className = {this.props.className + " project-name"}>{projectName}</h1>
                {this.state.expanded ? this.props.openExpandable(this.props.projectName):null}
            </div>
        );
    }
}