import React from "react";
import { Form, Button } from "react-bootstrap";

const EditContact = ({ getCancellEditMode }) => {
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
        <Form.Control type="text" className="mb-3" />
        <b>Phone</b>
        <Form.Control type="text" className="mb-3" />
        <Button variant="outline-success" className="mr-2">
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
