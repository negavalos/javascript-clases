// import { eleva, factorial, multiplica, suma } from "./modulos/matematicas.js";
import * as matematicas from './modulos/matematicas.js';
import getAutor, {libro} from './modulos/literatura.js';

const sum = matematicas.suma(5,12)
console.log(sum);

const potencia = matematicas.eleva(2, 12);
console.log(potencia);

console.log(getAutor());
console.log(libro);