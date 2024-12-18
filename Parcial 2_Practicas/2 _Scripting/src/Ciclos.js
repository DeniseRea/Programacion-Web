/**
 * CICLO FOR
 */

const heroes=['Spiderman','IronMan','Hulk','Thor','Capitan Arrow'];

console.log("For tradicional");
for (let i=0;i<heroes.length;i++) {
    console.log(heroes[i]);
}

//itera las propiedades de un objeto a los indices de un arreglo
console.log("");
console.log("For in");

for (let i in heroes) {
    console.log(heroes[i]);
}

console.log("");
console.log("For of");

for (let heroe of heroes) {
    console.log(heroe);
}

//Usamos el for tradicional clasico cuando se necesite el control total del indice
//se usa el for in para iterarr propiedades de un objeto
// usamos el for of para iterar los valores de un iterable (Array)
//map, set,nodeList

//continue break

for (let contador = 0; contador <=10; contador++) {
    if (contador %2==0) {
        //continue;//ir a la siguiente iteracion
        break; //rompe el ciclo y sale del bucle
        
    }
    console.log(contador);
}

//while


const carros=["Mazda","Ferrari","BMW","Mazda"]
let i=0;/*
while (i<carros.length) {
    console.log(carros[i]);
    i++;
}
*/

console.warn("Usando continue")
while (carros[i]) {
    if(i==1){
        i++
        continue;
    }
    console.log(carros[i]);
    i++;
}