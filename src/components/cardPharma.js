import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


export default function cardPharma({ pharmacie }) {
    return (
        <ListGroup>
            <ListGroup.Item>{pharmacie.title} {pharmacie.address}</ListGroup.Item>
        </ListGroup>
    )
}
