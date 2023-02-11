import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';



export default function Doctor() {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();
    useEffect(() => async () => {
        let response;
        try {
            response = await fetch('https://dummyjson.com/users');
            response = await response.json();
            setDoctors(response.users)
        } catch (err) {
            console.error(err.message);
        }
    }, [])
    return (

        <Container className='pt-4'>
            <div className="vh-100">
                <Form className='pt-2'>
                    <div className="container">
                        {doctors.map((doctor) => <Form.Group className="mx-auto mb-3">
                            <Card style={{ width: '13rem' }} key={doctor.id}>
                                <Card.Body>
                                    <Card.Title>{doctor.firstName} {doctor.lastName}</Card.Title>
                                    <Card.Text>
                                        <p>{doctor.email} </p>
                                        <p>{doctor.phone}</p>
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => navigate('/rdv')}>Prendre un Rdv</Button>
                                </Card.Body>
                            </Card>
                        </Form.Group>)}
                    </div>
                </Form>
            </div >
        </Container >

    );
}
