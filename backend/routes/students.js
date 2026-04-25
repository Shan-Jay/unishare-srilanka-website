const express = require('express');
const Student = require('../models/Student');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const router = express.Router();

// Get student by index (public)
router.get('/result/:index', async (req, res) => {
  try {
    const student = await Student.findOne({ index: req.params.index });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all students (admin only)
router.get('/', auth, admin, async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add student (admin only)
router.post('/', auth, admin, async (req, res) => {
  const { index, name, course, results } = req.body;
  try {
    const student = new Student({ index, name, course, results });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update student (admin only)
router.put('/:id', auth, admin, async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete student (admin only)
router.delete('/:id', auth, admin, async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;