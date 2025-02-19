let nome = prompt("digite seu nome");

document.body.innerHTML = `<h1>Seja bem vindo ${nome}</h1> <br>`;
document.body.innerHTML += `o meu nome tem ${nome.length} letras <br/>`;
document.body.innerHTML += `seu nome maiusculo ${nome.toUpperCase()} <br/>`;
document.body.innerHTML += `meu nome em minusculo ${nome.toLocaleLowerCase()} <br/>`;
document.body.innerHTML += `a sgunda letra do meu nome é ${nome[1]}<br/>`;
document.body.innerHTML +=  `esse é o S indiçe da letra ${nome.indexOf("s")}<br/>`;
document.body.innerHTML += `esse é  o ultimo indeçe da letra ${nome.lastIndexOf("s") }<br/>`
document.body.innerHTML += `essas são as tres ultimas letras do meu nome ${nome.slice(-3)}<br/>`;
document.body.innerHTML +=`as palavras do mru nome sao ${nome.split(' ')}`;