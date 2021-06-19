import React from 'react'
import './Menu.css'

export default ({show, setShow})=>{
    const handleCloseMenu = ()=>{setShow(false)}

    return(
        <div style={{left: show?0:-415}} className='MenuArea'>
            <div onClick={handleCloseMenu} className='MenuItem'>
                Agendamentos
            </div>
            <div className='MenuItem'>
                Financeiro
            </div>
            <div className='MenuItem'>
                Serviços
            </div>
        </div>
    )
}