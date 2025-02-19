let numero = Number(prompt("digite um numero"));

document.body.innerHTML += `<h1> este foi o numero digitado ${numero}<h1/><br/>`;
document.body.innerHTML += `este numero  foi arredondado para baixo ${Math.floor(numero)}<br/>`;
document.body.innerHTML += `este numero foi  arredondado pra cima ${Math.ceil(numero)}<br/>`;
document.body.innerHTML += `esse numero foi arredondado para o inteiro mais próximo ${Math.round(numero)}<br/>`;
document.body.innerHTML += `esse é o meu numero aleatorio ${Math.random() * (10 - 5) + 5}<br/>`;//gera um combinaçao entre 5 10
document.body.innerHTML += `esse é o meu numero aleatorio inteiro ${Math.round(Math.random() * (10 - 5) + 5)}<br/>`;
document.body.innerHTML += `esta e a raiz quadrada do meu numero ${Math.sqrt(numero).toFixed(2)}<br/>`;