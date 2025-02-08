function areaCirculo(raio){
let PI = 3.14;
let area = PI * Math.pow(raio, 2);
console.log(area);
}
function   perimetroCirculo(raio){
 let PI = 3.14;
 let perimetro = 2 * PI * raio;
 console.log(perimetro)
}
let raio = parseFloat(prompt("informe o valor do raio para o cálculo de area e perimetro:"));
areaCirculo(raio);
perimetroCirculo(raio);