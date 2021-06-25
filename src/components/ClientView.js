import React, {useEffect, useState}from 'react'
import './ClientView.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
export default ({data, id})=>{
    const sendWhats =()=>{
        <a target="" href="https://api.whatsapp.com/send?phone=5593991435952&text=Oi,%20Teste"></a>
    
    }
    const [servicesclient, setServicesClient] = useState([])
    useEffect(()=>{
      fetch(`http://127.0.0.1:3200/servicesbyclient/${id}`)
      .then(res => {
          return res.json()
      })
      .then(data=>{
        setServicesClient(data)
      })
  },[id])
return(

<div className='ContentProfile'>
    <div className='HeaderProfile'>
        <div className='Name'> {data.name} </div>
        <div className='HeaderButtons'>

            <div className='HeaderBNT' >
            <a target="framename" href="https://api.whatsapp.com/send?phone=5593991435952&text=Oi,%20Teste">
                <WhatsAppIcon style={{color:'#00BA31', }} fontSize='large'/>
            </a>
            </div>
            <div className='HeaderBNT'>
                <AddCircleIcon style={{color:'#919191'}} />
            </div>

            <div className='HeaderBNT'>
                <MoreVertIcon style={{color:'#919191'}} />
            </div>
        </div>
    </div> 
    <div className='ApointmentsArea'>
            {servicesclient.map((service)=>(
            <div className='AreaService' key={service.id}>
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