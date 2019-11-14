import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './main.scss';
import About from './about';
import ProjectsIndex from './projectsindex';
import Links from './links';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hoverStyle: null
    }

    this.setStyle = this.setStyle.bind(this);

  }

  setStyle(style) {
    this.setState({hoverStyle: style});
  }

  render() {

    let klass = "main";
    if (this.state.hoverStyle !== null) {
      klass = `main ${this.state.hoverStyle}`;
    }

    return(
        <div className={klass}>
          <div className="navbox">
            <h1>{'ashen.works'}</h1>
            <ul className="nav">
                <li><h2><NavLink to="/about" activeClassName="active">about</NavLink></h2></li>
                <li><h2><NavLink to="/projects" activeClassName="active">projects</NavLink></h2></li>
                <li><h2><NavLink to="/links" activeClassName="active">links</NavLink></h2></li>
            </ul>
            <div className="detail">
              <Route path="/about" component={About} />
              <Route path="/projects" render={(props) => <ProjectsIndex {...props} setStyle={this.setStyle} />} />
              <Route path="/links" component={Links} />
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(Main);