import { Injectable } from '@angular/core';
import { PROYECTO } from './../../models/proyecto';

@Injectable()
export class PaginaService {
  
    nroPagina: number;
    paginaActual: string;
  
    constructor() { 
      this.nroPagina = 0;
      this.actualizarPagina();
    }
  
    actualizarPagina() {
      this.paginaActual = PROYECTO[this.nroPagina].texto;
    }
  
    guardarPagina() {
      PROYECTO[this.nroPagina].texto = this.paginaActual;
    }
  
    subirPagina() {
      if (!this.esUltimaPagina()) {
        this.guardarPagina();
        this.nroPagina++;
        this.actualizarPagina();
      }
    }
    
    bajarPagina() {
      if (!this.esPrimeraPagina()) {
        this.guardarPagina();
        this.nroPagina--;
        this.actualizarPagina();
      }
    }

    esUltimaPagina(): boolean {
      return this.nroPagina == PROYECTO.length - 1;
    }
    
    esPrimeraPagina(): boolean {
      return this.nroPagina == 0;
    }
  
    primeraPagina() {
      this.guardarPagina();
      this.nroPagina = 0;
      this.actualizarPagina();
    }
    
    ultimaPagina() {
      this.guardarPagina();
      this.nroPagina = PROYECTO.length - 1;
      this.actualizarPagina();
    }

}
