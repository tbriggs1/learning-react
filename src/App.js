import React from 'react';
import TestComponent from './TestComponent';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet'

function App() {
  
 const name = 'tom briggs';
 const message = "I'm pretty tired"

 const sayHelloHandler = (user) => {
   console.log(`Hello there ${user}`)
 };


  return (
   <div>
     {/* <TestComponent />
     <CreateTweet />
     <TweetList name={name} message={message}/> */}
     <h1>Hello React</h1>
     <button onClick={() => sayHelloHandler('Mike')}>Click</button>
   </div>
  );
}

export default App;