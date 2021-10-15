import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports:[
    HeaderComponent // como lo voy a usar fuera de este modulo lo tengo que exportar tambien
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
