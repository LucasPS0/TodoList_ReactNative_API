const express = require('express');
const router = express.Router();
const Task = require('./model');

router.use(express.json());

// Get all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Add a new task
router.post('/tasks', async (req, res) => {
  const { task } = req.body;
  try {
    const newTask = new Task({ task });
    await newTask.save();
    res.status(201).json({ message: 'Task added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add task' });
  }
});

// Update an existing task
router.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, { task });
    if (updatedTask) {
      res.json({ message: 'Task updated successfully' });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// Delete a task
router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndRemove(id);
    if (deletedTask) {
      res.json({ message: 'Task deleted successfully' });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

// Save a completed task
router.post('/completedTasks', async (req, res) => {
  const { task } = req.body;
  try {
    const newCompletedTask = new CompletedTask({ task });
    await newCompletedTask.save();
    res.status(201).json({ message: 'Completed task saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save completed task' });
  }
});

module.exports = router;
