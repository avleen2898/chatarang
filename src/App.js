import React, { Component } from 'react';

import './App.css';
import Main from './Main';
import SignIn from './SignIn';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {
        uid: 'Admin',
        displayName: 'Avleen',
        email: 'avleen2898@gmail.com',
      },
    signIn: true,
    };
  }

  addUser = (userName) => {
    const updatedUser = {
      uid: `${userName}--XTBC2018`,
      displayName: userName,
      email: '',
    }
    this.setState({user: updatedUser, signIn: false});
  }


  render() {
    let element;
    if(this.state.signIn){
      element = <SignIn addUser={this.addUser}/>
    }
    return (
      <div className="App">
        {element}
        <Main user={this.state.user} /> 
      </div>
    );
  }
}

export default App;
