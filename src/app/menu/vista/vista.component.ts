import { Component, OnInit } from '@angular/core';
import { PaginaService } from '../../services/vista/pagina.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  activo: boolean;

  constructor(private paginaService: PaginaService) {
    this.activo = true;
   }

  ngOnInit() {
  }

}
