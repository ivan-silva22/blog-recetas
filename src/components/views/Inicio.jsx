import { Container, Row } from "react-bootstrap";
import CardProducto from "./CardReseta";

const Inicio = () => {
    return (
        <section className="mainSection">
        <img
          className="banner"
          src="https://fondosmil.com/fondo/35733.jpg"
          alt="fondo"
        />
        <Container>
          <h1 className="display-4">Recetas de cocina</h1>
          <hr />
          <Row>
              <CardProducto></CardProducto>
              <CardProducto></CardProducto>
              <CardProducto></CardProducto>
              <CardProducto></CardProducto>
          </Row>
        </Container>
      </section>
    );
};

export default Inicio;