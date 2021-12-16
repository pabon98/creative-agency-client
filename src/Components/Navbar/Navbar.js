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
      <ul class="navbar-nav d-flex justify-content-between  text-dark">
        <li class="nav-item">
        <NavLink
                className="Nav_link text-dark me-2 decoration"
                to="/home"
                activeClassName="selected"
              >
                Home
              </NavLink>
        </li>
        <li class="nav-item">
        <NavLink
                className="Nav_link text-dark me-2 decoration"
                to="/portfolio"
                activeClassName="selected"
              >
                Portfolio
              </NavLink>
        </li>
        <li class="nav-item">
        <NavLink
                className="Nav_link text-dark me-2 decoration"
                to="/team"
                activeClassName="selected"
              >
                Our Team
              </NavLink>
        </li>
        <li class="nav-item">
        <NavLink
                className="Nav_link text-dark me-5 decoration"
                to="/contact"
                activeClassName="selected"
              >
                Contact Us
              </NavLink>
        </li>
        {
            user.email&&
            <Link to="/dashboard">
              <button className="btn btn btn-outline-danger me-3">DASHBOARD</button>
            </Link>
          }
            <li className="nav-item nav-text text-dark">Welcome :{user?.displayName}</li>
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
      {user.email ? (
             
             <div>
               <button
               onClick={handleLogOut}
               className="btn btn btn-outline-danger position-absolute top-50 end-0 translate-middle-y mx-5"
               type=""
               data-bs-toggle="tooltip"
               data-bs-placement="bottom"
             >
               Logout
             </button>
             </div>
           ) : (
             <NavLink to="/loginform">
               <button
                 className="btn  btn-outline-danger position-absolute top-50 end-0 translate-middle-y mx-5"
                 type=""
                 data-bs-toggle="tooltip"
                 data-bs-placement="bottom"
               >
                 Login
               </button>
             </NavLink>
           )}
           
        
       </div>
    </div>
</nav>
        </div>
    );
};

export default Navbar;