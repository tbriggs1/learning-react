import React, {useState} from 'react';
import TestComponent from './TestComponent';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet'

function App() {
  
  const [name, setName] = useState('Tom');


  const message = "Hello";

  return (
   <div>
     <TestComponent />
     <CreateTweet />
     <TweetList setName={setName} name={name} message={message}/>}
   </div>
  );
}

export default App;