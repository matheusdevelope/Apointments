import React, { useState, useEffect } from 'react'
import { GetService } from './Api'
import './Apointments.css'
import ModelService from './ModelServiceArea'

export default ({showApointments})=>{ 
 
    const [show,setShow]=useState(true)

    const [services, setServices] = useState ([])
    useEffect(()=>{
        fetch(GetService)
        .then(res => {return res.json()
         }).then(data=>{
        setServices(data)})
    },[show])

    useEffect(()=>{
    },[show])
 
return( 
<div className='ContentArea 'style={{top: showApointments?0:-1000}}>
    <div className='Header'>
        <a>AGENDAMENTOS</a>
    </div>
    
    <div className='AreaServices'>
    <ModelService Info1='Cliente:' Info2='Serviço:'  
    Info4='Operação:' Info5='Obs.:' Info6='Finalizar'
    show={show} setShow={setShow}  />
    
        {services.map((service)=>(
        <div className='ServiceArea' key={service.id}>
        <a className='Text'>Agendamento Nº: {service.id}</a>
        <a className='Text'>Valor: R${service.value} </a>
        <a className='Text'>Observação: {service.observation}</a>
        <a className='Text'>Status Agendamento: {service.status}</a>
        <a className='Text'>Data Registro: {service.createdAt}</a>
        </div>))}   
    </div>
</div>
)}
