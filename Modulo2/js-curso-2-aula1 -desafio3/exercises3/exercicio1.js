//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa,
//a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
let peso = parseFloat(prompt("Informe seu peso"));
let altura = parseFloat(prompt("Informe sua altura"));
function calcularImc(peso, altura){
 let imc  = (peso / (altura * altura));
 console.log(imc);
}
calcularImc(peso, altura);
// let imc = calcularImc(peso, altura);
// function mostrarImc(imc){
// console.log(`imc =  ${imc}`);
// }
// mostrarImc(imc);