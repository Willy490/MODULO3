import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MiportfolioService } from './servicios/miportfolio.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { BodyComponent } from './body/body.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { EducacionprimariaComponent } from './educacionprimaria/educacionprimaria.component';
import { EducacionsecundariaComponent } from './educacionsecundaria/educacionsecundaria.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { EducacionterciariaComponent } from './educacionterciaria/educacionterciaria.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { NabvardashboardComponent } from './nabvardashboard/nabvardashboard.component';
import { BotonLogoutComponent } from './boton-logout/boton-logout.component';
import { ModaldashboardComponent } from './modaldashboard/modaldashboard.component';
import { RedesdashboardComponent } from './redesdashboard/redesdashboard.component';
import { TrabajodashboardComponent } from './trabajodashboard/trabajodashboard.component';
import { EducaciondashboardComponent } from './educaciondashboard/educaciondashboard.component';
import { PerfildashboardComponent } from './perfildashboard/perfildashboard.component';
import { ProyectodashboardComponent } from './proyectodashboard/proyectodashboard.component';
import { BannerdashboardComponent } from './bannerdashboard/bannerdashboard.component';
import { ReferenciasdashboardComponent } from './referenciasdashboard/referenciasdashboard.component';
import { RedeseditdashboardComponent } from './redeseditdashboard/redeseditdashboard.component';
import { SkillsdashboardComponent } from './skillsdashboard/skillsdashboard.component';
import { InfodashboardComponent } from './infodashboard/infodashboard.component';
import { BodydashboardComponent } from './bodydashboard/bodydashboard.component';
import { BodydashboardfondoComponent } from './bodydashboardfondo/bodydashboardfondo.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    BannerComponent,
    SobremiComponent,
    BodyComponent,
    ExperienciaComponent,
    EducacionComponent,
    EducacionprimariaComponent,
    EducacionsecundariaComponent,
    DashboardComponent,
    ErrorComponent,
    EducacionterciariaComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    IndexComponent,
    NabvardashboardComponent,
    BotonLogoutComponent,
    ModaldashboardComponent,
    RedesdashboardComponent,
    TrabajodashboardComponent,
    EducaciondashboardComponent,
    PerfildashboardComponent,
    ProyectodashboardComponent,
    BannerdashboardComponent,
    ReferenciasdashboardComponent,
    RedeseditdashboardComponent,
    SkillsdashboardComponent,
    InfodashboardComponent,
    BodydashboardComponent,
    BodydashboardfondoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MiportfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
