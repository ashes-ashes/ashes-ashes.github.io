import React from 'react';

class ProjectsIndex extends React.Component {

    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(app) {
        this.props.setStyle(app);
    }

    handleMouseLeave() {
        this.props.setStyle(null);
    }

    render () { 

        return (
        <div>
            <ul className="projects-nav">
                <li onMouseLeave={this.handleMouseLeave}>
                    <a href="https://enyo-chat.herokuapp.com/" onMouseEnter={() => this.handleMouseEnter('enyo')} >enyo</a>
                </li>
                <li onMouseLeave={this.handleMouseLeave}>
                        <a href="http://offshoots.herokuapp.com/" onMouseEnter={() => this.handleMouseEnter('offshoot')}>offshoot</a>
                </li>
                <li onMouseLeave={this.handleMouseLeave}>
                        <a href="https://ashes-ashes.github.io/vivari/" onMouseEnter={() => this.handleMouseEnter('vivari')}>vivari</a>
                </li>
            </ul>
        </div>

        );
    }
}

export default ProjectsIndex;