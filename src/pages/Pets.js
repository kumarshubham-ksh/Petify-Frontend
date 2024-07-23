import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import api from "../api";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [newPet, setNewPet] = useState({
    breed: "",
    age: "",
    summary: "",
    image: "",
  });

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await api.get("/pets");
      setPets(response.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  const addPet = async () => {
    try {
      await api.post("/pets", newPet);
      fetchPets();
    } catch (error) {
      console.error("Error adding pet:", error);
    }
  };

  const updatePet = async (id, updatedPet) => {
    try {
      await api.put(`/pets/${id}`, updatedPet);
      fetchPets();
    } catch (error) {
      console.error("Error updating pet:", error);
    }
  };

  const deletePet = async (id) => {
    try {
      await api.delete(`/pets/${id}`);
      fetchPets();
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="display-4 mb-4">Pets Available for Adoption</h1>
      <Form>
        <Form.Group>
          <Form.Label>Breed</Form.Label>
          <Form.Control
            type="text"
            value={newPet.breed}
            onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            value={newPet.age}
            onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Summary</Form.Label>
          <Form.Control
            type="text"
            value={newPet.summary}
            onChange={(e) => setNewPet({ ...newPet, summary: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={newPet.image}
            onChange={(e) => setNewPet({ ...newPet, image: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" onClick={addPet} className="mt-3">
          Add Pet
        </Button>
      </Form>
      <Row xs={1} md={2} lg={3} className="g-4 mt-4">
        {pets.map((pet) => (
          <Col key={pet._id}>
            <Card style={{ height: "100%" }}>
              <Card.Img
                variant="top"
                src={pet.image}
                className="img-fluid"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{pet.breed}</Card.Title>
                <Card.Text>
                  <strong>Age:</strong> {pet.age}
                  <br />
                  <strong>Summary:</strong> {pet.summary}
                </Card.Text>
                <Button variant="danger" onClick={() => deletePet(pet._id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Pets;
