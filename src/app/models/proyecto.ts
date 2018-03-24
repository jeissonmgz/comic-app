import { Pagina } from './pagina';

export const PROYECTO: Pagina[] = [
  { texto: '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="red" /> </svg>' },
  { texto: '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="4" fill="red" /> </svg>' },
  { texto: '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="blue" stroke-width="4" fill="red" /> </svg>' }
];

export let numeroPagina: number = 0;

export function seleccionarPagina() {
    numeroPagina++;
}