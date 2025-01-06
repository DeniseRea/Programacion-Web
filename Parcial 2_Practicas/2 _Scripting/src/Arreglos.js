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

    //Agregar nuevos elementos 
    
    /**
     * push() agrega elementos al final de mi array. 
     */

    let agregar= [1,2,3];
    agregar.push(4);//agregamos elementos al final del array
    console.log(agregar);

    let a=['uno','dos','tres'];
    a.push('cuatro');
    console.log(a);

    //unshift() agrega uno o mas elementos al principio del array

    let add=[1,2,3];
    add.unshift(0);//unshift
    console.log(add);

    /**
     * splice() agrega o elimina elementos del array
     */

    let z=[1,2,3];
    z.splice(1,0,4);//Agregamos el elmento 4 en la posición 1 sin eliminar los elementos dentro de la posición
    console.log(z);

    z.splice(1,1,5);//Eliminamos el elmento  en la posición 1 y lo reemplazamos con el 5

    /**
     * MODIFICAR
     */

    let m=[1,2,3,4];
    //para conocer la posicion
    m[1]=5;
    console.log(m);

    //si deseamos modificar el arreglo de forma inmutable se puede usar map 

    let modificar =[1,2,3];
    let newmodificar =modificar.map(num=>num===2?5:num); //cambiamos el valor 2 por el 5
    console.log(newmodificar); //

    let numeros_ = [1, 2, 3, 4, 5];

    let dobles = numeros_.map(num => num * 2);

    console.log(dobles); 


    /**
     * ELIMINAR
     */

    //usaremos pop

    let e=[1,2,3,4,5];
    e.pop();//eliminamos el ultimo elemento
    console.log(e);

    //shift elimina el primer elemento
    e.shift();
    console.log(e);

    //usamos splice para poder eliminar elementos en cualquier posicion 

    let s=[1,2,3,4];
    s.splice(1,1);
    console.log(s);
    



