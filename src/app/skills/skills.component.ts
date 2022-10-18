import { Component, OnInit } from '@angular/core';
import { MiportfolioService } from '../servicios/miportfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any;

  constructor(
    private miportfolioService: MiportfolioService
  ) { }

  ngOnInit(): void {
    // Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
this.miportfolioService.getDatos().subscribe(dataportfolio => {
  //console.log (dataportfolio) ;
 // Definir infomación a mostrar
  this.skills=dataportfolio.skills;
  });
  }

}
