import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import AllDoctors from "../Data/Doctors.json"
import Accordion from 'react-bootstrap/Accordion';
import Doctor from './Doctor'

export default function Doctors() {
    const navigate = useNavigate()

    const row = AllDoctors.map((doctor) => {
        return (
            <tr key={doctor.id}>
                <td><img variant="primary" src={doctor.img} className="rounded-circle" height="40" width="40" alt="" loading="lazy" style={{ cursor: "grab" }} /></td>
                <td>{doctor.name}</td>
                <td>{doctor.address.city}</td>
                <td>{doctor.category}</td>
            </tr>
        )
    })


    return (

        <Container className='pt-4'>
            <Table striped bordered hover variant="white">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Addresse</th>
                        <th>Catégorie</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </Table>
        </Container >


    )
}
