import React from 'react';

const Tweet = ({ name, message }) => {
    const tweetDate = "22/02/2021";
    return(
        <div>
            <h2 className="tweet">{name}</h2>
            <h3>{message}</h3>
            <button>Delete</button>
            <button>Like</button>
        </div>

    );
}

export default Tweet;