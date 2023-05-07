import React from "react";
import { Card, Col, Button } from "react-bootstrap";
const Order = (props) => {
  const { orderId, image, title, description, price, status, date } = 
    props.service;
  const { handleCancelOrder } = props;

  return (
    <div className="mb-4" id="order-div">
      <Col>
        <Card style={{height: '450px'}} className="p-0 shadow-sm">
          <Card.Img variant="top" className="img-fluid w-25 mx-auto" src= {image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <small>{description}</small>
            </Card.Text>
            <Card.Text>
              <small>Price: {price}</small>
            </Card.Text>
            <Card.Text>
              <small className="text-dark">Order Date: {date}</small>
            </Card.Text>
            <Card.Text>
              <small className="text-dark">
                Order Status:
                <b>
                  <span
                    className= {
                      status === "pending" ? "text-danger" : "text-success"
                    }
                  >
                    {status}
                  </span>
                </b>
              </small>
            </Card.Text>

            <Button
              onClick={() => handleCancelOrder(orderId)}
              variant="outline-danger"
              className="w-100"
            >
              Cancel Order Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Order;