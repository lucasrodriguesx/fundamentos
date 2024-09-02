"use client";

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Page() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    apiDisney.get("character").then((resultado) => {
      setPersonagens(resultado.data.data);
    });
  }, []);

  return (
    <Pagina titulo="Disney-cards">
      <Container className="mt-5">
        <Row>
          {personagens.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img height={200} variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Text> Personagem: {item.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Pagina>
  );
}