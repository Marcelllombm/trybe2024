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
/*
  Utilize switch/case para escrever um código que receba 
  o nome de uma peça de xadrez e retorne os movimentos 
  que ela pode fazer.
   Desafio extra, escreva um código para funcionar tanto 
   se receber o nome de uma peça com letras maiúsculas quanto 
   com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).
*/

let chessPiece =  "RAinha";

switch(chessPiece.toLocaleLowerCase()){
  case 'rei':
  console.log('Rei -> Uma casa para qualquer direção.');
  break;

  case 'bispo':
    console.log('Bispo -> Diagonais.');
    break;

  case 'rainha':
    console.log('Rainha -> Diagonal, horizontal e vertical.');
    break;

    console.log('Rainha -> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
};

console.log("////////// Exercício 6 ////////////////////");
/*
Utilize if...else para escrever um código que defina três números 
em variáveis e retorne true se pelo menos uma das três for par.
 Caso contrário, o código deve retornar false.
Faça esse exercício utilizando somente um if.

*/

const evenNumberOne = 3;
const evenNumberTwo = 3;
const evenNumberThree = 9;

if((evenNumberOne % 2 === 0 || evenNumberTwo % 2 === 0 || evenNumberThree % 2 === 0)){
  console.log("existe um numero par")
}else{
  console.log("existe um numero ímpar")
}

console.log("////////// Exercício 7 ////////////////////");

/*
Utilize if...else para escrever um código que, dado um salário bruto,
calcule o salário líquido a ser recebido.

Uma pessoa que trabalha de carteira assinada no Brasil tem descontados 
de seu salário bruto o INSS (Instituto Nacional do Seguro Social)
 e o IR (Imposto de Renda).

INSS
Salário bruto até R$ 1.556,94: alíquota de 8%;
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.
IR
Até R$ 1.903,98: isento de imposto de renda;
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

O cálculo deve ser o demonstrado a seguir
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

R$ 2.670,00 - salário com INSS já deduzido;
7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
R$ 142,80 - parcela a ser deduzida do imposto de renda.
Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.
*/

let aliquotINSS;
let aliquotIR;

let grossSalary = 3000;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
};

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: R$" + (baseSalary - aliquotIR));