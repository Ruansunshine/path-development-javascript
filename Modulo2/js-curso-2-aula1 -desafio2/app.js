//exercicio 1
function helloWorld(){
    console.log("Olá mundo");
}
helloWorld();
//exercicio 02
 function insertName(name){
    console.log("Olá " + name);
 }
 name = prompt("informe seu nome");
 insertName(name);
 //exercicio 3
 function numDouble(num){
     console.log(num * 2);
 }
numDouble(prompt("Informe um numero"));

//exercicio 04
function calcularMedia(num1, num2, num3){
   let media = (num1 + num2 + num3)/3;
   console.log("A media desses numeros = " + media);
}
let n1 = parseFloat(prompt("informe um numero"));
let n2 = parseFloat(prompt("informe um numero"));
let n3 = parseFloat(prompt("informe um numero"));
calcularMedia(n1, n2, n3);
//exercicio 05
function maiorQue(num1, num2){
    if(num1 > num2){
        console.log(" O numero "+ num1 +" é maior que "+ num2);
    }else if(num2 > num1){
        console.log(" O numero "+ num2 +" é maior que "+ num1);
    }else{
        console.log("são iguais");
    }
}
let num1 = parseInt(prompt("informe um numero"));
let num2 = parseInt(prompt("informe um numero"))
maiorQue(num1, num2);
//exercicio 06
function elevarQuadrado(numero){
    console.log(numero * numero);
}
elevarQuadrado(prompt("informe um numero para elavarmos na potência 2"));