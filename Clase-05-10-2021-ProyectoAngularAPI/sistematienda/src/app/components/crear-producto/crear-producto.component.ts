import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
	selector: 'app-crear-producto',
	templateUrl: './crear-producto.component.html',
	styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

	productoForm: FormGroup;
	titulo_formulario = "Crear producto";
	id: String | null;

	constructor(private fb: FormBuilder, private router: Router, private _productoService: ProductoService, private idRoute: ActivatedRoute) {
		this.productoForm = this.fb.group({
			productoNombre: ['', [Validators.required]], //, Validators.email, Validators.minLength(5)
			productoPasillo: ['', Validators.required],
			productoValor: ['', Validators.required],
			productoProveedor: ['', Validators.required]
		})
		this.id = this.idRoute.snapshot.paramMap.get('id');
	}

	ngOnInit(): void {
		this.accionSolicitada();
	}

	manipulacion_data_producto() {
		console.log(this.productoForm);

		// console.log(this.productoForm.get('productoNombre')?.value);

		const PRODUCTO: Producto = {
			nombre: this.productoForm.get('productoNombre')?.value,
			ubicacion: this.productoForm.get('productoPasillo')?.value,
			precio: this.productoForm.get('productoValor')?.value,
			proveedor: this.productoForm.get('productoProveedor')?.value
		}

		console.log(PRODUCTO)

		if(this.id !== null){
			//editamos producto
			this._productoService.putProducto(this.id, PRODUCTO).subscribe(data => {
				this.router.navigate(['/']);
				Swal.fire({
					icon: 'success',
					title: 'Producto ha si actualizado!'
				})
			}, error => {
				console.log(error)
			})
		}else{
			//creamos producto
			this._productoService.postProductos(PRODUCTO).subscribe(data => {
				this.router.navigate(['/']);
				Swal.fire({
					icon: 'success',
					title: 'Producto registrado!'
				})
			}, error => {
				console.log(error)
			})
		}

	}


	accionSolicitada() {
		if (this.id !== null) {
			//editamos producto
			this.titulo_formulario = "Editar producto";
			this._productoService.getProducto(this.id).subscribe(data => {
				this.productoForm.setValue({
					productoNombre: data.nombre, //, Validators.email, Validators.minLength(5)
					productoPasillo: data.ubicacion,
					productoValor: data.precio,
					productoProveedor: data.proveedor
				})
			})
		} 
	}

}
