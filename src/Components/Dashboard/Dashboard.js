import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import AddService from "../AddService/AddService";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrders from "../ManageOrders/ManageOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Navbar from "../Navbar/Navbar";
import Review from "../Review/Review";
// import Pay from '../Pay/Pay';

import "./Dashboard.css";
import useAuth from "../hooks/useAuth";
import Pay from "../Payment/Pay";



const Dashboard = () => {
  const { user, handleLogOut } = useAuth();
  // let history = useHistory()
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  // console.log(isAdmin);
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div class="container-fluid text-center">
        <div class="row content">
          <div class="col-sm-2 sidenav">
            {isAdmin ? (
              <h3 className="text-white">Admin Dashboard</h3>
            ) : (
              <h3 className="text-white">User Dashboard</h3>
            )}

            <div>
            {isAdmin ? (
              <div className="mt-4">
                <NavLink to="/home">
                  <span className="text-white">Home</span>
                </NavLink>
                <br /><br />
                <NavLink to="/dashboard/makeAdmin">
                  <span className="text-white">Make Admin</span>
                </NavLink>
                <br />
                <br />
                <NavLink to="/dashboard/addService">
                  <span className="text-white">Add Service</span>
                </NavLink>
                <br />
                <br />
                <NavLink to="/dashboard/manageOrders">
                  <span className="text-white">Manage Orders</span>
                </NavLink>
                <br />
                <br />
                <NavLink to="/dashboard/manageProducts">
                  <span className="text-white">Manage Products</span>
                </NavLink>
                <div className="my-4">
              {
                user.email?  <button
                onClick={handleLogOut}
                className="btn btn btn-dark "
                type=""
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              >
                Logout
              </button> :  <NavLink to="/loginform">
              <button
               onClick={handleLogOut}
               className="btn btn btn-dark "
               type=""
               data-bs-toggle="tooltip"
               data-bs-placement="bottom"
             >
               Login
             </button>
              </NavLink>
              }
             {/* <Redirect  to="/" /> */}
             
             </div>
              </div>
            ) : (
              <div className="mt-4">
                <NavLink to="/home">
                  <span className="text-white">Home</span>
                </NavLink>
                <br /> <br />
                <NavLink to="/dashboard/pay">
                  <span className="text-white">Payment</span>
                </NavLink>
                <br /> <br />
                <NavLink to="/dashboard/review">
                  <span className="text-white">Review</span>
                </NavLink>
                <br /> <br />
                <NavLink to="/dashboard/myOrders">
                  <span className="text-white">My Orders</span>
                </NavLink>
                <div className="my-4">
              {
                user.email?  <button
                onClick={handleLogOut}
                className="btn btn btn-dark "
                type=""
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              >
                Logout
              </button> :  <NavLink to="/loginform">
              <button
               onClick={handleLogOut}
               className="btn btn btn-dark "
               type=""
               data-bs-toggle="tooltip"
               data-bs-placement="bottom"
             >
               Login
             </button>
              </NavLink>
              }
             {/* <Redirect  to="/" /> */}
             
             </div>
              </div>
            )}
            </div>
          </div>
          <div class="col-sm-10 text-left">
            <Switch>
              <Route exact path="/dashboard/pay">
              <Pay></Pay>
            </Route>
              <Route exact path="/dashboard/review">
                <Review></Review>
              </Route>
              <Route exact path="/dashboard/myorders">
                <MyOrders></MyOrders>
              </Route>
              <Route exact path="/dashboard/addService">
                <AddService></AddService>
              </Route>
              <Route exact path="/dashboard/manageOrders">
                <ManageOrders></ManageOrders>
              </Route>
              <Route exact path="/dashboard/manageProducts">
                <ManageProducts></ManageProducts>
              </Route>
              <Route exact path="/dashboard/makeAdmin">
                <MakeAdmin></MakeAdmin>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
