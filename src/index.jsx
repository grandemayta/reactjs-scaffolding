import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const handleClick = () => {
    console.log('Hello world!');
  };

  return (
    <button onClick={handleClick}>
      Click on button!
    </button>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
