import React from 'react';

export function Mycloest(props) {
    const currentUser = props.currentUser
    return(
        <div className='welcome'>
            <p>{currentUser.userName} 's Closet</p>
        </div>

    );
}