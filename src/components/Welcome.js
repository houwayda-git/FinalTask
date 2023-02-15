import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useSelector } from 'react-redux'
import labs from "../Data/labs.json"
import pharmacies from '../Data/Pharmacies.json'
import Doctors from "../Data/Doctors.json"




export default function Welcome() {

    const [doctors, setDoctors] = useState([])
    const rdvList = useSelector(state => state.rdv)

    return (
        <div className="square">
            <div className="d-flex">
                <div className="px-5">
                    <div className="milestone-counter justify-content-center text-center">
                        <i className="fa fa-hospital-o fa-4x"></i><br />
                        <span className="stat-count highlight">{rdvList.length}</span><br />
                        <div className="milestone-details">Rdvs</div><br />
                    </div>
                </div>
                <div className="px-4">
                    <div className="milestone-counter justify-content-center text-center">
                        <i className="fa fa-medkit fa-4x"></i><br />
                        <span className="stat-count highlight">{pharmacies.length}</span><br />
                        <div className="milestone-details">Pharmacies</div><br />
                    </div>                </div>
                <div className="px-4">
                    <div className="milestone-counter justify-content-center text-center">
                        <i className="fa fa-user-md fa-4x"></i><br />
                        <span className="stat-count highlight">{Doctors.length}</span><br />
                        <div className="milestone-details">Docteurs</div><br />
                    </div>
                </div>
                <div className="px-4">
                    <div className="milestone-counter justify-content-center text-center">
                        <i className="fa fa-flask fa-4x"></i><br />
                        <span className="stat-count highlight">{labs.length}</span><br />
                        <div className="milestone-details">laboratoires</div><br />
                    </div>
                </div>
            </div>
        </div>
    )
}
