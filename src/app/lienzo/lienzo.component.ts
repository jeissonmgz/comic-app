import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PaginaService } from '../services/vista/pagina.service';
import { Pagina } from './../models/pagina';

@Component({
  selector: 'app-lienzo',
  templateUrl: './lienzo.component.html',
  styleUrls: ['./lienzo.component.css']
})
export class LienzoComponent implements OnInit {
  
  @ViewChild('area') areaDiv: ElementRef;

  constructor(private sanitizer: DomSanitizer, private renderer: Renderer2, private paginaService: PaginaService) { }

  ngOnInit() {
  }

  actualizarLienzo(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  ngAfterViewInit(){
    this.ajustarTamanio();
  }

  ajustarTamanio() {
    this.renderer.setStyle(
      this.areaDiv.nativeElement,
      'width', 
      `${window.innerWidth - 200}px`
    );
    this.renderer.setStyle(
      this.areaDiv.nativeElement,
      'height', 
      `${window.innerHeight - 200}px`
    );
  }

}
