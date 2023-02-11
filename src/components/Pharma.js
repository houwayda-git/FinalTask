import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import CardPharma from './cardPharma'
import pharmacies from '../Data/Pharmacies.json'

export default function Pharma() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(pharmacies)

    }, [])

    return (
        <div className="vh-100">
            <Container className='pt-4'>
                {data.map((pharmacie, index) => <CardPharma key={index} pharmacie={pharmacie} />)}
            </Container>
        </div>
    )
}
