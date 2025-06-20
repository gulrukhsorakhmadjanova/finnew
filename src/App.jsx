import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Hellooo');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <button className="btn btn-primary mb-3" onClick={handleClick}>
        Click Me
      </button>
      {message && <h2 className="text-success">{message}</h2>}
    </div>
  );
}

export default App;
