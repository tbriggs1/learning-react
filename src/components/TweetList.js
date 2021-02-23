import React from 'react';
import Tweet from './Tweet';


const TweetList = ({ name, message, setName}) => {
    const tweetDate = "22/02/2021";
    return(
        <div className="Tweet-list">
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
            <button onClick={() => setName('Fred')}>Click</button>
        </div>

    );
}

export default TweetList;