import React, {useEffect, useState}from 'react'
import './ClientView.css'
import EditClient from './EditClient';
import EditIcon from '@material-ui/icons/Edit';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
export default ({data, id})=>{
    const [show, setShow] = useState(false)
    const [servicesclient, setServicesClient] = useState([])
    const handleEditClient = ()=>{setShow(show?false:true)}
    const text = 'Oi, tudo bem?'

    useEffect(()=>{
      fetch(`http://localhost:3200/servicesbyclient/${id}`)
      .then(res => {
          return res.json()
      })
      .then(data=>{
        setServicesClient(data)
      })
  },[id])

return(

<div className='ContentProfile'>
    <EditClient show={show} setShow={setShow} data={data} nameInput={data.name}/>
    <div className='HeaderProfile'>
        <div className='Name'> 
        <a>{data.name}</a>
        {data.observation}
        </div>
        <div className='HeaderButtons'>
            <div className='HeaderBNT' >
            <a target="framename" href={`https://api.whatsapp.com/send?phone=55${data.phone}&text=${text}`}>
                <WhatsAppIcon style={{color:'#00BA31', }} />
            </a>
            </div>

            <div className='HeaderBNT' onClick={handleEditClient}>
               <a> <EditIcon style={{color:'#011E2D'}} /></a>
            </div>
        </div>
    </div>  
    <div className='ApointmentsArea'>
            {servicesclient.map((service)=>(
            <div className='ServiceArea' key={service.id}>
            <a className='Text'>Agendamento Nº; {service.id}</a>
            <a className='Text'>Valor: R${service.value} </a>
            <a className='Text'>Observação{service.observation}</a>
            <a className='Text'>Status Agendamento {service.status}</a>
            <a className='Text'>Data Registro: {service.createdAt}</a>
            </div>
            ))}
    </div>

</div>
    )
}
/*
#011E2D #0B5581 #1085BE #4BC3F2 #77BDD9
*/