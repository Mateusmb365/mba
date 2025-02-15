let nota1 = Number(prompt("digite sua primeira nota"));
let nota2 =  Number(prompt("digite sua segunda nota"));

let media  = (nota1 + nota2) / 2 ;

    if(media >= 6.5) {
        alert(`Voçe foi aprovado com media de ${media}`)
}
    else {
        alert(`Voçe foi reprovado com media de ${media}. Boa sorte na próxima`);
    }