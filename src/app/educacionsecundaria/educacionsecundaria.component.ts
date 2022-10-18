import { Component, OnInit } from '@angular/core';
import { MiportfolioService } from '../servicios/miportfolio.service';

@Component({
  selector: 'app-educacionsecundaria',
  templateUrl: './educacionsecundaria.component.html',
  styleUrls: ['./educacionsecundaria.component.css']
})
export class EducacionsecundariaComponent implements OnInit {
  educacionSecundaria:any;

  constructor( 
    //inyectar el servicio para tener acceso en la clase a los metodos
    private miportfolioservice: MiportfolioService
  ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por
    this.miportfolioservice.getDatos().subscribe(datosportfolio =>{
      //console.log(datosportfolio);
      this.educacionSecundaria=datosportfolio.educacionSecundaria;
     })
  }

}
