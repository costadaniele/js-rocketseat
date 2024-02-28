function amorMedia() {
   
    let nome = prompt('Qual é o nome do aluno?');
    let num1 = Number(prompt(`Qual foi a primeira nota do(a) ${nome}?`));
    let num2 = Number(prompt(`Qual a segunda nota do(a) ${nome}?`));
    
    let media = (num1 + num2) / 2; 

    return media
}

let resultado = amorMedia(nome);

if (resultado >= 7) { 
    alert (`Parabéns ${nome} Você foi aprovado sua média é`)
} else { 
    alert(`Sua média é Não foi dessa vez, ${nome} mas não desista`)
}


