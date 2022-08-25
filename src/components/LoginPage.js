import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function BasicExample() {
  const histroy = useNavigate();
  const [Input, setInpval] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
  // console.log(Input);
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
    const validUserDetailsarr = localStorage.getItem("userlogindata");
    // console.log(validUserDetailsarr);
    const { password, email } = Input;
    if (email === "") {
      alert("emaild field is required");
    } else if (!email.includes("@")) {
      alert("please enter your valid eamil address");
    } else if (password === "") {
      alert("password field is required");
    } else {
      if (validUserDetailsarr && validUserDetailsarr.length) {
        const userData = JSON.parse(validUserDetailsarr);
        console.log(userData);
        const UserLogin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (UserLogin.length === 0) {
          console.log(UserLogin.length);
          alert("invalid details");
          histroy.pop("/LoginPage");
        } else {
          console.log("user login succesefuly");
          histroy("/Homepage");
        }
      }
    }
  };

  return (
    <div
      className="container d-flex justify-content-center border"
      id="logCenter"
    >
      <section className="" id="section">
        <h1 className="text-center  item">Sign in</h1>
        <p className="text-center">
          <a></a>
        </p>
        <Form>
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
              onChange={getData}
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button
            variant="primary w-100"
            onClick={userLoginDetails}
            type="submit"
          >
            Sign in
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default BasicExample;
