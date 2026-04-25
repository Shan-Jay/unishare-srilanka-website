import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ index: '', name: '', course: '', results: [] });
  const [editing, setEditing] = useState(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const fetchStudents = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:30000/api/students', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStudents(res.data);
    } catch (err) {
      console.error('Failed to fetch students:', err);
      alert('Failed to fetch students');
    }
  }, [token]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (token) fetchStudents();
  }, [token, fetchStudents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await axios.put(`http://localhost:30000/api/students/${editing}`, form, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await axios.post('http://localhost:30000/api/students', form, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      setForm({ index: '', name: '', course: '', results: [] });
      setEditing(null);
      fetchStudents();
    } catch (err) {
      console.error('Error saving student:', err);
      alert('Error saving student');
    }
  };

  const handleEdit = (student) => {
    setForm(student);
    setEditing(student._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete student?')) {
      try {
        await axios.delete(`http://localhost:30000/api/students/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        fetchStudents();
      } catch (err) {
        console.error('Error deleting student:', err);
        alert('Error deleting student');
      }
    }
  };

  const addResult = () => {
    setForm({ ...form, results: [...form.results, { subject: '', grade: '', marks: 0 }] });
  };

  const updateResult = (idx, field, value) => {
    const newResults = [...form.results];
    newResults[idx][field] = value;
    setForm({ ...form, results: newResults });
  };

  if (!token) {
    navigate('/login');
    return null;
  }

  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Index" value={form.index} onChange={e => setForm({ ...form, index: e.target.value })} required />
        <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
        <input type="text" placeholder="Course" value={form.course} onChange={e => setForm({ ...form, course: e.target.value })} required />
        <h3>Results</h3>
        {form.results.map((res, idx) => (
          <div key={idx}>
            <input type="text" placeholder="Subject" value={res.subject} onChange={e => updateResult(idx, 'subject', e.target.value)} />
            <input type="text" placeholder="Grade" value={res.grade} onChange={e => updateResult(idx, 'grade', e.target.value)} />
            <input type="number" placeholder="Marks" value={res.marks} onChange={e => updateResult(idx, 'marks', parseInt(e.target.value))} />
          </div>
        ))}
        <button type="button" onClick={addResult}>Add Result</button>
        <button type="submit">{editing ? 'Update' : 'Add'} Student</button>
      </form>
      <h2>Students</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            {student.name} ({student.index}) - {student.course}
            <button onClick={() => handleEdit(student)}>Edit</button>
            <button onClick={() => handleDelete(student._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;