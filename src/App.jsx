import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { account } from './appwrite';

function App() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [templates, setTemplates] = useState([]);
  const [dark, setDark] = useState(false);

  const loadTemplates = async () => {
    const res = await axios.get('http://localhost:5000/api/templates');
    setTemplates(res.data);
  };

  const submitTemplate = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/templates', { title, description: desc });
    setTitle('');
    setDesc('');
    loadTemplates();
  };

  useEffect(() => {
    loadTemplates();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>📋 Shakl yaratish</h1>
        <button className="btn btn-outline-secondary" onClick={() => setDark(!dark)}>
          {dark ? 'Light' : 'Dark'} Mode
        </button>
      </div>
      <form onSubmit={submitTemplate}>
        <input className="form-control mb-2" placeholder="Sarlavha" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="form-control mb-2" placeholder="Tavsif" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button className="btn btn-primary" type="submit">Yaratish</button>
      </form>
      <ul className="list-group mt-4">
        {templates.map(t => (
          <li className="list-group-item" key={t.id}>
            <strong>{t.title}</strong><br />
            <small>{t.description}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;