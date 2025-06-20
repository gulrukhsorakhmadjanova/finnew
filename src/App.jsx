import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Hellooo world');
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle text-center">
      <button className="btn btn-primary mb-3" onClick={handleClick}>
        Click Me
      </button>
      {message && <h2 className="text-success">{message}</h2>}
    </div>
  );
}

export default App;
