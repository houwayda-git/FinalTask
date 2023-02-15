import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


export default function cardPharma({ pharmacie }) {
    return (
        <ListGroup>
            <ListGroup.Item><img variant="top" src="https://tunisie-medicale.com/files/pharmacie/default.jpg" /></ListGroup.Item>
            <ListGroup.Item>{pharmacie.title} {pharmacie.address}</ListGroup.Item>
        </ListGroup>
    )
}
