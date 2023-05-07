import React, { useContext, useReducer, } from 'react';
import ChatContext from '../context/ChatContext';
import authContext from './AuthContext';

const initialState = {
    chatId:"null",
    user:[]
}

const chatReducer = (state,action) =>{
    if(action.type === "CHANGE_USER"){
        return{
            user:action.user,
            chatId:action.currentUser.uid > action.user.uid ? action.currentUser.uid + action.user.uid : action.user.uid + action.currentUser.uid
        }
    }
    return state;
}

const ChatContextProvider = (props) => {
    const {currentUser} = useContext(authContext);
    
    const [state,dispatch] = useReducer(chatReducer,initialState);

    const changeUserHandler = (user) =>{
        dispatch({type:'CHANGE_USER',user:user,currentUser:currentUser});
    }

    return (
        <ChatContext.Provider value={{ data:state,changeUser:changeUserHandler}}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider;