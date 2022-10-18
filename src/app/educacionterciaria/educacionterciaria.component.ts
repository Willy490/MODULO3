import { Component, OnInit } from '@angular/core';
import { MiportfolioService } from '../servicios/miportfolio.service';

@Component({
  selector: 'app-educacionterciaria',
  templateUrl: './educacionterciaria.component.html',
  styleUrls: ['./educacionterciaria.component.css']
})
export class EducacionterciariaComponent implements OnInit {
  educacionTerciaria: any;

  constructor(
    //inyectar el servicio para tener acceso en la clase a los metodos
    private miportfolioservice: MiportfolioService
  ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por
    this.miportfolioservice.getDatos().subscribe(datosportfolio =>{
      //console.log(datosportfolio);
      this.educacionTerciaria=datosportfolio.educacionTerciaria;
     })
  }

}
