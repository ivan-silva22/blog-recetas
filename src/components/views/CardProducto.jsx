import { Col, Card, Button } from "react-bootstrap";

const CardProducto = () => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://cdn0.recetasgratis.net/es/posts/4/5/6/pie_de_limon_y_merengue_facil_44654_300_square.webp"
        />
        <Card.Body>
          <Card.Title>Receta de Pie de limón y merengue fácil</Card.Title>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;