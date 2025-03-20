console.clear ()

/*
3 -Faça um programa que receba 5 números e retorne o número maior e o número menor.
*/
let teclado = require(`prompt-sync`)();

let n1: number = parseInt(teclado(`Digite o primeiro número: `));
let n2: number = parseInt(teclado(`Digite o segundo número: `));
let n3: number = parseInt(teclado(`Digite o terceiro número: `));
let n4: number = parseInt(teclado(`Digite o quarto número: `));
let n5: number = parseInt(teclado(`Digite o quinto número: `));

let maior: number = 0;
let menor: number = 0;

if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5){
    maior = n1;
    if (n2 < n3 && n2 < n4 && n2 < n5){
        menor = n2;
    }
    else if (n3 < n2 && n3 < n4 && n3 < n5){
        menor = n3;
    }
    else if (n4 < n2 && n4 < n3 && n4 < n5){
        menor = n4;
    }
    else if (n5 < n2 && n5 < n3 && n5 < n4){
        menor = n5;
    }
}
else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5){
    maior = n2;
    if (n1 < n3 && n1 < n4 && n1 < n5){
        menor = n1;
    }
    else if (n3 < n1 && n3 < n4 && n3 < n5){
        menor = n3;
    }
    else if (n4 < n1 && n4 < n3 && n4 < n5){
        menor = n4;
    }
    else if (n5 < n1 && n5 < n3 && n5 < n4){
        menor = n5;
    }
}
else if (n3 > n2 && n3 > n1 && n3 > n4 && n3 > n5){
    maior = n3;
    if (n2 < n1 && n2 < n4 && n2 < n5){
        menor = n2;
    }
    else if (n1 < n2 && n1 < n4 && n1 < n5){
        menor = n1;
    }
    else if (n4 < n2 && n4 < n1 && n4 < n5){
        menor = n4;
    }
    else if (n5 < n2 && n5 < n1 && n5 < n4){
        menor = n5;
    }
}
else if (n4 > n2 && n4 > n3 && n4 > n1 && n4 > n5){
    maior = n4;
    if (n2 < n3 && n2 < n1 && n2 < n5){
        menor = n2;
    }
    else if (n3 < n2 && n3 < n1 && n3 < n5){
        menor = n3;
    }
    else if (n1 < n2 && n1 < n3 && n1 < n5){
        menor = n1;
    }
    else if (n5 < n2 && n5 < n3 && n5 < n1){
        menor = n5;
    }
}
else if (n5 > n2 && n5 > n3 && n5 > n4 && n5 > n1){
    maior = n5;
    if (n2 < n3 && n2 < n4 && n2 < n1){
        menor = n2;
    }
    else if (n3 < n2 && n3 < n4 && n3 < n1){
        menor = n3;
    }
    else if (n4 < n2 && n4 < n3 && n4 < n1){
        menor = n4;
    }
    else if (n1 < n2 && n1 < n3 && n1 < n4){
        menor = n1;
    }
}
console.log(`O maior número é ${maior} e o menor é ${menor}`);