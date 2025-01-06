/**
 *TALLER 2
 */

 function calculaPromedio(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function determinarMayor(a, b) {
    if (a > b) return a;
    else return b;
}

const esPar = (x) => x % 2 == 0;

const llamar_Funciones = function () {
    let a = 5;
    let b = 9;
    
    let promedio = calculaPromedio(a, b, 7);
    let mayor = determinarMayor(a, b);
    let par = esPar(5);
    
    console.log("Promedio:", promedio);
    console.log("Mayor:", mayor);
    console.log("Paridad de "+a + par);
};

llamar_Funciones();
