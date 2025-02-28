

let usuarios = [];

document.getElementById("form").addEventListener("submit", function(e){   // funcao de evento
    e.preventDefault();

    let peso1 = e.target.querySelector("#peso");     // seleciona o id e evento do input
    let altura1 = e.target.querySelector("#altura");

    let peso = Number(peso1.value.trim());
    let altura = Number(altura1.value.trim());

    console.log(peso);
    console.log(altura);
   
    function getimc(peso,altura){  // funcao para calcular o imc
        let imc = peso / (altura * altura);
        return imc;
    }

         if((!peso) ) {

            alert("Por favor, preencha os campos corretamente");
            //document.getElementById("resultado").style.backgroundColor = "red";
            let msg = "peso invalido";
            upresultado(msg,false);
             return 
         }

         else if ((!altura)) {

             alert("Por favor, preencha os campos corretamente");
            // document.getElementById("resultado").style.backgroundColor = "red";
             let msg = "altura invalida";
             upresultado(msg,false);
             return ;}


             
             let imc = getimc(peso,altura);
             let nivelimc = getnivelimc(imc);

             let msg = `seu imc e ${imc.toFixed(2)} e voce esta na categoria ${nivelimc}`;
              
             upresultado(msg,true);



             function getnivelimc(imc) { // funcao para pegar o nivel do imc

                let nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade I", "Obesidade II", "Obesidade III"];
                if(imc >= 39.9) {
                    return nivel[5];
                }
                if(imc >= 34.9) {
                    return nivel[4];
                }
                if(imc >= 29.9) {
                    return nivel[3];
                }
                if(imc >= 24.9) {
                    return nivel[2];
                }
                if(imc >= 18.5) {
                    return nivel[1];
                }
                return nivel[0];
                
             }
             
         function criarElemento() { // funcao para criar um paragrafo
             const p = document.createElement("p");
             p.classList.add(".texto");
            return p;
         }
         function upresultado(msg , isvalid) { // funcao para atualizar o resultado 
             const resultado = document.getElementById("resultado");
             resultado.innerHTML = "";
             const p = criarElemento();
             if(isvalid) { // validacao
                p.classList.add("valid");
             }
             else {
                 p.classList.add("invalid");
             }
           
             p.innerHTML = msg;
             resultado.appendChild(p);
         }
       


         usuarios.push({ // push no array usuarios
             peso,
             altura,
             imc,
             
         });
    
         peso1.value = "";
         altura1.value = ""; 


         console.log(imc , nivelimc);
         console.log(usuarios);
         
} );

