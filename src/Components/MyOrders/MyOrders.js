import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import Order from '../Order/Order';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [services, setServices] = useState([]);
    const [found, setFound] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://creative-agency-server-9jtj.onrender.com/myOrders/${user?.email}`;
       
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email])

    useEffect(() => {
        const url = `https://creative-agency-server-9jtj.onrender.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    useEffect(() => {
        setLoading(true);
        const found = [];
        services.forEach(service => {
            myOrders.forEach(order => {
                if (order.order === service._id) {
                    const newObj = service;
                    newObj.orderId = order._id;
                    newObj.status = order.status;
                    newObj.date = order.date;
                    // console.log(newObj);
                    found.push(newObj)
                }
            })
        })
        setFound(found);
        setLoading(false);
    }, [services, myOrders])
    
    //Canceling Order
    const handleCancelOrder = (id) => {
        // console.log(id);
        const proceed = window.confirm('Are you sure, you want to cancel the order?')
        if (proceed) {
            const url = `https://creative-agency-server-9jtj.onrender.com/deleteOrder/${id}`;
            
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('successfullly canceled!')
                        const reamainingServices = found.filter(service => service.orderId !== id)
                        setFound(reamainingServices);
                    }
                })
        }

    }

    return (
        <Container className='mt-4'>
            <Row lg={3}  className="g-4">
                {
                    !loading ?
                        found.map(service => <Order
                            key={service._id}
                            service={service}
                            handleCancelOrder={handleCancelOrder}
                        ></Order>)
                        :
                        <div className='container text-center mt-5'>
                            <Spinner animation="border" variant="dark" />
                        </div>
                }
            </Row>
        </Container>
    );
};

export default MyOrders;