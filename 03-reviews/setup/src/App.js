import React from 'react';
import Review from './Review';
// import { FcLinux } from 'react-icons/fc';

function App() {
  return (
    // react-icons are svg. 
    // <h2>reviews project setup<FcLinux className='icon' /></h2>
    <main>
      <div className='container'>
        <div className='title'>
          <h2>My Reviews</h2>
          <div className='underline'></div>
          <Review />
        </div>
      </div>
    </main>
  );
}

export default App;
