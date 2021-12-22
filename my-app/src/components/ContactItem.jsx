import React from "react";
import { Button } from "react-bootstrap";

const ContactItem = ({
  id,
  name,
  phone,
  getEditModeClick,
  getRemoveItemClick
}) => {
  return (
    <tbody>
      <tr>
        <td id="idItem">{id + 1}</td>
        <td id="nameItem">{name}</td>
        <td id="phoneItem">{phone}</td>
        <td className="d-flex justify-content-end">
          <Button
            variant="outline-dark"
            className="mr-3 btn-sm"
            onClick={getEditModeClick}
            id="edit"
          >
            Edit
          </Button>
          <Button
            variant="outline-dark"
            className="btn-sm"
            onClick={getRemoveItemClick}
            id="remove"
          >
            Remove
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default ContactItem;
