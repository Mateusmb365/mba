function saudaçao( nome , sobrenome) {

    console.log(`ola ${nome} ${sobrenome}`);
    return  true;

    
}

let resposta = saudaçao( "mateus" , "barbosa");// reutilizando a funcao
saudaçao( "messias" , "dias");
console.log(resposta);


//funcao com parametros
function soma (number1 = 0 , number2 = 0) {

    console.log(number1 + number2);
}

soma();
soma(45 , 50);

//funcao anonima
const raiz = function (x) {
    return x ** (0.5);
};

console.log(raiz(9));

//funcao arrow
const multi = (x , y) =>{
    return x * y};

console.log(multi(5 , 10));