const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'task_manager'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Routes
app.get('/tasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/tasks', (req, res) => {
  const { name, description, status } = req.body;
  db.query('INSERT INTO tasks (name, description, status) VALUES (?, ?, ?)', [name, description, status], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, name, description, status });
  });
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, status } = req.body;
  db.query('UPDATE tasks SET name = ?, description = ?, status = ? WHERE id = ?', [name, description, status, id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
