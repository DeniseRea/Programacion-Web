class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

class Inventario {
    constructor() {
        this.productos = [];
    }

    // Agrega un producto al inventario
    agregarProducto(producto) {
        this.productos.push(producto);
    }

    // Lista los productos ordenados por precio
    listarProductos(orden = 'ascendente') {
        let productosOrdenados = [...this.productos];
        for (let i = 0; i < productosOrdenados.length - 1; i++) {
            for (let j = 0; j < productosOrdenados.length - 1 - i; j++) {
                if ((orden === 'ascendente' && productosOrdenados[j].precio > productosOrdenados[j + 1].precio) ||
                    (orden === 'descendente' && productosOrdenados[j].precio < productosOrdenados[j + 1].precio)) {
                    let temp = productosOrdenados[j];
                    productosOrdenados[j] = productosOrdenados[j + 1];
                    productosOrdenados[j + 1] = temp;
                }
            }
        }
        console.log(`PRODUCTOS DE FORMA ${orden.toUpperCase()}`);
        console.log("PRODUCTO - PRECIO - CANTIDAD");
        for (let producto of productosOrdenados) {
            console.log(`${producto.nombre}: Precio - $${producto.precio}, Cantidad - ${producto.cantidad}`);
        }
    }

    // Filtra los productos por categoría
    filtrarPorCategoria(categoria) {
        return this.productos.filter(producto => producto.categoria === categoria);
    }

    // Aplica un descuento a los productos de una categoría
    aplicarDescuento(categoria, porcentaje) {
        if (porcentaje >= 100) {
            console.log("No puede exceder el límite de descuento");
            return;
        }
        console.log("Se ha aplicado el descuento a la categoria " + categoria);
        this.productos
            .filter(producto => producto.categoria === categoria)
            .forEach(producto => producto.precio *= (1 - porcentaje / 100));
    }

    // Obtiene el producto más vendido
    get productoMasVendido() {
        return this.productos.reduce((max, producto) => producto.cantidad < max.cantidad ? producto : max, this.productos[0]);
    }

    // Imprime un reporte del inventario y las ventas realizadas
    imprimirReporte(ventas) {
        console.log();
        console.log("REPORTE AVANZADO");
        this.productos.forEach(producto => {
            console.log(`${producto.nombre}: Precio - $${producto.precio}, Cantidad - ${producto.cantidad}`);
        });
        console.log("El producto más vendido es: " + this.productoMasVendido.nombre);
        console.log();
        console.log("VENTAS REALIZADAS:");
        let gananciasTotales = 0;
        ventas.forEach(venta => {
            const ganancia = venta.producto.precio * venta.cantidad;
            gananciasTotales += ganancia;
            console.log(`Producto: ${venta.producto.nombre}, Cantidad: ${venta.cantidad}, Fecha: ${venta.fecha}, Ganancia: $${ganancia.toFixed(2)}`);
        });
        console.log();
        console.log(`GANANCIAS TOTALES: $${gananciasTotales.toFixed(2)}`);
    }
}

class Venta {
    constructor(inventario) {
        this.inventario = inventario;
        this.ventas = [];
    }

    // Realiza una venta de un producto
    realizarVenta(nombreProducto, cantidad) {
        const producto = this.inventario.productos.find(p => p.nombre === nombreProducto);
        if (!producto) {
            console.log("El producto no consta en stock, no existe");
            return;
        }
        if (producto.cantidad >= cantidad) {
            producto.cantidad -= cantidad;
            this.ventas.push({ producto, cantidad, fecha: new Date() });
            console.log(`Se vendió ${cantidad} de ${producto.nombre}.`);
        } else {
            console.log(`Su pedido excede la cantidad de ${producto.nombre} en stock.`);
        }
    }
}

let p1 = new Producto("Cama", 20.00, 40, "Accesorios");
let p2 = new Producto("Comida", 3.50, 100, "Alimentos");
let p3 = new Producto("Arena", 5.00, 50, "Higiene");
let p4 = new Producto("Bola de estambre", 2.00, 200, "Juguetes");
let p5 = new Producto("Rascador", 15.00, 30, "Accesorios");

const inventario = new Inventario();
inventario.agregarProducto(p1);
inventario.agregarProducto(p2);
inventario.agregarProducto(p3);
inventario.agregarProducto(p4);
inventario.agregarProducto(p5);

const venta = new Venta(inventario);
venta.realizarVenta("Comida", 20);
venta.realizarVenta("Arena", 30);
venta.realizarVenta("Bola de estambre", 10);
venta.realizarVenta("Rascador", 5);

inventario.aplicarDescuento("Accesorios", 10);
inventario.imprimirReporte(venta.ventas);

inventario.listarProductos('ascendente');
inventario.listarProductos('descendente');