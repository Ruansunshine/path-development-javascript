//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
let number = parseInt(prompt("Informe um numero"));
function calcularFatorial(number){
    let fatorial = 1;
    for(let i = number; i > 0 ; i--){
         fatorial *= i;
        console.log(fatorial);
    }
    
}
calcularFatorial(number);