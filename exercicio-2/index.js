function amorMedia() {

    let nome = prompt('Qual é o nome do aluno?');
    let num1 = Number(prompt(`Qual foi a primeira nota do(a) ${nome}?`));
    let num2 = Number(prompt(`Qual a segunda nota do(a) ${nome}?`));
    
    media = ((num1 + num2) / 2); 
    
    if (media >= 7) { 
        alert (`Parabéns, ${nome}. Você foi aprovado sua média é ${media}`)
    } else { 
        alert(`Sua média é ${media}. Não foi dessa vez, mas não desista ${nome}.`)
    }
}


