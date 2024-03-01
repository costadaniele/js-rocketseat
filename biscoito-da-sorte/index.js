
let btnTry = document.querySelector('#btnTry');
let btnReset = document.querySelector('#btnReset');
let screen1 = document.querySelector('.screen-1');
let screen2 = document.querySelector('.screen-2');

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', buttonEnter);

const fortureCookie = [
    "O sucesso será alcançado através da paciência e da persistência.",
    "Boas notícias estão a caminho. Fique atento!",
    "Acredite no seu potencial e os outros também acreditarão.",
    "Seja a mudança que você deseja ver no mundo.",
    "O sorriso é a chave que abre muitas portas.",
    "Seja grato pelas pequenas coisas, pois elas são as maiores.",
    "A vida é como uma bicicleta, para manter o equilíbrio, é preciso se manter em movimento.",
    "O verdadeiro tesouro está dentro de você.",
    "Grandes coisas nunca vieram de zonas de conforto.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia."
];

function handleTryClick() {
    fortureRandom();
    toggleScreen();
}

function fortureRandom() {
    let forture = fortureCookie[Math.floor(Math.random() * fortureCookie.length)];
    screen2.querySelector("#paragraph").textContent = `${forture}`;
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function handleResetClick() {
    toggleScreen();
}

function buttonEnter(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick();
    }
}