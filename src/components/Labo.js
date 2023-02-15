import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import labs from "../Data/labs.json"
import '../App.css'




export default function Labo() {
    const [loading, setLoading] = useState(true)


    const row = labs.map((user, i) => {
        return (
            <tr key={i}>
                <td><img src={user.img} className="rounded-circle" height="50" width="50" alt="" loading="lazy" /></td>
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
                        <th>User Name</th>
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
