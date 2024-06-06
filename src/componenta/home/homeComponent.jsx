import "./home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Send';
import Nav from "../navbar/navComponent";
// import Stack from '@mui/material/Stack';

export default function HomeBlog() {
  const [Blogs, setBlogs] = useState([]);
    const [update, setUpdate] = useState([false]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:2400/api/v1/blogs");
      setBlogs(res.data.getBlogs);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
      fetchBlogs();
      console.log(Blogs);
  }, []);

  const deleteBlog = async (id) =>{
    try{
        const res = await axios.delete(`http://localhost:2400/api/v1/blogs/delete/${id}`);
        if (res.status === 200) {
          console.log('Blog deleted successfully');
          window.location.reload()
        } else {
            console.log('Failed to delete blog');
        }
    }catch (err) {
        console.error(err);
    }
  }




  return (
    <div className="home-hero">
      <Nav />
      <div className="blog-list">
        {Blogs &&
          Blogs.map((blog) => (
            <div key={blog._id} className="blog">
              <h2>{blog.title}</h2>
              <p>Written by {blog.author.author} {blog.author.date}</p>
              <p>{blog.content}</p>
              <div className="buttons">
              <Button variant="outlined"  onClick={()=>deleteBlog(blog._id)} startIcon={<DeleteIcon />}>
        Delete
      </Button>
      {/* <Button variant="contained" onClick={()=>updateBlog(blog._id)} endIcon={<EditIcon />}>
        Edit
      </Button> */}
              </div>
            </div>
          ))}
         
      </div>
    </div>
  );
}

