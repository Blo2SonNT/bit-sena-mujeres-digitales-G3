import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from 'src/app/models/producto';

@Component({
	selector: 'app-crear-producto',
	templateUrl: './crear-producto.component.html',
	styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

	productoForm: FormGroup;

	constructor(private fb: FormBuilder, private router: Router) {
		this.productoForm = this.fb.group({
			productoNombre : ['', [Validators.required]], //, Validators.email, Validators.minLength(5)
			productoPasillo : ['', Validators.required],
			productoValor: ['', Validators.required],
			productoProveedor: ['', Validators.required]
		})
	}

	ngOnInit(): void {
	}

	agregarProducto(){
		console.log(this.productoForm);

		console.log(this.productoForm.get('productoNombre')?.value);

		this.router.navigate(['/']);
		Swal.fire({
			icon: 'success',
			title: 'Producto registrado!'
		})
	}

}
