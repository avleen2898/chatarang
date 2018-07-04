import React, { Component } from 'react';

import './App.css';
import Main from './Main';
import SignIn from './SignIn';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: [ 
        {
        uid: 'Admin',
        displayName: 'Avleen',
        email: 'avleen2898@gmail.com',
      },
    ]
    };
  }

  addUser = (userName) => {
    const updatedUsers = [...this.state.user];
    updatedUsers.push({
      uid: `${userName}--XTBC2018`,
      displayName: userName,
      email: '',
    });
    this.setState({user: updatedUsers});
  }


  render() {
    return (
      <div className="App">
       <SignIn addUser={this.addUser}/>
       <Main user={this.state.user}/>
      </div>
    );
  }
}

export default App;
