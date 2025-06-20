import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Hellooo world ');
  };

  return (
    <div className="container mt-5 text-center">
      <button className="btn btn-primary mx-auto d-block" onClick={handleClick}>
        Click Me
      </button>

      {message && <h2 className="mt-3 text-success">{message}</h2>}
    </div>
  );
}

export default App;
