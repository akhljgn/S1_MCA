
import React from 'react';
import './header.css'; // Import custom CSS file for the header
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting
import { Link } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  // Check if the user is logged in by looking for the token in localStorage
  const isLoggedIn = localStorage.getItem('token') !== null;

  // Logout handler
  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   window.history.pushState(null, null, window.location.href); // Push a new state
  //   window.onpopstate = () => {
  //     window.history.go(1);
  //   };
  //   navigate('/signin');
  //};



//   const handleLogout = () => {
//     // Clear user and token from localStorage
//     localStorage.removeItem('name');// replace with user
//     localStorage.removeItem('token');
    
//     // Optionally force a full page reload to reset the state
// //    window.location.reload(true);
    
//     // Redirect to login page
//     navigate('/signin');
//   };

    const handleLogout = () => {
      localStorage.removeItem("user")
      localStorage.removeItem("token");
      window.location.href = "/signin";
    }



  return (
    <header className="header">
      <i className="icon fa-duotone fa-3x fa-solid fa-clock"></i>
      <h1 className="header-title"><Link to="/" className='otc'>OFFTheClock</Link></h1>

      {/* Conditionally render the Logout button if the user is logged in */}
      <div className="header-buttons">
        {!isLoggedIn ? (
          <>
           <div className='buttons'>
              <button onClick={() => navigate('/signup')} className="button1"><span>Sign Up</span></button>
                <button onClick={() => navigate('/signin')} className="button2"><span>Sign In</span></button>
           </div>
              
          </>
        ) : (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        )}
      </div>
    </header>
  );
}

export default Header;

