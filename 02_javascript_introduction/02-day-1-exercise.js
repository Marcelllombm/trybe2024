/*
Exercício 1
Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:

Adição (num1 + num2)
Subtração (num1 - num2)
Multiplicação (num1 * num2)
Divisão (num1 / num2)
Módulo (num1 % num2)
*/

console.log("////////// Exercício 1 ////////////////////");
let numbOne = Math.floor(Math.random() * 100);
let numbTwo = Math.floor(Math.random() * 100);

console.log(`Numero1: ${numbOne} Numero2: ${numbTwo}`)

console.log(`Adição: ${numbOne + numbTwo} `);
console.log(`Subtração: ${numbOne - numbTwo} `);
console.log(`Multiplicação: ${numbOne * numbTwo} `);
console.log(`Divisão: ${numbOne / numbTwo} `);
console.log(`Módulo: ${numbOne % numbTwo} `);

/*
Exercício 2
Utilize if/else para escrever um código que retorne o maior de dois números.
 Defina, no começo do seu código, duas variáveis com os valores que serão comparados.
 */

 console.log("////////// Exercício 2 ////////////////////");
 const numeroMaior = numbOne > numbTwo ? `o numero 1 e Maior ${numbOne}` : `o numero 2 e Maior ${numbTwo}`;
 console.log(numeroMaior);

 /*
 Exercício 3
Utilize if/else para escrever um código que retorne o maior de três números.
 Defina, no começo do seu código, três variáveis com os valores que serão comparados.
  */
 
console.log("////////// Exercício 3 ////////////////////");
const n1 = 9; const n2 = 3; const n3 = 7;
let maiorDoTres = ""
if(n1 > n2 && n1 > n3){
    maiorDoTres = " o numero n1 e maior";
} else if (n2 > n1 && n2 > n3){
    maiorDoTres = "o numero n2  e maior";
}else {
    maiorDoTres = "o numero n3 e maior";
}

console.log(maiorDoTres);

console.log("////////// Exercício 4 ////////////////////");

let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 200;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido!');
}

console.log("////////// Exercício 5 ////////////////////");