import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="outline-primary">Primary</Button>{' '}
      <Cabecalho titulo="Pagina Inical" sub="Lucas"/>
      <Link href='/fundamentos'> paginas fundamentos</Link>

    </main>
  );
}