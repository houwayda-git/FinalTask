import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import moment from "moment";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import { useDispatch } from 'react-redux'
import { deleteRdv, update } from '../Redux/rdvSlice'
import CardProfile from './CardProfile';




export default function Profile() {
    const [listRdv, setListRdv] = useState([])
    const [count, setCount] = useState(0)
    const disptach = useDispatch()

    useEffect(() => {
        setListRdv(JSON.parse(localStorage.getItem('state')))
        setCount(JSON.parse(localStorage.getItem('count')))
    }, [])
    console.log(listRdv)
    return (
        <div className="vh-100">
            <Form className='pt-2'>
                <div className="container">
                    {count > 0 ? <>
                        {listRdv.map((first, i) => <CardProfile profile={first} index={i} key={i} />)}</> : <h3>Pas de rendez vous </h3>}
                </div>
            </Form >
        </div >
    );
}