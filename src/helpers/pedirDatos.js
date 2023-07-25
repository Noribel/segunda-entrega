import { Productos } from "./productos"


const pedirDatos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(Productos);
        }, 2500)
    })
    
}
export default pedirDatos;


export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) =>{
        const item = Productos.find((producto) => producto.id === id);
        if(item){
            resolve(item)
        }else{
            reject({
                error: "Prodcuto no encontrado"
            })
        }
    })
    
}