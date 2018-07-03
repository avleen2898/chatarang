import React from 'react';

import Message from './Message';

const MessageList = () => {
    const messages = [
        {
            id: 1,
            userName: 'akaur',
            body: 'DANA!!! I need help',
        },
        {
            id: 2,
            userName: 'dpalazzo',
            body: 'I got ya! Be right there',
        }
    ]
    return (
        <div className="MessageList">
            {messages.map(msg => (
                <Message message={msg} key={msg.id}/>
            ))}
        </div>
    )
}

export default MessageList;