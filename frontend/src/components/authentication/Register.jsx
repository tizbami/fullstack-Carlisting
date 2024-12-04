import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  // style
  const styles = {
    show: {
      position: "relative",
      left: "90%",
      bottom: "40px",
      color: "blue",
      cursor: "pointer",
    },
  }

  const navigate = useNavigate();
    // form date state
    const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  //toggle show
  const toggleShow = () => {
    setShow(!show);
  };


  // handle form change
  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  
  // handle clear input fields
  const handleClearInput = () => {
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
    });
  };

  // handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // fetch data from api
    const apiUrl = import.meta.env.VITE_API_URL;
    try {
      const response = await fetch(
        `${apiUrl}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) 
        handleClearInput();
        response.json().then((data) => {
          console.log(data);
          navigate("/login");
        });
      
    } catch (error) {
      console.log(error);
    }
  };


console.log(formData);

  return (
    <div className="container mt-5">
      <h1 className="text-center mt-5 text-danger">Register Here</h1>

      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={formData.name}
            onChange={(e) => handleFormDataChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={formData.username}
            onChange={(e) => handleFormDataChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => handleFormDataChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={show ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleFormDataChange(e)}
          />
          <div style={styles.show}>
            {show ? (
              <p onClick={toggleShow}>Hide</p>
            ) : (
              <p onClick={toggleShow}>Show</p>
            )}
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
