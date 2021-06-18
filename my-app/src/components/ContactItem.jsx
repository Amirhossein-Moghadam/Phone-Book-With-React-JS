import React from "react";
import { Button } from "react-bootstrap";

const ContactItem = ({
  id,
  name,
  phone,
  getEditModeClick,
  onClick,
}) => {
  return (
    <tbody>
      <tr>
        <td>{id + 1}</td>
        <td>{name}</td>
        <td>{phone}</td>
        <td className="d-flex justify-content-end">
          <Button
            variant="outline-dark"
            className="mr-3 btn-sm"
            onClick={getEditModeClick}
          >
            Edit
          </Button>
          <Button
            variant="outline-dark"
            className="btn-sm"
            onClick={onClick}
          >
            Remove
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default ContactItem;
