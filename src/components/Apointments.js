import React, { useState, useEffect } from 'react'
import { GetProdByServ, GetService } from './Api'
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import './Apointments.css'
import ModelService from './ModelServiceArea'

export default ({showApointments, data,showMenu})=>{ 
    const [changeText, setChangeText]  = useState(false)
    const [activeService, setActiveService] = useState([])
    const [show,setShow]=useState(true)
    const [services, setServices] = useState ([])
    useEffect(()=>{
        setServices([])
        fetch(GetService)
        .then(res => {return res.json()
         }).then(data=>{
        setServices(data)})
    },[show])
    const handleOnClickEdit = (key)=>{
        if(!changeText){
        setChangeText(true)
        setActiveService(services[key])
        }else
        {setChangeText(false)
        setActiveService([])}  
}

const handleCancelApointment = async (service)=>{
    service.status = "C"
    const cancelprods = await fetch(GetProdByServ, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
            method: "PUT",
            body: JSON.stringify(service.ProdByService)
            })    
    const resproduct = await cancelprods.json()
    
    const cancelservice = await fetch(GetService,{
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
        method: "PUT",
        body: JSON.stringify(service)
    })
    const resservice = await cancelservice.json()
    setShow(!show)
}

return( 
<div className='ContentArea 'style={{top: showApointments?0:-1000}}>
    <div className='Header'>
        <a>AGENDAMENTOS</a>
    </div>
    
    <div className='AreaServices'>
    <ModelService Info1='Cliente:' Info2='Serviço:'  
    Info4='Operação:' Info5='Observação:' Info6={changeText?'Editar':'Finalizar'}
    show={show} setShow={setShow} showApointments={showApointments} showMenu={showMenu}
    activeService={activeService}  changeText={changeText} />
  
        {services.filter(serv => serv.status.includes("A")).sort((a,b)=>{
            let part1= Number(a.hour.substring(0,2) + a.hour.substring(3))
            let part2= Number(b.hour.substring(0,2) + b.hour.substring(3))
            return part1 - part2
        }).map((service, key)=>(
            <div className='BoxServiceHour' 
             key={service.id}>
            <a>{service.hour}</a>
            <div className='ServiceArea2'>  
            <div className='Area1Service'> 
                <a className='TextName'>{service.FK_client_id.name}</a>
                <a className='TextObs'>{service.observation}</a>
            </div>
            <div className='Area2Service'> 
            {service.ProdByService.filter(prod => prod.category.includes('S')).map((dataprods)=>(
            <div key={dataprods.id}>{dataprods.name}</div>  
            ))}
            </div>
            <div className='Area3Service'> 
            <button><AssignmentTurnedInIcon fontSize="small"/></button>
            <button><EditIcon fontSize="small" onClick={()=>{handleOnClickEdit(key)}}/></button>
            <button><CloseIcon fontSize="small" onClick={()=>{handleCancelApointment(service)}}/></button>
            </div>
        </div>
        </div>))}   
    </div>
</div>
)}

         
         