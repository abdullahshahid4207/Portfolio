import React, { useState } from 'react';
import carrosel from '../assets/images/carrosel.jpeg'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    const [nav, setNav] = useState(false);

    const changebackground = () => {
        if (window.scrollY >= 200) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', changebackground)
    // myNav active navbar navbar-expand-lg navbar-dark fixed-top
    return (
        <>
            <nav className={nav ? '// myNav active navbar navbar-expand-lg navbar-dark fixed-top' : '// myNav navbar navbar-expand-lg navbar-dark fixed-top'}>
                <div className="container">
                    <NavLink to='/' className="navbar-brand web_title animate__animated animate__zoomIn">WEBGURU</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active navLinks animate__animated animate__zoomIn" href='/'>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active navLinks animate__animated animate__zoomIn" href={props.href1}>Portfolio</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
