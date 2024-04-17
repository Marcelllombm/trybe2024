/*
Exercício 1
Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:

Adição (num1 + num2)
Subtração (num1 - num2)
Multiplicação (num1 * num2)
Divisão (num1 / num2)
Módulo (num1 % num2)
*/

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

 const numeroMaior = numbOne > numbTwo ? `o numero 1 e Maior ${numbOne}` : `o numero 2 e Maior ${numbTwo}`;

 console.log(numeroMaior);