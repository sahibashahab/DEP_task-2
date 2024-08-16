import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo/lo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [sidenav, setSidenav] = useState(false);
    const [sticky, setSticky] = useState(false);
    const menuIcon = <FontAwesomeIcon icon={faBars} />;

    const sidenavShow = () => {
        setSidenav(!sidenav);
    }

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 20);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <header id="site_header" className={`${sticky ? "sticky" : ''}`}>
            <div className="container">
                <nav className="navbar" id="Navbar">
                    <div className="navbar_brand">
                        <a href="/">
                            <img src={Logo} alt="Logo"/>
                        </a>
                    </div>
                    <div className="navbar_toggler" onClick={sidenavShow}>
                        {menuIcon}
                    </div>
                    <div className={`menu_items ${sidenav === true ? 'active' : ''}`}>
                        <ul>
                            <li>
                                <Link activeClass="active" to="home" spy={true} smooth={true}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="about" spy={true} smooth={true}>
                                    About US
                                </Link>
                            </li>
                            <li>
                                <Link to="services" spy={true} smooth={true}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="faq" spy={true} smooth={true}>
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        </>
    )
}
