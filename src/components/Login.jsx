import { Form, Button, Container, Card, FormText } from "react-bootstrap";
import { login } from "./helpers/queries";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const Login = ({setUsuarioLogin}) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  const navegacion = useNavigate();

  const onSubmit = (usuario) =>{
    login(usuario).then((respuesta)=>{
      if(respuesta){
         sessionStorage.setItem('usuario', JSON.stringify(respuesta));
         Swal.fire(
          'Bienvenido',
          `${respuesta.nombreUsuario} iniciaste sesión correctamente`,
          'success'
        );
        setUsuarioLogin(respuesta);
        navegacion('/administrador');
      }else{
        Swal.fire(
          'Error',
          'Email o contraseña es incorrecto',
          'error'
        )
      }
    })
  }
  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
               {...register('email', {
                required: 'El email es un campo obligatorio',
                pattern:{
                  value:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: 'El formato de no corresponde a un email'
                }
               })}
              />
             <FormText className="text-danger">
                {errors.email?.message}
             </FormText>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                {...register('password', {
                  required: 'La contraseña es un campo obligatorio',
                  pattern:{
                    value:/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message: 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.'
                  }
                 })}
              />
            <FormText className="text-danger">
                {errors.password?.message}
             </FormText>
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
