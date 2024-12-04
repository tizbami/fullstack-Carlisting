import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  // styles
  const styles = {
    show: {
      position: "relative",
      left: "90%",
      bottom: "40px",
      color: "blue",
      cursor: "pointer",
    },
  };

  const navigate = useNavigate();
  // form date state
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
      email: "",
    password: "",
  });

  // create a state
  const [ processing, setProcessing ] = useState(false);

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
      email: "",
      password: "",
    });
  };

  // handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // send data to backend: http://localhost:3000/api/auth/login
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        //set auth token in local storage
        localStorage.setItem("authToken", data.authToken);
        //set login user in local storage
        localStorage.setItem("loginUser", data.user.name);   
        alert("Login successful");
        handleClearInput();
        navigate("/");
      } 
     } catch (error) {
        const errorData = await response.json();
      }


  };
  return (
    <div className="container">
      <h1 className="text-center mt-5 text-primary">Login Here</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleFormDataChange} />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type={show ? "text" : "password"} placeholder="Password" onChange={handleFormDataChange} />
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

export default Login;
