import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
const Navbar = () => {
    const buttonArticle = {
        backgroundColor: '#028bfc',
        padding: '0.5rem',
        borderRadius: '0.6rem',
        color: '#fff'
    };
    return (
        <div>
            <nav className="navbar">
                <div><Link to="/" className='logo'> Logo</Link></div>
                <ul className="liens">
                    <li><Link to='/' className='lien'>Acceuil</Link></li>
                    <li><Link to="/Ajouter" className='lien ' style={buttonArticle}>Créer Articles</Link></li>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;