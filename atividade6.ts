console.clear ()

/*
7- Faça um programa que pergunte qual número deseja calcular o fatorial, e exiba o resultado
*/

let teclado = require(`prompt-sync`)();

let fatorial: number = 0;
let numero: number = parseInt(teclado(`Digite o número que deseja transformar em fatorial: `));

do{
    fatorial = numero * (numero - 1)
}while(numero == 0);

console.log(`O número em fatorial é ${fatorial}`);