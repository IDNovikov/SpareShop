import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Form, Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { createType, fetchTypes, deleteType } from "../../http/productAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import GreyButton from "../UI/greyButton/GreyButton";

const CreateType = observer(() => {
  const { product } = useContext(Context);

  const [show, setShow] = useState(false);
  const [value, setValue] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
  }, []);

  const del = () => {
    let outData = JSON.stringify(product.selectedTypes.id);
    deleteType(outData).then((data) => {});
    handleClose();
  };

  const addType = () => {
    createType({ name: value }).then((data) => setValue(""));
    handleClose();
  };

  return (
    <>
      <div onClick={handleShow}>
        <GreyButton
          width={"100%"}
          height={"42px"}
          text={"Manage type"}
          fontSize={"20px"}
          fontColor={"White"}
          bckColor={"#0d6efd"}
        />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete and add types</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>
              {product.selectedTypes.name || "Choose type"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product.types.map((type) => (
                <Dropdown.Item
                  onClick={() => product.setSelectedTypes(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="primary" onClick={del}>
            Delete
          </Button>

          <Form>
            <Form.Control
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Write new type"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addType}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default CreateType;
