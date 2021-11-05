var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas); // ['Manzana', 'Platano', 'Cereza', 'Fresa']

console.log(frutas.length); // 4

console.log(frutas[0]);// Manzana

var masfrutas = frutas.push("Uvas");//Agregar

var menosfrutas = frutas.pop("Uvas");//eliminar

var nuevaLongitud = frutas.unshift("Uvas");//agregar pero al inicio

var borrarFruta = frutas.shift("Uvas");//elimina pero al inicio

var pocision = frutas.indexOf("Platano");//muestra pocision