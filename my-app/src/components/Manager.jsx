import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Contact";

const Manager = () => {
  const [baseFormShow, setBaseFormShow] = useState(true);
  const [addFormShow, setAddFormShow] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
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

  const handleAddClick = () => {
    setBaseFormShow(false);
    setAddFormShow(true);
  };

  const handleCancellClick = () => {
    setBaseFormShow(true);
    setAddFormShow(false);
  };

  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  const phoneOnChange = (e) => {
    setPhone(e.target.value);
  };

  const addContactClick = () => {
    setContacts([...contacts, { name, phone }]);
    setBaseFormShow(true);
    setAddFormShow(false);
  };

  return (
    <Container className="bg-light py-2 mt-5 pl-2">
      {baseFormShow && (
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

          {contacts.length > 0 && <Contact contacts={data} />}
        </>
      )}

      {addFormShow && (
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
              onChange={nameOnChange}
            />
            <b>Phone</b>
            <Form.Control
              type="text"
              className="mb-3"
              onChange={phoneOnChange}
            />
            <Button
              variant="success"
              className="mr-2"
              onClick={addContactClick}
            >
              Add
            </Button>
            <Button variant="danger" onClick={handleCancellClick}>
              Cancell
            </Button>
          </Form.Group>
        </Form>
      )}
    </Container>
  );
};

export default Manager;
