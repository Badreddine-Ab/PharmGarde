import React from "react";
import { useState, useEffect } from "react";
import Ajouter from "./AjoutPharmacier ";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

export default function Table() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //api
    //   const [loading, setLoading] = useState(false);
    //   const [update, SetUpdate] = useState("");

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [opening_hours, setOpening_hours] = useState("");
    const [services, setServices] = useState("");

    //
    const [commante, setDb] = useState([]);
    const [loading, setLoading] = useState(false);
    const [update, SetUpdate] = useState("");

    const [idUpdate, SetidUpdate] = useState("");


    const getPharmacier = async () => {
        const res = await axios.get(
            "http://localhost:9000/api/pharmacy/getAllPharmacier"
        );
        setDb(res.data)
        SetUpdate("get data");
        setLoading(true);
    };

    const DeletePharmacy = async (id) => {
        const url = 'http://localhost:9000/api/pharmacy/delete/' + id
        try {
            const res = await axios.post(url, { withCredentials: true });
            getPharmacier();
        } catch (err) {
            console.log(err.response.data);
        }
    }

    let Updated_data = "";

    const UpdatePharmacy = async (id) => {
        handleShow()
        SetidUpdate(id)
    }

    const UpdatePharmacyData = async () => {
        let url = "http://localhost:9000/api/pharmacy/update/" + idUpdate
        console.log(url);

        try {
            const res = await axios.post(url, {
                name: name,
                address: address,
                latitude: latitude,
                longitude: longitude,
                opening_hours: opening_hours,
                services: services,
            })
            getPharmacier();
            handleClose()
        } catch (err) {
            console.log(err.response.data);
        }
    }

    useEffect(() => {
        getPharmacier();
    }, []);

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h2>PharmGarde</h2>
                    <Ajouter />
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td> address</td>
                                    <td>latitude</td>
                                    <td>longitude</td>
                                    <td>opening_hours</td>
                                    <td>services</td>
                                    <td>delete</td>
                                    <td>update</td>
                                </tr>
                            </thead>
                            <tbody>
                                {commante.map((item) => {
                                    return (
                                        <tr key={item._id}>
                                            <td>{item.data.name}</td>
                                            <td>{item.data.address}</td>
                                            <td>{item.data.latitude}</td>
                                            <td>{item.data.longitude}</td>
                                            <td>{item.data.opening_hours}</td>
                                            <td>{item.data.services}</td>
                                            <td className="up">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => DeletePharmacy(item.id)}
                                                >
                                                    delete
                                                </button>
                                            </td>
                                            <td className="">
                                                <button
                                                    type="button"
                                                    className="btn btn-success"
                                                    onClick={() => UpdatePharmacy(item.id)}
                                                >
                                                    update
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update pharmacier</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    className="mb-3"
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="entrer your Name"
                                    autoFocus
                                // value={}
                                />
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    className="mb-3"
                                    name="setAddress"
                                    onChange={(e) => setAddress(e.target.value)}
                                    type="text"
                                    placeholder="entrer your Address"
                                    autoFocus
                                // value={}
                                />
                                <Form.Label>Latitude</Form.Label>
                                <Form.Control
                                    className="mb-3"
                                    name="latitude"
                                    onChange={(e) => setLatitude(e.target.value)}
                                    type="text"
                                    placeholder="entrer your Latitude"
                                    autoFocus
                                // value={}
                                />
                                <Form.Label>Longitude</Form.Label>
                                <Form.Control
                                    className="mb-3"
                                    name="longitude"
                                    onChange={(e) => setLongitude(e.target.value)}
                                    type="text"
                                    placeholder="entrer your Longitude"
                                    autoFocus
                                // value={}
                                />
                                <Form.Label>opening hours</Form.Label>
                                <Form.Control
                                    className="mb-3"
                                    name="opening_hours"
                                    onChange={(e) => setOpening_hours(e.target.value)}
                                    type="text"
                                    placeholder="entrer your opening_hours"
                                    autoFocus
                                // value={}
                                />
                                <Form.Label>services</Form.Label>
                                <Form.Control
                                    className="mb-3"
                                    name="services"
                                    onChange={(e) => setServices(e.target.value)}
                                    type="text"
                                    placeholder="entrer your services"
                                    autoFocus
                                // value={}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            ></Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="dark" onClick={UpdatePharmacyData}>
                            Update now
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
}
