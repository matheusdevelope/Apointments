import React, { useState, useEffect } from 'react'
import { GetService } from './Api'
import './Apointments.css'
import ModelService from './ModelServiceArea'

export default ({showApointments, data})=>{ 
 
    const [show,setShow]=useState(false)

    const [services, setServices] = useState ([])
    useEffect(()=>{
        fetch(GetService)
        .then(res => {return res.json()
         }).then(data=>{
        setServices(data)})
    },[show])

    useEffect(()=>{
        setShow(false)
    },[showApointments])
 
return( 
<div className='ContentArea 'style={{top: showApointments?-1000:0}}>
    <div className='Header'>
        <a>AGENDAMENTOS</a>
    </div>
    
    <div className='AreaServices'>
    <ModelService Info1='Cliente:' Info2='Serviço:'  
    Info4='Operação:' Info5='Obs.:' Info6='Finalizar'  />
    
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
