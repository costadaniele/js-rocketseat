let num1 = prompt("Escolha um número");
alert(num1);
let num2 = prompt("Escolha outro número");
alert(num2);

let soma = Number(num1) + Number(num2);
let sub = Number(num1) - Number(num2);
let multiplica = Number(num1) * Number(num2);
let divisao = Number(num1) / Number(num2);
let resto = Number(num1) % Number(num2);

let par = soma % 2;
let iguais;

if (num1 == num2) {
    alert (`Os números são iguais`);
} else {
    alert (`Os números são diferentes`)
}

if (par == 0) {
    alert(`
    A soma dos números é: ${soma}, 
    a subtração dos números é: ${sub},
    a multiplicação dos números é: ${multiplica},
    a divisão dos números é: ${divisao},
    o resto da divisão dos números é: ${resto},
    o número é par
`);
} else {
    alert(`
    A soma dos números é: ${soma}, 
    a subtração dos números é: ${sub},
    a multiplicação dos números é: ${multiplica},
    a divisão dos números é: ${divisao},
    o resto da divisão dos números é: ${resto},
    o número é impar
`);
}


