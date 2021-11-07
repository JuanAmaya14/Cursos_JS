/*/////////////////////  CUADRADO  ///////////////////////

console.group("CUADRADO");


const ladoCuadrado = 5;

console.log(`los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimerocuadrado = ladoCuadrado * 4;

console.log(`El perimetro del cuadrado es: ${perimerocuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`El area del cuadrado es: ${areaCuadrado}cm^2`);


console.groupEnd();

////////////////////   TRAINGULO  /////////////////////////


console.group("triangulo");



const ladotriangulo1 = 6;

const ladotriangulo2 = 6;

const basetriangulo = 4;


console.log(`los lados del triangulo miden: ${ladotriangulo1}cm, ${ladotriangulo2}cm, ${basetriangulo}cm`);

const perimerotriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;

console.log(`El perimetro del triangulo es: ${perimerotriangulo}cm`);

const alturatriangulo = 5.5;

console.log(`la altura del triangulo es: ${alturatriangulo}cm`);

const areaTrianguo = (basetriangulo * alturatriangulo)/2;

console.log(`El area del triangulo es: ${areaTrianguo}cm`);


console.groupEnd();*/

function PerimetroCuadrado(lado) {
    return lado * 4;
  }

  function areacuadrado(lado) {
    return lado * lado;
  }

function calcularPerimetro(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = PerimetroCuadrado(value);
    alert(perimetro);

}

function calcularArea(){

const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areacuadrado(value);
  alert(area);

}