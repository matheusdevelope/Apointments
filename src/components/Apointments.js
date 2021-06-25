import React, { useState, useEffect } from 'react'
import './Apointments.css'

export default ()=>{
    const [services, setServices] = useState ()
    useEffect(()=>{
        fetch('http://127.0.0.1:3200/services')
        .then(res => {
            return res.json()
        })
        .then(data=>{
            setServices(data)
        })
    },[])
return(
    <div>
        {services.map((service)=>(
        <div className='AreaService' key={service.id}>
        <a className='Text'>Agendamento Nº; {service.id}</a>
        <a className='Text'>Valor: R${service.value} </a>
        <a className='Text'>Observação{service.observation}</a>
        <a className='Text'>Status Agendamento {service.status}</a>
        <a className='Text'>Data Registro: {service.createdAt}</a>
        </div>))}
    </div>
)}