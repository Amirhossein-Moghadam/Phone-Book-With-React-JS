import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";


const AddContact = ({ getNameAndPhone, cancellClick }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  const phoneOnChange = (e) => {
    setPhone(e.target.value);
  };

  const addContactClick = () => {
    getNameAndPhone(name, phone, true);
  };

  const handleCancellClick = () => {
    cancellClick(false);
  };

  return (
    <>
      <Form>
        <Form.Group className=" mx-2">
          <Form.Label className="my-3">
            <h4>
              <b>My Phone Book</b>
            </h4>
          </Form.Label>
          <br />
          <Form.Label>
            <b>Name</b>
          </Form.Label>
          <Form.Control type="text" className="mb-3" onChange={nameOnChange} />
          <b>Phone</b>
          <Form.Control type="text" className="mb-3" onChange={phoneOnChange} />
          <Button variant="success" className="mr-2" onClick={addContactClick}>
            Add
          </Button>
          <Button variant="danger" onClick={handleCancellClick}>
            Cancell
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default AddContact;
