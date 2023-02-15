import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import moment from "moment";
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import CardProfile from './CardProfile';
import labs from "../Data/labs.json"
import Doctors from "../Data/Doctors.json"




export default function Profile() {
    const [doctors, setDoctors] = useState([])
    const [loading, setLoading] = useState(true)
    const rdvList = useSelector(state => state.rdv)

    /* useEffect(() => async () => {
         try {
             const response = await fetch('https://dummyjson.com/users');
             const { users } = await response.json();
             setDoctors(users)
             setLoading(false)
         } catch (err) {
             console.error(err.message);
         }
     }, [])*/

    function getRdv(selectedRdv) {
        //console.log(selectedRdv)
        if (selectedRdv.type === 'doctor') {
            const doctor = Doctors.find(doctor => doctor.id == selectedRdv.selectedItemId)
            return { uid: selectedRdv.uid, id: doctor.id, name: doctor.name, time: selectedRdv.time, address: doctor.address.city }
        }
        if (selectedRdv.type === 'lab') {
            const lab = labs.find(lab => lab.id === selectedRdv.selectedItemId)
            return { uid: selectedRdv.uid, id: lab.id, name: lab.name, time: selectedRdv.time, address: lab.address.city }
        }

    }


    return (
        <div className="vh-200">
            <Form className='pt-2'>
                <div className="container">
                    {Doctors.length > 0 && rdvList.length > 0 ? (<>
                        {rdvList.map((rdv, i) =>
                        (<CardProfile
                            rdv={getRdv(rdv)}
                            rdvType={rdv.type}
                            index={rdv.uid} key={i}
                        />)
                        )}
                    </>) : (<>No RDVs</>)}
                </div>
            </Form >
        </div >
    );
}