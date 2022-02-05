import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/signup.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/Dashboard");
    } catch (error) {
      console.error(error);
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <>
      <div className="content-wrapper-login">
        <Card className="card-signup">
          <Card.Body>
            <h2 className="text-center mb-4">Sign up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password-confirm"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Sign Up
              </Button>
              <div className="w-99 text-center mt-2">
                Already have an account? <Link to="/Login">Login</Link>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                 className="lion"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="788.4px"
                height="1027.37px"
                viewBox="0 0 788.4 1027.37"
                enable-background="new 0 0 788.4 1027.37"
                
              >
                <g>
                  <g>
                    <path d="M733.16,330.2c0-0.71,6.87,6.6,8,8.01c5.979,7.49,9.14,12.63,6,27.99c-5.51-3.58-8.32-7.38-14-8.99    c-36.13-10.25-48.16,21.77-67.99,37.99c-21.11,17.26-41.76,21.52-74.99,17c-4.18,34.95,15.011,53.99,38.99,63.99    c-4.45-16.41,0.12-35.86,12-41.99c2.97,18.75,5.38,33.36,14,44.99c8.771,11.85,25.09,15.51,36.99,25    c15.74,12.541,26.05,26.91,33,46.99c19.54,0.71,45.03,0.44,46.99-14c1.02-7.43-7.391-11.59-7-17.989    c13.63-0.971,19.22,6.109,23,14.989c0,3.34,0,6.67,0,10c-2.69,11.311-8.721,19.271-14,28c10.09,5.73,9.75,27.681,3,36.99    c-1.11-17.83-33.891-23.46-30.99,2c15.95-5.55,28.82,5.79,20.99,21c-19.261-24.41-23.101,23.47-47.99,15    c5.32,24.57-10.58,45.35,2,63.99c-7.08-4.55-14.61-7.65-21-14c-3.4-3.38-4.66-8.4-9-11c-20.18-12.07-51.12-2.7-78.99-8.99    c3.521,17.48,8.97,33.021,26,36.99c-7.99,5.68-20.62,6.71-35,6c0.49,5.18-1.07,12.41,1,16c31.26-3.59,46.521,8.81,52,30.99    c16.4-13.061,59.25,5.479,60.99-22.99c10.08,15.21,1.689,38.939-15,41.99c2.979,4.97,7.34,5.38,11,10c8.99,11.34,9.07,31.93,18,40    c-9.54-1.771-26.97-6.57-34,1c13.92,6.199,36.979,28.739,19,44.989c-16.04-19.84-19.59,14.33-12,33c3.29,8.07,9.8,12.851,9,18.99    c-6.03-4.58-14.87-2.03-22,0c-4.561,15.49,1.3,30.97,14,35c-19.2,15.26-25.311-15.27-49.99-10c4.83,27.16-23.65,21.01-39,28    c-2.22,6.26,1.18,13.65,0,21.99c-5.33,16.29-37.06,15.399-51.99,8c-2.21,3.13-3.14,7.53-7,9c-6.489-3.28-8.92-15.14-5-22.99    c-4.859-5.14-16.739-3.26-25-5c-4.859-0.47-1.92-8.75-7-9c-9.63-1.31-13.439,3.22-17.989,7c-7.95-5.689,1.18-12.17,3-19    c2.05-7.71-0.9-16.24,3-23c3.26-5.67,7.329-4.689,11-10c-5.61-1.68-14.551-2.08-19-2c2.97-7.689,8.25-13.08,19.989-12    c7.28-5.95,10.021-14.66,20-15.99c22.851-3.05,25.53,23.08,41,24.99c37.721,4.67,58.69-31.67,54.99-62.99    c-2.87-24.27-28.82-39.89-53.99-28c-10.64,5.03-27.72,24.601-47,10c1.551,31.54-40.46,19.53-42.989,47    c-14.54-5.8-19.511-21.159-19-42c-23.48,5.761-40.74-10.81-32.99-32.989c2.41,6.58,6.97,11.02,11.99,14.989    c11.5,0.841,19.39-1.939,24-7.989c-9.24-47.58-28.66-95.74-19-153.98c-71.07-22.5-120.47,29.28-104.98,105.98    c20.16-4.62,29.44,15.239,21.99,30c-5.56,11.01-42.49,26.56-43.99,40.989c-1.06,10.21,8.12,14.92,22,15    c-12.5,11.561-34.22,5.931-43-5c-10.98,5.091-12.9,22.051-12,36c-6.36-1.64-7.46-8.529-11-13c-9.99,8.67-12.47,24.86-17.99,37.99    c-0.7-9.3-2.75-17.24-6-23.99c-23.01,13.41-22.36,49.271-61.99,47.99c5.34,13.8-1.46,26.21-16,26c0.72,11.72-5.12,16.88-14,19    c3.06-8.18-2.23-13.66-6-18c-11.73,2.23-16.82-9.49-21-18c-13.56-4.08-23.66,9-36.99,9c-11.2,0-16.82-5.74-27-10    c-3.41,1.59-3.93,6.07-6,9c-0.75-4.25-4.67-5.33-4-11c8.16-10.42,2.78-29.6-8-33c-2.86,2.14-5.47,4.53-7,8    c-1.38-3.61-4.39-5.6-5-10c0.11-4.89,5.69-4.31,7-8c-0.72-5.71,1.07-8.93,1-13.99c1.91-3.09,7.3-2.699,8-7    c0.28-6.56-8.76-4.699-10-7c2.49-5.59,6.28-13.819,14-11c5.63-6.069,9.01-14.33,17-16c18.81-3.93,30.35,15.58,39.99,24    c14.96-0.609,26.97,1.101,41,3c13.4,1.811,25.04,5.37,33-1c19.67-15.76,16.35-62.529,30.99-85.989    c-17.82,1.14-25.51,25.119-46.99,13c12.02-1.98,20.83-7.17,20.99-21c-12.35,0.689-20.82-2.511-26.99-8    c30.47-2.19,19.57-45.75,41.99-55.99c-23.29-3.23-21.18-46.29,6-40c-20.65,2.359-13.39,36.17,10,31    c11.52-2.55,19.17-31.82,25-44.99c25.17-56.96,61.62-103.72,146.98-95.99c-2.851-12.949,7.27-17.93,8-24    c-34.7-14.3-61.35-36.64-75.99-70.99c-9.87,4.37-22.7,10.98-36,6c6.69-4.98,11.54-11.79,10-25    c-25.62,13.04-28.2,57.791-45.99,81.99c-1.26-5.069-2.89-9.779-7-12c-8.99,15.011-20.65,32.681-32,42c1.7-9.449,0.17-17.89-3-25    c-16.84,10.23-29.81,37.15-51.99,49.99c-5.67,3.28-12.91,4.41-17,9c-4.53,5.09-5.06,12.91-10,17c-13.07,10.83-36.45,7.64-51.99,0    c-3.42,0.59-0.57,7.43-3,9c-5.51-2.89-5.97-13.65-4-21c-2.85-3.81-6.94-6.39-7-13c-14.52-1.45-25.99-21.24-39-8.99    c1.05-8.29,3.45-15.22,9-19c-2.05-16.05,2.71-25.3,13-29c0-2.66,0-5.33,0-8c-3.84-3.439-11.3-0.38-15-2    c2.41-5.989,11.42-8.199,19-6c2.94-5.739,4.91-9.18,10-11c29.93-10.689,33.65,30.931,60.99,22c20.61-6.72,33.95-35.59,43-57.99    c8.58-21.25,22.07-36.13,36.99-49.99c-3.77-1.89-8.76-2.58-11-6c28.64-0.71,21.85-42.13,33-57c-14.49-0.94-20.8,20.77-36,25    c-7.22,2.01-20.56,2.21-25.99-5c19.79-5.53,27.18-23.47,33.99-41.99c-22.11-5.22-35.17-19.49-52.99-29    c-2.11,19.55-10.49,38.17-21,45.99c1.91-18.92-12.83-24.15-19-36.99c-6.48-13.51-3.56-25.18-0.99-45    c-5.6-7.73-12.88-13.78-19-20.99c-8.75,7.37-21.13,16.03-38,12c-4.31,5.75-15.64,9.08-23.99,4.99c3.84-3.82,9.72-5.61,8.99-13.99    c-7.07-4.92-11.94-12.05-9.99-26c-12.71-4.96-21.96-13.38-23-30c-4.45-3.14-8.46-3.21-14-1c0-1.33,0-2.66,0-4    c2.85-7.81,9.71-11.61,20-11.99c3.79-14.21,12.41-23.59,17-37c-1.96-4.71-8.2-5.13-13-7c6.48-6.61,19.45-7.36,27.99-2    c5.47-6.19,22.62-0.71,28-7c5.05-6.76-7.42-9.87-7-12c12.07-1.07,17.62,4.38,23,10c18.09-1.29,34.73,9.57,34.99,27    c0.15,9.92-7.41,16.93-5,26c4.26,15.97,19.14,27.31,33,34.99c19.22,10.65,45.24,11.34,62.99,23c8.28-9.61,26.98-3.22,36,1    c4.59-13.67,8.43-20.66,17-27c36.3-26.88,85.18,20.83,121.98,20c9.92-0.22,19.62-4.5,24-13c-17.33-6.49-28.64-22.68-55-17    c-3.02-21.05,4.73-42.49,28-36.99c2.109-3.9,3.01-8.99,8-10c-0.73,7.06,1.92,10.74,4,15c5.939-4.39,6.27-14.4,15-16    c-0.47,8.13,0.22,15.11,3,20c27.6,4.61,33.3-12.7,33.99-35c-36.551-5.8-63.78,15.75-98.98,15c-24.74-0.53-42.96-15.88-42-39    c1.16-27.99,47.23-35.32,53.99-6c-22.82-1.18-23.64,21.55-4,25c28.99,5.09,60.83-20.59,89.99-12    c-2.86-16.51-9.07-31.41-30.99-25.99c-3.25,5.41-5.67,11.66-7,18.99c-6.851-4.48-9.62-13.04-12-21.99    c-5.96,2.51-9.101,12.7-6,20.99c-6.891-5.38-13.28-14.53-10-26.99c-3.82,0.15-7.28-0.05-9-2c0.57-15.91-0.69-29.97-1-45    c-4.56-4.53-8-5.5-9-11.99c-4.37-28.58,34.74-18.16,60-20c14.439-22.21,58.97-6.78,75.99,4c6.369-5.44,17.989-1.17,27.989-2    c16.431-1.36,24.33-9.92,33-21c15.261,23.93-2.5,50.7-16,63.99c15.2,7.46,14.4,30.93,18,50c14.7,5.63,25.13,15.53,25,35.99    c-5.109-2.45-10.689-6.71-18-4c-2,10.19-3.239,22.93-2,34c1.301,11.68,7.891,18.96,10,24.99c-10.22,5.11-24.229,10.15-21,28    c1.38,7.62,12.271,15.04,12,19c-0.109,1.64-8.46,8.31-10,12c-2.859,6.83-2.569,12.1-4,14.99c-6.56,13.24-21.31,19.07-34,24    c5.74,31.52-24.3,35.61-26.989,61.99c-5.381-10.28-12.011-19.32-15-31.99c-20.65,6.8-37.41,71.5-2,73.99c9.88,0.69,15.34-6.1,22-7    c1.63,27.3-9.551,41.78-34,42.99c16.1,28.57,30.04,59.29,35,98.99c7.46,9.24,15.319,17.801,23.989,28    c6.99,8.21,15.82,23.53,25,26.99c6.261,2.37,15.09,1.36,21,4c23.54,10.54,31.221,42.16,72.99,37c20.37-2.52,37.22-17.37,37.99-41    c1.31-39.83-38.03-59.67-69.99-80.979c-31.21-20.82-69.189-53.28-63.99-97.99c1.25-10.79,6.801-17.06,12-26    c-7.71-19.43-10.35-43.85,0-64.99c6.95-14.21,22.53-19.1,28-32c4.11-9.72,5.9-27.34,2.99-37.99c-1.83-6.73-7.31-9.55-7.99-15    c20.28-6.39,32.23,9.55,35.99,26c4.37-27.47,56.61-10.15,51-49c-1.35-9.29-6.8-12.87-11-22.99c26.66-12.27,46.4,10.57,49.99,33.99    c26.57-0.98,45.8-23.46,30-47.99c23.689-7.31,37.649,16.15,38.99,36.99c1.819,28.32-17.311,53.6-36.99,61.99    c2.649,14.74,4.71,20.33-2,32C743.6,318.67,732.85,327.2,733.16,330.2z" />
                  </g>
                  <g></g>
                </g>
              </svg>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
