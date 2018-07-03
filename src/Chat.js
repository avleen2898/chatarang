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
                    email: 'ajdjdk#kek'}, 
                body: 'I, too, enjoy chatting.' },
              { id: 2, 
                user: {
                    uid: 2737,
                    displayName: 'dpalazzo', 
                    email: 'ndond'},
                body: 'This guy is so hip. I love my job.' },
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
            <div className="Chat">
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm addMessage={this.addMessage}/>
            </div>
        )

    }
}

export default Chat;