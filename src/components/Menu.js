import React, { useState } from 'react'
import './Menu.css'
import Products from './Products';

export default ({show, setShow,showProducts,setShowProducts})=>{



    const handleCloseMenu = ()=>{setShow(false)}
    const handleProducts = ()=>{setShowProducts(showProducts?false:true)}
    
    return(
        <>
         
        <div style={{left: show?0:-500}} className='MenuArea'>
            <div onClick={handleCloseMenu} className='MenuItem'>
                Agendamentos
            </div>
            <div className='MenuItem'>
                Financeiro
             
            </div>
            <div className='MenuItem' onClick={handleProducts}>
                Serviços
            </div>
        </div>
        </>
    )
}