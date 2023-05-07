import React,{useContext,useRef,useEffect} from 'react';
import authContext from '../context/AuthContext';
import chatContext from '../context/ChatContext';

const Message = (props) => {
  const {currentUser} = useContext(authContext);
  const {data} = useContext(chatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.message]);

  return (
    <div ref={ref}
      className={`message ${props.message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            props.message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{props.message.text}</p>
        {props.message.img && <img src={props.message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message;