import React from 'react'
import './ClientView.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default ({data})=>{
const NumPhone = "991435952"

return(
<div className='ContentProfile'>
    <header className='HeaderProfile'>
        <div className='Name'> {data.Name} </div>
        <div className='HeaderButtons'>
            <div className='HeaderBNT'>
                <AddCircleIcon style={{color:'#919191'}}/>
            </div>
            <div className='HeaderBNT'>
                <MoreVertIcon style={{color:'#919191'}}/>
            </div>
        </div>
    </header> 
    <div className='ApointmentsArea'>
        <div className='Profile'>
            <div className='View'>
                <div className='Contact'>
                    <a>{"Celular: " + data.NumPhone}</a>
                    <a>{"Email: " + data.Email}</a>
                </div>
                <div className='Adress'>
                    <div className='Road'>{data.Road}</div>
                    <div className='Distric_Num'>
                        <a className='Distric'> {'Bairro: ' + data.Distric}</a>
                        <a className='Number'>{'Nº' + data.Number}</a>
                        <div className='AdressComplement'>
                        <a>Complemento:</a>
                        <div className='AdressTextComplement'>{data.AdressComplement}</div>
                    </div>
                </div>
            </div>
        </div>
            <div className='Complement'>
                    <a>Observações: </a>
                    <a className='TextComplement'></a>
               </div>
            </div>
            <div className='Historic'>
            {data.Profile}
            </div>
        </div>
    </div>
    )
}
/*
#011E2D #0B5581 #1085BE #4BC3F2 #77BDD9
*/