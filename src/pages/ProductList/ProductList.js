import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './index.css';
import ImageComponent from "../../components/ImageComponents/ImageComponents";

const ProductList = ({ products }) => {
    return (
        <Container>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="product-card">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="product-title">{product.name}  (${product.price ? product.price : 0})</Card.Title>
                                <Card.Text className="product-price">Brand: {product.type}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;
