import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. How can i help you.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleAnsFromQuestionList = (ans) => {
        const allMessage = createChatBotMessage(ans)

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, allMessage],
        }));
    };

    const handleNotFound = () => {
        const botMessage = createChatBotMessage('Sorry this question is not exist in question list');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: { handleHello, handleAnsFromQuestionList, handleNotFound },
                });
            })}
        </div>
    );
};

export default ActionProvider;