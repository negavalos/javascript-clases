function verdader() {
    return true;
}
console.log(verdader());

const asincronas = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (true) {
            resolve()
        }else{
            reject()
        }
    }, 6000)
});
asincronas.then(()=>console.log("Hola soy una promesa")).catch(()=>console.log("error"))

function* pares() {
    let par = 0;
    while (true) {
        par += 2
        if (par === 50) {
            return par
        }
        yield par
    }
}
const IndicePar = pares();
console.log(IndicePar.next().value);
console.log(IndicePar.next().value);
console.log(IndicePar.next().value);
console.log(IndicePar.next().value);
console.log(IndicePar.next().value);