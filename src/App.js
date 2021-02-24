import React, {useEffect, useState} from 'react';
import TestComponent from './TestComponent';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';




function App() {
  

  const [name, setName] = useState('Tom');
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);

  const message = "Hello";

  useEffect(() => {
    console.log("We run a function yay");

  }, [textInput]);
  
  return (
   <div>
     <TestComponent />
     <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} />
     <TweetList setName={setName} name={name} tweets={tweets} setTweets={setTweets}/>
   </div>
  );
}

export default App;