const numero_moedas = 70;
const tempo_inicial = 10;
let pontos = 0;
let tempo = 0;
let timer = null;

function iniciaJogo(){
pontos = 0;
tempo = tempo_inicial;
let tela = document.getElementById("tela");
tela.innerHTML = "";

for(let i = 0; i < numero_moedas; ++i){
 let moeda = document.createElement("img");
 moeda.src = "bitcoin.png";
 moeda.id = "j" + i;
 moeda.onclick = function(){
 pegaMoeda(this);
 }
 tela.appendChild(moeda);
}
timer = setInterval(contaTempo,1000);
}
function pegaMoeda(moeda){
 moeda
 moeda.src = "goldcoin.png";
 ++pontos;
let contadorPontos = document.getElementById("pontos");
contadorPontos.innerText = pontos;
}
function contaTempo(){
 if(tempo > 0){
 --tempo;
 let contadorTempo = document.getElementById("tempo");
 contadorTempo.innerText = tempo;
 
 return contaTempo = null;
 }


 if(tempo <= 0){
    let nome = [prompt("qual seu nome?")]
   nome.push(pontos)
 sessionStorage.setItem('name', nome);
  alert("Parabens " + nome + "voce fez " + pontos + "pontos");
 }
  
 

}