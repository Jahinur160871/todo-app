const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, text: 'Learn DevOps', done: false },
];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const newTodo = { id: Date.now(), text: req.body.text, done: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

const PORT = process.env.PORT || 5000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
