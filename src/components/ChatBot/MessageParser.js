import React, { useEffect } from "react";
import questionData from "./questionData";
// import Axios from "axios";
// import Config from '../Config';

const MessageParser = ({ children, actions }) => {

    useEffect(() => {
        // Axios.post(`${Config.IP}/chat/update`, { ...children.props.state, email: sessionStorage.getItem('email') })

    }, [children.props.state])

    const parse = (Message) => {
        const message = Message.toLowerCase();

        if (message.includes('hi') || message.includes('hellow')) {
            actions.handleHello();
        } else if (questionData.filter(f => f.Question?.toLocaleLowerCase() === message)?.length > 0) {
            actions.handleAnsFromQuestionList(questionData.filter(f => f.Question?.toLocaleLowerCase() === message)?.[0]?.Answer);
        } else {
            actions.handleNotFound();
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;