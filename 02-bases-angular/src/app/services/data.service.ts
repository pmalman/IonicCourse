import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // El operador tap, ejecutar una accion cuando se obtiene algun mensaje/ suscripcion
  getPosts() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(tap((posts) => {
        console.log(posts);
      }));
  }
}
