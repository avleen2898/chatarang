import React, {Component} from 'react';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chat extends Component{
    constructor(){
        super();
        this.state = {
            messages: [
              { id: 1, 
                user: {
                    uid: 123,
                    displayName: 'Avleen',
                    email: 'avleen2898@gmail.com'}, 
                body: 'DANA!!! I need your help' },
              { id: 2, 
                user: {
                    uid: 2737,
                    displayName: 'Dana', 
                    email: 'dpalazzo@fretless.com'},
                body: 'I got ya! Be right there' },
            ],
          }; 
    }

    addMessage = (body) => {
        const messages = [...this.state.messages];
        const user = this.props.user;

        messages.push({
            id: `${user.uid}-${Date.now()}`,
            user: user,
            body: body,
        });

        this.setState({messages: messages});
    }

    render(){
        return (
            <div className="Chat" style={styles.chat}>
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm addMessage={this.addMessage}/>
            </div>
        )

    }
}

const styles = {
    chat: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    }
};

export default Chat;