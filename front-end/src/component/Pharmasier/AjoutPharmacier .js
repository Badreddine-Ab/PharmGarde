import React from 'react'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

export default function AjoutPharmacier () {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

//api
const [loading, setLoading] = useState(false)
const [update , SetUpdate] = useState('')

const [name, setName] = useState("")
const [address, setAddress] = useState("")
const [latitude, setLatitude] = useState("")
const [longitude, setLongitude] = useState("")
const [opening_hours, setOpening_hours] = useState("")
const [services, setServices] = useState("")


const AjouterPharmacier =()=>{

  axios.post('http://localhost:9000/api/pharmacy/add', {

  name: name,
  address: address,
  latitude: latitude,
  longitude: longitude,
  opening_hours: opening_hours,
  services: services
})
.then(result => {
    // toast.success("add Pharmacier Success")
    SetUpdate('add ')
    setLoading(true)
    handleClose()
    console.log(result)

})
.catch(err => {
console.log(err)
})
}
useEffect(() => {

SetUpdate('all data')
}, [update])

return (
<div>


    <>
        <Button variant="dark" onClick={handleShow}>
            add pharmacier
            
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>add pharmacier</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className="mb-3" name="name" onChange={(e)=>
                            setName(e.target.value)}
                            type="text"
                            placeholder="entrer your Name"
                            autoFocus
                            />
                            <Form.Label>Address</Form.Label>
                        <Form.Control className="mb-3" name="setAddress" onChange={(e)=>
                            setAddress(e.target.value)}
                            type="text"
                            placeholder="entrer your Address"
                            autoFocus
                            />
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control className="mb-3" name="latitude" onChange={(e)=>
                                setLatitude(e.target.value)}
                                type="text"
                                placeholder="entrer your Latitude"
                                autoFocus
                                />
                                <Form.Label>Longitude</Form.Label>
                                <Form.Control className="mb-3" name="longitude" onChange={(e)=>
                                    setLongitude(e.target.value)}
                                    type="text"
                                    placeholder="entrer your Longitude"
                                    autoFocus
                                    />
                                    <Form.Label>opening_hours</Form.Label>
                                    <Form.Control className="mb-3" name="opening_hours" onChange={(e)=>
                                        setOpening_hours(e.target.value)}
                                        type="text"
                                        placeholder="entrer your opening_hours"
                                        autoFocus
                                        />
                                        <Form.Label>services</Form.Label>
                                        <Form.Control className="mb-3" name="services" onChange={(e)=>
                                            setServices(e.target.value)}
                                            type="text"
                                            placeholder="entrer your services"
                                            autoFocus
                                            />
                 

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="dark" onClick={AjouterPharmacier}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    </>

</div>

)
}