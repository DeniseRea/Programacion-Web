var nombre;
var edad;
var altura;

nombre="Juan"
edad=20;
altura=1.80;

console.log("El nombre de la persona es "+nombre);
console.log("la edad de la persona es "+edad);
console.log("la altura de la persona es "+altura);


/*
var para variable global
let para una variable local
const para una variable constante
*/

/**
 * if marca un bloque de instrucciones
 * switch condicional
 * 
 * for marca una condicion de intrucciones que se ejecuta n veces
 * while otro ciclo repetitivo
 * 
 * function marca un bloque de instrucciones
 * 
 * try se ejecuta cuando  no se produce error 
 * catch se ejecuta cuando  se produce error 
*/

/* ~TIPOS DE DATOS EN JAVASCRIPT~ */

/* String */

var nombrecito="Chimuelo";
console.log(nombrecito);

//tipos de dato numerico

var edad=20;
console.log(edad);

//tipo objeto

var objeto={
    nombre:"Denise",
    apellido:'Rea',
    edad: 20,
    altura: 1.54,
}

console.log(objeto);

//typeof

var var1="Wilson";
console.log(var1);
console.log(typeof var1);

var var2=false;
console.log(typeof var2);

var var3=145;
console.log(typeof var3);

var var4=[1,45,5,4,9];
console.log(typeof var4);

var var5=BigInt(477);
console.log(typeof var5);

//tipo funcion

function saludar(){}
    console.log(saludar);
    console.log(typeof saludar);


var simbolo= Symbol();
console.log(simbolo);
console.log(typeof simbolo);

//tipo clase
class Persona{
    constructor (nombre, apellido) //atributos dentro del constructos
{
    this.nombre=nombre;
    this.apellido=apellido
}
}

console.log(Persona);
console.log(typeof Persona);

//importante, una clase en javascript tambien es una funcion

var variable;
console.log(variable);
console.log(typeof variable);

var variable1=null;
console.log(variable1);
console.log(typeof variable1);

//Arreglos en javascript

var autos=["BMW", "Mercedes Benz", "Chevrolet"]
console.log(autos);
console.log(typeof autos)

//tipos de cadenas vacias 
var variable="";
console.log(variable);
console.log(typeof variable);


/**
 * ~Reglas básicas~
 */

let nombreCompleto;

//formas corractas de declarar una variable
var a1nombreCommpleto

//no esta permitido ingresar estos tipos de variables

/**
 * OPERADORES EN JAVASCRPIPT
 */

//aritmeticos

    //suma
var x=10;
var y=10;
var z=10;
var suma=x+y+z;
console.log(suma);

    //resta

var x=10;
var y=50;
var z=10;
var resta=x-y+z;
console.log(resta);

//multiplicacin

var x=10;
var y=50;
var z=10;
var mul=x*y*z;
console.log(mul);



    //preIncemento   
    /*let a;
    let x;
    x=++a;

    console.log(a);
    console.log(x);*/
    
    //Decremento

    //variables de igualdad
var m = 5;
var n = 5;
var o = m == n;
var p = m != n;
var q = m > n;
var r = m < n;
var s = m >= n;
var t = m <= n;
console.log("Igualdad: " + o);
console.log("Desigualdad: " + p);
console.log("Mayor que: " + q);
console.log("Menor que: " + r);
console.log("Mayor o igual que: " + s);
console.log("Menor o igual que: " + t);


let comparacion1 = 10;
let comparacion2 = "10";

let comparacion3 = comparacion1 == comparacion2;
console.log(comparacion3);

let comparacion4 = comparacion1 === comparacion2;
console.log(comparacion4);


//precedencia de operadores

let a1 = 3, b1 = 2, c1 = 1, d1 = 4, d2=9,b2=7,c2=8;
let resultado = a1 + b1 * c1 / d1;
console.log(resultado);

let resultado1 = (a1 + b1) * c1 / d1;
console.log(resultado1);

let dato3=resultado1*b2+c2/d2;

let a=3;
let valorD=3;
a+=3; //a=a+3
console.log(a);

valorD-=3; //a=a+3
console.log(a);

//determinar si un numero es par o impar

let numero = 10;
if(numero % 2 == 0){
    console.log("Numero par");
}else{
    console.log("Numero impar");
}

//Determinar si una persona es mayor de edad o no 

let edad1 = 19;
if(edad1 >= 18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}


//operadores and
let s1=12;
let valMin=0; valMax=100;

if(s1>=valMin && s1<=valMax){
    console.log("El  valor esta dentro del rango");
}
else{
    console.log("Esta fuera de rango");
}

//Operadores ternarios

let resu=(s1>=valMin && s<=valMax) ?"E valor esta dentro" :"El valor esta dentro";

//conversiones
let minumero="10";

let edad2= parseInt(minumero);
console.log(edad2)
console.log(typeof edad2)

let edad3= parseInt(minumero);
console.log(edad3)
console.log(typeof edad3)

/**
 * parseInt: convierte un valor a entero
 * number:lo convierte a un valor numerico ya sea entero o flotante
 */

console.log(parseInt("42px")) //covierte solo la parte entera
console.log(parseInt("3.69999")) //convierte a entero
console.log(parseFloat("3.69999")) //convierte a entero
console.log(parseInt("cvbnm")) //convierte a entero

console.log(Number("42px")) //no puede convertir toda la cadena
console.log(Number("3.69999")) //convierte a numero
console.log(Number("cvbnm")) //

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));