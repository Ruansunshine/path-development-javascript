function Tabuada(numero){
    let result;
    for (let i = 0; i <= 50 ; i++){
         result = numero * i;
         console.log(numero + "x" + i + " = " + result);
    }
    
}
let numero = parseInt(prompt("digite um numero par visualizar seus multiplos"));
Tabuada(numero);