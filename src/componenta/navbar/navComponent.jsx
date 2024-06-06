import './nav.css'
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

const token = Cookies.get('token');
let role = null;

    if (token) {
        const decodedToken = jwtDecode(token);
        role = decodedToken.payload.role;
}
const HandleLogout = () => {
    Cookies.remove('token');
    window.location.reload();
}
export default function Nav() {
    return (
        <nav className="navbar">
            <div className="sag-blog">
                <Link to="/" className='my-nav'><h1>SAG BLOG</h1></Link>
            </div>
        
            <div className="navLink">
                {!token && <Link to="/login" className='my-nav'>Login</Link>}
                {!token && <Link to="/register" className='my-nav'>Register</Link>}
                <Link to="/add" className='my-nav'>Add Blog</Link>
                <button onClick={() => {HandleLogout()}} className='my-nav'>Logout</button>
            </div>
        </nav>
    )
}