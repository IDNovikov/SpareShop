import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import { Form, Dropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createBrand, fetchBrands, deleteBrand } from "../../http/productAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../..";


const CreateBrand = observer(() => {

  const {product} = useContext(Context)
  
  const [show, setShow] = useState(false);
  const [value, setValue] = useState()
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect (() => {
    fetchBrands().then(data=>product.setBrands(data))
  }, []) 

  const del = () => {
    let outData = JSON.stringify(product.selectedBrands.id)
    deleteBrand(outData).then(data => {
    })
    handleClose()
  }

  const addBrand = () => {
    createBrand({name: value}).then(data => setValue(""))
    handleClose()
  }




  return (
    <>
      <Button variant="primary" className="mt-2" onClick={handleShow}>
        Manage brand
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete and add brands</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Dropdown className="mt-2">
                <Dropdown.Toggle>{product.selectedBrands.name||"Choose brand"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.brands.map(brand => 
                        <Dropdown.Item onClick={() => product.setSelectedBrands(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                    )}
                    </Dropdown.Menu>
                    </Dropdown>    
          <Button variant="primary" onClick={del}>
           Delete
          </Button>


        <Form>
            <Form.Control 
                                    value={value}
                                    onChange={e=>setValue(e.target.value)}
            placeholder="Write new brand"/>
        </Form>
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addBrand}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
)

export default CreateBrand