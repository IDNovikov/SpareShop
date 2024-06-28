import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import {Button, Form, Row, Col} from "react-bootstrap";
// import { Context } from "../..";
import { createCertificate  } from "../http/certificateAPI";
import { observer } from "mobx-react-lite";
import InputGroup from 'react-bootstrap/InputGroup';


const Certificate = () => {
    // const {product} = useContext(Context)

    const [recipient, setRecipient] = useState()
    const [emailFrom, setEmailFrom] = useState()
    const [amount, setAmount] = useState()
    const [note, setNote] = useState()
    const [emailTo, setEmailTo] = useState()
    const [phone, setPhone] = useState()


    const addCertificate = () => {
      const formData = new FormData()
      formData.append('recipient', recipient)
      formData.append('emailFrom', emailFrom)
      formData.append('amount', amount )
      formData.append('note', note )
      formData.append('emailTo', emailTo)
      formData.append('phone',phone )
      console.log(formData)
      createCertificate(formData).then(console.log(formData))
    }

    // useEffect ( () => {
    //   fetchTypes().then(data=>product.setTypes(data))
    //   fetchBrands().then(data=>product.setBrands(data))
    //   fetchColors().then(data=>product.setColors(data))
    //   fetchSizes().then(data=>product.setSizes(data))
    //   fetchProducts().then(data=>product.setProducts(data.rows))
    // }, [])


  return (
    <>
              <h2>Order a cerificate</h2>
          <h5>On this page, you can issue an electronic certificate in the Spear&Shop.
It can be used everywhere – in our store, for online orders and via social networks.</h5>

<Form>
            <Form.Control 
            value={recipient}
            onChange={e=> setRecipient(e.target.value)}
             className="mt-2" placeholder="Recipient*"/>

            <Form.Control value={emailFrom}
            onChange={e=> setEmailFrom(e.target.value)}
             className="mt-2" placeholder="Recipient e-mail address*"/>
            
            <Form.Control value={amount}
            onChange={e=> setAmount(e.target.value)}
             className="mt-2" placeholder="Amount min 20E" type="number"/>
            <Form.Control value={note}
            onChange={e=> setNote(e.target.value)}
             className="mt-2" placeholder="Accompanying note (Optional)"/>

            <Form.Control value={emailTo}
            onChange={e=> setEmailTo(e.target.value)}
             className="mt-2" placeholder="E-mail for invoicing*"/>

            <Form.Control value={phone}
            onChange={e=> setPhone(e.target.value)}
             className="mt-2" placeholder="Sender`s phone number*"/>

</Form>
            <hr/> 

          <Button variant="primary" onClick={addCertificate}>
            Add
          </Button>


<h2> Online shopping with — Spear&Shop </h2>
<h5> There are two factors that you have to consider when you are creating SEO for your online business. The first factor is how much people are searching for keywords or topics that are related to your business and the second factor is the quality of the content that you are providing on your site.</h5>

    </>
  );
}

export default Certificate