import React, {useState, useEffect} from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import "./Navbar.css"
import { isClickableInput } from '@testing-library/user-event/dist/utils';

function Navbar()  {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false);
  return (
    <>
         <nav className="navbar">
        <div className="navbar-container">
          <Link to="#" className="navbar-logo" onClick={closeMobileMenu}>
            Patriot Energy
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="#about" className="nav-links" onClick={closeMobileMenu}>
               About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#safety"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Safety
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#contact-us"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <button></button>
        </div>
      </nav>

    </>
  )
}

export default Navbar
