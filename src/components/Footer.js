import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-3 mt-auto">
      {" "}
      {/* Use mt-auto to push the footer to the bottom */}
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Contact Us</h5>
            <p>Email: info@petify.com</p>
            <p>Phone: +91-123456789</p>
            <p>Address: 123 Pet Street, Cityville, State, Country</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Follow Us</h5>
            <p>
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} className="me-2" />
                Facebook
              </a>
            </p>
            <p>
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} className="me-2" />
                Twitter
              </a>
            </p>
            <p>
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} className="me-2" />
                Instagram
              </a>
            </p>
          </Col>
          <Col md={4}>
            <h5>Legal</h5>
            <p>&copy; 2024 Petify. All rights reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center mt-3">
              <p className="mb-0">Designed and developed by Petify</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
