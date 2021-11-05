var estudiantes = ["Fernando", "Natalia", "Clara", "Jhon"];


//      TIPO 1
for (const i in estudiantes) {

    console.log(`Hola, ${estudiantes[i]}`);

} 

//      TIPO 2
for (var i = 0; i < estudiantes.length; i++) {

    console.log(`Hola, ${estudiantes[i]}`);

} 

//      TIPO 3

for (var i of estudiantes) {

    console.log(`Hola, ${estudiantes[i]}`);

} 