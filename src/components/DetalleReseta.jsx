import { Container, Card, Row, Col } from "react-bootstrap";

const DetalleReseta = () => {
  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://cdn0.recetasgratis.net/es/posts/4/5/6/pie_de_limon_y_merengue_facil_44654_300_square.webp"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>Ingredientes para hacer Pie de limón y merengue fácil:</Card.Title>
              <hr />
              <Card.Text>
              
              <br/>
              <br/>
            </Card.Text>
            </Card.Body>
          </Col>
        </Row>
       
      </Card>
    </Container>
  );
};

export default DetalleReseta;