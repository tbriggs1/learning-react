import React from 'react';
import Tweet from './Tweet';


const TweetList = ({ name, message }) => {
    const tweetDate = "22/02/2021";
    return(
        <div className="Tweet-list">
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
        </div>

    );
}

export default TweetList;