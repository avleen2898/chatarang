import React, {Component} from 'react';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import base from './base';

class Chat extends Component{
    constructor(){
        super();
        this.state = {
            messages: [],
            messagesRef: null,
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

    componentDidMount(){
        this.getMessages();
    }

    componentDidUpdate(prevProps){
        if(prevProps.room.name !== this.props.room.name){
            this.getMessages();
        }
    }

    componentWillUnmount(){
        base.removeBinding(this.messagesRef);
    }

    getMessages = () => {
        if(this.state.messagesRef){
            base.removeBinding(this.state.messagesRef);
        }

        this.messagesRef = base.syncState(`messages/${this.props.room.name}`, {
            context: this,
            state: 'messages',
            asArray: true,
        });

        this.setState({messagesRef: this.messagesRef});
    }

    render(){
        return (
            <div className="Chat" style={styles}>
                <ChatHeader room={this.props.room}/>
                <MessageList messages={this.state.messages} user={this.props.user} room={this.props.room}/>
                <MessageForm addMessage={this.addMessage}/>
            </div>
        )

    }
}

const styles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
};

export default Chat;