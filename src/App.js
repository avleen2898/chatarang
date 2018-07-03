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
        uid: '1',
        displayName: 'Avleen',
        email: 'avleen2898@gmail.com',
      },
    ]
    };
  }

  addUser = (userName) => {
    const userNames = [...this.state.user];
    userNames.push({
      uid: `${userName}--2018`,
      displayName: userName,
      email: '',
    });
    this.setState({user: userNames});
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
