'use client'
import Pagina from "../components/Pagina";

export default function Array() {

    const carros = ['Corsa','Ferrari','Kombi','Mustang','FordK','Dodge Ram']
    const pessoas = ['Lucas','Matheus','Pedro','Henrique']

    return (
        <Pagina titulo="Pagina de Array">
           {pessoas.map(item=>(
                    <p>{item}</p>
                ))} 
        
        <ul>
        {carros.map(item => (
            <li>{item}</li>
        ))}
        </ul>

        </Pagina>
    )
}

