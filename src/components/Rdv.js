import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux'
import { add } from '../Redux/rdvSlice'
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import moment from "moment";
import 'bootstrap/dist/css/bootstrap.min.css';
import labs from '../Data/labs.json'
import Doctors from "../Data/Doctors.json"


export default function Rdv() {
    const navigate = useNavigate();
    const uniqueId = () => Math.round(Date.now() * Math.random()).toString();

    const [appointment, setAppointment] = useState({
        uid: uniqueId(),
        type: 'doctor',
        selectedItemId: null,
        time: null
    })

    const dispatch = useDispatch()
    const [appointmentType, setAppointmentType] = useState('')
    const [alert, setAlert] = useState(false)
    const [selectDoctors, setSelectDoctors] = useState([]);

    /*useEffect(() => async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            const { users } = await response.json();
            setSelectDoctors(users)
        } catch (err) {
            console.error(err.message);
        }
    }, [])*/

    function range(from, to) {
        return ([...Array(to - from + 1).keys()].map(num => num + from))
    }

    function handleSelectType(type) {
        setAppointmentType(type)
        setAppointment({ ...appointment, type })
    }


    function handleSelecTime(time) {
        setAppointment({ ...appointment, time: time })
    }

    function handleSelect(event) {
        const selectedItemId = event.target.value
        setAppointment({ ...appointment, selectedItemId })
    }
    function handleSubmit() {
        dispatch(add(appointment))
        setAlert(true)
        setAppointment('')
        setAppointmentType('')
    }

    return (
        <div className="vh-100" >
            <Form className='align-items-center'>
                <Form.Group className="col-md-5 mx-auto mb-3">
                    {alert && <Alert key="primary" variant="primary">
                        le RDV est bien enregistré , tu peux consulter ton <a href="/list">Profile</a>
                    </Alert>}
                </Form.Group>
                <Form.Group className="col-md-5 mx-auto mb-5">
                    <div className="d-flex justify-content-center">
                        <Form.Check
                            inline
                            name='rdv-type'
                            type="radio"
                            label="Laboratoire"
                            id="Laboratoire"
                            onChange={() => handleSelectType('lab')}
                        />
                        <Form.Check
                            inline
                            name='rdv-type'
                            type="radio"
                            id="Medecien"
                            label="Medecien"
                            onChange={() => handleSelectType('doctor')}
                        />
                    </div>
                </Form.Group>
                <Form.Group className="col-md-5 mx-auto mb-3">
                    <Form.Select onChange={handleSelect} aria-label="Default select example" >
                        <option>Selectionner un {appointmentType === "doctor" ? 'Medecien' :
                            appointmentType === "lab" ? "Laboratoire" : "choix"}</option>
                        {appointmentType === "doctor"
                            ? (Doctors.map((doctor) => (
                                <option key={doctor.id} value={doctor.id}>{doctor.name} - in {doctor.address.city}</option>
                            )
                            )) : appointmentType === "lab" ? (labs.map((lab) => (
                                <option key={lab.id} value={lab.id}>{lab.name} - in {lab.address.city}</option>
                            )
                            )) : <option>Open this select menu</option>}

                    </Form.Select>
                </Form.Group>
                <Form.Group className="col-md-7 mx-auto mb-3 row gy-3 col gy-3">
                    <div className="row gy-3 col gy-3">{range(9, 16).map((time) => (
                        <Button variant="success" className="col-6"
                            style={appointment.time === time ? { backgroundColor: "blue", color: "white" } : {}}
                            key={time}
                            onClick={() => handleSelecTime(time)}
                        >
                            {moment().format("DD/MM/YYYY")}{' '}{time}h - {time + 1}h
                        </Button>
                    ))}</div>
                </Form.Group>
                <Form.Group className="col-md-2 mx-auto">
                    <Button className="col-md-10 bg-black" onClick={handleSubmit}>Enregistrer</Button>
                </Form.Group>
            </Form >


        </div >
    );
}
