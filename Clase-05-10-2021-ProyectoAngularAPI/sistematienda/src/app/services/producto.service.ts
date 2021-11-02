import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductoService {

	url = 'http://localhost:4000/api/producto/';

	constructor(private http: HttpClient) { }


	getProductos(): Observable<any>{
		return this.http.get(this.url);
	}

	deleteProducto(id: String): Observable<any>{
		return this.http.delete(this.url + id);
	}
}
