import React from 'react';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col, Row, Container } from 'react-bootstrap';

import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
import useAuth from '../hooks/useAuth';

const PlaceOrder = () => {
    const{serviceId} = useParams()
    const[services,setServices] = useState([])
    const{user} = useAuth()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.order = services._id;
        data.status = 'pending';

        const url = `http://localhost:5000/placeOrder`;
       
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order placed successfully');
                    reset();
                }
            })
    };

    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`;
        
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [serviceId])

    return (
        <div>
            <Navbar></Navbar>
            <Container>
        <Row className='mt-5 '>
            <Col lg={4}>
              
                    <Card className='p-0'>
                        <Card.Img variant="top" className='img-fluid' src={services?.image} />
                        <Card.Body>
                            <Card.Title>{services?.name}</Card.Title>
                            <Card.Text><small className='text-muted'>{services?.description}</small></Card.Text>
                            <Card.Text><h6 className='text-muted'>Price:   {services.price}</h6></Card.Text>
                        </Card.Body>
                    </Card> 
            </Col>
            <Col lg={8}>
                <form className='border p-5 rounded mb-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 text-start">
                        <label htmlFor="forName" className="form-label fw-bold">Name</label>
                        <input defaultValue={user.displayName} {...register("name")} type="text" className="form-control" id="forName" required />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="forEmail" className="form-label fw-bold">Email</label>
                        <input defaultValue={user.email} {...register("email")} type="email" className="form-control" id="forEmail" required />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="forAddress" className="form-label fw-bold">Address</label>
                        <input defaultValue="" {...register("address")} type="text" className="form-control" id="forAddress" required />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="forDate" className="form-label fw-bold">Date</label>
                        <input defaultValue="" {...register("date")} type="date" className="form-control" id="forDate" required />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="forPhone" className="form-label fw-bold">Phone</label>
                        <input defaultValue="" {...register("phone")} type="text" className="form-control" id="forPhone" required />
                    </div>
                    <div className="mb-4 text-start">
                        <label htmlFor="forCity" className="form-label fw-bold">City</label>
                        <input defaultValue="" {...register("city")} type="text" className="form-control" id="forCity" required />
                    </div>
                    <input className="btn btn-dark" type="submit" value="Place Order" />
                </form>
            </Col>
        </Row>
    </Container>
{/* <Footer></Footer> */}
        </div>
    );
};

export default PlaceOrder;