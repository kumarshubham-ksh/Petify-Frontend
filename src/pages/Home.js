import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Container className="mt-4 mb-4">
        <Row>
          <Col md={6} className="text-center">
            <img
              src="https://logowik.com/content/uploads/images/black-circle-pet-shop5686.logowik.com.webp"
              alt="Pet Store Logo"
              className="img-fluid mb-4"
              style={{ maxHeight: "200px" }}
            />
            <h1 className="display-4 mb-3">Welcome to Petify!</h1>
            <p className="lead">
              Adopting a pet brings joy, companionship, and a sense of
              responsibility into your life. It provides loving homes to animals
              in need and promotes their well-being. Using quality pet care
              products ensures your pets stay healthy and happy, supporting
              their grooming, nutrition, and overall wellness needs. Explore our
              selection of pets and care products to start your journey with
              your furry companions today.
            </p>
            <Link to="/pets" className="btn btn-primary me-2">
              Adopt a Pet
            </Link>
            <Link to="/care-products" className="btn btn-secondary">
              Explore Care Products
            </Link>
          </Col>
          <Col md={6}>
            <img
              src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pets in a store"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
