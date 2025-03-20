console.clear ()

/*
4 - Faça um programa que pergunte em que turno você estuda. Peça para digitar M-matutino
ou V-Vespertino ou N- Noturno. Imprima a mensagem &quot;Bom Dia!&quot;, &quot;Boa Tarde!&quot; ou &quot;Boa
Noite!&quot; ou &quot;Valor Inválido!&quot;, conforme o caso.
*/
let teclado = require(`prompt-sync`)();

console.log(`Responda com M para matutino, V para vespertino e N para noturno`);
let pergunta: string = teclado(`Qual turno que você estuda? `);

if (pergunta == `M` || pergunta == `m`){
    console.log(`Bom Dia!`)
}
else if (pergunta == `V` || pergunta == `v`){
    console.log(`Boa Tarde!`);
}
else if (pergunta == `N` || pergunta == `n`){
    console.log(`Boa Noite!`);
}
else{
    console.log(`Valor Inválido!`);
};