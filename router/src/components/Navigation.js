import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">React Router</span>
                <NavLink to ="/">Home</NavLink>
                <NavLink to ="/About">About</NavLink>
                <NavLink to ="/Contact">Contact</NavLink>
            </nav>
        </div>
    );
    
    
};

export default Navigation;