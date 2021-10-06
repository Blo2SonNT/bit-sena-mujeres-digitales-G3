export class Producto{
    _id?: number;
    nombre: string;
    ubicacion: string;
    precio: number;
    proveedor: string;

    constructor(nombre: string, ubicacion: string, precio: number, proveedor: string){
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.precio = precio;
        this.proveedor = proveedor;
    }
}