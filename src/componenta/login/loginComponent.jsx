import './login.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import bg from './bg.png';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:2400/api/v1/users/login', { username, password });
            console.log(response.data);
        } catch (err) {
            console.error(err);
            if (err.response && err.response.status === 401) {
                window.alert('Incorrect username or password');
            } else {
                window.alert('An error occurred');
            }
        }
    }

    return (
        <div className="login-hero">
            <div className="login-form-box">
            <div className="login-title">
               
                <h1>Login</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
                <Link to="/register" class>Don't have an account? Register here</Link>
            </div>
        </div>
    )
}