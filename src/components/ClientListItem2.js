import React from 'react'
import './ClientListItem2.css'
export default ({clients, title})=>{
 
    return(

<div className='pai'>
        {clients.map((client)=>( 
    <div className='ClientListItem' key={client.id}>
        <img className='ClientListItemAvatar' src='https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg' />
        
        <div className='ClientListItemLines'>
            <div className='ClientListItemLine'>
                <div className='ClientListItemName'>{client.name}</div>
                <div className = 'ClientListItemDate'>{client.id}</div>
            </div>
            <div className='ClientListItemLine'>
                <div className='ClientListItemService'>
                    <p>{client.observation}</p>
                </div>
            </div>
           
        </div>
        
    </div>
    ))}
    </div>
)
}