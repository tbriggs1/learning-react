import React from 'react';
import Tweet from './Tweet';



const TweetList = ({ name, tweets, setName, setTweets}) => {
    const tweetDate = "22/02/2021";

    
    return(
        <div className="Tweet-list">
            {tweets.map(tweet =>
                 <Tweet setTweets={setTweets} name={name} tweet={tweet} tweets={tweets} key={tweet.id}/>)}
        </div>

    );
}

export default TweetList;