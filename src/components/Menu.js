import React, { useState } from 'react'
import './Menu.css'
import Products from './Products';

export default ({show, setShow})=>{

    const [showProducts, setShowProducts] = useState(false)

    const handleCloseMenu = ()=>{setShow(false)}
    
    
    return(
        <>
        <Products showProducts={showProducts} setShowProducts={setShowProducts} />
        <div style={{left: show?0:-500}} className='MenuArea'>
            <div onClick={handleCloseMenu} className='MenuItem'>
                Agendamentos
            </div>
            <div className='MenuItem' onClick={()=>{setShowProducts(true)}}>
                Financeiro
                
            </div>
            <div className='MenuItem'>
                Serviços
            </div>
        </div>
        </>
    )
}