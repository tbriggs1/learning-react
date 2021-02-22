import React from 'react';
import TestComponent from './TestComponent';

function App() {
  
  //Write basic JS code
  const items = [1, 2, 3, 4, 5];

  items.map((item) => {
    console.log(item);
  });

  return (
   <div>
     <TestComponent />
   </div>
  );
}

export default App;
