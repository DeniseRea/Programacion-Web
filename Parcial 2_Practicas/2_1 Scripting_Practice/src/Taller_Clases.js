/**
 * Implementacion de clases 
 * se usa # para hacer un atributo privado 
 */
class Conductor {
    #licencia; 
    #nombre;   
    #apellido; 

    constructor(id, licencia, nombre, apellido) {
        this.id = id;
        this.#licencia = licencia;
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.rutas = [];
    }

    getNombre() {
        return this.#nombre;
    }

    getId() {
        return this.id;
    }

    getRutas() {
        return this.rutas;
    }

    registrarRuta(ruta) {
        this.rutas.push(ruta);
        console.log(`${this.#nombre} ${this.#apellido} ha registrado una nueva ruta: ${ruta.inicioViaje} -> ${ruta.finViaje}`);
    }
}

//ConductorVIP
class ConductorVIP extends Conductor {
    constructor(id, licencia, nombre, apellido) {
        super(id, licencia, nombre, apellido);
        this.vehiculoPreferido = null;
    }

    asignarVehiculoPreferido(vehiculo) {
        this.vehiculoPreferido = vehiculo;
        console.log(`${this.getNombre()} ha asignado su vehículo preferido: ${vehiculo.modelo} (${vehiculo.placa})`);
    }
}

// Clase: Vehiculo
class Vehiculo {
    constructor(modelo, placa, anio) {
        this.modelo = modelo;
        this.placa = placa;
        this.anio = anio;
        this.conductorAsignado = null;
    }

    asignarConductor(conductor) {
        this.conductorAsignado = conductor;
        console.log(`El vehículo ${this.modelo} (${this.placa}) ha sido asignado a ${conductor.getNombre()}`);
    }
}

// Clase: Ruta
class Ruta {
    constructor(inicioViaje, finViaje, tiempoViaje) {
        this.inicioViaje = inicioViaje;
        this.finViaje = finViaje;
        this.tiempoViaje = tiempoViaje;
    }

    verDetalles() {
        console.log(`Ruta: ${this.inicioViaje} -> ${this.finViaje}, Duración estimada: ${this.tiempoViaje} minutos.`);
    }
}

// Ejemplo de uso
const conductor1 = new Conductor(1, "Licencia B", "Juan", "Pérez");
const conductorVIP = new ConductorVIP(2, "Licencia F", "Ana", "Gómez");

const vehiculo1 = new Vehiculo("Toyota Corolla", "PBK 3731", 2020);
const vehiculo2 = new Vehiculo("Honda Civic", "PBK 3734", 2021);

const ruta1 = new Ruta("Centro", "Aeropuerto", 45);
const ruta2 = new Ruta("Parque", "Estación", 30);

conductor1.registrarRuta(ruta1);
vehiculo1.asignarConductor(conductor1);

conductorVIP.registrarRuta(ruta2);
conductorVIP.asignarVehiculoPreferido(vehiculo2);
