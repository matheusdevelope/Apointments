import React, { useState } from 'react'
import './NewClient.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({show, setShow, setClients})=>{

    const [nameInput,setNameInput]=useState('')
    const [phoneInput,setPhoneInput]=useState('')
    const [obsInput,setObsInput]=useState('')
    const handleClose = ()=>{setShow(false)}

    let _data = {
        name: nameInput,
        observation: obsInput, 
        phone: phoneInput
      } 

    const addNewClient = async()=>{
    const Post = await fetch('http://localhost:3200/clients', {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
    method: "POST",
    body: JSON.stringify(_data)
    }) 
   const response = await Post.json()
   console.log(response)
   handleClose()
   setNameInput('')
   setPhoneInput('')
   setObsInput('')
   setClients = true
    }
    
    

    return(
        <div className='NewClient' style={{left: show?0:-500}}>
            <div className='NewClientHead'>
                <div className='NewClientTitle'>Novo Cliente</div>
                <div className='NewClientBackButton' onClick={handleClose}>
                <ArrowBackIcon style={{color:'#fff'}}/>
                </div>
            </div>
            <div className='NewClientInputArea'>
                <div className='ViewInput'>
                    <a>Nome Completo:</a>
                    <input type="text" placeholder="Insira o nome"
                    value={nameInput} onChange={(ev)=>setNameInput(ev.target.value)}/>
                </div>
                <div className='ViewInput'>
                    <a>Celular:</a>
                    <input  type="number" placeholder="Insira o celular"
                    value={phoneInput} onChange={(ev)=>setPhoneInput(ev.target.value)}/>
                </div>
                <div className='ViewInput'>
                    <a>Complemento:</a>
                    <input type="text" placeholder="Insira um complemento" 
                    value={obsInput} onChange={(ev)=>setObsInput(ev.target.value)} />
                   
                </div>
            </div>
            <div onClick={()=>{addNewClient()}}  tabIndex="0" className='NewClientSave'><a>Salvar</a></div>
        </div>
    )
}