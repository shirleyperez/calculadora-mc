var peso = prompt("Ingresa tu peso en kg");
var altura = prompt("Ingrese su altura en metros");
function imc(peso,altura){
  var alt= altura*altura;
  var res = (peso/alt).toFixed(2);
  alert("Su IMC es " + res);
}
imc(peso,altura);

