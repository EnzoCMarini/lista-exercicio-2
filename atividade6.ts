console.clear ()

/*
7- Faça um programa que pergunte qual número deseja calcular o fatorial, e exiba o resultado
*/

let teclado = require(`prompt-sync`)();

let n: number = parseInt(teclado(`Digite o número que deseja transformar em fatorial: `));
let fatorial: number 

fatorial = n * (n - 1)

console.log(`O número em fatorial é ${fatorial}`);