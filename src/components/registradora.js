import React from'react'
import './registradora.css'
import CloseRounded from '@material-ui/icons/CloseRounded';

export default ()=>{
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
const handleCloseRegister =()=>{}

return(
<div className='bodyProvisorio'>
<div className='bodyRegister'>
    <div className='headerRegister'>
        <button />
            <a>REGISTRADORA</a>
        <button onClick={handleCloseRegister}>
            <CloseRounded/>
        </button>
    </div>
    <div className='HeaderRegister2'>
    <div className='InfoClientRegister'>
        <div className='NameClientRegister'>Matheus Teixeira</div>
        <div className='ObsRegister'>Esse serviço foi acertado pelo Machadin,
         ele pediu pra fazer mais barato.</div>
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
        <div>Sub Total<input className='ValueTotal' placeholder='500.00'/></div>
        <div>Desconto<input className='ValueDescont' placeholder='200.00'/></div>
        <div>Total<input className='ValueFinal' placeholder='320.90'/></div>
        <div>F. Pagamento<input className='PagamentForm' placeholder='Forma Pag.'/></div>
        <button>OK</button>
    </div>
        </div>
</div>
</div>
    )
}