import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Bloglist = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (

        <div className="bloglist">
            <h2> {title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog" key={blog.id} >
                        <Link to={`/blogs/${blog.id}`} className="blog-titre"> {blog.title}</Link>
                        <small className="blog-publication-date"> publier le:{blog.date}  </small>
                        <p className='blog-author'> Publier par: {blog.author}</p>
                        {/* <button onClick={() => HandleDelete(blog.id)}> Supprimer un Article</button> */}
                        {/* <button onClick={DireB}> Bonjour</button> */}
                    </div>
                )
                )}

        </div>

    );
};

export default Bloglist;