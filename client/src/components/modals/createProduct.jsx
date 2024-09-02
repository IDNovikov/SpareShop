import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Button, Dropdown, Form, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Context } from "../..";
import {
  fetchTypes,
  fetchBrands,
  fetchColors,
  fetchSizes,
  fetchProducts,
  createProduct,
  deleteProduct,
} from "../../http/productAPI";
import { observer } from "mobx-react-lite";
import Productlist from "../Productlist";

const CreateProduct = observer(() => {
  const { product } = useContext(Context);

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();
  const [file5, setFile5] = useState();
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { tittle: " ", discription: " ", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const addProduct = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("brandId", product.selectedBrands);
    formData.append("typeId", product.selectedTypes);
    formData.append("sizeId", product.selectedSizes);
    formData.append("colorId", product.selectedColors);
    formData.append("img1", file1);
    formData.append("img2", file2);
    formData.append("img3", file3);
    formData.append("img4", file4);
    formData.append("img5", file5);
    formData.append("info", JSON.stringify(info));
    createProduct(formData).then((data) => handleClose);
  };
  const prodDelete = (id) => {
    deleteProduct(id).then((data) => handleClose());
  };
  const selectFile1 = (e) => {
    setFile1(e.target.files[0]);
  };
  const selectFile2 = (e) => {
    setFile2(e.target.files[0]);
  };
  const selectFile3 = (e) => {
    setFile3(e.target.files[0]);
  };
  const selectFile4 = (e) => {
    setFile4(e.target.files[0]);
  };
  const selectFile5 = (e) => {
    setFile5(e.target.files[0]);
  };

  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchBrands().then((data) => product.setBrands(data));
    fetchColors().then((data) => product.setColors(data));
    fetchSizes().then((data) => product.setSizes(data));
    fetchProducts().then((data) => product.setProducts(data.rows));
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="mt-2" onClick={handleShow}>
        Manage products
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete and add new product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Productlist prodDelete={prodDelete} />
          <Form>
            <Dropdown className="mt-2">
              Choose type:
              <Dropdown.Toggle>{product.selectedTypesName}</Dropdown.Toggle>
              <Dropdown.Menu>
                {product.types.map((type, ind) => (
                  <Dropdown.Item
                    onClick={() => product.setSelectedTypes(type.id, type.name)}
                    key={type.id}
                  >
                    {product.types[ind].name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-2">
              Choose brand
              <Dropdown.Toggle>{product.selectedBrandsName}</Dropdown.Toggle>
              <Dropdown.Menu>
                {product.brands.map((brand, ind) => (
                  <Dropdown.Item
                    onClick={() =>
                      product.setSelectedBrands(brand.id, brand.name)
                    }
                    key={brand.id}
                  >
                    {product.brands[ind].name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-2">
              Choose color
              <Dropdown.Toggle>{product.selectedColorsName}</Dropdown.Toggle>
              <Dropdown.Menu>
                {product.colors.map((color, ind) => (
                  <Dropdown.Item
                    onClick={() =>
                      product.setSelectedColors(color.id, color.name)
                    }
                    key={color.id}
                  >
                    {product.colors[ind].name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-2">
              Choose size
              <Dropdown.Toggle>{product.selectedSizesName}</Dropdown.Toggle>
              <Dropdown.Menu>
                {product.sizes.map((size, ind) => (
                  <Dropdown.Item
                    onClick={() => product.setSelectedSizes(size.id, size.name)}
                    key={size.id}
                  >
                    {product.sizes[ind].name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2"
              placeholder="Write name of product"
            />
            <Form.Control
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-2"
              placeholder="Write price of product"
              type="number"
            />
            <Form.Label className="mt-2">Add image 1</Form.Label>
            <Form.Control
              onChange={selectFile1}
              placeholder="Add image 1"
              type="file"
            />
            <Form.Label className="mt-2">Add image 2</Form.Label>
            <Form.Control
              onChange={selectFile2}
              placeholder="Add image 2"
              type="file"
            />
            <Form.Label className="mt-2">Add image 3</Form.Label>
            <Form.Control
              onChange={selectFile3}
              placeholder="Add image 3"
              type="file"
            />
            <Form.Label className="mt-2">Add image 4</Form.Label>
            <Form.Control
              onChange={selectFile4}
              placeholder="Add image 4"
              type="file"
            />
            <Form.Label className="mt-2">Add image 5</Form.Label>
            <Form.Control
              onChange={selectFile5}
              placeholder="Add image 5"
              type="file"
            />
            <hr />
            <Button variant={"outline-dark"} onClick={addInfo}>
              Add new info
            </Button>
            {info.map((i) => (
              <Row className="mt-4" key={i.number}>
                <Col md={4}>
                  <Form.Control
                    value={i.tittle}
                    onChange={(e) =>
                      changeInfo("tittle", e.target.value, i.number)
                    }
                    placeholder="Write new title"
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    value={i.discription}
                    onChange={(e) =>
                      changeInfo("discription", e.target.value, i.number)
                    }
                    placeholder="Write new info"
                  />
                </Col>
                <Col md={4}>
                  <Button
                    onClick={() => removeInfo(i.number)}
                    variant={"outline-danger"}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProduct}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});
export default CreateProduct;
