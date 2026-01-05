import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'Task Manager Feedback',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // This updates the specific key (firstName, lastName, etc.) dynamically
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Alert variant="success" className="text-center">
        <Alert.Heading>Success!</Alert.Heading>
        <p>Thanks for reaching out, {formData.firstName}! Our team will get back to you soon.</p>
        <Button variant="outline-success" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </Alert>
    );
  }

  return (
    <div className="contact-container">
      <h2 className="text-center mb-4">Contact Support</h2>
      <p className="text-center text-muted">Have a bug or a feature request for the Task Manager?</p>
      
      <Form onSubmit={handleSubmit}>
        {/* Row for First and Last Name */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type="text" 
              name="firstName" 
              placeholder="Enter first name"
              value={formData.firstName} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="text" 
              name="lastName" 
              placeholder="Enter last name"
              value={formData.lastName} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            placeholder="email@example.com"
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            name="message" 
            rows={5} 
            placeholder="Tell us what's on your mind..."
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" type="submit" size="lg">
            Send Message
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactPage;