import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:30000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
      window.location.href = '/admin';
    } catch (err) {
      console.error('Login failed:', err);
      alert('Login failed');
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <input type="text" placeholder="Username" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} required />
        <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;