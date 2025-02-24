let numero = Number(prompt("digite um numero"));
document.getElementById("app");

app.innerHTML += `<h1> este foi o numero digitado ${numero}<h1/><br/>`;
/* criando dentro de outras parte do document */

let numero2 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.body.innerHTML += '';
document.body.innerHTML += `este numero  foi arredondado para baixo ${Math.floor(numero)}<br/>`;
document.body.innerHTML += `este numero foi  arredondado pra cima ${Math.ceil(numero)}<br/>`;
document.body.innerHTML += `esse numero foi arredondado para o inteiro mais próximo ${Math.round(numero)}<br/>`;
document.body.innerHTML += `esse é o meu numero aleatorio ${Math.random() * (10 - 5) + 5}<br/>`;//gera um combinaçao entre 5 10
document.body.innerHTML += `esse é o meu numero aleatorio inteiro ${Math.round(Math.random() * (10 - 5) + 5)}<br/>`;
document.body.innerHTML += `esta e a raiz quadrada do meu numero ${Math.sqrt(numero).toFixed(2)}<br/>`;
document.body.innerHTML += `essa e a potencia do meu numero ${Math.pow(numero, 2)}<br/>`;
document.body.innerHTML += `essa e a raiz cubica do meu numero ${Math.cbrt(numero).toFixed(2)}<br/>`;
document.body.innerHTML += `esse é o valor absoluto do meu numero ${Math.abs(numero)}<br/>`;
document.body.innerHTML += `esse é o qur procura o valor max do meu numero ${Math.min(...numero2)}<br/>`;//função de espalhamento
document.body.innerHTML += `esse é o qur procura o valor min do meu numero ${Math.max(...numero2)}<br/>`;