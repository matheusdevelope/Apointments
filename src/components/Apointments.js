import React, { useState, useEffect } from 'react'
import { GetService } from './Api'
import './Apointments.css'
import ModelService from './ModelServiceArea'

export default ({showApointments, data})=>{ 
    const [codclient,setCodClient] = useState('')
    const [serviceInput,setServiceInput]=useState()
    const [valueInput,setValueInput]=useState()
    const [obsInput,setObsInput]=useState('')
    const [statusInput,setStatusInput]=useState('')

    let _data = {
        client_id: codclient,
        product_id: serviceInput,
        observation: obsInput, 
        value:valueInput,
        status:statusInput
      } 
    const handleAddNewService = async ()=>{
    const Post = await fetch(GetService, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
    method: "POST",
    body: JSON.stringify(_data)
    }) 
   const response = await Post.json()
   handleNewService()
   setCodClient()
   setServiceInput('')
   setObsInput('')
   setValueInput('')
   setStatusInput('')
    }
    
    const [show,setShow]=useState(false)
    const handleNewService = ()=>{setShow(show?false:true)}
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
<div className='ContentArea 'style={{top: showApointments?0:-1000}}>
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
