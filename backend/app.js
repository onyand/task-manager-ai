// Create an Express API for task management with GET and POST endpoints
const express = require('express'); 
const app = express();
app.use(express.json());
let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).json(task);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 