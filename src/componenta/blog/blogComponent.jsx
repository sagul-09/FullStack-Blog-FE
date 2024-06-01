import './blog.css';
import axios from 'axios';
import { useState } from 'react';

export default function Blog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:2400/api/v1/blogs/create', {
                title, content, author:{author}
            });
            console.log('Response:', res.data);
            setTitle('');
            setContent('');
            setAuthor('');
        } catch (err) {
            console.error('Error:', err);
            if (err.response && err.response.status === 409) {
                window.alert('Blog already exists');
            } else {
                window.alert('An error occurred');
            }
        }
    };

    return (
        <div className="blog-hero">
            <div className="add-block-box">
                <div className="blog-title">
                    <h1>Add Blog</h1>
                </div>
                <div className="blog-content">
                    <p>Welcome to the Add blog page. Fill the below Form with required credentials to create a Blog.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>Blog Title:</label>
                    <input 
                        type='text' 
                        placeholder='Blog Title' 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                    <label>Author:</label>
                    <input 
                        type='text' 
                        placeholder='Author' 
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)} 
                    />
                    <label>Content:</label>
                    <input 
                        type='text' 
                        placeholder='Content' 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                    />
                    <button type='submit'>Upload</button>
                </form>
            </div>
        </div>
    );
}
