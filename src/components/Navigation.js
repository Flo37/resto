import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='nav'>
            <NavLink to="/">
            <li>Home</li>
            </NavLink>
            <NavLink to="/resto">
            <li>Meals</li>
            </NavLink>
        </div>
    );
};

export default Navigation;