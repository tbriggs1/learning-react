import React, {useState} from 'react';

const CreateTweet = (props) => {
    //state
    const [textInput, setTextInput] = useState('');
    const [tweets, setTweets] = useState([]);

    const userInputHandler = (e) => {
        //e.target.value gets the current text that you are typing
        setTextInput(e.target.value);
    }

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, textInput]);
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