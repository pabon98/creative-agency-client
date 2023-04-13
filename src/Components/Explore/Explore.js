import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";


const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div>
      <h1>Explore Our All Products</h1>
      <div className="container">
      <div className="row">

        {
          products.map(product=>(
            <div className="col-md-4 my-2" key={product._id}>
              <div class="card" style={{ width: "18rem" }} >
            <img height="200px" src={product.image} class="card-img-top w-75 ms-auto me-auto" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{product.name}</h5>
              <p class="card-text">
               {product.description.slice(0,120)}
              </p>
              <h6>Price: {product.price}</h6>
              <br />
              <Link to={`/placeorder/${product._id}`}>
              <button className="btn btn-warning px-4 rounded-2">Purchase</button>
              </Link>
            
            
            </div>
          </div>
            </div>

          ))
        }
       
      </div>
      </div>
    </div>
    <Contact></Contact>
    </div>
  );
};

export default Explore;