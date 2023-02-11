import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import moment from "moment";
import '../App.css'
import { useDispatch } from 'react-redux'
import { deleteRdv, update } from '../Redux/rdvSlice'


export default function CardProfile({ profile }, index) {
    return (
        <Form.Group className="mx-auto mb-3">
            <Card index={index} style={{ width: '15rem' }}>
                <button type="button" className="btn-close bg-danger" onClick={() => { }} ></button>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        {/* <span>{profile.name.selectedItemId}</span><br /> */}
                        {/* <span>{moment().format("DD/MM/YYYY")} à {profile.name.time}h - {profile.name.time + 1}h</span> */}
                    </Card.Text>
                    <button type="button" onClick={() => { }} className="btn btn-warning">Modifier</button>
                </Card.Body>
            </Card>
        </Form.Group>)
}
