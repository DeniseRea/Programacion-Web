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

function Gato_(nombre, raza){
    this.nombre=nombre;
    this.raza=raza;
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


/**
 * 10/1/2025
 */

/***
 * @method get
 * acceder a los valores de la propiedad
 */

let personaGet={
    nombre:'Denise',
    apellido:'Rea',
    edad:22,
    email:'dnrea@gmail.com',
    get nombreCompleto(){ //ya no es una propiedad, ahora es un metodo get
        return this.nombre+' '+this.apellido;
    }
}

console.log(personaGet.nombreCompleto);

//set me modifica los valores de los atributos

//validacion 

let PersonaSet={
    nombre:'Denise',
    apellido:'Rea',
    edad:22,
    email:'dnrea@gmail.com',
    idioma:'es',
    get lang(){
        return this.idioma.toUpperCase();//con UpperCase lo hago mayus
    },
    get nombreCompleto(){
        return this.nombre+' '+this.apellido;
    }
}

console.log(PersonaSet.lang);

let PersonaSet_={
    nombre:'Denise',
    apellido:'Rea',
    edad:22,
    email:'dnrea@gmail.com',
    idioma:'es',
    get lang(){
        return this.idioma.toUpperCase();//con UpperCase lo hago mayus
    },

    set lang(lang){
        this.idioma=lang.toUpperCase();
    },

    get nombreCompleto(){
        return this.nombre+' '+this.apellido;
    }
}

console.log(PersonaSet_.lang);
PersonaSet_.lang='en';
console.log(PersonaSet_.lang);
PersonaSet_.lang='fr';

//Constructores en Javascript

//si se desea crear más objetos del mismo tipo, no es posible
/**
 * let PersonaSet={
    nombre:'Denise',
    apellido:'Rea',
    edad:22,
    email:'dnrea@gmail.com',
    idioma:'es',
    get lang(){
        return this.idioma.toUpperCase();//con UpperCase lo hago mayus
    },
    get nombreCompleto(){
        return this.nombre+' '+this.apellido;
    }
}

    Por esta razón se crean cosntructores
    esta es una funcion especial que me permite trabajar con objetos JS 
 */

    function PersonaFC( nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email; 
    }

    let padre= new PersonaFC("Eduardo","Rea",'esegundo@ejemplo.com'); //Variable qu eme permite crear objets del tipo persona
    console.log(padre);
    padre.mascota="Julian";

    let madre=new PersonaFC("Lucia","Diaz",'blucia@ejemplo.com');
    console.log(madre);

    /**
     * Agregar metodos a una funcion constructora
     */

    function PersonaFCM( nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email; 

        this.nombreCompleto=function(){
            return this.nombre+' '+this.apellido;
        }
    }

    let hermana=new PersonaFCM("Belen","Rea","berea@ejemplo.com");
    console.log(hermana.nombreCompleto());
    //hermana.mascota="Julian";

    let hermana2= new PersonaFCM("Majo","Rea","mjrea@ejemplo.com");
    hermana2.mascota="Julian";
    hermana2.nombre_Mascota=function(){
        return this.mascota;
    }
    console.log(hermana2.nombre_Mascota());


    /**
     * @param prototype
     * Uso de prototipos
     */

    PersonaFCM.prototype.tel='1234588';
    console.log(hermana2.tel);

    /**
     * @param call
     * Uso del método Call
     */

    let PersonaC1={
        nombre:'Denise',
        apellido:'Rea',
        nombreCompleto:function(){
            return this.nombre+' '+this.apellido;
        }
    }

    let PersonaC2={
        nombre:'Christopher',
        apellido:'Iza',
    }

    //Para usar el metodo nombreCompleto que pertenece al objeto personaC1 con los datos de la personaC2
    console.log(PersonaC1.nombreCompleto());
    console.log(PersonaC1.nombreCompleto.call(PersonaC2));

    //pasar argumentos o parametros a call, hace lo siguiente.

    let PersonaCP1={
        nombre:'Denise',
        apellido:'Rea',
        nombreCompleto:function(titulo,tel){
            return titulo+' '+this.nombre+' '+this.apellido+' '+tel;
        }
    }

    let personaCP2={
        nombre:'Wilson',
        apellido:'Cedeño',
    }

    console.log(PersonaCP1.nombreCompleto('Lic',123456));
    console.log(PersonaCP1.nombreCompleto.call(personaCP2,'Ing',9856236));

    /**
     * métodos estáticos
     * 
     */

    class Calculadora {
        static sumar(a,b){
            return a+b;
        }
    }
    
    console.log(Calculadora.sumar(3,4)); //no se puede acceder desde una instania
    
    const c = new Calculadora();
    console.log(c.sumar(3,4)); //no se puede acceder desde una instania
    
    class Contador{
        static totalInstancias = 0;
    
        constructors(){
            Contador.totalInstancias++;
        }
    
        static mostrarInstancias =(){
        return `se ha creado+${Contador.totalInstancias}`;
        }
    }
    