import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage('Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Kirish</h2>
      <input className="form-control my-2" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="form-control my-2" placeholder="Parol" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="btn btn-primary" onClick={handleLogin}>Kirish</button>
      <p className="mt-3">{message}</p>
    </div>
  );
}

export default App;