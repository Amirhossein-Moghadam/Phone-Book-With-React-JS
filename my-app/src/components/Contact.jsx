import React from "react";
import ContactItem from "./ContactItem";
import { Table } from "react-bootstrap";

const Contact = ({ contacts, getEditModeValue,getEditItemKey, getRemoveItemKey }) => {
  return (
    <Table striped bordered hover id="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
        </tr>
      </thead>
      {contacts.map((item, key) => {
        return (
          <ContactItem
            key={key}
            id={key}
            name={item.name}
            phone={item.phone}
            getEditModeClick={() => getEditModeValue(true , key)}
            getRemoveItemClick={() => getRemoveItemKey(key)}
          />
        );
      })}
    </Table>
  );
};

export default Contact;
