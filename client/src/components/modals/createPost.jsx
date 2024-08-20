import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { createPost, fetchPosts, fetchOnePost, deletePost  } from "../../http/postsAPI";
import PostList from "../PostList";

const CreatePost = observer(() => {
  
  const {blog} = useContext(Context)

  const [tittle, setTitle] = useState()
  const [discription, setDiscription] = useState()
  const [file1, setFile1] = useState()
  const [file2, setFile2] = useState()
  const [file3, setFile3] = useState()
  const [file4, setFile4] = useState()
  const [file5, setFile5] = useState()

    const addPost = () => {
      const formData = new FormData()
      formData.append('img1', file1)
      formData.append('img2', file2)
      formData.append('img3', file3)
      formData.append('img4', file4)
      formData.append('img5', file5)
      formData.append('tittle', JSON.stringify(tittle))
      formData.append('discription', JSON.stringify(discription))
      console.log(formData)
      createPost(formData).then(data => handleClose())
    }

    const postDelete = (id) => {
      deletePost(id).then(data=>handleClose() )
    }
    const selectFile1 = e => {
      setFile1(e.target.files[0])
    }
    const selectFile2 = e => {
      setFile2(e.target.files[0])
    }
    const selectFile3 = e => {
      setFile3(e.target.files[0])
    } 
    const selectFile4 = e => {
      setFile4(e.target.files[0])
    }
    const selectFile5 = e => {
      setFile5(e.target.files[0])
    }

    useEffect ( () => {
      fetchPosts().then(data=>blog.setPosts(data.rows))
    }, [])


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" className="mt-2" onClick={handleShow}>
        Manage posts
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete and new post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
      <PostList postDelete={postDelete}/>


        <Form>
                        <Row className="mt-4">
                            <Col md={4}>
                              <Form.Control
                                    value={tittle}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Write new title"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={discription}
                                    onChange={(e) => setDiscription(e.target.value)}
                                    placeholder="Write new info"
                                />
                            </Col>
                        </Row>


            <Form.Label className="mt-2">Add image 1</Form.Label>
            <Form.Control onChange={selectFile1} placeholder="Add image 1" type="file"/>
            <Form.Label className="mt-2">Add image 2</Form.Label>
            <Form.Control onChange={selectFile2} placeholder="Add image 2" type="file"/>
            <Form.Label className="mt-2">Add image 3</Form.Label>
            <Form.Control onChange={selectFile3} placeholder="Add image 3" type="file"/>
            <Form.Label className="mt-2">Add image 4</Form.Label>
            <Form.Control onChange={selectFile4} placeholder="Add image 4" type="file"/>
            <Form.Label className="mt-2">Add image 5</Form.Label>
            <Form.Control onChange={selectFile5} placeholder="Add image 5" type="file"/>
            <hr/>
        </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addPost}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
)

export default CreatePost