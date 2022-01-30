import React,{useState} from 'react'
import './style.css'
import {NavLink} from 'react-router-dom' 
import {Link} from 'react-scroll'
const NavBar = () => {

    const [isNavOpen,setIsNavOpen] = useState(false)

    return (
        <div className='nav-bar'>
            <div className='logo'>Icarus</div>
            <div className={isNavOpen ? 'nav-links menu-open' : 'nav-links'}>
                <NavLink className={(navData) => navData.isActive ? "activeLink" : "" } to='/'>Home</NavLink>                        
                <NavLink className={(navData) => navData.isActive ? "activeLink" : "" } to='about'>About</NavLink>
                <NavLink className={(navData) => navData.isActive ? "activeLink" : "" } to='categories'>Categories</NavLink>
                <a href="/#contact">Contact</a>            
            </div>
            <a className='cta-1 nav-btn' href='/#booking'>Book a Table</a>
            <i className={isNavOpen ? "fas fa-bars disappear" : "fas fa-bars appear"} onClick={() => setIsNavOpen(true)}></i>
            <i className={isNavOpen ? "fas fa-times appear" : "fas fa-bars disappear"} onClick={() => setIsNavOpen(false)}></i>   
        </div>
    )
}

export default NavBar
