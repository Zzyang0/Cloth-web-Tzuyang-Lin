import React from 'react';
// import the font-icon style
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link} from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';


export function Nav(props) {
  const currentUser = props.currentUser.userId;

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


  const handleSignOut = (event) => {
    console.log("signing out");
    signOut(getAuth());
  }

  
  return (
    <section className="navbar">
      <nav>
        <header>
          <h1><Link to='/' className='logo' onClick={navlRemove}>Dvogue</Link></h1>
        </header>
        <ul className='navlink' id='navlink'>
          <li><Link to='/closet' className='navl' onClick={navlRemove}>My Closet</Link></li>
          <li><Link to='outfitgenerator' className='navl' onClick={navlRemove}>Outfit Generator</Link></li>
          <li><Link to='itemgenerator' className='navl' onClick={navlRemove}>Item Generator</Link></li>
          <li><Link to='/quiz' className='navl' onClick={navlRemove}>Style Quiz</Link></li>
          <li><Link to='/about' className='navl' onClick={navlRemove}>About Us</Link></li>
          {!currentUser &&
            <li><Link to='/signin'><FontAwesomeIcon icon={faUser} />Login</Link></li>
          }
          {currentUser &&
            <li><Link to='/signin' onClick={handleSignOut}>Sign Out</Link></li>
          }
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
  return (
    <footer className="footer">
      <ul className="footer1">

        <li className="footeritem">
          <h2><Link to='/' className="title">Home</Link></h2>
        </li>

        <li className="footeritem">
          <h2><Link to='outfitgenerator' className="title">Cloth generator</Link></h2>
          <ul className="footerul">
            <li>
              <Link to='outfitgenerator'>Generate full outfit</Link>
            </li>
            <li>
              <Link to='itemgenerator'>Generate items</Link>
            </li>
          </ul>
        </li>

        <li className="footeritem">
          <h2><Link to='/quiz' className="title">Style Quiz</Link></h2>
        </li>

        <li className="footeritem">
          <h2><Link to='/about' className="title">About</Link></h2>
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