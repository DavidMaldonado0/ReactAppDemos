import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header style={headerStyle}>
           <h1>Todo List App</h1> 
           <Link style={linkStyle} to="/">Home</Link> |
           <Link style={linkStyle} to="/about"> About</Link>

        </header>
    )
}

const headerStyle = {
    color: '#fff',
    textAlign: 'center',
    padding: '20 px',
    paddingBottom: '20px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;