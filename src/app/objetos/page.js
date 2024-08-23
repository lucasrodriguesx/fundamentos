'use client'
import Pagina from "../components/Pagina";

export default function Objetos() {

    const carros = [
    {marca:'GM',modelo: 'Corsa', cor:'rosa',foto ''},
    {marca:'GM',modelo: 'Celta', cor:'preto',foto ''},
    {marca:'Ferrari',modelo: 'La Ferrari', cor:'Vermelha',foto ''},
    {marca:'VW',modelo: 'Fusca', cor:'Preta',foto ''},
    {marca:'GM',modelo: 'Cobalt', cor:'Branco',foto ''},
]
    
    return (
        <Pagina titulo="Objetos">
           {pessoas.map(item=>(
                    <p>{item}</p>
                ))} 
    
        </Pagina>
    )
}

