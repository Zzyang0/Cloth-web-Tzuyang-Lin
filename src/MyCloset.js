import React from 'react';

export function Mycloset(props) {
    const currentUser = props.currentUser
    return(
        <div>
        <div className='welcome'>
            <p>{currentUser.userName} 's Closet</p>
        </div>
        <div className='welcome_text'>
            <p>You have no clothes in the Closet right now</p>
        </div>
        </div>
    );
}