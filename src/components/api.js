import React, {useEffect, useState}from 'react'
import ClientListItem from './ClientListItem2.js'

const ViewClient =()=>{
    const [clients, setClients] = useState(null)

    useEffect(()=>{
        fetch('http://26.48.46.50:3333/users')
        .then(res => {
            return res.json()
        })
        .then(data=>{
            setClients(data)
            console.log(data)
        })
    },[])

    return(
        <div className='View'>
            {clients &&<ClientListItem clients={clients} title='Cliente!'/>}
        </div>
    )

}

export default ViewClient