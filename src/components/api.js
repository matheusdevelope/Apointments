import React, {useState,useEffect}from 'react'

function Item(props) {
    return <li>{props.value}</li>;
 }

export default ()=>{
    
    const [car, setCar] = useState(true)
    const [dados, setDados] = useState([])

    useEffect(
        ()=>{
            fetch('http://localhost:3333/servicesbyclient/1')
            .then((resp)=>resp.json())
            .then((json)=>setDados(json.services))
            .catch(()=>(alert('Erro ao carregar')))
            .finally(()=>setCar(false))
        },[]
    )

    return(
    <ul>
        {dados.map((dados)=><Item key={item.key} value={item}/>)}
    </ul>
    )
}