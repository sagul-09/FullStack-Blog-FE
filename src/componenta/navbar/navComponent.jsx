import './nav.css'
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar">
            <div className="sag-blog">
                <Link to="/" className='my-nav'><h1>SAG BLOG</h1></Link>
            </div>
        
            <div className="navLink">
                <Link to="/login" className='my-nav'>Login</Link>
                <Link to="/register" className='my-nav'>Register</Link>
                <Link to="/add" className='my-nav'>Add Blog</Link>
            </div>
        </nav>
    )
}