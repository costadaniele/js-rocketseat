const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação de estilo funcional.",
            "Um tipo de café popular entre desenvolvedores.",
            "Uma ferramenta de design de páginas da web.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "let",
            "var",
            "const",
        ],
        correta: 2
    },
    {
        pergunta: "Qual função é usada para exibir uma caixa de diálogo com uma mensagem em JavaScript?",
        respostas: [
            "alert()",
            "prompt()",
            "confirm()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
        respostas: [
            "+",
            "*",
            "-",
        ],
        correta: 0
    },
    {
        pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "unshift()",
            "concat()",
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'querySelector()' faz em JavaScript?",
        respostas: [
            "Seleciona o primeiro elemento que corresponde a um seletor CSS especificado.",
            "Seleciona todos os elementos que correspondem a um seletor CSS especificado.",
            "Seleciona um elemento aleatório na página.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "shift()",
            "splice()",
        ],
        correta: 0
    },
    {
        pergunta: "Como se declara uma função em JavaScript?",
        respostas: [
            "function minhaFuncao() {}",
            "função = minhaFuncao() {}",
            "minhaFuncao() = function() {}",
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
        respostas: [
            "Associa um manipulador de eventos a um elemento HTML.",
            "Remove um manipulador de eventos de um elemento HTML.",
            "Adiciona um atributo a um elemento HTML.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual dos seguintes é um tipo de dados em JavaScript?",
        respostas: [
            "Number",
            "Letter",
            "Character",
        ],
        correta: 0
    }
];

const template = document.querySelector('template');
const quiz = document.querySelector('#quiz');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;


    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.respostas.indexOf(resposta);
        dt.querySelector('input').onchange = (e) => {
            const estaCorreta = e.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove();

    quiz.appendChild(quizItem);
}

