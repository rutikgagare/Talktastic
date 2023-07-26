import React, { useState } from 'react';
import Add from '../images/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      
      // displayName we are using it as name for image
      const uploadTask = uploadBytesResumable(storageRef, file);
     
      uploadTask.on('state_changed',
        (snapshot) => { },
        (error) => { setError(true) },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log(downloadURL);
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL
            })

            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", response.user.uid), {});

          });

          navigate('/login');
        }
      );
    } catch (error) {
      setError(true);
    }
  }

    return (
      <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>Chatting App - SignUp</span>

          <form onSubmit={submitHandler}>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="file" id='file' style={{ display: "none" }} />
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>
            <button>Sign Up</button>
            {error && <p>Something Went Wrong</p>}
          </form>
          <p>You do have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    )
  }

  export default Register;