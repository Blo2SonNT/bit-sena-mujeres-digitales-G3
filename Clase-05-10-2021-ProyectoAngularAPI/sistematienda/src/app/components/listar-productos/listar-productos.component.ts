import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-listar-productos',
	templateUrl: './listar-productos.component.html',
	styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

	listadoProductos: Producto[] = []

	constructor(private _productoService: ProductoService) { }

	ngOnInit(): void {
		this.obtenerProductos();
	}

	obtenerProductos() {
		this._productoService.getProductos().subscribe(data => {
			// console.log(data)
			this.listadoProductos = data;
		}, error => {
			console.log(error)
		})
	}

	eliminarProducto(id: any) {
		Swal.fire({
			title: 'Esta seguro de eliminar el producto?',
			text: "Esta acción no sera reversible",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3d66eb',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, eliminar'
		}).then((result) => {
			if (result.isConfirmed) {
				this._productoService.deleteProducto(id).subscribe(data => {
					Swal.fire({
						icon: 'success',
						title: 'Producto Eliminado!'
					  })
					this.obtenerProductos();
				}, error => {
					console.log(error)
				})
			}
		})
	}

}
