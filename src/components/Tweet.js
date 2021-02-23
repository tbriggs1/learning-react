import React from 'react';

const Tweet = ({ name, tweet, setTweets, tweets }) => {
    const tweetDate = "22/02/2021";

    const deleteTweet = () => {
        setTweets(tweets.filter((state) => state.id !== tweet));
    };

    return(
        <div>
            <h2 className="tweet">{name}</h2>
            <h3>{tweet.message}</h3>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </div>

    );
}

export default Tweet;