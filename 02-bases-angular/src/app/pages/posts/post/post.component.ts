import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


 //La propiedad mensaje va hacer recibida desde el exterior
 // desde el componente padre
 @Input() mensaje;

 //Para exportar la propiedad al componente padre
 @Output() clickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

// este metodo puede tener el nombre que quieras
// para mostrar el id del seleccionado
  onClick(){
    //para emitir al componente padre, entre los parentesis
    //del emit es lo que va e emitir
   this.clickPost.emit(this.mensaje.id);
  }

}
