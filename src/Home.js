import React from 'react';
// import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';
import UseRecupération from './UseRecupération';
const Home = () => {
    // let name = 'nadia';
    // const [name, setName] = useState('nadia');
    // const handleClick = () => {

    //     setName('nabila');
    // };
    // const handleClickAgain = (name) => {
    //     console.log(`salut ${name}`);

    // }

    // const HandleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlog(newBlogs);
    // }
    // useeffect();

    // const DireB = () => {
    //     alert('bonjour');
    // }
    const { data: blogs, isLoading, error } = UseRecupération('http://localhost:8000/blogs');
    return (
        <div className="contenu">
            {error && <div> une erreur c'est produit  veuillez patientez</div>}
            {isLoading && <div>  En cours de traitement</div>}
            {blogs && <Bloglist blogs={blogs} title={'liste des blogs'} ></Bloglist>}
            {/* <Bloglist blogs={blogs.filter((blog) => blog.author == 'nadia1')} title={'liste des blogs écrit par nadia1'}></Bloglist> */}

            {/* <h2> Notre page D'acceuil</h2>
            <p>{name}</p>
            <button onClick={handleClick}>  cliquer ici </button> */}
            {/* <button onClick={() => handleClickAgain('nadia')}> Cliquer ici</button> */}
        </div>
    );
};

export default Home;