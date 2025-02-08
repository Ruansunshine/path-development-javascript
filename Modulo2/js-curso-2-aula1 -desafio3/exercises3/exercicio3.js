//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais.
//  Para isso, considere a cotação do dólar igual a R$4,80.
let real = parseFloat(prompt("informe o real "));

function converterDollar(){
 let dollar = real / 4.80;
 console.log(dollar);
}
converterDollar(real);