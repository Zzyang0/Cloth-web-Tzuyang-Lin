import React from 'react';

export function Mycloest(props) {
    const currentUser = props.currentUser
    return(
        <div>
            <p>welcome {currentUser.userName}</p>
        </div>

    );
}