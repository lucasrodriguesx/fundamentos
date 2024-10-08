"use client";

import apiDisney from "@/apiDisney";
import Pagina from "@/app/components/Pagina";

import { useEffect, useState } from "react";

export default function Page() {
  const [personagens, setPersonagens] = useState([]);

    useEffect(() =>{
        apiDisney.get('character').then(resultado=>{
            setPersonagens(resultado.data.data)
            
        })
    },[])

  return (
    <Pagina titulo="Disney">
                {personagens.map((item) => (
                  <p>{item.name}</p>
                ))}
        
    </Pagina>
  );
}