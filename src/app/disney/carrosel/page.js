"use client";
import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

export default function DisneyCarrossel() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    apiDisney.get("character").then((resultado) => {
      setPersonagens(resultado.data.data);
    });
  }, []);

  return (
    <Pagina titulo="Disney Carrossel">
      <Carousel>
        {personagens.map(item => (
      <Carousel.Item>
        <img height="auto" width="auto" src={item.imageUrl}/>
        <Carousel.Caption>
          <h3>{item.name}</h3>
        </Carousel.Caption>
      </Carousel.Item>
        ))}
    </Carousel>
    </Pagina>
  );
}