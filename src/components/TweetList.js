import React from 'react';
import Tweet from './Tweet';


const TweetList = ({ name, message, setName, setTweets}) => {
    const tweetDate = "22/02/2021";

    
    return(
        <div className="Tweet-list">
            {message.map(mess =>
                 <Tweet setTweets={setTweets} name={name} message={mess} tweets={message}/>)}
        </div>

    );
}

export default TweetList;