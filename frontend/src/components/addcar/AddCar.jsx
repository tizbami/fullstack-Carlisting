import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const AddCar = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    price: "",
    pictures: "",
    description: "",
    mileage: "",
    model: "",
    condition: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    //from react bootstrap
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    try {
      const response = await fetch("http://localhost:3000/api/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        // reset the form data
        setFormData({
          name: "",
          year: "",
          price: "",
          pictures: "",
          description: "",
          mileage: "",
          model: "",
          condition: "",
        })
        setValidated(false);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5 bg-warning">
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h1>Add new car</h1>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="First name"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Model</Form.Label>
          <Form.Control
            required
            type="text"
            name="model"
            placeholder="model"
            value={formData.model}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Year</Form.Label>
          <Form.Control
            required
            type="number"
            name="year"
            placeholder="year"
            value={formData.year}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            name="description"
            placeholder="description"
            value={formData.description}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Mileage</Form.Label>
          <Form.Control
            required
            type="number"
            name="mileage"
            placeholder="mileage"
            value={formData.mileage}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom06">
          <Form.Label>Condition</Form.Label>
          <Form.Control
            required
            type="text"
            name="condition"
            placeholder="condition"
            value={formData.condition}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom07">
          <Form.Label>Pictures</Form.Label>
          <Form.Control
            required
            type="text"
            name="pictures"
            placeholder="picture"
            value={formData.pictures}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom08">
          <Form.Label>Price</Form.Label>
          <Form.Control
            required
            type="number"
            name="price"
            placeholder="price"
            value={formData.price}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
      </Row>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
  );
}

export default AddCar;
