// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
console.log("Hello World!");

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let num1 = 8;
let num2 = 2;

let soma = num1 + num2;
console.log(soma);
// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, 
// exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
// Para saber o tipo de dado você pode usar o operador`typeof`

let numberVerification = 290;

console.log(typeof numberVerification);

if (typeof numberVerification === "number") {
    console.log("É um número")
} else {
    console.log("Não é um número");
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string.
// Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let stringVerification = "290";

console.log(typeof stringVerification);

if (typeof stringVerification === "string") {
    console.log("É uma string")
} else {
    console.log("Não é uma string");
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano.Se for, exiba a mensagem 
// "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let booleanVerification = true;

console.log(typeof booleanVerification);

if (typeof booleanVerification === "boolean") {
    console.log("É um booleano")
} else {
    console.log("Não é um booleano");
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let num3 = 8;
let num4 = 2;

let subtracao = num3 - num4;
console.log(subtracao);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let num5 = 8;
let num6 = 2;

let multiplicacao = num5 * num6;
console.log(multiplicacao);


// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let num7 = 8;
let num8 = 2;

let divisao = num7 / num8;
console.log(divisao);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par.Se for, exiba a mensagem 
// "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let parOuImpar = 999;

if (parOuImpar % 2 === 0) {
    console.log("é um número par")
} else {
    console.log("é um número impar");
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar.
// Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let imparOuPar = 52;

if (imparOuPar % 2 !== 0) {
    console.log("É um número ímpar")
} else {
    console.log("É um número par");
}