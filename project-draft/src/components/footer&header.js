import React from 'react';
// import the font-icon style
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export function Nav() {
//   const hamburger = document.querySelector('.hamburger');
//   const navlink = document.querySelector('.navlink');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     navlink.classList.toggle('active');
// })

// document.querySelectorAll('.navl').forEach(n => n.addEventListener('click', () => {
//     hamburger.classList.remove('active');
//     navlink.classList.remove('active');
// }))

const hamburgerToggle = () => {
  const hamburger = document.querySelector('.hamburger');
  const navlink = document.querySelector('.navlink');
  hamburger.classList.toggle('active');
  navlink.classList.toggle('active');
}

const navlRemove = () => {
  const hamburger = document.querySelector('.hamburger');
  const navlink = document.querySelector('.navlink');
  hamburger.classList.remove('active');
  navlink.classList.remove('active');
}

  return(
    <section className="navbar">
    <nav>
      <header>
        <h1><Link to='/home' className='logo' onClick={navlRemove}>Dvogue</Link></h1>
        </header>
        <ul className='navlink' id='navlink'>
          <li>
        <Link to='/closet' className='navl' onClick={navlRemove}>My Closet</Link>
          </li>
          <li>
        <div className="nav-dropdown">
        <button className="dropbutton">Cloth Generator 
        <FontAwesomeIcon icon={faCaretDown} />
        </button>
        <div className="nav-dropdown-content">
          <Link to='/outfit generator' className='navl' onClick={navlRemove}>Outfit Generator</Link>
          <Link to='/item generator' className='navl' onClick={navlRemove}>Item Generator</Link>
        </div>
      </div>
      </li>
      <li><Link to='/blog' className='navl' onClick={navlRemove}>Blog</Link></li>
      <li><Link to='/about' className='navl' onClick={navlRemove}>About Us</Link></li>
      <li><Link to="/" className='navl' onClick={navlRemove}><FontAwesomeIcon icon={faUser} />Login</Link></li>
      </ul>
      <div className="hamburger" onClick={hamburgerToggle}>
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
                <Link to='/outfit generator'>Generate full outfit</Link>
              </li>
              <li>
              <Link to='/item generator'>Generate items</Link>
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