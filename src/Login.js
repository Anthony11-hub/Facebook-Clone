import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [ state, dispatch ] = useStateValue();
    const signIn = () => {
        //Sign in
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));

    };
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://clipart.info/images/ccovers/1509135369f-logo-facebook-png.png' alt=''/>
            </div>
            <div>
                <Button type='submit' onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login;
