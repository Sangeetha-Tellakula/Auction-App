import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    setError('');

    // Get stored user details
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      localStorage.setItem('authToken', 'fake-auth-token');
      alert('Signin successful! Redirecting to dashboard.');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="form-container">
      <h2>Signin</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signin</button>
      </form>
    </div>
  );
}

export default Signin;

