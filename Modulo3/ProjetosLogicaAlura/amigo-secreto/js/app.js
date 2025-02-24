let amigos = [];
function adicionar(){
   let amigo = document.getElementById('nome-amigo');
   if(amigo.value  == ''){
      alert("informe o nome do amigo");
      return 0;
   }
   if(amigos.includes(amigo.value)){
      alert("Nome já adicionado");
      return 0;
   }
   let lista = document.getElementById('lista-amigos');
   // if(amigo.value == lista.textContent){
   //    alert("Amigo já adicinado");
   //    return 0;
   // }
   amigos.push(amigo.value);
   if(lista.textContent == ''){
    lista.textContent = amigo.value;
   }else{
    lista.textContent = lista.textContent + ', ' + amigo.value;
   }
   amigo.value = '';
}
 function sortear(){
    if(amigos.length < 4) {
    alert("Adicione 4 amigos ");
    return 0;
    }
     embaralha(amigos);
     let sorteio = document.getElementById('lista-sorteio');
    
    for (let i= 0; i < amigos.length; i++){
      if(i == amigos.length - 1 ){
         sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -->' + amigos[0] + '<br>';
      }else{
         sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i+1] + '<br>';
      }
      }
   }
  function embaralha(lista) {

   for (let indice = lista.length; indice; indice--) {

       const indiceAleatorio = Math.floor(Math.random() * indice);
       
       // guarda de um índice aleatório da lista
       const elemento = lista[indice - 1];
       
       lista[indice - 1] = lista[indiceAleatorio];
       
       lista[indiceAleatorio] = elemento;
   }
}
function reiniciar(){
   amigos = [];
   document.getElementById('lista-amigos').innerHTML = '';
   sorteio = document.getElementById('lista-sorteio').innerHTML = '';
}