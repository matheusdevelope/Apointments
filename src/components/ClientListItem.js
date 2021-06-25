import React from 'react'
import './ClientListItem.css'
export default ({onClick, active, data})=>{
  
    return(
    <div className={`ClientListItem ${active?'active':''}`}
         onClick={onClick}
    >
        <img className='ClientListItemAvatar' src= 'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg' />
        <div className='ClientListItemLines'>
            <div className='ClientListItemLine'>
                <div className='ClientListItemName'>{data.name}</div>
                <div className = 'ClientListItemDate'>{data.id}</div>
            </div>
            <div className='ClientListItemLine'>
                <div className='ClientListItemService'>
                    <p>{data.phone}</p>
                </div>
            </div>
        </div>
    </div>
)
}