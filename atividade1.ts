console.clear ()

/*
1 - Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
equilátero, isósceles ou escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.
*/
let teclado = require (`prompt-sync`)();

let lado1: number = parseInt(teclado(`Fale o tamanho do primeiro lado do triângulo: `));
let lado2: number = parseInt(teclado(`Fale o tamanho do segundo lado do triângulo: `));
let lado3: number = parseInt(teclado(`Fale o tamanho do terceito lado do triângulo: `));

if (lado1 == lado2 && lado2 == lado3){
    console.log(`O triângulo é Equilátero`);
}
else if (lado1 == lado2 && lado2 != lado3 || lado1 == lado3 && lado1 != lado2 || lado2 == lado3 && lado2 != lado1){
    console.log(`O triângulo é Isósceles`);
}
else if (lado1 != lado2 && lado2 != lado3){
    console.log(`O triângulo é Escaleno`);
};