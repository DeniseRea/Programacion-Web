/**
 * Una tienda necesita administrar su inventario de productos mediante un programa en JavaScript.

Cada producto debe tener las propiedades nombre, precio, y cantidad. La tienda requiere las siguientes funcionalidades:



Crear el inventario inicial: Define un objeto que contenga al menos 4 productos con las propiedades mencionadas.

Sella el objeto del inventario: Asegúrate de que no puedan agregarse ni eliminarse productos, pero que sea posible modificar las cantidades y precios.

Implementa una función para vender un producto:

La función debe aceptar el nombre del producto y la cantidad a vender.

Si el producto existe y tiene suficiente stock, reduce la cantidad en el inventario y muestra un mensaje confirmando la venta.

Si el producto no existe o no tiene suficiente stock, muestra un mensaje de error.

Implementa una función para aplicar un descuento a todos los productos:

La función debe aceptar un porcentaje de descuento y reducir el precio de todos los productos en base a este porcentaje.

Asegúrate de que los precios no sean negativos.

Usa las funciones creadas:

Vende algunos productos.

Aplica un descuento del 10% a todo el inventario.

Muestra el inventario final utilizando console.log().


 */

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

let p1 = new Producto("Comida_", 3.50, 100);
let p2 = new Producto("Arena", 5.00, 50);
let p3 = new Producto("Juguetes", 2.00, 200);
let p4 = new Producto("Rascador", 15.00, 30);
let p5 = new Producto("Camas", 20.00, 40);

const inventario = Object.freeze({
    p1, p2, p3, p4, p5
});

function vender_(nombre, cantidad) {
    let producto = inventario[nombre];

    if (!producto) {
        console.log("El producto no consta en stock, no existe");
        return;
    }

    if (producto.cantidad>=cantidad) {
        producto.cantidad-=cantidad;
        console.log(`Se vendió ${cantidad} de ${producto.nombre}.`);
    } else {
        console.log(`Su pedido excede la cantidad de ${producto.nombre} en stock.`);
    }
}

function aplicarDescuento(porcentaje) {
    if(porcentaje>=100){
        console.log("No puede exceder el limite de descuento");
    }else{
        for (let key in inventario) {
            let aux = inventario[key];
            let descuento = aux.precio * (porcentaje / 100);
            aux.precio = aux.precio - descuento;
        }
    }
}

vender_("p1", 20);
vender_("p2", 30);
vender_("p3", 10);
vender_("p4", 50);

aplicarDescuento(50);

console.log("Inventario final:");
for (let key in inventario) {
    let producto = inventario[key];
    console.log(`${producto.nombre}: Precio - $${producto.precio}, Cantidad - ${producto.cantidad}`);
}
