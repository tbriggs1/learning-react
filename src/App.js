import React from 'react';
import TestComponent from './TestComponent';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet'

function App() {
  
 const name = 'tom briggs';
 const message = "I'm pretty tired"

  return (
   <div>
     <TestComponent />
     <CreateTweet />
     <TweetList name={name} message={message}/>
   </div>
  );
}

export default App;