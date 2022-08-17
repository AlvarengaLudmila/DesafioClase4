let producto = prompt("Ingrese un producto");
let precio_producto = parseInt(prompt("Ingrese el precio de " + producto));
let cantidad_de_productos = parseInt(prompt("Ingrese la cantidad de productos desee comprar"));
let cuota_producto = parseInt(prompt("Ingrese la cantidad de cuotas en las que sea abonar (3/6/12)"));

function precio_total (precio_prodcuto, cantidad_de_productos) {
    let precio = precio_prodcuto * cantidad_de_productos;
    return precio
}

function precio_en_cuotas () {
    if (cuota_producto == 3) {
        let porcentaje_en_tres_cuotas =(precio_total(precio_producto, cantidad_de_productos)/100)
        let precio_final = precio_total(precio_producto, cantidad_de_productos) + porcentaje_en_tres_cuotas;
        return ("El precio final de " + producto + " en 3 cuotas es $" + precio_final);
    }
    else if (cuota_producto == 6){
        let porcentaje_en_seis_cuotas =(precio_total(((precio_producto, cantidad_de_productos)*15) /100))
        let precio_final = precio_total(precio_producto, cantidad_de_productos) + porcentaje_en_seis_cuotas
        return ("El precio final de " + producto + " en 6 cuotas es $" + precio_final + " con 15% de recargo");
    }
    else if (cuota_producto == 12) {
        let porcentaje_en_doce_cuotas =(precio_total((precio_producto, cantidad_de_productos)*30)/100)
        let precio_final = precio_total(precio_producto, cantidad_de_productos) + porcentaje_en_doce_cuotas
        return ("El precio final de " + producto + " en 12 cuotas es de $" + precio_final + " con 30% de recargo");
    }
}

console.log(precio_en_cuotas())