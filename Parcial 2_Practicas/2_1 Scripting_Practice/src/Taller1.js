/**
 * Sistema de notas
 */

class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
        this.calificaciones = null;
        this.clasificacion = null;
        this.promedio = 0;
        this.Max_calificacion = 0;
        this.Min_calificacion = 0;
    }
}

let estudiantes = [
    new Estudiante("Juan"),
    new Estudiante("Ana"),
    new Estudiante("Luis"),
    new Estudiante("Carla"),
    new Estudiante("Sofía"),
    new Estudiante("Pedro"),
    new Estudiante("María"),
    new Estudiante("Diego"),
    new Estudiante("Laura"),
    new Estudiante("José")
];

function agregarNotas(estudiantes) {
    const notas = [
        [15, 18, 20],  
        [12, 14, 16],  
        [8, 9, 10],    
        [6, 7, 5],     
        [19, 20, 18],  
        [11, 13, 12],  
        [7, 6, 8],     
        [16, 17, 18],  
        [14, 13, 15],  
        [10, 9, 11]    
    ];

    for (let i = 0; i < estudiantes.length; i++) {
        estudiantes[i].calificaciones = notas[i];
    }
}

function clasificarEstudiantes(estudiantes) {
    for (let estudiante of estudiantes) {
        const calificaciones = estudiante.calificaciones;
        let suma = 0;
        
        for (let nota of calificaciones) {
            suma += nota;
        }
        
        const promedio = suma / calificaciones.length;
        estudiante.promedio = promedio;

        if (promedio >= 16) {
            estudiante.clasificacion = "Excelente";
        } else if (promedio >= 12) {
            estudiante.clasificacion = "Bueno";
        } else if (promedio >= 8) {
            estudiante.clasificacion = "Aprobado";
        } else {
            estudiante.clasificacion = "Reprobado";
        }
    }
}

function calcularMaxMin(estudiantes) {
    for (let estudiante of estudiantes) {
        let max = estudiante.calificaciones[0];
        for (let calificacion of estudiante.calificaciones) {
            if (calificacion > max) {
                max = calificacion;
            }
        }
        estudiante.Max_calificacion = max;
        let min = estudiante.calificaciones[0];
        for (let calificacion of estudiante.calificaciones) {
            if (calificacion < min) {
                min = calificacion;
            }
        }
        estudiante.Min_calificacion = min;
    }
}


function Promedios_(estudiantes) {
    let mejorEstudiante = estudiantes[0];
    let peorEstudiante = estudiantes[0];

    for (let estudiante of estudiantes) {
        if (estudiante.promedio > mejorEstudiante.promedio) {
            mejorEstudiante = estudiante;
        }
        if (estudiante.promedio < peorEstudiante.promedio) {
            peorEstudiante = estudiante;
        }
    }

    console.log("Estudiante con el mejor promedio:");
    console.log(mejorEstudiante.nombre, "- Promedio:", mejorEstudiante.promedio);

    console.log("Estudiante con el peor promedio:");
    console.log(peorEstudiante.nombre, "- Promedio:", peorEstudiante.promedio);
}

function Imprimir_Datos(estudiante) {
    console.log(estudiante.nombre);
    console.log("Clasificación:"+ estudiante.clasificacion);
    console.log("Promedio:"+estudiante.promedio);
    console.log("Calificación más alta:"+estudiante.Max_calificacion);
    console.log("Calificación más baja:"+estudiante.Min_calificacion);
    console.log('-----------------------------------');
}

function imprimirInformacionEstudiantes(estudiantes) {
    for (let estudiante of estudiantes) {
        Imprimir_Datos(estudiante);
    }
}


/*
    Ejecucion
*/
agregarNotas(estudiantes);
clasificarEstudiantes(estudiantes);
calcularMaxMin(estudiantes);
const resultado = Promedios_(estudiantes);
imprimirInformacionEstudiantes(estudiantes);