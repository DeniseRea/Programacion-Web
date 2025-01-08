/**
 * OBJETOS
 */

//Características principales de los objetos de Javascripts

//Claves y Valores

/**
 * Claves son cadenas o simbolos unicos
 * Los valores pueden ser de cualquier tipo: numeros, cadenas, funciones, otros tipoos de objetos.
 */

/**
 * Dinamismo
 * 
 * pueden ser modificados en tiempo de ejecucion(agregar, modificar o eliminar propiedades) 
 *      ~Métodos~
 *          Son funciones asociadas a un objeto
 */

//Propiedades y metodos
// DeclaKlracion de un objeto

let persona={
    nombre:'Denise',
    apellidos:'Rea',
    email:'dnrea@espe.edu.ec',
    edad:22,
}

console.log(persona);

//metodos objetos

let persona2={
    nombre:'Christopher',
    apellidos:'Iza',
    email:'cdiza5@espe.edu.ec',
    edad:25,
    direccion:'Quito',
    nombreCompleto:function(){
        return this.nombre+' '+this.apellidos;
    }
}

//console.log(persona2.nombreCompleto);//no se puede acceder así
console.log(persona2.nombreCompleto());

const persona_={
    nombre:'Belu',
    edad:26,
    saludar:function(){
        console.log(`Hola mi nombre es ${this.nombre}`);// aqui se usa esto ` 
        //console.log('Hola mi nombre es ${this.nombre}');
    }
}

persona_.saludar();

//Crear un objeto usando un constructor Object
//otra dorm de crear un obejeto vacio y gragegarle propiedades posteriormente

const _persona= new Object();//crea un objeto en memoria, es decir reserva un nuevo espaco en memoria
_persona.nombre='Maria Jose';
_persona.apellido='Rea';
_persona.saludar=function(){console.log(`Hola mi nombre es ${this.nombre}`)};// aqui se usa esto ` 

_persona.saludar();
console.log(_persona.apellido);

//Usando direactamente la clase object.create
//permite crear un objeto pasado en un prototipo

const prototipoPersona = {
    saludar: function(){
        console.log(`Hola prototipo, soy ${this.nombre}`)
    }
}

const persona1=Object.create(prototipoPersona);
persona1.nombre="Ricardo";

persona1.saludar();

/**
 * Usando Clases
 * Proporciona una sintaxis mas estructurada de la creacion de objetos JS
 */

class Persona{
    constructor(nombre,apellido,edad,telefono){
        this.nombre=nombre;
        this.apellido =apellido;
        this.edad =edad;
        this.telefono =telefono;
    }

    saludo(){
        console.log(`Holaa, esto es desde una clase, me llamo ${this.nombre+' '+this.apellido}`);
    }
}

const persona3=new Persona("Estefani","Cruz",20,9774557);
persona3.saludo();

//usando funciones constructores
//una forma clasica

function Persona_(nombre,edad,email){
    this.nombre = nombre;
    this.edad = edad
    this.email = email;
    this.saludos=function(){
        console.log(`Estamos usando funciones para escribir esto, ${this.nombre}`);
    }
}

const persona4=new Persona_("Daniel",22,"daarmas10@espe.edu.ec");
persona4.saludos();

/**
 * MANIPULAR OBJETOS
 */

//1. Agregar

const add={nombre:'Wilson'};
add.edad=35;
add.apellido='Rea';//agregando otra propiedad

//2. modificar
add.edad=15
console.log(add);

//3. Eliminar

delete add.apellido;
console.log(add);

// 4. Iterar sobre propiedades del objeto 

for (i in add) {
    console.log(i);
    console.log(add[i]);
}

for(let clave in add){
    console.log(`${clave}:${add[clave]}`);
}

// 5. Verificar propiedades del objeto

console.log('nombre' in add);
console.log('apellido' in add);

console.log(add.hasOwnProperty('edad'));

//1. Object keys
//devuelve un array con las claves del objeto

console.log(Object.keys(add));

//2. Object values
//devuelve un array con las claves del objeto

console.log(Object.values(add));

//3. Object entries()
//devuelve un array de pares

console.log(Object.entries(add));

//4. Object assign
//copia las propieades del objeto

const copiaObjt=Object.assign(add);
console.log(copiaObjt);

// 5. Object.freeze()
//congelar un objeto para evitar ser modificado

Object.freeze(copiaObjt);
console.log(copiaObjt);


// 6. Object.seal()
//permite modificar propieades existentes, pero no agrega ni elimina las ya existentes

Object.seal(copiaObjt);

// NOTA

//para imprimir valores
let personaArray =Object.values(add);
console.log(personaArray);

let personaString =JSON.stringify(add);

console.log(personaString);