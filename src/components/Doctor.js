import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Doctor(doctor, { name, phone, mail, tarif, category, address }) {

  console.log(doctor);

  return (

    <Container className='pt-4'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {category}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{phone}</ListGroup.Item>
          <ListGroup.Item>{mail}</ListGroup.Item>
          <ListGroup.Item>{address}</ListGroup.Item>
          <ListGroup.Item>{tarif}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Container >


  )
}
