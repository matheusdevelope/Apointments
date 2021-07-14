import React, { useState } from'react'
import './registradora.css'
import CloseRounded from '@material-ui/icons/CloseRounded';

export default (data)=>{
    const [formPagamento,setFormPagamento] = useState("DINHEIRO")
    const [descont, setDescont]= useState(00,00)
    const [valueFinal, setValueFinal]= useState("")
    const [obs, setObs]= useState("")
const dados = [{
    id:1,
    name:"PERFURAÇÃO SEPTO",
    value: 120.00,
    quantidade: 1  
},{ id:2,
    name:"PIERCING DE PRATA N. 27",
    value: 120.00,
    quantidade: 3  
},{
    id:1,
    name:"PERFURAÇÃO SEPTO",
    value: 120.00,
    quantidade: 1  
},
]
const datasend = {
    client_id:data.client_id,
    client_name:data.FK_client_id.name,
    service_id:data.id,
    value_total:data.value,
    descont: descont,
    value_final: valueFinal,
    observation: obs,
    status: F,
    formPagamento: formPagamento,
    user_inclusion:"01",
    }
const handleCloseRegister =()=>{}

return(
<div className='bodyProvisorio'>
<div className='bodyRegister'>
    <div className='headerRegister'>
        <button />
            <a className='Title'>REGISTRADORA</a>
        <button onClick={handleCloseRegister}>
            <CloseRounded/>
        </button>
    </div>
    <div className='HeaderRegister2'>
    <div className='InfoClientRegister'>
        <div className='NameClientRegister'>2023- Matheus Teixeira</div>
        <div className='ObsRegister'>Esse serviço foi acertado pelo Machadin,
         ele pediu pra fazer mais barato. Esse serviço foi acertado pelo Machadin,
         ele pediu pra fazer mais barato.
         </div>
    </div>
    <div className='PaiScroll'>
    <div className='ListItensServiceRegister'>
    {dados.map(data=>(
        <div className='BoxItensRegister' key={data.id}>
            <a>{data.name}</a>
            <div>
            <a>{data.quantidade}</a>
            <a>{(data.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</a>
            <a>{(data.quantidade * data.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</a> 
            </div>
        </div>
    ))}
    </div>
    </div>
    <div className='PagamentoRegister'>
        <div>Sub Total<input className='ValueTotal' placeholder={data.value}/></div>
        <div>Desconto<input className='ValueDescont' placeholder={descont}/></div>
        <div>Total<input className='ValueFinal' placeholder='320.90'/></div>
        <div className="ListPagamento">
            Pagamento
        <ul>
        <a className='TextFormSelected'>{formPagamento}</a>
        <li><a href="#" onClick={()=>{setFormPagamento("DINHEIRO")}}>DINHEIRO</a></li>
            <li onClick={()=>{setFormPagamento("CARTÃO")}}><a href="#">CARTÃO</a></li>
            <li onClick={()=>{setFormPagamento("PIX")}}><a href="#" >PIX</a></li>
            <li onClick={()=>{setFormPagamento("OUTROS")}}><a href="#" >OUTROS</a></li>
        </ul>
        </div>
        <button>OK</button>
    </div>
        </div>
</div>
</div>
    )
}