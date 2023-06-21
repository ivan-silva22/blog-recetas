const URLUsuario = import.meta.env.VITE_API_USUARIO;
const URLReseta = import.meta.env.VITE_API_RESETA;

export const login = async (usuario) =>{
    try {
        const repuesta = await fetch(URLUsuario);
        const listaUsuarios = await repuesta.json();
        const buscarUsuario = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);
        if(buscarUsuario){
            if(buscarUsuario.password === usuario.password){
                return buscarUsuario;
            }else{
                return false;
            }
        }else{
            return false;
        }
    } catch (error) {
        console.log(error)
    }
}