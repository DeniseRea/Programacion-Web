/**
 * ARREGLOS
 */

const array=[1,2,3,4,5];
const array1=new Array(1,2,3,4,5);
const array2=Array.of(1,2,3,4,5);

let numeros=[1,2,3,4,5];
let colores=["rojo","azul","verde"];
let vacio=[];
let conjunto=[{nombre:"Christopher",Apellido:"Iza"},{color:"rojo"}];

let videojuegos=[
    "COD",
    "Super mario Bros",
    "Donkey Kong",];
    console.log(videojuegos[2]);

    let arreglosCosas=[true,123,"Holi",1+2,
        function(){},()=>{},{a:1},["hola", "mundo"]
    ]
    console.log(arreglosCosas);
    console.log(arreglosCosas[3]);

    //map filter y el reduce

    let numeros1=[1,2,3,4,5];
    let cuadrados=numeros1.map(num=>num*num);
    console.log({cuadrados});

    //filtro de acuerdo a una condicion
    let numerosPares=[1,2,3,4,5];
    let pares=numerosPares.filter(num=>num%2==0);
    console.log({pares});

    let numerosR = [1, 2, 3, 4, 5, 6];
    let maxR = numerosR.reduce((acumulador, num) => num > acumulador ? num : acumulador, numerosR[0]);
    console.log(maxR);

    /**
     * Ventajas de utiliarlo 
     * ~ Ideales para trabajar con transformaciones y manipulaciones complejas
     * ~ Permiten un estilo de programacion funcional más limpio y fácil de usar. 
     */
