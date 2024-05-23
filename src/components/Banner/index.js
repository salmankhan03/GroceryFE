import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'

const   Banner = ({images,content}) => {
    return (
        <Container fluid className="banner-container">
            <Row>
                <Col className="text-center position-relative">
                    <img src={images} alt="Banner Image" className="img-fluid banner-image" style={{maxHeight:350,width:'100%'}} />
                    {content && 
                        <h1 className="position-absolute top-50 start-50 translate-middle bannerTitle text-capitalize">{content}</h1>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;