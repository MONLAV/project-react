import React from 'react'

const Message = ({ autor = 'Incognito', text, isOnline }) => {

    return (
        <div>
            <h3>{autor}</h3>
            {isOnline ? <h5>Online</h5> : <h5>Offline</h5>}
            {isOnline && <h4>Написати</h4>}
            <p>{text}</p>
        </div>
    );
};

export default Message