// observa as imprecisão das opereções


let numero = Number(prompt("digite um numero"));
let numero2 = Number(prompt("digite outro numero"));
let resultado = numero + numero2;
//numero = numero.toString(); define a let permanente!

document.body.innerHTML += `<h1>o numero digitado foi ${numero}</h1><br/>`;
document.body.innerHTML +=  `aqui estou formatando numeros em strings ${numero.toString() + numero2} <br/>`;
document.body.innerHTML += `aqui é a soma com duas casas decimais ${resultado.toFixed(2)}<br/>`;
document.body.innerHTML += `verifica se numero é interio ${Number.isInteger(resultado)}<br/>`;
document.body.innerHTML += `esse numero e é um NaN ? ${Number.isNaN(resultado)}<br/>`; 