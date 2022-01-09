import React, { useState } from 'react'
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const Navbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [showLinks, setShowLinks] = useState(false);
    const [navActive, setNavActive] = useState(false);
    window.onscroll = () => {
        if(window.scrollY > 120)
            setNavActive(true);
        else
            setNavActive(false);
    }

    return (
        <div className={`navbar ${navActive ? 'navbar-active' : ''}`}>
            <div className="navbarLeft">
                <button className='btn hamburgurBtn' onClick={() => setShowLinks(!showLinks)} >
                    <MenuIcon sx={{ fontSize: 30 }} className='hamburgerIcon' />
                </button>
                <h2 className="logo">
                    SJCEM
                </h2>
            </div>
            <div className="navbarCenter" >
                <ul className="navbar-links" id={showLinks ? 'hidden' : ''}>
                    <li className='navbar-link'>
                        <NavLink to='/' activeclassname='active' onClick={() => setShowLinks(!showLinks)} >
                            Home
                        </NavLink>
                    </li>
                    <li className='navbar-link'>
                        <NavLink to='/events' activeclassname='active' onClick={() => setShowLinks(!showLinks)}>
                            Events
                        </NavLink>
                    </li>
                    <li className='navbar-link'>
                        <NavLink to='/stories' activeclassname='active' onClick={() => setShowLinks(!showLinks)}>
                            Stories
                        </NavLink>
                    </li>
                    <li className='navbar-link'>
                        <NavLink to='/jobs' activeclassname='active' onClick={() => setShowLinks(!showLinks)}>
                            Jobs
                        </NavLink>
                    </li>
                    <li className='navbar-link'>
                        <NavLink to='/alumnis' activeclassname='active' onClick={() => setShowLinks(!showLinks)}>
                            Alumnis
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbarRight">
                <Link to='/profile/xyz' onClick={() => setShowLinks(false)}>
                    <Tooltip title="My Profile">
                    <img src={`${PF}images/people/person2.jpg`} alt="" className='navbar-profile-img' />
                    </Tooltip>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
