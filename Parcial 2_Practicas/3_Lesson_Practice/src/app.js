console.log("Holi");
/*
const parrafo=document.getElementById('parrafo');
const boton=document.getElementById('increment');

let contador=0
boton.addEventListener('click',()=>{
    console.log("Hiciste click");   
    contador++;
    parrafo.innerHTML=contador;
});*/

const parrafo=document.querySelector("p");
const input=document.querySelector("input");

input.addEventListener("change",(e)=>{
    console.log(e);
    parrafo.innerHTML=e.target.value;
});