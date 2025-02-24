// formatando strings

const exemplo = "Mateus Barbosa e meu pai é severino Barbosa"; 

console.log(exemplo.length);
console.log(exemplo[0]);
console.log(exemplo.toUpperCase());
console.log(exemplo.toLowerCase());
console.log(exemplo.indexOf("Mateus"));
console.log(exemplo.replace("Mateus", "Messias"));//TROCA UM POR UM
console.log(exemplo.replace ( /Barbosa/g, "Dias")); // troca todos da mesma string
console.log(exemplo.charAt(4));
console.log(exemplo.indexOf("a", 3)); // se não encontrar ele retorna -1, ele pode contar aparti de tal numero mas o indice é o mesmo!
console.log(exemplo.lastIndexOf("a", 7 ));
console.log(exemplo.match(/[a-z]/g));//localizar todas as letras minusculas
console.log(exemplo.match(/[a-z]/g).length);
console.log(exemplo.match(/[A-Z]/g));//localizar todas as letras maiusculas
console.log(exemplo.match(/[A-Z]/g).length);
console.log(exemplo.slice(0, 14));// de indece 0 a 14
console.log(exemplo.slice(-7 ));
console.log(exemplo.search(/Barbosa/));
console.log(exemplo.split("a",));// divide a string pelo valor informado e limita a quantidade de divisoes