import React from 'react';

class ProjectsIndex extends React.Component {

    constructor(props) {
        super(props);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver(app) {
        this.props.setStyle(app);
    }

    handleMouseOut() {
        this.props.setStyle(null);
    }

    render () { 

        return (
        <div>
            <ul className="projects-nav">
                <li>
                    <a href="https://enyo-chat.herokuapp.com/" onMouseOver={() => this.handleMouseOver('enyo')} onMouseOut={this.handleMouseOut}>enyo</a>
                </li>
                <li>
                        <a href="http://offshoots.herokuapp.com/" onMouseOver={() => this.handleMouseOver('offshoot')} onMouseOut={this.handleMouseOut}>offshoot</a>
                </li>
                <li>
                        <a href="https://ashes-ashes.github.io/vivari/" onMouseOver={() => this.handleMouseOver('vivari')} onMouseOut={this.handleMouseOut}>vivari</a>
                </li>
            </ul>
        </div>

        );
    }
}

export default ProjectsIndex;