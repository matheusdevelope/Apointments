import React,{useState, useEffect} from 'react'

export const GetClients = ({setData})=>{
const [clients, setClients] = useState([])
  useEffect(()=>{
        fetch('http://localhost:3200/clients')
        .then(res => {
            return res.json()
        })
        .then(data=>{
         setClients(data)
         setData(clients)
        })
        
    },[])
}