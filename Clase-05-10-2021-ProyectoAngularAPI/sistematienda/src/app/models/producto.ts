export class Producto{
    _id?: number;
    nombre: string;
    ubicacion: string;
    precio: number;
    proveedor: string;

    constructor(nombre_fulano: string, ubicacion: string, precio: number, proveedor: string){
        this.nombre = nombre_fulano;
        this.ubicacion = ubicacion;
        this.precio = precio;
        this.proveedor = proveedor;
    }
}
