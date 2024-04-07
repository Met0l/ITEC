import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './BaraNavigare.css';

function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container"></div>
                    <Link to="/" className='navbar-logo'>
                        {/* CND <i className="fa-solid fa-circle"></i> */}
                        CND 
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Acasa
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/educatie' className='nav-links' onClick={closeMobileMenu}>
                                Oferta educationala
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/noutati' className='nav-links' onClick={closeMobileMenu}>
                                Noutati
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/media' className='nav-links' onClick={closeMobileMenu}>
                                Media
                            </Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link to='/extracurriculare' className='nav-links' onClick={closeMobileMenu}>
                                Extracurriculare
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
            </nav>
        </>
    )
}

export default Navbar;