let nota = 6; // incremento e decremento
let nota2 = 7;

let media = (nota + nota2) / 2 ;

media++;
media *= 10;

console.log(media);

media /=2;
console.log(media);
console.log(media.toFixed(3)); //limita as casas
 
let num = parseInt("10.3"); //numero inteiro
let num2 = parseFloat("10.3");//numero real
let num3 = Number("10.3");
console.log(num);
console.log(num2);
console.log(num3);