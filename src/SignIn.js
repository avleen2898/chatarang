import React, {Component} from 'react';

class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            userName: ''
        }
    }

    handleChange = (ev) => {
      this.setState({userName: ev.target.value});
    }

    handleSubmit = (ev) =>  {
        ev.preventDefault();
        this.props.addUser(this.state.userName);
        this.setState({userName: ''});
    }

    render(){
        return (
            <form className="SignIn" onSubmit={this.handleSubmit}>
                Please enter your user name:
                <input type="text" 
                placeholder="Chatarang User Name"
                value={this.state.userName} 
                onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default SignIn;