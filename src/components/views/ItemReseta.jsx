import { Button } from "react-bootstrap";

const ItemProducto = () => {
    return (
        <tr>
        {/* <td>{props.producto._id}</td> */}
        <td>1</td>
        <td>Receta de Pie de limón y merengue fácil</td>
        <td>https://cdn0.recetasgratis.net/es/posts/4/5/6/pie_de_limon_y_merengue_facil_44654_300_square.webp</td>
        <td>
          <Button className="btn btn-warning">Editar</Button>
          <Button variant="danger">
            Borrar
          </Button>
        </td>
      </tr>
    );
};

export default ItemProducto;