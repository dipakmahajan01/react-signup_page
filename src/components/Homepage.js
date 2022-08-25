import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const tebel = () => {
  const UserLogout = () => {
    const histroy = useNavigate();
    localStorage.clear();
    window.location.clear();
    histroy("/SignupPage");
  };
  return (
    <div>
      {/* <h1>hello everyone</h1> */}
      <Form className="d-flex w-50 justify-content-center" id="table">
        <Form.Control
          type="search"
          placeholder="Search"
          className="p-relative t-10"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Button variant="primary" className="logoutbtn" onClick={UserLogout}>
        Logout
      </Button>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Display Name</th>
            <th>Country</th>
            <th>Capital</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default tebel;
