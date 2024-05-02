import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'

const Banner = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-center position-relative">
                    <img src="https://fullcarehs.com/img/Services/banner_companion_care.jpg" alt="Banner Image" className="img-fluid" />
                    <h1 className="position-absolute top-50 start-50 translate-middle bannerTitle">Chicken</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;