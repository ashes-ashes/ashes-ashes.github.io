import React from 'react';

import { HashRouter} from 'react-router-dom';
import './App.scss';
import Main from './components/main'

class App extends React.Component {


  render() {
  
    return (
      <div className="app">
        <HashRouter>
          <Main />
        </HashRouter>
      </div> 
    );
  }
}

export default App;
