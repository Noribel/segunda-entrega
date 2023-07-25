import React from 'react';
import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <header className='navbar'>
            <div className="navContainer">
            <a href="#" className='logo'><h1>E-commerce Noribel</h1></a>
            <nav className="menu">        
                <button className="menu-btn">Categorias</button>
                <ul>
                    <li><a href="#">Repuestos y accesorios</a></li>
                    
                </ul>
            </nav>
            </div>
            <CartWidget />
        </header>

        );
    }

export default Navbar;