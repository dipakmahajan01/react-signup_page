import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  const [Input, setInpval] = useState({
    middlename: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    rpassword: "",
  });
  const [data, setData] = useState([]);
  console.log(Input);
  const getData = (e) => {
    // console.log(e.target.value);
    const { value, name } = e.target;

    // console.log(name, value);
    setInpval(() => {
      return {
        ...Input,
        [name]: value,
      };
    });
  };

  const userLoginDetails = (e) => {
    e.preventDefault();
     window.location.reload()
    const { name, email, password, rpassword } = Input;
    if (name === "") {
      alert("name field is required");
    } else if (email == "") {
      alert("emaild field is required");
    } else if (!email.includes("@")) {
      alert("please enter your valid eamil address");
    } else if (password === " ") {
      alert("password field is required");
    } else if (rpassword === "") {
      alert("password must be requeire 5 charecter");
    } else {
      console.log("data added succesfully");
      localStorage.setItem("userlogindata", JSON.stringify([...data, Input]));
    }
  };

  return (
    <div className="container d-flex justify-content-center border" id="center">
      <section className="">
        <h1 className="text-center">Create account</h1>
        <p className="text-center">
          Already have an account
          <span>
            <NavLink to="/login">Sign in</NavLink>
          </span>
        </p>
        <Form>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="middlename"
              placeholder="Middle name"
              onChange={getData}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="firstname"
              onChange={getData}
              placeholder="First name"
            />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Control
              type="text"
              onChange={getData}
              placeholder="Last name"
              name="lastname"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              onChange={getData}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              onChange={getData}
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              onChange={getData}
              name="rpassword"
              placeholder="Re-Enter-Password"
            />
          </Form.Group>

          <Button
            variant="primary w-100"
            onClick={userLoginDetails}
            type="submit"
          >
            {" "}
            Sign up
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default BasicExample;
