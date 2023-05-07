import React, { useEffect } from "react";
import "./Registration.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Container } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const { error, setError, RegisterWithEmail, email, setEmail, password, setPassword, name, setName, user, setUser  } = useFirebase();
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleImage = (e) => {
    setUser((prevUser) => ({ ...prevUser, image: e.target.files[0] }));
  };

  const handleClick = () => {
    RegisterWithEmail();

    //validation check
    if(user && name && email && password){
      setError('')
      toast.success('Registration successful!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else{
      setError("Please fill out all fields");
    }
  };
  useEffect(() => {
    if (error) {
      const errorTimer = setTimeout(() => {
        setError('');
      }, 2000);
      return () => clearTimeout(errorTimer);
    }
  }, [setError, error]);
  return (
    <Container>
      <div className="registrationFormMainDiv">
        <div className="registrationFormDiv">
          <h2 className="registrationForm__title">registration Form</h2>
          <form onSubmit={handleSubmit} className="registrationForm">
          <div>
              <Input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                // isFloatingLabelInput={true}
                onBlur={handleImage}
                placeholder="Enter your username"
                required
              />
            </div>
            <Input
              onBlur={handleName}
              isFloatingLabelInput={true}
              label="Enter your username"
              name="username"
              value=""
              type="text"
              placeholder="Enter your username"
             
            />
            <Input
              onBlur={handleEmail}
              isFloatingLabelInput={true}
              label="Enter your email"
              name="email"
              value=""
              type="email"
              placeholder="Enter your email"
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
            <div className="mb-3">
              <Button
                onClick={handleClick}
                btnClass="btn-primary fs-5 w-100"
                name="Registration"
                type="submit"
              />
              <ToastContainer
              position="top-center"
              autoClose= {2000}
              />

            </div>
            {user.email && <Redirect to="/"></Redirect>}
            <div className="text-center">
              <p>
                Already Registered? <Link to="/loginform">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Registration;
