import { Component, OnInit } from '@angular/core';
import { MiportfolioService } from '../servicios/miportfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos:any;

  constructor(
    private miportfolioservice: MiportfolioService
  ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por
    this.miportfolioservice.getDatos().subscribe(datosportfolio =>{
      //console.log(datosportfolio);
      this.proyectos=datosportfolio.proyectos;

     })
  }

}
