import React, {Component} from 'react';

class MessageForm extends Component{
    state = {
        body: '',
    }

    handleChange = (ev) => {
        this.setState({body: ev.target.value});
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.addMessage(this.state.body);
        this.setState({body: ''});
    }

    render(){
        return (
            <form className="MessageForm" onSubmit={this.handleSubmit} style={styles.messageForm}>
                <input 
                    type="text" 
                    name="body"
                    placeholder="Type a message..."
                    value={this.state.body}
                    onChange={this.handleChange}
                    style={styles.input}
                    autoFocus
                    required
                />
                <button type="submit" style={styles.button}>Send</button>
            </form>
        )
    }
}

const styles = {
    messageForm: {
        backgroundColor: 'white',
        height: '3rem',
        display: 'flex',
        alignItems: 'stretch',
        border: '2px solid #999',
        borderRadius: '0.5rem',
        margin: '0.25rem',
        padding: 0,
    },
    chatIcon: {
        display: 'flex',
        borderRadius: '0.5rem',
        alignItems: 'center',
        backgroundColor: 'white',
        color: '#ccc',
        padding: '0 0.5rem',
        fontSize: '1.2rem',
    },
    input: {
        flex: 1,
        fontSize: '1.2rem',
        border: 0,
    },
    button: {
        fontSize: '1.5rem',
        backgroundColor: '#1A8FE3',
        color: 'white',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',
        border: '1px solid white',
    }
}

export default MessageForm;