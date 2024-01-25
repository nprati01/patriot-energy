import React, {useState, useEffect} from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import "./Navbar.css"

function Navbar()  {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false);
  return (
    <>
         <nav className="navbar">
        <div className="navbar-container">
          <Link to="#" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="nav-logo" alt='logo' src="../../images/logo_borderless.PNG"/>
            Patriot Energy

          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link 
              to="#about" 
              className="nav-links" 
              onClick={closeMobileMenu}>
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
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>

        </div>
      </nav>

    </>
  )
}

export default Navbar
