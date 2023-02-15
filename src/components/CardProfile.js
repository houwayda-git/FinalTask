import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import moment from "moment";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"
import '../App.css'
import { useDispatch } from 'react-redux'
import { supRdv, update } from '../Redux/rdvSlice'
import Badge from 'react-bootstrap/Badge';
import '../App.css'



export default function CardProfile({ rdv, rdvType, index }) {
    const disptach = useDispatch()
    const navigate = useNavigate();


    return (
        <>
            <ListGroup as="ol" >
                <ListGroup.Item
                    style={{ width: '70rem' }}
                    index={index}
                    as="li"
                    className="justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{rdvType} {rdv.name}</div>
                        <span>{moment().format("DD/MM/YYYY")} à {rdv.time}h </span><br />
                        <span>Adresse : {rdv.address}</span >
                        <Button onClick={() => disptach(supRdv(index))} className='anybutton' variant="danger">Annuler</Button>
                    </div>

                </ListGroup.Item>
            </ListGroup>

        </>)
}
