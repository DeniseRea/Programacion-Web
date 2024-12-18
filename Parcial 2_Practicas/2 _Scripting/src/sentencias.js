/**
 * SENTENCIAS DE CONTROL
 */

let numero=10;
if(numero==1){
    console.log("El numero es 1");
}else if(numero==2){
    console.log("El numero es 2");
}else{
    console.log("No es 1 ni 2");
}

/*
let mes=5;
let estacion;

if(mes==1||mes==2){
    estacion="Invierno";
}else if(mes==3||mes==4){
    estacion="Primavera";
}else if(mes==5||mes==6){
    estacion="Verano";
}else if(mes==7||mes==8){
    estacion="Otoño";
}

console.log("la estacion: " + estacion);*/

/**
 * 6 a 11 mañana- Buenos dias
 * 12 a 19 tarde buenas noches
 * 20 a 23 noche buenas noches
 * 24 a 5 madrugada mimiendo
 */

let horadia=23
let mensaje;

if(horadia>=6 && horadia<12){
    mensaje="Buenos dias";
}else if(horadia>=12 && horadia<19){
    mensaje="Buenas tardes";
}else if(horadia>=19 && horadia<24){
    mensaje="Buenas noches";
}else if(horadia>=24 && horadia<5){
    mensaje="Durmiendo";
}else{
    mensaje="fuera de rango";
}

console.log(mensaje);

let mes=11;
let estacion;

switch(mes){
    case 1:
    case 2:
        estacion ="Invierno";
        break;
    case 3:
    case 4:
        estacion ="Verano";
        break;
    case 5:
    case 6:
        estacion ="Primavera";
        break;
    case 7:
    case 8:
        estacion ="Otoño";
        break;
    default:
        estacion ="fuera de Rango";
        break;
}

console.log(estacion);