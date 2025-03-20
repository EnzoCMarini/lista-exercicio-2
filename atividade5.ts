console.clear ()

/*
6 – Faça um programa que pergunte qual tabuada deseja exibir, e mostre essa tabuada (tente
usar laço de repetição)
*/

let teclado = require(`prompt-sync`)();

let tabuada: number = parseInt(teclado(`Digite a tabuada que deseja: `));

console.log(`
    ${tabuada} x 0: ${tabuada * 0}
    ${tabuada} x 1: ${tabuada * 1}
    ${tabuada} x 2: ${tabuada * 2}
    ${tabuada} x 3: ${tabuada * 3}
    ${tabuada} x 4: ${tabuada * 4}
    ${tabuada} x 5: ${tabuada * 5}
    ${tabuada} x 6: ${tabuada * 6}
    ${tabuada} x 7: ${tabuada * 7}
    ${tabuada} x 8: ${tabuada * 8}
    ${tabuada} x 9: ${tabuada * 9}
    ${tabuada} x 10: ${tabuada * 10}`);