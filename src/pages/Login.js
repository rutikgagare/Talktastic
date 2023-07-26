import React,{useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import {auth} from '../firebase';

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth,email,password);
      navigate('/');
    } catch (error) {
      setError(true);
    }
  }
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chatting App - SignIn</span>
            
            <form onSubmit={submitHandler}>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button>Sign in</button>
                {error && <p>Something Went Wrong</p>}
            </form>
            <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login;