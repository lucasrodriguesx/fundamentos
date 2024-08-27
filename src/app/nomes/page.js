
'use client'
import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Nomes(){

    const [nome, setNome] = useState('Lucas')

    function alterarNome (){
        const novoNome = nome == 'Lucas' ? 'Lucas Rodrigues Dos Santos' : 'Lucas'
        setNome(novoNome)
    }

    return (
        <Pagina titulo="Nomes">
        <h1>{nome}</h1>
        <button onClick= {alterarNome}>alterar Nome</button>
        </Pagina>
    );
  }