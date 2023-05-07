import React from "react";
import "./Login.css";
import Input from "../Input/Input";
import { Container } from "react-bootstrap";
import { Link, Redirect, } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";


const Login = () => {
  const {
    handleGoogleSignIn,
    signInusingEmailPassword,
    setEmail,
    setPassword,
    error,
    user,
    setUser, setError, email, password
  } = useAuth();

  // const notify = () => toast(" Successfully Login!!", {
  //   position: "top-center",
  //   autoClose: 2000,
  // });
  const handleClick =()=>{

    signInusingEmailPassword()
    // notify()

     //validation check
     if( email && password){
      setError('')
      toast.success('Successfully Login!!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else{
      setError("Please fill out all fields");
    }

  }
  useEffect(() => {
    if (error) {
      const errorTimer = setTimeout(() => {
        setError('');
      }, 2000);
      return () => clearTimeout(errorTimer);
    }
  }, [setError, error]);
  const history = useHistory();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handledefault = (e) => {
    e.preventDefault();
  };
  const location = useLocation();
  const redirect_url = location.state?.from || "/";
;
  const handleGoogleSignInRedirect = () => {
       handleGoogleSignIn()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setError("");
        history.push(redirect_url);
        
      })
      .catch((error) => {
        // setError(error.message);
      });
  };
  return (
    <>
      <Container>
        <div className="loginFormMainDiv">
          <div className="loginFormDiv">
            <h2 className="loginForm__title">Login Form</h2>
            <form onSubmit={handledefault} className="loginForm">
              <Input
                onBlur={handleEmail}
                isFloatingLabelInput={true}
                label="Enter Email"
                name="username"
                value=""
                type="email"
                placeholder="Enter your username"
                required
              />
              <Input
                onBlur={handlePassword}
                isFloatingLabelInput={true}
                label="Enter your password"
                name="password"
                value=""
                type="password"
                placeholder="Enter your password"
                required
              />
              <small className="m-2 text-danger">{error}</small>
              <div className="mb-1">
                {user.email && <Redirect to="/"></Redirect>}
                <button
                  className="btn btn-primary fs-5 w-100 bold "
                  onClick={handleClick}
                >
                  Login
                </button>
                <ToastContainer
              position="top-center"
              autoClose= {2000}
              />
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-success fs-5 w-100 bold "
                  onClick={handleGoogleSignInRedirect}
                >
                  <i className="fab fa-google" />
                  Login With Google
                </button>
               
              </div>

              <div className="text-center">
                <p>
                  Haven't Account? <Link to="/registration">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;