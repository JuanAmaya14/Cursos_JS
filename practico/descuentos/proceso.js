//const precio = 100;

//const descuento = 15;

function calcularpreciocondescuento(precio, descuento){

    const porcentaje_precio_con_descuento = 100 - descuento;

    const precio_con_descuento = (precio * porcentaje_precio_con_descuento)/100;

    return precio_con_descuento;

}

function onClickButtonPriceDiscount(){
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;


    const preciocondescuento = calcularpreciocondescuento(priceValue, discountValue);

    const result = document.getElementById("Price");
    result.innerText = "El precio con descuento es: $" + preciocondescuento;

}

//console.log({precio,descuento,porcentaje_precio_con_descuento,precio_con_descuento})