import React, {Component} from 'react';

class SignIn extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <form className="SignIn">
                Please enter your user name:
                <input type="text" />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default SignIn;