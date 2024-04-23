console.log("//////////  day - 2 #### Exercício 1 ////////////////////");
/*
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

1 Percorra o array imprimindo todos os valores contidos nele com a função console.log().

2 Some todos os valores contidos no array e imprima o resultado.

3 Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

4 Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

5 Utilizando for, descubra o maior valor contido no array e imprima-o.

6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
*/

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;

for(let index = 0; index < numbers.length; index += 1 ){
    resultado += numbers[index]
    console.log(`1.1: ${numbers[index]}`)
    
}

console.log(`1.2: ${resultado}`);

//1.3
let media = resultado / numbers.length;
console.log(`1.3: ${resultado}`)

// 1.4
const resutadoAritmeticas = media > 20 ? `1:4 O valor da média aritmética é maior que 20 ` : `1:3 O valor da média aritmética é menor ou igual a 20`;
console.log(resutadoAritmeticas)

// 1.5
let higherNumber = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
};

console.log(` 1.5: ${higherNumber}`);

// 1.6
let oddNumber = 0;


for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
      oddNumber += 1
    }
  };

  if (oddNumber === 0) {
    console.log('Nenhum valor ímpar encontrado');
  } else {
    console.log(`1.6:  ${oddNumber}`);
  };

  console.log("////////// day - 2 #### Exercício 2 ////////////////////");
/*

 O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

O fatorial é representado pelo sinal `!`

Exemplo de 4 fatorial:

4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
*/

let factorialNumber = 4;
let numberMult = 1;

for(let index = 1; index <= factorialNumber; index += 1){
    console.log(index)
    numberMult *= index;
}

console.log(numberMult)