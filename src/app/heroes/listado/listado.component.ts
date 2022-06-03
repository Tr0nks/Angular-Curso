import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  borrado: string = '';
  mostrarBorrado: boolean = false;


  heroes: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor', 'Capitan America'];

  borrarHeroe(): void{

    this.borrado = this.heroes.shift() || '';
    if(this.borrado != '')
        this.mostrarBorrado = true;




  }





}
