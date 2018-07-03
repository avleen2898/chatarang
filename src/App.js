import React, { Component } from 'react';

import './App.css';
import Main from './Main';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {
        uid: '123456789',
        displayName: 'Avleen',
        email: 'avleen2898@gmail.com',
      }
    };
  }

  render() {
    return (
      <div className="App">
       <Main user={this.state.user}/>
      </div>
    );
  }
}

export default App;
