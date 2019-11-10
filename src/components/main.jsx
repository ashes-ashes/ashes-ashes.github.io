import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import './main.scss';
import ProjectsIndex from './projectsindex';

class Main extends React.Component {
  render() {
    return(
        <div className="main">
            <h1>ashen.works</h1>
            <ul className="nav">
                <li><h2><NavLink to="/about" activeClassName="active">about</NavLink></h2></li>
                <li><h2><NavLink to="/projects" activeClassName="active">projects</NavLink></h2></li>
                <li><h2><NavLink to="/links" activeClassName="active">links</NavLink></h2></li>
            </ul>
            <Route path="/projects" component={ProjectsIndex} />
        </div>
    );
  }
}

export default Main;