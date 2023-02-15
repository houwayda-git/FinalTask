import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import Pharmacies from '../Data/Pharmacies.json'


import '../App.css'

export default function Pharma() {

    const row = Pharmacies.map((user, i) => {
        return (
            <tr key={i}>
                <td><img src={user.img} className="rounded-circle" height="40" width="40" alt="" loading="lazy" /></td>
                <td>{user.name}</td>
                <td>{user.address.city}</td>
                <td>{user.category}</td>
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