import './register.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:2400/api/v1/users/register', { username, password });
        console.log(res.data);
    } catch (err) {
        console.error(err);
        if(err.res && err.res.status === 409) {
            window.alert('User already exists');
        } else {
            window.alert('An error occurred');
        }
    }
}
    return (
        <div className="register-hero">
            <div className="register-form-box">
            <div className="title">
            <h1>Register</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
                <Link to="/login">Already have an account? Login here</Link>
            </div>
        </div>
    )
}