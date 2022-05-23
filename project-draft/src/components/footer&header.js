import React from 'react';
// import the font-icon style
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export function Nav() {
  return(
    <section className="navbar">
    <nav>
      <header>
        <h1><Link to='/home' className='logo'>Dvogue</Link></h1>
        </header>
        <ul className='navlink' id='navlink'>
          <li>
        <Link to='/closet' className='navl'>My Closet</Link>
          </li>
          <li>
        <div className="nav-dropdown">
        <button className="dropbutton">Cloth Generator 
        <FontAwesomeIcon icon={faCaretDown} />
        </button>
        <div className="nav-dropdown-content">
          <Link to='outfitgenerator' className='navl'>Outfit Generator</Link>
          <Link to='/itemgenerator' className='navl'>Item Generator</Link>
        </div>
      </div>
      </li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/about'>About Us</Link></li>
      <li><a className="login" href="#"><FontAwesomeIcon icon={faUser} />Login</a></li>
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
    </section>
    )

}

export function Footer() {

    return(
        <footer className="footer">
        <ul className="footer1">
    
          <li className="footeritem">
          <h2><Link to='/home' className="title">Home</Link></h2>
          </li>
      
          <li className="footeritem">
            <h2 className="title">Cloth generator</h2>
            <ul className="footerul">
              <li>
                <Link to='outfitgenerator'>Generate full outfit</Link>
              </li>
              <li>
              <Link to='/itemgenerator'>Generate items</Link>
              </li>
            </ul>
          </li>
      
          <li className="footeritem">
            <h2><Link to='/blog'className="title">Blogs</Link></h2>
          </li>
      
          <li className="footeritem">
            <h2><Link to='/about' className="title">About</Link></h2>
            <ul className="footerul">
              <li>
                <Link to='/about'>About the web</Link>
              </li>
            </ul>
          </li>
      
          <li className="footeritem">
            <h2 className="title">Social</h2>
      
            <ul className="footerul">
              <li>
                <a href="https://www.instagram.com/">Our instagram</a>
              </li>
      
              <li>
                <a href="https://www.facebook.com/">Our Facebook</a>
              </li>
      
              <li>
                <a href="https://twitter.com/?lang=en">Our twitter</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="contact">
          <h2>Contact Us:</h2>
          <li>
            <a href="info@dvougue.com">Contact us via email</a>
          </li>
          <li>
            <a href="tel:543-126-8970">Contact us via phone</a>
          </li>
        </div>
      
        <div className="groupmember">
          <p>&copy; powered by Iris Ding, Frank Lin, Jiali Liu, Phuong Vu.</p>
        </div>
      </footer>
    );
}