import React, { useState } from 'react'
import './Menu.css'
import Products from './Products';

export default ({show, setShow,setShowApointments,setShowProducts})=>{



    const handleAgendamentos = ()=>{
        setShow(false)  
        setShowProducts(false)
        setShowApointments(true)}
    const handleFinanceiro = ()=>{
        
    }
    const handleServices= ()=>{
        setShowProducts(true)
        setShowApointments(false)
        }

    return(
        <>
         
        <div style={{left: show?0:-500}} className='MenuArea'>
            <div onClick={handleAgendamentos} className='MenuItem'>
                Agendamentos
            </div>
            <div className='MenuItem' onClick={handleFinanceiro}>
                Financeiro
             
            </div>
            <div className='MenuItem' onClick={handleServices} >
                Serviços
            </div>
        </div>
        </>
    )
}