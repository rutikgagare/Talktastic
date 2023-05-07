import React,{useContext} from 'react';
// import userImage from '../images/addAvatar.png'
import { signOut } from 'firebase/auth';
import {auth} from '../firebase';
import authContext from '../context/AuthContext';

const Navbar = () => {
  const {currentUser} = useContext(authContext);
  return (
    <div className='navbar'>
      <span className="logo">Chatting App</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>{signOut(auth)}}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar;