let titulo = document.querySelector('h1');
titulo.innerHTML = ("Hora do desafio");

function verificar(){
    console.log("btn clicado");
}

function alerta(){
    alert('Eu odeio JS');
}
function cidade(){
    let city = prompt("Informe sua cidade");
    alert(`Estive em ${city} e lembrei de você`);
}
function soma(){
    let num1 = parseInt(prompt("informe um numero"));
    let num2 = parseInt(prompt("informe um outro numero"));
    let response = (num1 + num2);
    alert(`a soma de ${num1} + ${num2} é igual a ${response}`);
}