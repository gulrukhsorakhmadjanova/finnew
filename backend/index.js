const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// In-memory store for users
const users = [
  { email: 'admin@example.com', password: '123456' }
];

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ message: 'Muvaffaqiyatli kirdingiz!' });
  } else {
    res.status(401).json({ message: 'Email yoki parol noto‘g‘ri.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});