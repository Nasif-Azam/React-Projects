import React from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const questions = data;
  return (
    <main>
      <div className='container'>
        <h3>Question & Answer about login</h3>
        <section className='info'>
          {questions.map((ques) => {
            return (<SingleQuestion key={ques.id} {...ques}/>);
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
