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
        </li>
        <li class="nav-item">
       
              <a className='anchor text-dark me-3' href="#portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
       
               <a className='anchor text-dark me-3' href="#team">Our Team</a>
        </li>
        <li class="nav-item">
      
               <a className='anchor text-dark me-3' href="#contact">Contact Us</a>
        </li>
        {
            user.email&&
            <Link to="/dashboard">
              <button className="btn btn btn-outline-danger me-3">Dashboard</button>
            </Link>
          }
            <li className="nav-item nav-text text-dark">Welcome: { user?.displayName}</li>
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
               className="btn btn btn-dark "
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
                 className="btn btn-dark mx-auto"
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
    </div>
</nav>
        </div>
    );
};

export default Navbar;