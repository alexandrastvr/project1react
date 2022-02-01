import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Route path="/" component={Home} />
      </div>
    )
  }
 
}

export default App;
