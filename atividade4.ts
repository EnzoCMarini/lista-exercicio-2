console.clear ()

/*
5 – O IMC (índice de massa corpórea) indica o grau de obesidade de uma pessoa. Este índice é
obtido pelo peso (em Kg) dividido pelo quadrado da altura (em metros). A tabela a seguir
apresenta as faixas deste índice:
IMC Avaliação
Menor que 18,5 Baixo peso
De 18,5 a 24,99 Normal
De 25 a 29,99 Sobrepeso
Maior que 30 Obesidade
*/

let teclado = require(`prompt-sync`)();

let altura: number = 0;
let peso: number = 0;

altura = teclado(`Insira sua altura: `);
peso = teclado(`Insira seu peso: `);

let resultado: number = peso / (altura * altura);

if (resultado < 18.5){
    console.log(`Você está Abaixo do Peso`);
}
else if (resultado >= 18.5 && resultado <= 24.99){
    console.log(`Você está Normal`);
}
else if (resultado >= 25 && resultado <= 29.99){
    console.log(`Você está Sobrepeso`);
}
else if (resultado > 30){
    console.log(`Você está Obeso`);
}