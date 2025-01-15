/**
 * Sistema de Ventas
 * @param {Producto}
 */

/**
 * Clase Producto
 */

class Producto {
    // Modificador para acceder directamente a través de la clase
    static contadorProductos = 0;

    /* Los métodos o propiedades no requieren que se creen una instancia de la clase
    para ser utilizados
    Se accede directamente a través de la clase.
    */

    constructor(nombre, precio, categoria, stock) {
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
        this._categoria = categoria;
        this._stock = stock;
    }

    getIdProducto() {
        return this._idProducto;
    }

    getNombre() {
        return this._nombre;
    }

    getPrecio() {
        return this._precio;
    }

    setPrecio(precio) {
        if (precio >= 0) {
            this._precio = precio;
        } else {
            console.log('El precio no puede ser negativo');
        }
    }

    getCategoria() {
        return this._categoria;
    }

    getStock() {
        return this._stock;
    }

    setStock(stock) {
        this._stock = stock;
    }

    toString() {
        return `${this._nombre}: $${this._precio}`;
    }
}

class Orden {
    static MAX_PRODUCTOS = 5;
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
    }

    agregarProducto(producto) {
        if (this.productos.length < Orden.MAX_PRODUCTOS) {
            if (producto.getStock() > 0) {
                this.productos.push(producto);
                producto.setStock(producto.getStock() - 1);
            } else {
                console.log(`No hay suficiente stock para el producto: ${producto.getNombre()}`);
            }
        } else {
            console.log('No se pueden agregar más productos, excede el límite ' + Orden.MAX_PRODUCTOS);
        }
    }
    


    calcularTotal() {
        let totalVenta = 0;
            for (let producto of this.productos) {
                let precio = producto.getPrecio();
                if (producto.getCategoria() === 'electronica') {
                    precio *= 0.9; // Aplicar descuento del 10%
                }
                totalVenta += precio;
            }
        return totalVenta;
    }

    calcularImpuestos() {
        const total = this.calcularTotal();
        /*15% de descuento */
        const impuestos = total * 0.15; 
        return impuestos;
    }

    listarPreciosDescendente() {
        return this.productos
            .map(producto => producto.getPrecio())
            .sort((a, b) => b - a);
    }

    mostrarOrden() {
        let productosOrden = '';
            for (let producto of this.productos) {
                productosOrden += producto.toString() + ' ';
        }

        console.log(`Orden: ${this._idOrden}, Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
        console.log(`Impuestos: ${O1.calcularImpuestos()}`);
        console.log(`Precios descendentes: ${O1.listarPreciosDescendente()}`);
    }
}

let p1 = new Producto('zapatos', 200, 'ropa', 10);
let p2 = new Producto('vestido', 300, 'ropa', 5);
let p3 = new Producto('televisor', 1000, 'electronica', 2);
let p4 = new Producto('sofá', 1500, 'hogar', 3);
let p5 = new Producto('mesa', 700, 'hogar', 4);
let p6 = new Producto('detergente', 50, 'limpieza', 20);
let p7 = new Producto('escoba', 30, 'limpieza', 15);
let O1 = new Orden();
O1.agregarProducto(p1);
O1.agregarProducto(p2);
O1.agregarProducto(p3);
O1.agregarProducto(p3);
O1.agregarProducto(p3);
O1.agregarProducto(p3);
O1.mostrarOrden();



let o2 = new Orden();
o2.agregarProducto(p1);
o2.agregarProducto(p2);
o2.agregarProducto(p3);
o2.agregarProducto(p4);
o2.agregarProducto(p5);
o2.mostrarOrden();