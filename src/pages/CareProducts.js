import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import api from "../api";

const CareProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/care-products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addProduct = async () => {
    try {
      await api.post("/care-products", newProduct);
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      await api.put(`/care-products/${id}`, updatedProduct);
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/care-products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="display-4 mb-4">Pet Care Products</h1>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" onClick={addProduct} className="mt-3">
          Add Product
        </Button>
      </Form>
      <Row xs={1} md={2} lg={3} className="g-4 mt-4">
        {products.map((product) => (
          <Col key={product._id}>
            <Card style={{ height: "100%" }}>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>Description:</strong> {product.description}
                  <br />
                  <strong>Price:</strong> ${product.price}
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => deleteProduct(product._id)}
                >
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

export default CareProducts;
