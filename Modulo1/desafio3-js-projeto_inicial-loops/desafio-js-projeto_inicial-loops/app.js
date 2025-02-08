contador = 1;
while(contador <= 10){
    alert(`contador na posição = ${contador}`);
    contador++;
} 
contador = 10;
while(contador >= 0){
    alert(`contador na posição = ${contador}`);
    contador--;
}
contador = prompt("Informe um numero para contagem regressiva");
while(contador >= 0){
    alert(`${contador}`)
    contador--;
}
contador = prompt("Informe um numero máximo");
num=0;
while(num <= contador){
    alert(`${num}`)
    num++;
}