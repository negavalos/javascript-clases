const hoy = new Date();
console.log(hoy);
const fechaN = new Date(1999, 0, 4);
console.log(fechaN);

const Time = fechaN < hoy;
console.log(Time);

const DiaN = fechaN.getDate()
console.log(DiaN);

const MesN = fechaN.getMonth(0);
console.log(MesN);

const anyoN = fechaN.getFullYear();
console.log(anyoN);
