import React, { useState, useEffect } from 'react'
import './Apointments.css'

export default ()=>{ 
    const [services, setServices] = useState ([])
    useEffect(()=>{
        fetch('http://26.48.46.50:3200/services')
        .then(res => {return res.json()
         }).then(data=>{
        setServices(data)})
    },[])
return( 
<div className='ContentArea'>
    <div className='Header'>
        <a>AGENDAMENTOS</a>
    </div>
    <div className='Area'>
    <div className='AreaServicesPai'>
    <div className='AreaServices'>
        {data.map((service)=>(
        <div className='ServiceArea' key={service.id}>
        <a className='Text'>Agendamento Nº; {service.id}</a>
        <a className='Text'>Valor: R${service.value} </a>
        <a className='Text'>Observação{service.observation}</a>
        <a className='Text'>Status Agendamento {service.status}</a>
        <a className='Text'>Data Registro: {service.createdAt}</a>
        </div>))}
    </div>
    </div>
    <div className='AreaBox'>
        <div className='Box1'>
????????????
        </div>
        <div className='Box2'>
//////////
        </div>
    </div>
    </div>
</div>
)}

const data = [{
    id:'1',
    value:'120,30',
    observation:"Teste com array",
    status:'Aberto',
    createdAt:'2021-06-09'
},
{
    id:'2',
    value:'120,30',
    observation:"Teste com array",
    status:'Aberto',
    createdAt:'2021-06-09'
},
{
    id:'3',
    value:'120,30',
    observation:"Teste com array",
    status:'Aberto',
    createdAt:'2021-06-09'
},
{
    id:'5',
    value:'120,30',
    observation:"Teste com array",
    status:'Aberto',
    createdAt:'2021-06-09'
},
{
    id:'6',
    value:'120,30',
    observation:"Teste com array",
    status:'Aberto',
    createdAt:'2021-06-09'
},
{
    id:'7',
    value:'120,30',
    observation:"Teste com array",
    status:'Aberto',
    createdAt:'2021-06-09'
},
]