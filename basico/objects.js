/*var auto = {

    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalledeauto: function(){
        console.log(`auto ${this.modelo} ${this.annio}`)
    }


};

auto.marca; // "Toyota"*/

////// FUNCION CONSTRUCTORA ///////

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;


}

var autonuevo = new auto("Tesla", "Model 3", 2020);

var autonuevo2 = new auto("Tesla", "Model X", 2018);

var autonuevo3 = new auto("Toyota", "Corolla", 2020);