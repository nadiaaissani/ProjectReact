import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import UseRecupération from './UseRecupération';
import Bloglist from './Bloglist';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = UseRecupération(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();
    const HandleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            console.log('ça marche');
            history.push('/');

        })
    };
    return (
        <div className='blog-detail'>
            {isLoading && <div> en cours de traitement</div>}
            {error && <div> {error} </div>}
            {blog && (
                <div className="blog">
                    <h2 className="blog-titre"> {blog.title}</h2>
                    <small className="blog-publication-date">{blog.date}</small>
                    <p className="blog-body">{blog.body}</p>
                    <p className="blog-author"> {blog.author}</p>
                    <button onClick={HandleDelete}> Supprimer</button>
                </div>
            )}
        </div>
    );
};

export default BlogDetails;