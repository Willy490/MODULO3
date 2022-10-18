import { Component, OnInit } from '@angular/core';
import { MiportfolioService } from '../servicios/miportfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //esta es una forma, pero no es recomendable
  
  //nombre = 'Wilian';
  //apellido = 'Fariña';
  
  // Crear variable de instancia para almacenar los datos con los que trata el Servicio
  nombre: string = '' ;
  apellido: string = '';
  tituloPerfil: string = '';
  
  constructor(// Inyectar el servicio para tener acceso en la clase a los Métodos
     private miportfolioService: MiportfolioService) { }

  ngOnInit(): void {
    // Esto es almacenar en la variable de instancia los datos recuperados por el Servicio ?
this.miportfolioService.getDatos().subscribe(dataportfolio => {
  console.log (dataportfolio) ;
 // Definir infomación a mostrar
  this.nombre=dataportfolio.nombre ;
  this.apellido=dataportfolio.apellido ;
  this.tituloPerfil=dataportfolio.tituloPerfil ;
  });
  }

}
