import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import logo from '../../images/logos/logo.png'
import './Navbar.css'

const Navbar = () => {
  const { user, handleLogOut } = useAuth();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg">
  <div class="container-fluid">
  <a class="navbar-brand" href="#nav">
      <img  src={logo} alt="" width="100px" height="30px" class="d-inline-block align-text-top"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav mx-5 text-dark">
        <li class="nav-item">
        <NavLink
                className="Nav_link text-dark me-3 decoration"
                to="/home"
                activeClassName="selected"
              >
                Home
              </NavLink>
        <NavLink
                className="Nav_link text-dark me-3 decoration"
                to="/explore"
                activeClassName="selected"
              >
                Explore
              </NavLink>
        </li>
        <li class="nav-item">
       
              <a className='anchor text-dark me-3' href="#portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
       
        <NavLink
                className="Nav_link text-dark me-3 decoration"
                to="/team"
                activeClassName="selected"
              >
                Our Team
              </NavLink>
        </li>
        <li class="nav-item">
      
               <a className='anchor text-dark me-3' href="#contact">Contact Us</a>
        </li>
        {
            user.email&&
            <Link to="/dashboard">
              <p className='ms-2 text-dark'>Dashboard</p>
            </Link>
          }
            <li className="nav-item nav-text text-dark mx-4"> {`Welcome,  ${user?.displayName}`}</li>
            {/* {<button className='nav-item nav-text text-dark'> { user?.displayName} </button>} */}
            {
             (user.photoURL && user.email) &&  <img
             src={user?.photoURL}
             height="40px"
             style={{ borderRadius: "50%" }}
             width="40px"
             alt=""
             className="pull-left img-circle login"
           />
           }
          </ul>
          
        <div className='ms-auto'>
          
        {user.email ? (
             
             <div>
               <button
               onClick={handleLogOut}
               className="btn btn btn-dark"
               type="button"
               data-bs-toggle="tooltip"
               data-bs-placement="bottom"
             >
               Logout
             </button>
             
             </div>
           ) : (
             <NavLink to="/loginform">
               <button
                 className="btn btn-dark mx-auto"
                 type="button"
                 data-bs-toggle="tooltip"
                 data-bs-placement="bottom"
               >
                 Login
               </button>
             </NavLink>
           )}
        </div>
           
        
       </div>
    </div>
</nav>
        </div>
    );
};

export default Navbar;