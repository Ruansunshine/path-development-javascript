function calcularArea(altura, largura){
let result = largura * altura;
console.log("o valor da area é igual a = " + result);
}
function calcularPerimetro(altura, largura){
   let result = 2*(largura + altura);
   console.log("O valor do perimetro é igual a " + result);
}
let altura = parseFloat(prompt("informe um valor para altura"));
let largura = parseFloat(prompt("informe um valor para largura"));
calcularArea(altura, largura);
calcularPerimetro(altura, largura)