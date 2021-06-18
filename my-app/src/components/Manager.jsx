import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Contact";
import AddContact from "./AddContact";
import EditContact from "./EditContact";

const Manager = () => {
  const [baseMode, setBaseMode] = useState(true);
  const [addMode, setAddmode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [data, setData] = useState(null);
  const [keyOfContact, setKeyOfContact] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setData(filterContacts(keyword));
  }, [contacts, keyword]);

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const filterContacts = (keyword) => {
    return contacts.filter(
      (item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase()) ||
        item.phone.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const handleNameAndPhone = (name, phone, value) => {
    setContacts([...contacts, { name, phone }]);
    setBaseMode(value);
    setAddmode(!value);
  };

  const handleAddClick = () => {
    setBaseMode(false);
    setAddmode(true);
  };

  const handleCancellClick = (value) => {
    setBaseMode(!value);
    setAddmode(value);
  };

  const handleEditMode = (value, key) => {
    setKeyOfContact(key);
    setBaseMode(!value);
    setAddmode(!value);
    setEditMode(value);
  };

  const handleCancellEditMode = (value) => {
    setBaseMode(!value);
    setAddmode(value);
    setEditMode(value);
  };

  const handleRemoveItem = (key) => {
    contacts.splice(key, 1);
    setContacts([...contacts]);
  };

  const handleNewNameAndPhone = (name, phone) => {
    contacts.splice(keyOfContact, 1, { name, phone });
    setContacts([...contacts]);
    setBaseMode(true);
    setAddmode(false);
    setEditMode(false);
  };

  return (
    <Container
      className="bg-light py-2 mt-5 pl-2"
      style={{ borderRadius: "12px" }}
    >
      {baseMode && (
        <>
          <Form>
            <Form.Group className=" mx-2">
              <Form.Label className="my-3">
                <h4>
                  <b>My Phone Book</b>
                </h4>
              </Form.Label>
              <div className="d-flex mb-5">
                <Form.Control
                  type="text"
                  placeholder="Enter a keyword to search"
                  className="col-md-11 mr-3"
                  onChange={handleKeyword}
                />
                <Button variant="primary" onClick={handleAddClick}>
                  Add
                </Button>
              </div>
            </Form.Group>
          </Form>

          {contacts.length > 0 && (
            <Contact
              contacts={data}
              getEditModeValue={handleEditMode}
              getRemoveItemKey={handleRemoveItem}
            />
          )}
        </>
      )}

      {addMode && (
        <AddContact
          getNameAndPhone={handleNameAndPhone}
          cancellClick={handleCancellClick}
        />
      )}
      {editMode && (
        <EditContact
          getCancellEditMode={handleCancellEditMode}
          nameValue={data[keyOfContact].name}
          phoneValue={data[keyOfContact].phone}
          getNewNameAndPhone={handleNewNameAndPhone}
        />
      )}
    </Container>
  );
};

export default Manager;
