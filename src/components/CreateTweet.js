import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateTweet = ({tweets, setTweets, textInput, setTextInput}) => {
    //state
    

    const userInputHandler = (e) => {
        //e.target.value gets the current text that you are typing
        setTextInput(e.target.value);
    }

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, {message: textInput, id: uuidv4()}]);
        setTextInput("");
    }

    return(
        <form onSubmit={submitTweetHandler}>
            <textarea value={textInput} onChange={userInputHandler} cols="40" rows="10"></textarea>
            <button>Submit</button>
        </form>

    );
}

export default CreateTweet;