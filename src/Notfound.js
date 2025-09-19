import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Notfound = () => {
    return (
        <div className='404'>
            <h2> nous nos execusant!!! mais la page est introuvable </h2>
            <Link to="/" > Allez à la page d'accueil</Link>
        </div>
    );
};

export default Notfound;