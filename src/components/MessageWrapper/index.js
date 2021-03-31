import React from 'react';

import { Container, ChatBotIcon } from './styles';
import {FaRobot} from 'react-icons/fa';

function Message({children, chatbot, text,  sended, show=true}) {
  return <Container sended={sended} show={show}>
    {
      chatbot &&
      <ChatBotIcon >
          <FaRobot />
      </ChatBotIcon>
    }
    {
      text ? 
      <p>
        {children}
      </p>
      :
      <>
        {children}
      </>
    }
    
  </Container>;
}

export default Message;