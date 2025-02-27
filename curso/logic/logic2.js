let hora = prompt("digite a hora");
let minuto = prompt("digite os minutos");

if(hora >= 0  && hora < 12){
    document.body.innerHTML += `bom dia`;
    document.body.style.backgroundColor = "green";

    alert("bom dia")
;}


else if(hora >= 12 && hora < 18){
    document.body.innerHTML += `boa tarde`;
    document.body.style.backgroundColor = "yellow";
    alert("boa tarde");

}

 else if (hora >= 18 && hora < 24) {
    document.body.innerHTML += `boa noite`;
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    alert("boa noite");
}
else{
    document.body.innerHTML += `hora invalida`;
    document.body.style.backgroundColor = "red";
    alert("hora invalida");
}


console.log(hora);