import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const EditContact = ({
  getCancellEditMode,
  nameValue,
  phoneValue,
  getNewNameAndPhone,
}) => {
  const [name, setName] = useState(nameValue);
  const [phone, setPhone] = useState(phoneValue);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
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
        <Form.Control
          type="text"
          className="mb-3"
          value={name}
          onChange={handleName}
        />
        <b>Phone</b>
        <Form.Control
          type="text"
          className="mb-3"
          value={phone}
          onChange={handlePhone}
        />
        <Button
          variant="outline-success"
          className="mr-2"
          onClick={() => getNewNameAndPhone(name, phone)}
        >
          Edit
        </Button>
        <Button
          variant="outline-danger"
          onClick={() => getCancellEditMode(false)}
        >
          Cancell
        </Button>
      </Form.Group>
    </Form>
  );
};

export default EditContact;
