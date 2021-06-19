import React from 'react'
import './NewClient.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


export default ({show, setShow})=>{


    const handleClose = ()=>{setShow(false)}

    return(
        <div className='NewClient' style={{left: show?0:-415}}>
            <div className='NewClientHead'>
                <div className='NewClientTitle'>Novo Cliente</div>
                <div className='NewClientBackButton' onClick={handleClose}>
                <ArrowBackIcon style={{color:'#fff'}}/>
                </div>
            </div>
            <div className='NewClientInputArea'>
                <div className='ViewInput'>
                    <a>Nome Completo:</a>
                    <input type="text" placeholder="Insira o nome"/>
                </div>
                <div className='ViewInput'>
                    <a>Celular:</a>
                    <input  type="text" placeholder="Insira o celular"/>
                </div>
                <div className='ViewInput'>
                    <a>Complemento:</a>
                    <input type="text" placeholder="Insira um complemento"/>
                    
                </div>
            </div>
            <div tabindex="0" className='NewClientSave'><a>Salvar</a></div>
        </div>
    )
}