import React from 'react'
import './ClientListItem.css'
export default ({onClick, active, data})=>{
    return(
    <div className={`ClientListItem ${active?'active':''}`}
         onClick={onClick}
    >
        <img className='ClientListItemAvatar' src= {data.Profile} />
        <div className='ClientListItemLines'>
            <div className='ClientListItemLine'>
                <div className='ClientListItemName'>{data.Name}</div>
                <div className = 'ClientListItemDate'>09:30</div>
            </div>
            <div className='ClientListItemLine'>
                <div className='ClientListItemService'>
                    <p>Tattoo no Septo e umbigo Tattoo no Septo e umbigo Tattoo no Septo e umbigoTattoo no Septo e umbigo Tattoo no Septo e umbigo Tattoo no Septo e umbigoTattoo no Septo e umbigo</p>
                </div>
            </div>
        </div>
    </div>
)
}