import { Form, Button } from "react-bootstrap";

const CrearReseta = () => {
  
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva receta</h1>
      <hr />
      <Form >
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pizza"
          />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
      
          />
      
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
          >
            <option value="">Seleccione una opcion</option>
            <option value="pasta">Pastas</option>
            <option value="sopa">Sopas</option>
            <option value="postre">Postres</option>
            <option value="ensalada">Ensaladas</option>
          </Form.Select>
       
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearReseta;