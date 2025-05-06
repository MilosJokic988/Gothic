import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="contact-section py-5">
      <Container>
        <h2 className="text-center gothic-font mb-4">Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control-pergament"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control-pergament"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Write your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control-pergament"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
