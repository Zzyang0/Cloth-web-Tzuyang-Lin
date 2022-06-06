import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const FIREBASEUI_CONFIG_OBJ = {
    // sign in options to show
    signInOptions: [
        { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true }
    ],
    signInFlow: 'popup',
    callbacks: {
        signInSuccessWithAuthResult: () => false
    },
    credentialHelper: 'none',
}

export default function SignIn(props) {


    const auth = getAuth();

    if(props.currentUser.userId){
        return <Navigate to="/closet" />
    }


    return (
        <div className="form-page">
            <div className="login-container">
                <StyledFirebaseAuth firebaseAuth={auth} uiConfig={FIREBASEUI_CONFIG_OBJ} />
            </div>
        </div>
    )
} 