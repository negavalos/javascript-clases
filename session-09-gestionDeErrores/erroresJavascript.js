const miFuncion = val =>{
    if (typeof val === "number") {
        return 2 * val
    }
    // return false
    throw new Error("El valor debe ser de tipo numero")
}
// const eldoble = miFuncion("43");
const numero = "";

try {
    // Codigo que puede fallar
    console.log("esta ejecutandose de manera correcta");
    const elDoble = miFuncion(numero)
    console.log(elDoble);
} catch (error) {
    // en caso de que falles, quiero que ejecutes esto
    console.log("ERROR!!");
    console.error("Problema: " + error);
}finally{
    console.log("Esto se ejecuta si hay error o no, siempre se ejecuta.");
}



// InternalError, syntaxError, TypeError, RangeError y ReferenceError
/// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error