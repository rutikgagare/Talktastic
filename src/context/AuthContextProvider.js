import React, { useEffect, useState } from 'react';
import authContext from './AuthContext';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            setCurrentUser(user);
        })
    }, []);

    return (
        <authContext.Provider value={{currentUser}}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthContextProvider