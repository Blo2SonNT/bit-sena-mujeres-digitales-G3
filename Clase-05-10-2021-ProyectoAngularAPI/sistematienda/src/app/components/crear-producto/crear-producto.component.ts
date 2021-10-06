import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-crear-producto',
	templateUrl: './crear-producto.component.html',
	styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

	productoForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.productoForm = this.fb.group({
			productoNombre : ['', [Validators.required]], //, Validators.email
			productoPasillo : ['', Validators.required],
			productoValor: ['', Validators.required],
			productoProveedor: ['', Validators.required]
		})
	}

	ngOnInit(): void {
	}

	agregarProducto(){
		console.log(this.productoForm);
	}

}
