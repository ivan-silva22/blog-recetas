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
              <ul>
                    <li>2 tazas de harina (280 gramos)</li>
                    <li> 4 huevos</li>
                    <li>½ taza de jugo de limón</li>
                    <li> 1 taza de leche condensada (240 gramos)</li>
                    <li>125 gramos de mantequilla</li>
                    <li> 1 taza de azúcar (200 gramos)</li>
                    <li>3 cucharadas soperas de azúcar flor</li>
                    <li> 2 cucharaditas de polvos de hornear</li>
              </ul>
              <br/>
              <br/>
            </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row>
        <Col md={6}>
            <br />
            <Card.Img
              variant="top"
              src="https://cdn0.recetasgratis.net/es/posts/4/5/6/pie_de_limon_y_merengue_facil_44654_paso_0_600.webp"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>Cómo hacer Pie de limón y merengue fácil:</Card.Title>
              <hr />
              <Card.Text>
              <strong>PASO 1:</strong> Lo primero que debes hacer es preparar la masa base del pie de limón. Para ello, mezcla la harina con los polvos de hornear, un huevo, la mantequilla y el azúcar flor. Deberás amasar hasta obtener una masa suave y blanda.
              <br/>
              <br/>
            </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row>
        <Col md={6}>
            <br />
            <Card.Img
              variant="top"
              src="https://cdn0.recetasgratis.net/es/posts/4/5/6/pie_de_limon_y_merengue_facil_44654_paso_1_600.webp"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <hr />
              <Card.Text>
              <strong>PASO 2:</strong> Cuando tengas, forra todo el molde con la masa y hornéalo durante 10 minutos a 170 ºC. Cuando esté listo, retíralo y resérvalo..
              <br/>
              <br/>
            </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row>
        <Col md={6}>
            <br />
            <Card.Img
              variant="top"
              src="https://cdn0.recetasgratis.net/es/posts/4/5/6/pie_de_limon_y_merengue_facil_44654_paso_2_600.webp"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <hr />
              <Card.Text>
              <strong>PASO 3:</strong> Ahora es el turno del relleno del pie de limón. Mezcla el zumo de limón con la leche condensada hasta formar una crema suave. Vierte esta crema sobre la masa que horneaste en el paso anterior y reserva el pastel.
              <br/>
              <br/>
            </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row>
        <Col md={6}>
            <br />
            <Card.Img
              variant="top"
              src="https://cdn0.recetasgratis.net/es/posts/4/5/6/pie_de_limon_y_merengue_facil_44654_paso_3_600.webp"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <hr />
              <Card.Text>
              <strong>PASO 4:</strong> Ahora que ya tienes el relleno, solo falta el merengue para la cubierta. Para ello, separa las claras de las yemas de los tres huevos restantes y bate las claras a punto de nieve. Cuando estén casi listas, incorpora poco a poco el azúcar y sin dejar de batir.
              <br/>
              <br/>
            </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row>
        <Col md={6}>
            <br />
            <Card.Img
              variant="top"
              src="https://cdn0.recetasgratis.net/es/posts/4/5/6/pie_de_limon_y_merengue_facil_44654_paso_5_600.webp"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <hr />
              <Card.Text>
              <strong>PASO 5:</strong> Cuando esté listo, retíralo, deja que se enfríe en la nevera y ya puedes servir el pie de limón y merengue. Como ves, se trata de una receta muy sencilla y deliciosa, ideal para servir con una copa de vino blanco o cava.
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