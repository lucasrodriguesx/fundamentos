
'use client'
import Pagina from "@/app/components/Pagina";

export default function Nomes(){

    let nome = 'Lucas'

    return (
        <Pagina titulo="Nomes">
        <button>Primeiro Nome</button>
        <h1>{nome}</h1>
        <button>Primeiro Nome</button>
        </Pagina>
    );
  }