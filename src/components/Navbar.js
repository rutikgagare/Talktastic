import React,{useContext} from 'react';
// import userImage from '../images/addAvatar.png'
import { signOut } from 'firebase/auth';
import {auth} from '../firebase';
import authContext from '../context/AuthContext';

const Navbar = () => {
  const {currentUser} = useContext(authContext);
  return (
    <div className='navbar'>
      <span className="logo">Talktastic</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <i class="fa-solid fa-right-from-bracket" onClick={()=>{signOut(auth)}}></i>
        <button onClick={()=>{signOut(auth)}}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar;