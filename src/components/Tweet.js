import React from 'react';

const Tweet = ({ name, message, setTweets, tweets }) => {
    const tweetDate = "22/02/2021";

    const deleteTweet = () => {
        setTweets(tweets.filter((t) => t !== message));
    }

    return(
        <div>
            <h2 className="tweet">{name}</h2>
            <h3>{message}</h3>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </div>

    );
}

export default Tweet;