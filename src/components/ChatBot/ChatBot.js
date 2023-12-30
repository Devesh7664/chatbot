import React, { useEffect, useState } from 'react'
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';
import questionData from './questionData.js';

export default function ChatBot() {

  const [showBot, toggleBot] = useState(false);
  useEffect(() => {
    setTimeout(() => handleBotbutton(true), 1500)
  }, []);
  const handleBotbutton = (set) => {
    toggleBot(set)
  }

  return (
    <div className='fullScreen'>
      <ul className="list-group">
        {questionData?.map((ele, i) =>
          <li className="list-group-item" key={i}>
            <p className='text12 fw-medium'>Q{i + 1}) :{ele.Question}
              {/*<br /> {ele.Answer} */}
            </p>
          </li>)}
      </ul>

      {showBot &&
        <div className='chatBotDiv'>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            runInitialMessagesWithHistory
          />
        </div>}
      <button className='chatBotButton' onClick={() => handleBotbutton(!showBot)}>
        {showBot ? 'X' : 'Bot'}
      </button>
    </div>
  );

}
