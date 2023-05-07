import React from 'react';
import Cam from '../images/cam.png';
import Add from '../images/add.png';
import More from '../images/more.png';
import Messages from './Messages';
import Input from './Input';
import chatContext from '../context/ChatContext';
import { useContext } from 'react';

const Chat = () => {
  const {data} = useContext(chatContext);

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages></Messages>
      <Input></Input>
    </div>
  )
}

export default Chat;