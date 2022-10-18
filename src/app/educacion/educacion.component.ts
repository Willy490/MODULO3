import { Component, OnInit } from '@angular/core';
import { MiportfolioService } from '../servicios/miportfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion:any;

  constructor(
    //inyectar el servicio para tener acceso en la clase a los metodos
    private miportfolioservice: MiportfolioService
  ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por
    this.miportfolioservice.getDatos().subscribe(datosportfolio =>{
      //console.log(datosportfolio);
      this.educacion=datosportfolio.educacion;

     })
  }

}
