console.log("Boas vindas");
let nome = "Ruan";
console.log("Olá "+nome);
let name = "Ruan";
alert(`Olá ${name}`);
let response = prompt("Qual linguagem de programação que você mais gosta?");
console.log(response);
let valor1 = 1;
let valor2 = 1000;
let resultado = valor1+valor2;
console.log("A soma de " + valor1 + " e "+ valor2 + " é igual a " + resultado);
resultado = valor1 - valor2;
console.log("A  diferença entre " + valor1 + " e "+ valor2 + " é igual a" + resultado);

idade = prompt("informe sua idade");
if(idade < 18){
    console.log("menor de idade ");
}else{
    console.log("maior de idade");
}
let numero = prompt("infome um numero");
if(numero == 0){
    console.log(" numero 0");
}else{
    if(numero < 0){
    console.log("numero negativo")
}else{
    console.log("numero positivo")
}
}
cont = 1;
while(cont <=10){
    console.log(cont);
    cont++;
}
let nota = 10;
if(nota >= 7){
    console.log("aprovado");
}else{
    console.log("reprovado");
}
let numRomdom = parseInt(Math.random());
let numRomdom1 = parseInt(Math.random()*10)+1;
let numRomdom2 = parseInt(Math.random()*1000)+1
console.log(numRomdom);
console.log(numRomdom1);
console.log(numRomdom2);