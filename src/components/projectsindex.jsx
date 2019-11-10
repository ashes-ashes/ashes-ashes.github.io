import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import Project from './project';

class ProjectsIndex extends React.Component {
    render () { 
    console.log(this.props);
        return (
        <div>
            <ul className="projects-nav">
                <li>
                    <NavLink to="/projects/enyo" activeClassName="active">enyo</NavLink>
                </li>
                <li>
                    <NavLink to="/projects/offshoot" activeClassName="active">offshoot</NavLink>
                </li>
                <li>
                    <NavLink to="/projects/vivari" activeClassName="active">vivari</NavLink>
                </li>
            </ul>
            {/* <Switch>
                <Route path="/projects/:project" children={<Project />} />
            </Switch> */}
        </div>

        );
    }
}

export default ProjectsIndex;