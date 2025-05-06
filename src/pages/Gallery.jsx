import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

const images = [
  {
    src: '/images/castle.jpg',
    alt: 'Gothic Castle',
    title: 'Ancient Castle'
  },
  {
    src: '/images/church.jpg',
    alt: 'Gothic Church',
    title: 'Abandoned Church'
  },
  {
    src: '/images/symbol.jpg',
    alt: 'Occult Symbol',
    title: 'Occult Symbol'
  },
  {
    src: '/images/statue.jpg',
    alt: 'Gargoyle Statue',
    title: 'Cemetery Statue'
  },
  {
    src: '/images/darkforest.webp',  
    alt: 'Dark Forest',
    title: 'Mysterious Forest'
  },
  {
    src: '/images/graveyard.jpg',  
    alt: 'Gothic Graveyard',
    title: 'Forgotten Graveyard'
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <Container className="py-5">
        <h2 className="text-center gothic-font mb-4">Gothic Gallery</h2>
        <Row>
          {images.map((img, idx) => (
            <Col md={6} lg={4} className="mb-4" key={idx}>
              <Card className="sepia-card shadow-sm">
                <Card.Img
                  variant="top"
                  src={img.src}
                  alt={img.alt}
                  style={{
                    objectFit: 'cover',
                    height: '250px'
                  }}
                />
                <Card.Body>
                  <Card.Title className="gothic-font">{img.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
