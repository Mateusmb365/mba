const arra = ['mateus', 'camila', 'veronica'];
arra[3] = 'messias';// adiciona um valor ao array
arra.push('dias'); // adiciona um valor ao array
arra[arra.length] = 'BARBOSA';// adiciona um valor ao array
arra.unshift('severino'); // adiciona um valor ao array no inicio
const removd = arra.shift(); // remove o primeiro valor do array
const removd1 = arra.pop(); // remove o ultimo valor do array

console.log(arra);
console.log(removd);
console.log(removd1);
console.log(arra.length);
console.log(arra.slice(0 ,5));//  mostra o array de 0 a 5
console.log(arra.slice( 0, -2));//mostra o array de 0 a -2 aqui ele remove 2 valores
console.log(typeof arra); // tipo de dados
console.log(arra instanceof Array);// verificando se é um array
/* valores de objetos e array nao podem ser alterados diretamente por isso eles sao mutaveis */