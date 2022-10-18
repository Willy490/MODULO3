import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asincronica
import { Observable } from 'rxjs';
//Esto es parea poder hacer peticiones, por ejemplo para pedir a la base de datos
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MiportfolioService {
  //el primer http se llama alias, 
  constructor(private http:HttpClient) { }

  // Método observable que devuelve los datos
getDatos():Observable<any> {
  // Se llama al JSON con su path -ruta- , o bien , en su lugar se puede poner una URL para traer datos
  return this.http.get ('./assets/json/datosfortfolio.json') ;
}
}
